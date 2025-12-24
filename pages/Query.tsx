import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import SpeechToText from 'react-native-voice';
import Icon from 'react-native-vector-icons/FontAwesome';

const Query = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('Response will appear here...');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const [caseDetails, setCaseDetails] = useState({
    caseHeading: '',
    userQuery: '',
    tags: '',
    description: '',
    caseStatus: 'closed',
  });

  const toggleDescription = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleMicClick = async () => {
    try {
      if (isListening) {
        await SpeechToText.stopListening();
        setIsListening(false);
      } else {
        await SpeechToText.startListening();
        setIsListening(true);
      }
    } catch (error) {
      setIsListening(false);
    }
  };

  const handleQuerySubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://sih-backend-881i.onrender.com/encode/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        }
      );

      const data = await response.json();
      setResponse(data);

      setCaseDetails({
        caseHeading: 'New Case Identified',
        userQuery: query,
        tags: 'theft, investigation, IPC',
        description: data.description || 'Detailed case description here.',
        caseStatus: 'under investigation',
      });

      setShowPopup(true);
    } catch (err) {
      setError('Something went wrong while fetching the response.');
      setResponse('');
    }

    setIsLoading(false);
  };

  const renderResponse = (data) => {
    if (!data) {
      return <Text style={styles.placeholder}>No response available</Text>;
    }

    if (typeof data === 'object' && data.acts) {
      return (
        <>
          <Text style={styles.responseHeader}>Applicable Acts (IPC)</Text>
          {Object.entries(data.acts).map(([section, description], index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Section {section}</Text>
                <TouchableOpacity
                  onPress={() => toggleDescription(section)}
                >
                  <Icon
                    name={
                      activeSection === section
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    size={16}
                    color="#2563EB"
                  />
                </TouchableOpacity>
              </View>

              {activeSection === section && (
                <Text style={styles.sectionDescription}>
                  {description}
                </Text>
              )}
            </View>
          ))}
        </>
      );
    }

    return (
      <Text style={styles.responseRaw}>
        {JSON.stringify(data, null, 2)}
      </Text>
    );
  };

  const handleSaveCase = async () => {
    const payload = {
      cases: [
        {
          id: 4,
          caseHeading: caseDetails.caseHeading,
          applicableArticle: caseDetails.description,
        },
      ],
    };

    try {
      await fetch(
        'https://sih-backend-881i.onrender.com/case_save/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      Alert.alert('Success', 'Case saved successfully');
      setModalVisible(false);
    } catch {
      Alert.alert('Error', 'Failed to save case');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* RESPONSE */}
        <View style={styles.responseBox}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#2563EB" />
          ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : (
            renderResponse(response)
          )}
        </View>

        {/* INPUT */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Ask your legal query…"
            placeholderTextColor="#94A3B8"
            value={query}
            onChangeText={setQuery}
            multiline
          />

          <TouchableOpacity
            style={[
              styles.micButton,
              isListening && styles.micActive,
            ]}
            onPress={handleMicClick}
          >
            <Icon
              name="microphone"
              size={20}
              color={isListening ? '#fff' : '#2563EB'}
            />
          </TouchableOpacity>
        </View>

        {/* SUBMIT */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleQuerySubmit}
        >
          <Text style={styles.submitText}>Analyze Query</Text>
        </TouchableOpacity>

        {/* POPUP */}
        {showPopup && (
          <TouchableOpacity
            style={styles.casePopup}
            onPress={() => {
              setShowPopup(false);
              setModalVisible(true);
            }}
          >
            <Icon name="gavel" size={16} color="#fff" />
            <Text style={styles.popupText}>
              New Case Identified — Tap to Review
            </Text>
          </TouchableOpacity>
        )}

        {/* MODAL */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Case Details</Text>

              {[
                ['Case Heading', 'caseHeading'],
                ['User Query', 'userQuery'],
                ['Tags', 'tags'],
                ['Description', 'description'],
                ['Case Status', 'caseStatus'],
              ].map(([label, key]) => (
                <View key={key}>
                  <Text style={styles.modalLabel}>{label}</Text>
                  <TextInput
                    style={[
                      styles.modalInput,
                      key === 'description' && { height: 90 },
                    ]}
                    multiline={key === 'description'}
                    value={caseDetails[key]}
                    onChangeText={(text) =>
                      setCaseDetails({
                        ...caseDetails,
                        [key]: text,
                      })
                    }
                  />
                </View>
              ))}

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveCase}
              >
                <Text style={styles.saveText}>Save Case</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },

  responseBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  responseHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },

  sectionCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#F9FAFB',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E40AF',
  },

  sectionDescription: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 22,
    color: '#334155',
  },

  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#0F172A',
    maxHeight: 120,
  },

  micButton: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    marginLeft: 10,
  },

  micActive: {
    backgroundColor: '#2563EB',
  },

  submitButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },

  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  casePopup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16A34A',
    padding: 14,
    borderRadius: 12,
    gap: 8,
  },

  popupText: {
    color: '#fff',
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 16,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },

  modalLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#334155',
  },

  modalInput: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 6,
  },

  saveButton: {
    backgroundColor: '#16A34A',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },

  saveText: {
    color: '#fff',
    fontWeight: '700',
  },

  closeButton: {
    alignItems: 'center',
    marginTop: 12,
  },

  closeText: {
    color: '#DC2626',
    fontWeight: '600',
  },

  errorText: {
    color: '#DC2626',
    fontSize: 15,
  },

  placeholder: {
    color: '#94A3B8',
  },

  responseRaw: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#334155',
  },
});

export default Query;
