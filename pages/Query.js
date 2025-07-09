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
import SpeechToText from 'react-native-voice'; // Import SpeechToText
import Icon from 'react-native-vector-icons/FontAwesome';

const Query = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('Response will appear here...');
  const [isListening, setIsListening] = useState(false);
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [caseDetails, setCaseDetails] = useState({
    caseHeading: '',
    userQuery: '',
    tags: '',
    description: '',
    caseStatus: 'closed',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const toggleDescription = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Collapse if the same section is clicked
    } else {
      setActiveSection(section); // Expand the clicked section
    }
  };

  const handleMicClick = async () => {
    try {
      if (isListening) {
        await SpeechToText.stopListening();
        console.log('Speech recognition stopped');
        setIsListening(false);
      } else {
        await SpeechToText.startListening();
        console.log('Speech recognition started');
        setIsListening(true);
      }
    } catch (error) {
      console.error('Error in handling mic click:', error);
      setIsListening(false);
    }
  };

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleQuerySubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://sih-backend-881i.onrender.com/encode/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

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
    } catch (error) {
      console.error('Error fetching the response:', error);
      setError('Error occurred while fetching the response');
      setResponse('');
    }

    setIsLoading(false);
  };

  const renderResponse = (data) => {
    if (!data) {
      return <Text style={styles.responseText}>No data available</Text>;
    }

    if (typeof data === 'object' && typeof data.acts === 'object') {
      return (
        <View>
          <Text style={styles.responseTitle}>Act: IPC</Text>
          <ScrollView style={styles.scrollView}>
            {Object.entries(data.acts).map(([section, description], index) => (
              <View key={index} style={styles.sectionContainer}>
                <Text style={styles.responseText}>Section {section}</Text>
                <TouchableOpacity onPress={() => toggleDescription(section)}>
                  <Text style={styles.linkText}>
                    {activeSection === section ? 'Hide Description' : 'Show Description'}
                  </Text>
                </TouchableOpacity>
                {activeSection === section && (
                  <Text style={styles.descriptionText}>{description}</Text>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }

    return <Text style={styles.responseText}>{JSON.stringify(data, null, 2)}</Text>;
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
      const response = await fetch('https://sih-backend-881i.onrender.com/case_save/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      Alert.alert('Success', 'Case saved successfully!');
      setModalVisible(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to save case.');
    }
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.responseContainer}>
          <View style={styles.responseBox}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#007bff" />
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              renderResponse(response)
            )}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={handleInputChange}
            placeholder="Type your query here..."
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity
            onPress={handleMicClick}
            style={styles.micButton}
          >
            <Icon
              name="microphone"
              size={24}
              color={isListening ? '#007bff' : '#555'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleQuerySubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Query</Text>
        </TouchableOpacity>

        {showPopup && (
          <TouchableOpacity style={styles.popup} onPress={handlePopupClick}>
            <Text style={styles.popupText}>New Case Identified</Text>
          </TouchableOpacity>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
  <View style={styles.modalContent}>
    <Text style={styles.modalTitle}>Edit Case Details</Text>

    <Text style={styles.modalLabel}>Case Heading:</Text>
    <TextInput
      style={styles.modalInput}
      value={caseDetails.caseHeading}
      onChangeText={(text) =>
        setCaseDetails({ ...caseDetails, caseHeading: text })
      }
    />

    <Text style={styles.modalLabel}>User Query:</Text>
    <TextInput
      style={styles.modalInput}
      value={caseDetails.userQuery}
      onChangeText={(text) =>
        setCaseDetails({ ...caseDetails, userQuery: text })
      }
    />

    <Text style={styles.modalLabel}>Tags:</Text>
    <TextInput
      style={styles.modalInput}
      value={caseDetails.tags}
      onChangeText={(text) =>
        setCaseDetails({ ...caseDetails, tags: text })
      }
    />

    <Text style={styles.modalLabel}>Description:</Text>
    <TextInput
      style={[styles.modalInput, { height: 80 }]}
      multiline
      value={caseDetails.description}
      onChangeText={(text) =>
        setCaseDetails({ ...caseDetails, description: text })
      }
    />

    <Text style={styles.modalLabel}>Case Status:</Text>
    <TextInput
      style={styles.modalInput}
      value={caseDetails.caseStatus}
      onChangeText={(text) =>
        setCaseDetails({ ...caseDetails, caseStatus: text })
      }
    />

    <TouchableOpacity style={styles.saveButton} onPress={handleSaveCase}>
      <Text style={styles.saveButtonText}>Save Case</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => setModalVisible(false)}
    >
      <Text style={styles.closeButtonText}>Close</Text>
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  responseBox: {
    flex: 1,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  responseText: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    fontSize: 16,
    color: '#ff4d4f',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  popup: {
    backgroundColor: '#ffc107',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  popupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 16,
  },
  scrollView: {
    margin: 10,
  },
});

export default Query;