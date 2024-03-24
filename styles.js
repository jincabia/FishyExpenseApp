'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 0,
    }, 
    content: {        
        fontSize: 14,
        color: 'black',
        paddingTop: 5,
        paddingBottom: 5
    },
    demo: {        
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#006400',
        padding: 5,
        margin: 10,
        borderRadius: 5
    },
    email: {        
        fontSize: 14,
        color: 'blue',
        paddingTop: 5,
        paddingBottom: 5,
    },
    error: {
        color: 'red'
    },    
    dialogContainer: {
        width: '200',
        alignItems: 'center'
    },
    dialogButton: {
        backgroundColor: '#0079C1', 
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        margin: 5,
        padding: 5,
        borderRadius: 5       
    },
    divider: {
        height: 2, 
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#A9A9A9'
    },
    icons: {
        paddingRight: 5,
        color: '#0079C1',
        fontSize: 30
    },
    iconsOff: {
        paddingRight: 5,
        color: 'black',
        fontSize: 30
    },
    inner: {
        flex: 1,
        minWidth: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
    },
    input: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        textAlignVertical: 'top',
        backgroundColor: 'white',
    },
    item: {        
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5
    },
    itemSelect: {        
        fontSize: 16,
        color: '#0079C1',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5
    },
    linkButton: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'flex-start'
    },  
    title: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#6B6B6B',
        fontWeight: 'bold' 
                
    },
});

