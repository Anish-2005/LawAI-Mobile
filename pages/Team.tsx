import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const teamMembers = [
  {
    name: "Ayush Agarwal",
    role: "ML Engineer",
    description:
      "Ayush is responsible for developing machine learning models, optimizing algorithms, and ensuring the intelligent behavior of the system.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQEoRZxKRClhOg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728018350887?e=1738195200&v=beta&t=9pYtSPhRuABUkyR-VTgAboDui_l4lh5pYoldreKvJx0",
  },
  {
    name: "Debojit Roy",
    role: "Backend Developer",
    description:
      "Debojit handles the backend, focusing on server-side logic, database management, and API integrations to ensure smooth operations.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGPRSfGjGir9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718236956013?e=1738195200&v=beta&t=pscvdlRST4EJhg3Suf5bI6z23YP-LaR_NaCSB2vuQJU",
  },
  {
    name: "Anubhab Das",
    role: "UI/UX Designer",
    description:
      "Anubhab is responsible for creating intuitive and visually appealing user interfaces, ensuring a seamless and engaging experience for users.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQF5tXgTG8Qp4g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710860974456?e=1738195200&v=beta&t=6L3G6xbr5ZqwI_vNx0mwH2ujatNnFyHHyAZ2fIzB_b0",
  },
  {
    name: "Anish Seth",
    role: "Frontend Developer",
    description:
      "Anish brings the UI designs to life with frontend development skills, ensuring responsive layouts, smooth interactions, and an optimized user experience.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEcOwOyX562Dg/profile-displayphoto-shrink_400_400/B56ZNu3TrUGgAg-/0/1732731813490?e=1738195200&v=beta&t=Y-SnPMfKVIN8-7tnNxNyjfme3bQdyrGW45fUTAyyZxI",
  },
  {
    name: "Anushka Adak",
    role: "Research Analyst",
    description:
      "Anushka conducts research, providing insights into market trends and user needs, shaping the strategic direction of the product, and ensuring alignment with business goals and user expectations.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHou2gK1ISDvA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694421566208?e=1738195200&v=beta&t=WVinWjnia99PD9IrEEPjI6wG1rkvVRAqpfdBFVDoYTs",
  },
  {
    name: "Tanisha Gupta",
    role: "Product Manager",
    description:
      "Tanisha provides invaluable guidance and unwavering support, ensuring the team stays focused and their direction aligns seamlessly with industry best practices of the project.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQF0TX_e-_A-kA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693753607824?e=1738195200&v=beta&t=LyZwC4tPpARgbD_dId2bqLRR6M-b59PYw_XyPXuJuFM",
  },
];

const Team = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Team Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>CODE-A-COLA</Text>
        <Text style={styles.subtitle}>
          Brewing solutions for a smarter tomorrow!
        </Text>
      </View>

      {/* Team Members Section */}
      <View style={styles.membersSection}>
        <Text style={styles.sectionTitle}>Meet the Dream Team</Text>
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <Image source={{ uri: member.image }} style={styles.image} />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
            <Text style={styles.description}>{member.description}</Text>
            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    backgroundColor: "#6B00B6",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
  },
  membersSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
    textAlign: "center",
  },
  memberCard: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  role: {
    fontSize: 16,
    color: "#FFD700",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 10,
  },
  connectButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  connectButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
});

export default Team;
