import React from 'react';
import {iniciaServomotor} from '../api/servomotor';
import Template from '../template/Template';

const Home =()=>{
    const inicia=()=>iniciaServomotor().then(res=>console.log(res))
    return(
        <Template>
            <button className="btn btn-primary" onClick={()=>{inicia()}}>Servo</button>
            hola este un ejempĺo
            cambio de una linea
        </Template>
    );
}

export default Home;