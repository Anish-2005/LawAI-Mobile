import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { useNavigation } from '@react-navigation/native';

const FormToPDF = () => {
  const navigation = useNavigation();
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    district: '',
    policeStation: '',
    year: '',
    firNo: '',
    date: '',
    act1: '',
    sections1: '',
    act2: '',
    sections2: '',
    act3: '',
    sections3: '',
    otherActs: '',
    offenceDay: '',
    offenceDate: '',
    offenceTime: '',
    infoReceivedDate: '',
    infoReceivedTime: '',
    generalDiaryRef: '',
    typeOfInfo: '',
    occurrenceDirection: '',
    beatNo: '',
    address: '',
    outsidePS: '',
    complainantName: '',
    fatherName: '',
    birthDate: '',
    nationality: '',
    passportNo: '',
    passportIssueDate: '',
    passportIssuePlace: '',
    occupation: '',
    complainantAddress: '',
    accusedDetails: '',
    delayReason: '',
    stolenProperties: '',
    stolenValue: '',
    inquestReportNo: '',
    actionTaken: '',
    officerName: '',
    officerRank: '',
    officerNo: '',
    signature: '',
    dispatchDate: '',
    dispatchTime: ''
  });

  // Handle field changes
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const downloadDocx = async () => {
    setIsDownloading(true); // Start the download process

    try {
      // Path to where the file will be saved on the device
      const fileUri = FileSystem.documentDirectory + 'FIR-Format.docx';

      // Download the .docx file from the provided URL and save it
      await FileSystem.downloadAsync(
        'https://savelifefoundation.org/wp-content/uploads/2016/11/A1-Format-of-FIR-part-of-Step-I.docx', // URL of the FIR .docx file
        fileUri
      );

      // Optionally, share the downloaded file if sharing is available
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert('Sharing not available', 'Your device does not support sharing.');
      }

      Alert.alert('Download Complete', 'The FIR format has been downloaded and saved.');
    } catch (error) {
      console.error('Error downloading the file:', error);
      Alert.alert('Download Error', 'There was an issue downloading the FIR format.');
    } finally {
      setIsDownloading(false); // End the download process
    }
  };

  // Generate PDF
  const generatePDF = async () => {
    const htmlContent = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1, h2 { text-align: center; }
          p { margin: 5px 0; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>FORM – IF1 (Integrated Form)</h1>
        <h2>FIRST INFORMATION REPORT</h2>
        <p class="field"><span class="label">District:</span> ${formData.district}</p>
        <p class="field"><span class="label">Police Station:</span> ${formData.policeStation}</p>
        <p class="field"><span class="label">Year:</span> ${formData.year}</p>
        <p class="field"><span class="label">F.I.R. No:</span> ${formData.firNo}</p>
        <p class="field"><span class="label">Date:</span> ${formData.date}</p>
        <!-- Add other fields in the same format -->
      </body>
      </html>
    `;

    try {
      const options = {
        html: htmlContent,
        fileName: 'FIR_report',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      alert(`PDF saved at: ${file.filePath}`);
      navigation.navigate('ViewPDF', { filePath: file.filePath });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.title}>Official FIR Format</Text>
        <Text style={styles.infoText}>
          Below is the official FIR format. You can download it for your use.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={downloadDocx}
          disabled={isDownloading} // Disable button while downloading
        >
          <Text style={styles.buttonText}>
            {isDownloading ? 'Downloading...' : 'Download FIR Format'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Generate FIR PDF</Text>

      <View style={styles.section}>


        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(value) => handleChange('address', value)}
        />
      </View>

      {/* Section 6 */}
      <Text style={styles.label}>Complainant Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Complainant Name"
        value={formData.complainantName}
        onChangeText={(value) => handleChange('complainantName', value)}
      />

      <Text style={styles.label}>Father's / Husband's Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Father's / Husband's Name"
        value={formData.fatherName}
        onChangeText={(value) => handleChange('fatherName', value)}
      />

      <Text style={styles.label}>Date / Year of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="Date / Year of Birth"
        value={formData.birthDate}
        onChangeText={(value) => handleChange('birthDate', value)}
      />

      <Text style={styles.label}>Nationality:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nationality"
        value={formData.nationality}
        onChangeText={(value) => handleChange('nationality', value)}
      />

      <Text style={styles.label}>Occupation:</Text>
      <TextInput
        style={styles.input}
        placeholder="Occupation"
        value={formData.occupation}
        onChangeText={(value) => handleChange('occupation', value)}
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={formData.complainantAddress}
        onChangeText={(value) => handleChange('complainantAddress', value)}
      />

      {/* Add other fields similarly */}
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>

        <Button title="Generate PDF" onPress={generatePDF} />
      </ScrollView>



    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, paddingVertical: 5, fontSize: 16 },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    marginBottom: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 15,
  },
  inputField: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorMessage: {
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  documentItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  documentDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,

    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,

  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default FormToPDF;
