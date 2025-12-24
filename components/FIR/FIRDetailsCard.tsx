import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FIRDetailsCardProps {
  formData: {
    district: string;
    policeStation: string;
    year: string;
    firNo: string;
    date: string;
  };
  onChange: (name: string, value: string) => void;
}

const FIRDetailsCard: React.FC<FIRDetailsCardProps> = ({ formData, onChange }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="shield-checkmark" size={20} color="#1e3a8a" />
        <Text style={styles.cardTitle}>FIR Details</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>District *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter district"
            value={formData.district}
            onChangeText={(value) => onChange('district', value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Police Station *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter police station"
            value={formData.policeStation}
            onChangeText={(value) => onChange('policeStation', value)}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Year</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter year"
            value={formData.year}
            onChangeText={(value) => onChange('year', value)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>FIR No. *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter FIR number"
            value={formData.firNo}
            onChangeText={(value) => onChange('firNo', value)}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={formData.date}
          onChangeText={(value) => onChange('date', value)}
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
});

export default FIRDetailsCard;