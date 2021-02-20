import styled from 'styled-components';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HabitAdd from './../pages/HabitAdd.js';
import { toggleModalAction } from './../actions/index.js';
import Login from './Login.js';
import Register from './Register.js';

const ModalContainer = styled.div`
    padding: 15px 20px;
    width: ${ props => props.width ? props.width : 'fit-content' };
    height: ${ props => props.height ? props.height : 'fit-content' };
    background: white;
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
`;

const ModalContent =  styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    > span {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: bold;
        font-size: 22px;

    }
`;

const Modal = (props) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.modalReducer);

    let body;
    let dims = {};

    if ( state.which === 'login' ) {
        body = <Login />;
        dims = { height: '400px', width: '300px' };
    } else if ( state.which === 'register' ) {
        body = <Register />
        dims = { height: '500px', width: '300px' };
    } else if ( state.which  === 'habitAdd' ) {
        body = <HabitAdd />
        dims = { height: '500px', width: '600px' };
    }

    return (
        <ModalContainer className={`${state.opened ? 'slide-in' : 'slide-out'}`} width={ dims.width } height={ dims.height }>
            <ModalContent>
                <span style={ { cursor: 'pointer' } } onClick={ () => dispatch(toggleModalAction())}>x</span>
                <br />
                {body}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal