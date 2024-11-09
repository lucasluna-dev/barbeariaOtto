import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    appointmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    appointmentDetails: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    dateTime: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    value: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#f00',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    cancelButtonText: {
        color: '#f00',
        fontSize: 14,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContainer: {
        width: 300,
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonCancelAgendamento: {
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCancelText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonConfirmarAgendamento: {
        backgroundColor: '#28a745',  
        paddingVertical: 10,          
        paddingHorizontal: 20,       
        borderRadius: 5,             
        alignItems: 'center',        
        justifyContent: 'center',    
    },
    buttonConfirmarText: {
        color: '#fff',               
        fontSize: 16,                 
        fontWeight: 'bold',         
    }
});