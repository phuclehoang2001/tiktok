import axios from 'axios';

//  my express url
const httpRequest = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
