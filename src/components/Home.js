import React from 'react';
import {iniciaServomotor} from '../api/servomotor';
import Template from '../template/Template';

const Home =()=>{
    const inicia=()=>iniciaServomotor().then(res=>console.log(res))
    return(
        <Template>
            <button className="btn btn-primary" onClick={()=>{inicia()}}>Servo</button>
        </Template>
    );
}

export default Home;