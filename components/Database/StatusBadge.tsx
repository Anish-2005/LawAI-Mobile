import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned': return '#10B981'; // green
      case 'closed': return '#EF4444'; // red
      case 'under-investigation': return '#F59E0B'; // amber
      default: return '#6B7280'; // gray
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'under-investigation': return 'Under Investigation';
      default: return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getStatusColor(status) }]}>
      <Text style={styles.badgeText}>{getStatusText(status)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default StatusBadge;