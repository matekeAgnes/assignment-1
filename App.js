import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Course = ({ title, description }) => {
  const [rating, setRating] = useState(0);

  const handleRateCourse = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  return (
    <View style={styles.courseContent}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}/6</Text>
          <TouchableOpacity onPress={handleRateCourse}>
            <Text style={styles.rateButton}>Rate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY PROSPECTUS</Text>
      </View>

      <ScrollView>
        <View style={styles.faculty}>
          <Image source={require("./marketing.jpg")} style={styles.picture} />
          <Course title="FACULTY OF MARKETING" description="Learn about interaction between a consumer and their environment." />
        </View>

        <View style={styles.faculty}>
          <Image source={require("./IT.jpg")} style={styles.picture} />
          <Course title="FACULTY OF INFORMATION TECHNOLOGY" description="Learn about information technology." />
        </View>

        <View style={styles.faculty}>
          <Image source={require("./design.jpg")} style={styles.picture} />
          <Course title="FACULTY OF DESIGN" description="Learn designing." />
        </View>
        
        <View style={styles.faculty}>
          <Image source={require("./business.jpg")} style={styles.picture} />
          <Course title="FACULTY OF BUSINESS" description="Learn about business management." />
        </View>

        <View style={styles.faculty}>
          <Image source={require("./communications.jpg")} style={styles.picture} />
          <Course title="FACULTY OF COMMUNICATIONS" description="Learn about film and producing effective communication." />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  faculty: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  courseContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    marginRight: 10,
  },
  rateButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
