import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PdfItem {
  id: number;
  act_name: string;
  description: string;
}

interface PdfCardProps {
  pdf: PdfItem;
  onDownload: (id: number) => void;
  isDownloading?: boolean;
}

const PdfCard: React.FC<PdfCardProps> = ({ pdf, onDownload, isDownloading = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="document" size={20} color="#1e3a8a" />
        </View>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={2}>
            {pdf.act_name}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {pdf.description}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.downloadButton, isDownloading && styles.downloadingButton]}
        onPress={() => onDownload(pdf.id)}
        disabled={isDownloading}
      >
        <Text style={[styles.downloadText, isDownloading && styles.downloadingText]}>
          {isDownloading ? 'Downloading...' : 'Download'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 6,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  downloadButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  downloadingButton: {
    backgroundColor: '#9CA3AF',
  },
  downloadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  downloadingText: {
    color: '#6B7280',
  },
});

export default PdfCard;