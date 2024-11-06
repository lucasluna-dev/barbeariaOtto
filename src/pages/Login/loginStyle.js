import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 80,
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
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 60,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        color: '#888888',
        marginTop: 10,
    },
    bottomLink: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
    },
    boldUnderline: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000',
    },
});