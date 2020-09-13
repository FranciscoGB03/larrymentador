import React from 'react';
import Template from '../template/Template';
import { GiOpenedFoodCan } from 'react-icons/gi';
import { GiHeartPlus } from 'react-icons/gi';
import { IoIosWater } from 'react-icons/io';
import icono from '../img/cat-food-icon-hide.png'

const Acciones =()=>{
    return (
        <Template>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active btn btn-info"  id="food-tab"  data-toggle="tab" 
                        href="#foodpet" role="tab" aria-controls="home" aria-selected="true">
                        <GiOpenedFoodCan/> Comida 
                    </a>
                </li>
                <li class="nav-item">
                    <a className="nav-link btn btn-info"  id="water-tab"  data-toggle="tab" 
                        href="#waterpet" role="tab" aria-controls="home" aria-selected="true">
                        <IoIosWater/> Agua
                    </a>
                </li>
                <li class="nav-item">
                    <a className="nav-link btn btn-info"  id="advice-tab"  data-toggle="tab" 
                        href="#advicepet" role="tab" aria-controls="home" aria-selected="true">
                        <GiHeartPlus/> Consejos
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="foodpet" role="tabpanel"
                    aria-labelledby="water-tab">
                    <img src={icono} /> <br />
                    <button type="button" className="btn btn-danger">Servir alimento</button>
                </div>
                <div className="tab-pane fade show " id="waterpet" role="tabpanel"
                    aria-labelledby="food-tab">
                    Contenido de la pestaña 2
                </div>
                <div className="tab-pane fade show " id="advicepet" role="tabpanel"
                    aria-labelledby="advice-tab">
                    Contenido de la pestaña 3
                </div>
            </div>
        </Template>
    );
}
export default Acciones;