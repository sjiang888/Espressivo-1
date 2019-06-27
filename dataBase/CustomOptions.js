const Options = [
    { id: 0, name: 'Mood1', choices: ['Auto','Happy', 'Sad'] },
    { id: 1, name: 'Mood2', choices: ['Auto','Depressed','Relaxed','Alert','Excited'] },
    { id: 2, name: 'Genre', choices: ['Auto','Chinese', 'Rock', 'Baroque', 'Romantic'] },
    { id: 3, name: 'Length', choices: ['15s', '30s', '45s', '60s'] },
    { id: 4, name: 'Robotic Freedom', choices: ['Low', 'Medium', 'High', 'Free'] },
]

const extractKey = ({ id }) => id

export default Options;
export { extractKey };