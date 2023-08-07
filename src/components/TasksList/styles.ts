import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    },
    headerNoBottomBorder: {
        borderBottomWidth: 0
    },
    headerTitle: {
        flexDirection: "row",
        gap: 8,
    },
    created: {
        fontSize: 14,
        fontWeight: "700",
        color: "#4EA8DE",
    },
    done: {
        fontSize: 14,
        fontWeight: "700",
        color: "#8284FA",
    },
    countContainer: {
        backgroundColor: "#333",
        paddingHorizontal: 8,
        borderRadius: 10,
        justifyContent: "center",
    },
    count: {
        fontSize: 12,
        fontWeight: "700",
        color: "#fff",
    },
    list: {},
    emptyStateContainer: {
        paddingVertical: 48,
        width: '100%',
        alignItems: 'center'
    },
    emptyStateImage: {
        width: 56,
        height: 56
    },
    emptyStateTopText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#808080",
        marginTop: 16,
        lineHeight: 20
    },
    emptyStateBottomText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#808080",
        lineHeight: 20
    },
});
