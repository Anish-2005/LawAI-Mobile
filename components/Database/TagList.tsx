import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TagListProps {
  tags?: string;
  editable?: boolean;
  onRemoveTag?: (index: number) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, editable = false, onRemoveTag }) => {
  if (!tags) {
    return <Text style={styles.noTagsText}>No tags available</Text>;
  }

  const tagsArray = tags
    .replace(/[\[\]']+/g, '')
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);

  return (
    <View style={styles.tagContainer}>
      {tagsArray.map((tag, index) => (
        <View key={index} style={styles.tagItem}>
          <Text style={styles.tagText}>{tag}</Text>
          {editable && onRemoveTag && (
            <TouchableOpacity onPress={() => onRemoveTag(index)} style={styles.removeButton}>
              <Text style={styles.removeText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagItem: {
    backgroundColor: '#e0e7ff', // Light blue background matching theme
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e3a8a',
  },
  tagText: {
    color: '#1e3a8a', // Dark blue text matching theme
    fontSize: 14,
    fontWeight: '500',
  },
  removeButton: {
    marginLeft: 8,
    paddingHorizontal: 4,
  },
  removeText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noTagsText: {
    color: '#6B7280',
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default TagList;