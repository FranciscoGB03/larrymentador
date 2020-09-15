import axios from 'axios';

export default axios.create(
    {
        baseURL: `${process.env.REACT_APP_URL_API}/`,
        /* headers: {
            common: {
                Authorization: `prueba`
            }
        } */
    }
);