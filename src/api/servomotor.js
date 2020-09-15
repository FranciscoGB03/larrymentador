import API from './axios';

export const iniciaServomotor = () => {
    return API.post(`servo`)
        .then((res)=>{
            console.log('inicio servomotor');
            return res;
        }
        ).catch((error) => {
           console.log(error);
        });
};
export const iniciaServomotor2 = () => {
    return API.post(`servo`)
        .then(()=>{
            console.log('inicio servomotor');
            return true;
        }
        ).catch((error) => {
           console.log(error);
        });
};