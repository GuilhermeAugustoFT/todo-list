import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        padding: 12,
        backgroundColor: '#262626',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 8,
        height: 64,
        alignItems: 'center'
    },
    text: {
        color:'#fff',
        fontSize: 14, 
        fontWeight: '400',
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '85%',
    },
    completedTaskText: {
        color:'#808080',
        fontSize: 14, 
        fontWeight: '400',
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '85%',
        textDecorationLine: 'line-through'
    },
});
