import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ScrollView, Button, useWindowDimensions, StyleSheet } from 'react-native';

const Database = () => {
  const [cases, setCases] = useState([]);
  const [activeCase, setActiveCase] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaseData, setEditedCaseData] = useState({});

  const { width } = useWindowDimensions();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sih-backend-881i.onrender.com/case_list/');
      const data = await response.json();
      setCases(data.cases || []);
    } catch (error) {
      console.error('Error fetching cases:', error);
      setCases([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'assigned': return 'green';
      case 'closed': return 'red';
      case 'under-investigation': return '#FFB800';
      default: return 'gray';
    }
  };

  const openCaseDetailsModal = (id) => {
    const caseItem = cases.find((caseItem) => caseItem.id === id);
    setActiveCase(caseItem);
    setEditedCaseData(caseItem);
    setIsEditing(false);
  };

  const closeCaseDetailsModal = () => {
    setActiveCase(null);
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSaveChanges = () => {
    const updatedCases = cases.map((caseItem) =>
      caseItem.id === activeCase.id
        ? {
            ...caseItem,
            caseHeading: editedCaseData.caseHeading,
            query: editedCaseData.query,
            applicableArticle: editedCaseData.applicableArticle,
            description: editedCaseData.description,
            status: editedCaseData.status,
          }
        : caseItem
    );

    setCases(updatedCases);
    setActiveCase(null);
  };

  const handleInputChange = (name, value) => {
    setEditedCaseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      onScroll={(event) => {
        if (event.nativeEvent.contentOffset.y > 200) {
          setShowScrollBtn(true);
        } else {
          setShowScrollBtn(false);
        }
      }}
    >
      <Text style={styles.title}>Case Database</Text>

      {cases.length === 0 ? (
        <Text style={styles.noCasesText}>No cases available</Text>
      ) : (
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <View style={styles.caseCard} key={item.id}>
              <View style={styles.caseHeader}>
                <Text style={styles.caseHeading}>{item.caseHeading}</Text>
                <Text style={[styles.statusTag, { backgroundColor: getStatusColor(item.status) }]}>
                  {item.status}
                </Text>
              </View>
              <Text style={styles.queryText}>{item.query}</Text>
              <View style={styles.modalDescription}>
  <Text style={styles.boldText}>Tags: </Text>
  <View style={styles.tagContainer}>
    {item.tags
      ? item.tags
          .replace(/[\[\]']+/g, '') // Clean up the string if necessary
          .split(',')
          .map((tag, index) => (
            <View key={index} style={styles.tagItem}>
              <Text style={styles.tagText}>{tag.trim()}</Text>
              
            </View>
          ))
      : <Text>No tags available</Text>}
  </View>
</View>

              <View style={styles.cardFooter}>
                <TouchableOpacity onPress={() => openCaseDetailsModal(item.id)}>
                  <Text style={styles.linkText}>Show Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    openCaseDetailsModal(item.id);
                    setIsEditing(true);
                  }}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ScrollView>

    {showScrollBtn && (
      <TouchableOpacity onPress={scrollToTop} style={styles.scrollToTopButton}>
        <Text style={styles.scrollToTopText}>↑</Text>
      </TouchableOpacity>
    )}

{activeCase && (
  <Modal visible={true} transparent={true} animationType="slide" onRequestClose={closeCaseDetailsModal}>
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={closeCaseDetailsModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.modalTitle}>
            {isEditing ? (
              <TextInput
                value={editedCaseData.caseHeading || ''}
                onChangeText={(text) => handleInputChange('caseHeading', text)}
                style={styles.editInput}
              />
            ) : (
              activeCase.caseHeading
            )}
          </Text>

          <Text style={styles.modalDescription}>
            <Text style={styles.boldText}>Query: </Text>
            {isEditing ? (
              <TextInput
                value={editedCaseData.query || ''}
                onChangeText={(text) => handleInputChange('query', text)}
                style={styles.editTextArea}
                multiline
              />
            ) : (
              activeCase.query
            )}
          </Text>

          <Text style={styles.modalDescription}>
  <Text style={styles.boldText}>Tags: </Text>
</Text>

<View style={styles.tagContainer}>
  {activeCase.tags
    ? activeCase.tags
        .replace(/[\[\]']+/g, '') // Clean up the string if necessary
        .split(',')
        .map((tag, index) => (
          <View key={index} style={styles.tagItem}>
            <Text style={styles.tagText}>{tag.trim()}</Text>
            <TouchableOpacity onPress={() => handleRemoveTag(index)}>
              <Text style={styles.removeTag}>×</Text>
            </TouchableOpacity>
          </View>
        ))
    : <Text>No tags available</Text>}
</View>

          <Text style={styles.modalDescription}>
  <Text style={styles.boldText}>Applicable Articles: </Text>
  {isEditing ? (
    <TextInput
      value={editedCaseData.applicableArticle || ''}
      onChangeText={(text) => handleInputChange('applicableArticle', text)}
      style={styles.editInput}
    />
  ) : (
    <View>
      {activeCase.applicableArticle &&
        activeCase.applicableArticle
          .split('**') // Split by double stars
          .filter((part, index) => index % 2 !== 0) // Keep only the odd-indexed parts (the text between '**')
          .map((article, index) => (
            <Text key={index} style={styles.applicableArticleText}>
              {article}
            </Text>
          ))}
    </View>
  )}
</Text>


          <Text style={styles.modalDescription}>
            <Text style={styles.boldText}>Description: </Text>
            {activeCase.description}
          </Text>

          

          {/* If the status or other fields need to be editable */}
          <Text style={styles.modalDescription}>
            <Text style={styles.boldText}>Status: </Text>
            {isEditing ? (
              <TextInput
                value={editedCaseData.status || ''}
                onChangeText={(text) => handleInputChange('status', text)}
                style={styles.editInput}
              />
            ) : (
              activeCase.status
            )}
          </Text>

          {isEditing && (
            <Button onPress={handleSaveChanges} title="Save Changes" color="#3B82F6" />
          )}
        </ScrollView>
      </View>
    </View>
  </Modal>
)}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
    color: '#1D4ED8',
  },
  noCasesText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#4B5563',
  },
  caseCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  caseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  caseHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1D4ED8',
  },
  statusTag: {
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
  },
  queryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  tagsText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  linkText: {
    color: '#3B82F6',
    fontSize: 16,
  },
  editText: {
    color: 'blue',
    fontSize: 16,
  },
  scrollToTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3B82F6',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  scrollToTopText: {
    color: '#fff',
    fontSize: 24,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    maxHeight: '80%',
    overflow: 'scroll',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#4B5563',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1D4ED8',
  },
  modalDescription: {
    fontSize: 18,
    color: '#000',
    marginTop: 8,
  },
  editInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1D4ED8',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
  },
  editTextArea: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 8,
    marginTop: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  tagItem: {
    backgroundColor: '#E0FFFF', // Light blue background
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tagText: {
    color: '#00008B', // Darker blue/green for the text
    fontSize: 14,
  },
  removeTag: {
    color: 'red',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Database;
