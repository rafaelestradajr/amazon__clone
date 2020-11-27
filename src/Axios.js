import Axios from 'axios';

const instance = axios.created({
    baseURL:'...' //API (cloud function ) URL
})

export default instance;