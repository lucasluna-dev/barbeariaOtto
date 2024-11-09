import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    appointmentContainer: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    cancelButton: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});