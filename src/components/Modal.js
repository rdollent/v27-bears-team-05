import styled from 'styled-components';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HabitAdd from './../pages/HabitAdd.js';
import { toggleModalAction } from './../actions/index.js';

const ModalContainer = styled.div`
    padding: 20px;
    width: 600px;
    height: 500px;
    background: white;
    border: 5px solid #E56B6F;
    border-radius: 30px;
    transition: all 1.5s;
    position: absolute;
    top: 20%;
    transform: translateY(50%);
    box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -webkit-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -moz-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);

    &.slide-in {
        transform: translateX(0);
    }

    &.slide-out {
        transform: translateX(-9999px);
    }
`

const Modal = (props) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.modalReducer);

    let body;

    // if ( state.which === 'login' ) {
    //     body = <Login />
    // } else if ( state.which === 'register' ) {
    //     body = <Register />
    // } else if ( state.which  === 'habitAdd' ) {
    //     body = <HabitAdd />
    // }

    if ( state.which === 'habitAdd' ) {
        body = <HabitAdd />
    }
    return (
        <ModalContainer className={`${state.opened ? 'slide-in' : 'slide-out'}`}>
            <span style={ { cursor: 'pointer' } } onClick={ () => dispatch(toggleModalAction())}>X</span>
            <br />
            {body}
        </ModalContainer>
    )
}

export default Modal