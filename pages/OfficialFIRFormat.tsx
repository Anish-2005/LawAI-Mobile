import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing'; // Ensure correct import

const OfficialFIRFormat = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to download and save the FIR .docx file
  const downloadDocx = async () => {
    setIsDownloading(true); // Start the download process

    try {
      // Path to where the file will be saved on the device
      const fileUri = FileSystem.documentDirectory + 'FIR-Format.docx';

      // Download the .docx file from the provided URL and save it
      await FileSystem.downloadAsync(
        'https://savelifefoundation.org/wp-content/uploads/2016/11/A1-Format-of-FIR-part-of-Step-I.docx', // URL of the FIR .docx file
        fileUri
      );

      // Optionally, share the downloaded file if sharing is available
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert('Sharing not available', 'Your device does not support sharing.');
      }

      Alert.alert('Download Complete', 'The FIR format has been downloaded and saved.');
    } catch (error) {
      console.error('Error downloading the file:', error);
      Alert.alert('Download Error', 'There was an issue downloading the FIR format.');
    } finally {
      setIsDownloading(false); // End the download process
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Official FIR Format</Text>
      <Text style={styles.description}>
        Below is the official FIR format. You can download it for your use.
      </Text>

      <TouchableOpacity
        style={styles.downloadButton}
        onPress={downloadDocx}
        disabled={isDownloading} // Disable button while downloading
      >
        <Text style={styles.downloadText}>
          {isDownloading ? 'Downloading...' : 'Download FIR Format'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OfficialFIRFormat;
