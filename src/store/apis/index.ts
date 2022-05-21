import axios from "axios";

const client = axios.create({
    baseURL: 'https://timeless.brainfors.am/api/',
});

client.interceptors.request.use((config: any) => {

    const accessToken = '';
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

client.interceptors.response.use(

    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('401 error')
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            console.log('!401');
        }
        return Promise.reject(error)
    }
);

export default client;