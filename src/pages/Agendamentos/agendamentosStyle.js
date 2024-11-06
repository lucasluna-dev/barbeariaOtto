import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    serviceInfo: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'right',
    },
    calendar: {
        marginBottom: 20,
    },
    timeslotsContainer: {
        alignItems: 'center',
    },
    timeslot: {
        padding: 10,
        margin: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
        minWidth: 70,
        alignItems: 'center',
    },
    selectedTimeslot: {
        backgroundColor: '#000',
    },
    timeslotText: {
        color: '#000',
    },
    selectedTimeslotText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: '#4CAF50', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#FF0000', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

});