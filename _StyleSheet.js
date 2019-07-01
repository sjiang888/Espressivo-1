import { StyleSheet,Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Title: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: 'white',
    },
    circle: {
        width: 0.2 * screenWidth,
        height: 0.2 * screenWidth,
        borderRadius: 0.2 * screenWidth / 2,
        borderWidth: 4,
        borderColor: '#74EBD5',
        alignItems: 'center', justifyContent: 'center'
    },
    outerCircle: {
        width: 0.2 * screenWidth + 13,
        height: 0.2 * screenWidth + 13,
        borderRadius: (0.2 * screenWidth + 13) / 2,
        borderWidth: 4,
        borderColor: 'white',
        alignItems: 'center', justifyContent: 'center'
    },
    ListContainer: {
        marginHorizontal: screenWidth * 0.05,
    },
    row: {
        minHeight: (90 / 812) * screenHeight,
        flexDirection: 'column',
        padding: screenHeight * 0.01,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },

    songName: {
        color: 'white',
        marginTop: screenHeight * 0.007,
        fontSize: 22,
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
    },

    songAttributes: {
        color: '#CCCCCC',
        fontSize: 14,
        fontWeight: 'normal',
    },

    DeleteIcon: {
        height: screenHeight * 0.02 * 18 / 14,
        width: screenHeight * 0.02,
    },

    PlayIcon: {
        height: screenHeight * 0.03 * 25 / 20,
        width: screenHeight * 0.03,
    },
    NextStep: {
        width: (293 / 375) * screenWidth,
        //height: (91/812)*screenHeight,
        height: 91,
        borderRadius: 91 / 2,
        borderWidth: 1,
        borderColor: '#70727D',
        alignItems: 'center', justifyContent: 'center'
    },
    NextFont: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: '#7A7A83'
    },
    Album: {
        height: (286 / 812) * screenHeight,
        width: (286 / 812) * screenHeight,
        borderRadius: 33,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0.05 * screenHeight
    },
    MusicNote: {
        height: (105.11 / 812) * screenHeight,
        width: (85.33 / 105.11) * (105.11 / 812) * screenHeight,
    },
    ProgressCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#A8F5FF',

    },
    etcIcon: {
        height: screenHeight * 0.03 * 5 / 20,
        width: screenHeight * 0.03,
    },
    ExportIcon: {
        height: screenHeight * 0.03 * 20 / 20,
        width: screenHeight * 0.03,
    },
    slider: {
        height: 2,
        backgroundColor: '#D3D3D3',
        width: screenWidth * 0.87,
        alignSelf: 'center',
    },
    ChoiceRow: {
        minHeight: (115 / 812) * screenHeight,
        flexDirection: 'column',
        padding: screenHeight * 0.01,
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
    },
    Options: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: '#C7C6D5',
        alignSelf: 'center',
        marginVertical: screenHeight * 0.028,
    },
    choices: {
        height: (42 / 812) * screenHeight,
        width: screenWidth * 0.35,
        borderColor: '#74EBD5',
        borderWidth: 1,
        borderRadius: 91 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choicesText: {
        fontSize: 22,
        color: 'white',
    },
})

export { styles };