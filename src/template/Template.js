import React from 'react';
import Navbar from '../template/Navbar';

const Template=(props)=> {
    return (
        <div>
            <Navbar/>
                {props.children}           
        </div>
    );
}

export default Template;