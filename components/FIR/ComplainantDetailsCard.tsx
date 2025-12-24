import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ComplainantDetailsCardProps {
  formData: {
    complainantName: string;
    fatherName: string;
    birthDate: string;
    nationality: string;
    occupation: string;
    complainantAddress: string;
  };
  onChange: (name: string, value: string) => void;
}

const ComplainantDetailsCard: React.FC<ComplainantDetailsCardProps> = ({ formData, onChange }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="person" size={20} color="#059669" />
        <Text style={styles.cardTitle}>Complainant Details</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter complainant's full name"
          value={formData.complainantName}
          onChangeText={(value) => onChange('complainantName', value)}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Father's/Husband's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter father's or husband's name"
            value={formData.fatherName}
            onChangeText={(value) => onChange('fatherName', value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={formData.birthDate}
            onChangeText={(value) => onChange('birthDate', value)}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter nationality"
            value={formData.nationality}
            onChangeText={(value) => onChange('nationality', value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Occupation</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter occupation"
            value={formData.occupation}
            onChangeText={(value) => onChange('occupation', value)}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter complainant's address"
          value={formData.complainantAddress}
          onChangeText={(value) => onChange('complainantAddress', value)}
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

export default ComplainantDetailsCard;