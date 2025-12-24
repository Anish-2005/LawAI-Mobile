import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ActivityLogItem {
  action: string;
  time: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

interface ActivityLogProps {
  activities: ActivityLogItem[];
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  const getActivityIcon = (action: string): keyof typeof Ionicons.glyphMap => {
    const actionLower = action.toLowerCase();
    if (actionLower.includes('login')) return 'log-in';
    if (actionLower.includes('logout')) return 'log-out';
    if (actionLower.includes('password')) return 'key';
    if (actionLower.includes('2fa') || actionLower.includes('authentication')) return 'shield-checkmark';
    if (actionLower.includes('profile')) return 'person';
    if (actionLower.includes('settings')) return 'settings';
    return 'ellipse';
  };

  const getActivityColor = (action: string): string => {
    const actionLower = action.toLowerCase();
    if (actionLower.includes('login')) return '#10b981';
    if (actionLower.includes('logout')) return '#f59e0b';
    if (actionLower.includes('password')) return '#ef4444';
    if (actionLower.includes('2fa') || actionLower.includes('authentication')) return '#3b82f6';
    return '#6b7280';
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {activities.map((activity, index) => (
        <View key={index} style={styles.activityItem}>
          <View style={[styles.iconContainer, { backgroundColor: `${getActivityColor(activity.action)}15` }]}>
            <Ionicons
              name={activity.icon || getActivityIcon(activity.action)}
              size={16}
              color={getActivityColor(activity.action)}
            />
          </View>
          <View style={styles.activityContent}>
            <Text style={styles.activityAction}>{activity.action}</Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#64748b',
  },
});

export default ActivityLog;