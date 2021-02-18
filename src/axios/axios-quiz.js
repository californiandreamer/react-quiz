import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-54f44.firebaseio.com/'
})