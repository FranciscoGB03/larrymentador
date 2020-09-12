import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Acciones from './components/Acciones';


const ROUTES = [
    { exact: true, path: '/', component: Home }, 
    { exact: true, path: '/acciones', component: Acciones }, 
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