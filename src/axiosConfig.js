import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.20.10.8:4080/CourseWork/'
});

export default instance;