import React from 'react';
import {iniciaServomotor} from '../api/servomotor';
import Template from '../template/Template';

const Home =()=>{
    const inicia = () => iniciaServomotor().then((res)=>{ console.log(res)});
    return(
        <Template>
            <button type="button" className="btn btn-prymary" onClick={()=>{inicia()}}>servo</button>
        </Template>
    );
}
export default Home;