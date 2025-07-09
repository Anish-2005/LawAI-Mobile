import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Buffer } from 'buffer';

const OriginalDocuments = () => {
  const [pdfs, setPdfs] = useState([]);
  const [filteredPdfs, setFilteredPdfs] = useState([]);
  const [pdfSearchQuery, setPdfSearchQuery] = useState('');
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState(null);


  useEffect(() => {
    // Fetch PDF metadata
    const fetchPdfs = async () => {
      setPdfLoading(true);
      setPdfError(null);

      try {
        const response = await axios.get('https://sih-backend-881i.onrender.com/pdfs/');
        setPdfs(response.data); // Assuming the response contains the list of PDFs with metadata
        setFilteredPdfs(response.data); // Set initial filtered PDFs to all PDFs
      } catch (err) {
        setPdfError('Failed to fetch PDF data.');
        console.error('Error fetching PDFs:', err);
      } finally {
        setPdfLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  // Function to handle PDF search input change
  const handlePdfSearchChange = (query) => {
    setPdfSearchQuery(query);

    // Filter PDFs based on the search query
    if (query === '') {
      setFilteredPdfs(pdfs); // Show all PDFs if no query
    } else {
      const filtered = pdfs.filter((pdf) =>
        pdf.act_name.toLowerCase().includes(query.toLowerCase()) ||
        pdf.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPdfs(filtered);
    }
  };

  const handleDownloadPdf = async (pdfId) => {
    setPdfLoading(true); // Show loading indicator
    setPdfError(null); // Clear any previous errors
  
    try {
      // Fetch the PDF file URL from the server
      const response = await axios.get(
        `https://sih-backend-881i.onrender.com/pdfs/${pdfId}/download/`,
        { responseType: 'arraybuffer' } // Use 'arraybuffer' for binary data handling in React Native
      );
  
      // Convert the arraybuffer data to base64 string
      const base64Data = Buffer.from(response.data, 'binary').toString('base64');
  
      // Create a temporary file path in the cache directory
      const fileUri = `${FileSystem.cacheDirectory}Document_${pdfId}.pdf`;
  
      // Write the base64 string to the file system
      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      // Check if the file can be shared
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert('Download Complete', `File saved to ${fileUri}`);
      }
    } catch (err) {
      setPdfError('Failed to fetch PDF data.');
      console.error('Error fetching PDF:', err);
    } finally {
      setPdfLoading(false); // Hide the loading indicator once download completes or fails
    }
  };
  return (
    <View style={styles.container}>
      <Text>(Interet required for Downloading the PDFs)</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search PDFs"
        value={pdfSearchQuery}
        onChangeText={handlePdfSearchChange}
      />

      {pdfLoading ? (
        <ActivityIndicator size="large" color="#2563EB" style={styles.loader} />
      ) : pdfError ? (
        <Text style={styles.errorText}>{pdfError}</Text>
      ) : (
        <FlatList
          data={filteredPdfs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.pdfItem}>
              <View style={styles.pdfInfo}>
                <Text style={styles.pdfName}>{item.act_name}</Text>
                <Text style={styles.pdfDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => handleDownloadPdf(item.id)}
              >
                <Text style={styles.downloadText}>Download</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  pdfItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pdfInfo: {
    flex: 1,
  },
  pdfName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  pdfDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  downloadButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  downloadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});

export default OriginalDocuments;
