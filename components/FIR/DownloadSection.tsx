import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DownloadSectionProps {
  isDownloading: boolean;
  onDownload: () => void;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ isDownloading, onDownload }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name="download" size={24} color="#1e3a8a" />
        <Text style={styles.sectionTitle}>Official FIR Format</Text>
      </View>
      <Text style={styles.sectionDescription}>
        Download the official FIR format document for your reference and use.
      </Text>

      <TouchableOpacity
        style={[styles.primaryButton, isDownloading && styles.buttonDisabled]}
        onPress={onDownload}
        disabled={isDownloading}
      >
        <View style={[styles.buttonContent, isDownloading && styles.buttonContentDisabled]}>
          {isDownloading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Ionicons name="download-outline" size={20} color="#fff" />
          )}
          <Text style={styles.primaryButtonText}>
            {isDownloading ? 'Downloading...' : 'Download FIR Format'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginLeft: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 20,
  },
  primaryButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#2563eb',
  },
  buttonContentDisabled: {
    backgroundColor: '#9ca3af',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default DownloadSection;