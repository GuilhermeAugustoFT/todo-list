import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        gap: 4,
        marginTop: -25
    },
    input: {
        width: '80%',
        backgroundColor: '#262626',
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        fontStyle: 'normal',
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#0D0D0D'
    }, 
    inputFocused: {
        borderWidth: 1,
        borderColor: '#5E60CE'
    },
    button: {
        width: 60,
        height:60,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }, 
    buttonImage: {
        width: 16,
        height: 16
    }
});