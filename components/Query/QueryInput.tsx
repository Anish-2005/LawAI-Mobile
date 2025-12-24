import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QueryInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onMicPress: () => void;
  isListening: boolean;
  placeholder?: string;
}

const QueryInput: React.FC<QueryInputProps> = ({
  value,
  onChangeText,
  onMicPress,
  isListening,
  placeholder = "Ask your legal query..."
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        value={value}
        onChangeText={onChangeText}
        multiline
      />

      <TouchableOpacity
        style={[
          styles.micButton,
          isListening && styles.micActive,
        ]}
        onPress={onMicPress}
      >
        <Ionicons
          name={isListening ? "mic" : "mic-outline"}
          size={20}
          color={isListening ? '#fff' : '#2563EB'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    minHeight: 80,
    textAlignVertical: 'top',
  },
  micButton: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  micActive: {
    backgroundColor: '#2563EB',
  },
});

export default QueryInput;