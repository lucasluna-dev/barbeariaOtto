import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e5e5e5',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: '#000',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
    },
});
