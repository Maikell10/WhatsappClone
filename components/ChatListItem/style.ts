import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",
    },
    leftContainer: {
        flexDirection: "row",
    },
    midContainer: {
        justifyContent: "space-around",
    },
    time: {
        fontSize: 14,
        color: "grey",
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default styles;
