import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OffenceDetailsCardProps {
  formData: {
    offenceDate: string;
    offenceTime: string;
    address: string;
  };
  onChange: (name: string, value: string) => void;
}

const OffenceDetailsCard: React.FC<OffenceDetailsCardProps> = ({ formData, onChange }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="warning" size={20} color="#dc2626" />
        <Text style={styles.cardTitle}>Offence Details</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Offence Date</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={formData.offenceDate}
            onChangeText={(value) => onChange('offenceDate', value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Offence Time</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            value={formData.offenceTime}
            onChangeText={(value) => onChange('offenceTime', value)}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Place of Occurrence *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter detailed address of the offence"
          value={formData.address}
          onChangeText={(value) => onChange('address', value)}
          multiline
          numberOfLines={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    flex: 1,
    marginRight: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#1f2937',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export default OffenceDetailsCard;