import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StatusBadge from './StatusBadge';
import TagList from './TagList';

interface CaseItem {
  id: number;
  caseHeading: string;
  query: string;
  applicableArticle?: string;
  description: string;
  status: string;
  tags?: string;
}

interface CaseCardProps {
  caseItem: CaseItem;
  onShowDetails: (id: number) => void;
  onEdit: (id: number) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseItem, onShowDetails, onEdit }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.caseHeading} numberOfLines={2}>
          {caseItem.caseHeading}
        </Text>
        <StatusBadge status={caseItem.status} />
      </View>

      <Text style={styles.queryText} numberOfLines={3}>
        {caseItem.query}
      </Text>

      <View style={styles.tagsSection}>
        <Text style={styles.sectionLabel}>Tags:</Text>
        <TagList tags={caseItem.tags} />
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity
          onPress={() => onShowDetails(caseItem.id)}
          style={styles.actionButton}
        >
          <Text style={styles.detailsText}>Show Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onEdit(caseItem.id)}
          style={styles.actionButton}
        >
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  caseHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e3a8a',
    flex: 1,
  },
  queryText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 12,
  },
  tagsSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  detailsText: {
    color: '#1e3a8a',
    fontSize: 16,
    fontWeight: '500',
  },
  editText: {
    color: '#059669',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CaseCard;