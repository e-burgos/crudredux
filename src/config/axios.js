import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://crud-reduxserver.herokuapp.com/'
});

export default clienteAxios;