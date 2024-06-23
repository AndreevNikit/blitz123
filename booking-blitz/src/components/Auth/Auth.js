import React, { useState, useContext } from 'react';
import './Auth.css';
import { Button } from 'react-bootstrap';
import Buttons from '../Buttons';
import { useVisibility } from "../../context";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Auth() {
    const [isRegistered, setIsRegistered] = useState(false);
    const { isVisible, setIsVisible } = useVisibility();
    const location = useLocation();
    const instance = axios.create({baseURL:'https://blitzykt.ru'})

    const [form, setForm] = useState({
        email: '',
        password: ''
      })

      const { login } = useContext(AuthContext)

      const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
      }
    const handleRegister = async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            setIsRegistered(true);
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
        try {
            await instance.post('/api/auth', {...form},{
                headers: {
                  'Content-Type': 'application/json',
                  'X-Powered-By': 'Express'
                }
              })
              .then(response => {
                login(response.data.token, response.data.userID)
                console.log(response)
              })
          } catch (error) {
            console.log(error)
          }
        }
    return(
        <>
        <div className='auth'>
            <div class="modal-content">
            <img src="./image/blitz.png" alt="Logo"/>
            <h2>Почта</h2>
            <input
                        type="email" 
                        id="email" 
                        placeholder="email" 
                        name='email'
                        onChange={changeHandler} 
                        required
             />
            <h2>Пароль</h2>
            <input
                       type="password" 
                       id="password" 
                       placeholder="password" 
                       name='password'
                       onChange={changeHandler} 
                       required
             />
            <button 
                        className="submit-btn" 
                        id="submitBtn" 
                        onClick={handleRegister}
                        disabled={isRegistered}>
                        {isRegistered ? 'Ждемссс...' : 'Войти'}
            </button>
            <a href="menu" class="back-link">//back</a>
            </div>
        </div>

        


        </>
    )
}