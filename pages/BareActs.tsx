import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

// Define types for the data structures
interface SectionData {
  id: number;
  section_id: string;
  section_title: string;
  description: string;
}

// Import data from JSON files
import bnsData from '../bns.json';
import ipcData from '../Json/ipc.json';
import crpcData from '../Json/crpc.json';
import ieaData from '../Json/iea.json';
import cpcData from '../Json/cpc.json';
import mvaData from '../Json/mva.json';

// Parse the data (since JSON files are imported as strings in some cases)
const bns: SectionData[] = Array.isArray(bnsData) ? bnsData : [bnsData];
const ipc: SectionData[] = Array.isArray(ipcData) ? ipcData : [ipcData];
const crpc: SectionData[] = Array.isArray(crpcData) ? crpcData : [crpcData];
const iea: SectionData[] = Array.isArray(ieaData) ? ieaData : [ieaData];
const cpc: SectionData[] = Array.isArray(cpcData) ? cpcData : [cpcData];
const mva: SectionData[] = Array.isArray(mvaData) ? mvaData : [mvaData];

const BareActs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showIPC, setShowIPC] = useState<boolean>(false);
  const [showCRPC, setShowCRPC] = useState<boolean>(false);
  const [showIEA, setShowIEA] = useState<boolean>(false);
  const [showCPC, setShowCPC] = useState<boolean>(false);
  const [showMVA, setShowMVA] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBNS, setShowBNS] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#1E40AF"
        style={styles.loader}
      />
    );
  }

  if (!bns || bns.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No data found or an error occurred!
        </Text>
      </View>
    );
  }

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const filterSections = (sections: SectionData[]) => {
    if (!searchQuery) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (item) =>
        item.section_id.toLowerCase().includes(q) ||
        item.section_title.toLowerCase().includes(q)
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Bare Acts Library</Text>

      {/* Section Cards */}
      <View style={styles.cardContainer}>
        {['BNS', 'IPC', 'CRPC', 'IEA', 'CPC', 'MVA'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.sectionCard,
              activeSection === item && styles.sectionCardActive,
            ]}
            onPress={() => toggleSection(item)}
          >
            <Text
              style={[
                styles.sectionCardText,
                activeSection === item && styles.sectionCardTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Section ID or Title"
        placeholderTextColor="#94A3B8"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Content Renderer */}
      {activeSection &&
        {
          BNS: bns,
          IPC: ipc,
          CRPC: crpc,
          IEA: iea,
          CPC: cpc,
          MVA: mva,
        }[activeSection] && (
          <View style={styles.detailsContainer}>
            {filterSections(
              {
                BNS: bns,
                IPC: ipc,
                CRPC: crpc,
                IEA: iea,
                CPC: cpc,
                MVA: mva,
              }[activeSection]
            ).map((item, index) => (
              <View key={index} style={styles.detailCard}>
                <Text style={styles.sectionId}>
                  Section {item.section_id}
                </Text>
                <Text style={styles.sectionTitle}>
                  {item.section_title}
                </Text>
                <View style={styles.divider} />
                <Text style={styles.sectionDescription}>
                  {item.description}
                </Text>
              </View>
            ))}
          </View>
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginVertical: 20,
    letterSpacing: 0.3,
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  sectionCard: {
    width: '48%',
    height: 140,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  sectionCardActive: {
    backgroundColor: '#1E40AF',
    borderColor: '#1E40AF',
  },

  sectionCardText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E40AF',
  },

  sectionCardTextActive: {
    color: '#FFFFFF',
  },

  searchBar: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    fontSize: 15,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },

  detailsContainer: {
    paddingBottom: 40,
  },

  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  sectionId: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 10,
  },

  sectionDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#334155',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    fontSize: 16,
    color: '#DC2626',
  },
});

export default BareActs;
