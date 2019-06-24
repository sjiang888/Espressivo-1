import React from 'react';
import { View } from "react-native";

const Songs = [
    { id: 0, name: 'Song', path: require('../assets/music/Happy.mp3'), creationDate:'03/30/2019', length:'01:00' },
    { id: 1, name: 'Song', path: require('../assets/music/Sad.mp3'), creationDate: '03/30/2019', length: '00:42' },
    { id: 2, name: 'Song', path: require('../assets/music/Happy.mp3'), creationDate: '03/30/2019', length: '01:00' },
    { id: 3, name: 'Song', path: require('../assets/music/Sad.mp3'), creationDate: '03/30/2019', length: '00:42' },
    { id: 4, name: 'Song', path: require('../assets/music/Happy.mp3'), creationDate: '03/30/2019', length: '01:00' },
    { id: 5, name: 'Song', path: require('../assets/music/Sad.mp3'), creationDate: '03/30/2019', length: '00:42' },
    { id: 6, name: 'Song', path: require('../assets/music/Happy.mp3'), creationDate: '03/30/2019', length: '01:00' },
    { id: 7, name: 'Song', path: require('../assets/music/Sad.mp3'), creationDate: '03/30/2019', length: '00:42' },
    { id: 8, name: 'Song', path: require('../assets/music/Happy.mp3'), creationDate: '03/30/2019', length: '01:00' },
    { id: 9, name: 'Song', path: require('../assets/music/Sad.mp3'), creationDate: '03/30/2019', length: '00:42' },
]

const extractKey = ({ id }) => id

export default Songs;
export { extractKey };