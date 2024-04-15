import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Button, ListItem } from "react-native-elements";

import { fetchMembers } from "../API/FetchAPI";
import { styles } from "../Styles/styles";

const MemberListScreen = () => {
  const [members, setMembers] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchMembersData();
  }, [offset]);

  const fetchMembersData = async () => {
    try {
      const data = await fetchMembers(offset);
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };
  //Funktion för att ladda in 10 till members
  const loadMoreMembers = () => {
    setOffset((prevOffset) => prevOffset + 10);
  };
  //funktion för att gå tillbaka 10
  const goBack = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 10, 0));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {offset > 0 && (
          <Button
            title="Go 10 Back"
            onPress={goBack}
            buttonStyle={styles.button}
          />
        )}
        {members.length > 0 && (
          <Button
            title="Load 10 More"
            onPress={loadMoreMembers}
            buttonStyle={styles.button}
          />
        )}
      </View>
      <ScrollView style={styles.listContainer}>
        {members.map((member) => (
          <ListItem key={member.id}>
            <ListItem.Content>
              <ListItem.Title>{member.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default MemberListScreen;
