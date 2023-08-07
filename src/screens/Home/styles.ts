import {StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 0.25,
        width: '100%',
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer:{
        width: '100%',
        alignItems: 'center',
        flex: 0.75,
        backgroundColor: '#1A1A1A',
        paddingVertical: 0,
        paddingHorizontal: 24,
        gap: 33
    },
    logo: {
        width: 110,
        height: 32
    }
})