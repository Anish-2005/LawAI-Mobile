import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import SpeechToText from 'react-native-voice';
import QueryHeader from '../components/Query/QueryHeader';
import QueryInput from '../components/Query/QueryInput';
import QueryResponse from '../components/Query/QueryResponse';
import SubmitButton from '../components/Query/SubmitButton';
import CasePopup from '../components/Query/CasePopup';
import CaseModal from '../components/Query/CaseModal';

interface CaseDetails {
  caseHeading: string;
  userQuery: string;
  tags: string;
  description: string;
  caseStatus: string;
}

interface ResponseData {
  acts?: Record<string, string>;
  description?: string;
  [key: string]: any;
}

const Query: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<ResponseData | string>('Response will appear here...');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [caseDetails, setCaseDetails] = useState<CaseDetails>({
    caseHeading: '',
    userQuery: '',
    tags: '',
    description: '',
    caseStatus: 'closed',
  });

  const handleMicClick = async (): Promise<void> => {
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

  const handleQuerySubmit = async (): Promise<void> => {
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

      const data: ResponseData = await response.json();
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

  const handleSaveCase = async (): Promise<void> => {
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

  const handleInputChange = (key: string, value: string) => {
    setCaseDetails({
      ...caseDetails,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <QueryHeader />

      <View style={styles.content}>
        <QueryResponse
          response={response}
          isLoading={isLoading}
          error={error}
        />

        <QueryInput
          value={query}
          onChangeText={setQuery}
          onMicPress={handleMicClick}
          isListening={isListening}
        />

        <SubmitButton
          onPress={handleQuerySubmit}
          disabled={!query.trim() || isLoading}
        />

        <CasePopup
          visible={showPopup}
          onPress={() => {
            setShowPopup(false);
            setModalVisible(true);
          }}
        />

        <CaseModal
          visible={modalVisible}
          caseDetails={caseDetails}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveCase}
          onInputChange={handleInputChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default Query;