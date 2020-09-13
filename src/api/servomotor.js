import API from './axios';

export const iniciaServomotor = () => {
    return API.post(`servo`)
        .then(()=>{
            console.log('inicio servomotor');
            return true;
        }
        ).catch((error) => {
           console.log(error);
        });
};