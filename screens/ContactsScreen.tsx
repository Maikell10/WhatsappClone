import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ContactListItem from "../components/ContactListItem";
import NewMessageButton from "../components/NewMessageButton";
import { API, graphqlOperation } from "@aws-amplify/api";

import { listUsers } from "../src/graphql/queries";
//import users from "../data/Users";

export default function ContactsScreen() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await API.graphql(
                    graphqlOperation(listUsers)
                );
                setUsers(usersData.data.listUsers.items)
            } catch (e) {
                console.log(e)
            }
        };
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={users}
                renderItem={({ item }) => <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
            />
            <NewMessageButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
