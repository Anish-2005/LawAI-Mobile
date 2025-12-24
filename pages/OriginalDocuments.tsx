import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Alert, Text } from 'react-native';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Ionicons } from '@expo/vector-icons';
import { Buffer } from 'buffer';
import OriginalDocumentsHeader from '../components/OriginalDocuments/OriginalDocumentsHeader';
import SearchBar from '../components/OriginalDocuments/SearchBar';
import PdfCard from '../components/OriginalDocuments/PdfCard';
import LoadingState from '../components/OriginalDocuments/LoadingState';
import ErrorState from '../components/OriginalDocuments/ErrorState';
import EmptyState from '../components/OriginalDocuments/EmptyState';

interface PdfItem {
  id: number;
  act_name: string;
  description: string;
}

// Dummy data fallback for when API fails
const dummyPdfData: PdfItem[] = [
  {
    id: 1,
    act_name: "Indian Penal Code (IPC) 1860",
    description: "Complete text of the Indian Penal Code containing criminal law provisions and punishments."
  },
  {
    id: 2,
    act_name: "Code of Criminal Procedure (CrPC) 1973",
    description: "Comprehensive guide to criminal procedure and court processes in India."
  },
  {
    id: 3,
    act_name: "Indian Evidence Act 1872",
    description: "Laws governing the admissibility and relevance of evidence in Indian courts."
  },
  {
    id: 4,
    act_name: "Motor Vehicles Act 1988",
    description: "Regulations for road transport, vehicle registration, and traffic rules."
  },
  {
    id: 5,
    act_name: "Negotiable Instruments Act 1881",
    description: "Laws related to cheques, bills of exchange, and promissory notes."
  },
  {
    id: 6,
    act_name: "Indian Contract Act 1872",
    description: "Fundamental principles of contract law and agreements in India."
  },
  {
    id: 7,
    act_name: "Companies Act 2013",
    description: "Corporate law governing company formation, management, and governance."
  },
  {
    id: 8,
    act_name: "Income Tax Act 1961",
    description: "Taxation laws and regulations for income and corporate taxation."
  },
  {
    id: 9,
    act_name: "Constitution of India 1950",
    description: "The supreme law of India containing fundamental rights, directive principles, and governance structure."
  },
  {
    id: 10,
    act_name: "Civil Procedure Code (CPC) 1908",
    description: "Rules and procedures for civil litigation and court proceedings in India."
  },
  {
    id: 11,
    act_name: "Hindu Marriage Act 1955",
    description: "Laws governing marriage, divorce, and matrimonial disputes for Hindus."
  },
  {
    id: 12,
    act_name: "Transfer of Property Act 1882",
    description: "Laws regulating the transfer of immovable property and related transactions."
  },
  {
    id: 13,
    act_name: "Indian Succession Act 1925",
    description: "Laws governing inheritance, wills, and succession of property."
  },
  {
    id: 14,
    act_name: "Consumer Protection Act 2019",
    description: "Rights and remedies available to consumers against unfair trade practices."
  },
  {
    id: 15,
    act_name: "Right to Information Act 2005",
    description: "Law guaranteeing citizens' right to access government information."
  },
  {
    id: 16,
    act_name: "Protection of Children from Sexual Offences (POCSO) Act 2012",
    description: "Special law for protection of children from sexual abuse and exploitation."
  },
  {
    id: 17,
    act_name: "Domestic Violence Act 2005",
    description: "Protection of women from domestic violence and abuse."
  },
  {
    id: 18,
    act_name: "Information Technology Act 2000",
    description: "Laws governing cyber crimes, electronic commerce, and digital signatures."
  },
  {
    id: 19,
    act_name: "Environmental Protection Act 1986",
    description: "Framework for protection and improvement of environmental quality."
  },
  {
    id: 20,
    act_name: "Labour Laws (Consolidated)",
    description: "Collection of important labour laws including Factories Act, Minimum Wages Act, and others."
  }
];

const OriginalDocuments = () => {
  const [pdfs, setPdfs] = useState<PdfItem[]>([]);
  const [filteredPdfs, setFilteredPdfs] = useState<PdfItem[]>([]);
  const [pdfSearchQuery, setPdfSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadingIds, setDownloadingIds] = useState<Set<number>>(new Set());


  useEffect(() => {
    const fetchPdfs = async () => {
      setLoading(true);

      try {
        const response = await axios.get('https://sih-backend-881i.onrender.com/pdfs/');
        setPdfs(response.data);
        setFilteredPdfs(response.data);
      } catch (err) {
        console.error('Error fetching PDFs:', err);
        // Use dummy data as fallback
        setPdfs(dummyPdfData);
        setFilteredPdfs(dummyPdfData);
      } finally {
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  const handlePdfSearchChange = (query: string) => {
    setPdfSearchQuery(query);

    if (query === '') {
      setFilteredPdfs(pdfs);
    } else {
      const filtered = pdfs.filter((pdf) =>
        pdf.act_name.toLowerCase().includes(query.toLowerCase()) ||
        pdf.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPdfs(filtered);
    }
  };

  const handleDownloadPdf = async (pdfId: number) => {
    // Check if we're using dummy data (offline mode)
    const isUsingDummyData = pdfs === dummyPdfData;

    if (isUsingDummyData) {
      Alert.alert(
        'Offline Mode',
        'Document downloads are not available while using sample data. Please check your internet connection and try again when the server is online.',
        [{ text: 'OK' }]
      );
      return;
    }

    setDownloadingIds(prev => new Set(prev).add(pdfId));
    setError(null);

    try {
      const response = await axios.get(
        `https://sih-backend-881i.onrender.com/pdfs/${pdfId}/download/`,
        { responseType: 'arraybuffer' }
      );

      // Convert arraybuffer to base64 using Buffer
      const base64Data = Buffer.from(response.data, 'binary').toString('base64');
      const fileUri = `${(FileSystem as any).cacheDirectory}Document_${pdfId}.pdf`;

      await FileSystem.writeAsStringAsync(fileUri, base64Data, {
        encoding: 'base64',
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert('Download Complete', `File saved to ${fileUri}`);
      }
    } catch (err) {
      console.error('Error downloading PDF:', err);
      Alert.alert('Download Failed', 'Failed to download the document. Please try again.');
    } finally {
      setDownloadingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(pdfId);
        return newSet;
      });
    }
  };
  return (
    <View style={styles.container}>
      <OriginalDocumentsHeader
        title="Original Documents"
        subtitle={pdfs === dummyPdfData ? "Offline Mode - Sample Documents" : "Download official legal documents and PDFs"}
      />

      {pdfs === dummyPdfData && (
        <View style={styles.offlineBanner}>
          <Ionicons name="information-circle" size={16} color="#F59E0B" />
          <Text style={styles.offlineText}> Using sample documents - Server temporarily unavailable</Text>
        </View>
      )}

      <SearchBar
        value={pdfSearchQuery}
        onChangeText={handlePdfSearchChange}
        placeholder="Search documents by name or description..."
      />

      {loading ? (
        <LoadingState message="Loading documents..." />
      ) : (
        <FlatList
          data={filteredPdfs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PdfCard
              pdf={item}
              onDownload={handleDownloadPdf}
              isDownloading={downloadingIds.has(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  offlineBanner: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F59E0B',
    flexDirection: 'row',
    alignItems: 'center',
  },
  offlineText: {
    color: '#92400E',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  listContainer: {
    padding: 20,
  },
});

export default OriginalDocuments;
