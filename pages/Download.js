import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

const Download = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Title Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Download LawAI Application</Text>
        <Text style={styles.subtitle}>
          Choose your platform to download the LawAI installation file and start using our services.
        </Text>
      </View>

      {/* Download Options */}
      <View style={styles.grid}>
        {/* Android */}
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/uc?export=download&id=1lPszpovE10_TFEdpZn9Ufbg13sfMSxAz'
            )
          }
        >
          <Image
            source={{ uri: 'https://pngimg.com/d/android_logo_PNG2.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.platform}>Android</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Download APK</Text>
          </View>
        </TouchableOpacity>

        {/* iOS */}
        <View style={[styles.card, styles.comingSoon]}>
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.platform}>iOS</Text>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>

        {/* Linux */}
        <View style={[styles.card, styles.comingSoon]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.platform}>Linux</Text>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>

        {/* Windows */}
        <View style={[styles.card, styles.comingSoon]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/2048px-Windows_logo_-_2021.svg.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.platform}>Windows</Text>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  comingSoon: {
    opacity: 0.5,
  },
  logo: {
    width: 80,
    height: 80,
  },
  platform: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 8,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  comingSoonText: {
    marginTop: 12,
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Download;
