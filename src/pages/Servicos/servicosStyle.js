import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    mustacheIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginVertical: 10,
    },
    list: {
        paddingVertical: 20,
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
    },
    serviceImage: {
        width: 30,
        height: 30,
        borderRadius: 10,
        marginRight: 10,
    },
    serviceName: {
        flex: 1,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
});