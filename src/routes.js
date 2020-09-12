import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/Home';


const ROUTES = [
    { exact: true, path: '/', component: Home },      
    { exact:null, path:null, component: NotFound }
];

function NotFound(){
    return (
        <div>
            <p>sitio no encontrado</p>
            <Link to='/portafolio'>Click para regresar</Link>
        </div>
    )
}

export default ROUTES;