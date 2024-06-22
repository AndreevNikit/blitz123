import React from "react";
import ReactDOM from "react-dom";
import './booking.css';
import '../Buttons.js'
import { NavLink, Navigate, useNavigate } from "react-router-dom";

export default function Booking() {


    const navigate = useNavigate();

    const bookingArena = () => {
        navigate('/booking/arena');
        

    };
    const bookingBlack = () => {
        navigate('/booking/black')
    }

    return(
    <>
        
    <div>
    <h1 class="header-blitz">//BLITZ</h1>
    <h2 class="header-blitz2">Выберите клуб!</h2>
    <h3 class='header-blitz3'>Ночной сеанс</h3>
    </div>
   
    <div class="flex-center">
        <button onClick={bookingBlack} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="./image/Cards.png" alt="Blitz Logo" style={{ width: '300px', height: 'auto' }} />
        </button>
        <button onClick={bookingArena} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="./image/Cards1.png" alt="Blitz Logo" style={{ width: '300px', height: 'auto' }} />
        </button>

    </div>   


    </>    
    )
}