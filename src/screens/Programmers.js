import React, {useEffect, useState} from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import { fetchProgrammers } from "../services/ProgrammersService";
import { Card, Image } from "react-native-elements";

const Programmers = () => {
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    (async () => {
      const _programmers = await fetchProgrammers();
      setProgrammers(_programmers.data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>Programadores</Card.Title>
            <Card.Divider />
            {programmers.map((p, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    source={{ uri: p.full_photo }}
                    resizeMode="cover"
                    style={styles.image}
                   />
                  <Text style={styles.name}>{p.name}</Text>
                </View>
              )
            })}
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Programmers;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$appBg',
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
