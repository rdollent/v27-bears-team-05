import styled from 'styled-components';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HabitAdd from './HabitAdd/HabitAdd.js';
import { toggleModalAction } from './../actions/modalActions.js';
import Login from './Login.js';
import Register from './Register.js';
import Preset from './HabitAdd/Preset.js';

const ModalOuterContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,.55);
    justify-content: center;
    align-items: center;
    display: ${ props => props.open ? 'flex' : 'none' };
`;

const ModalContainer = styled.div`
    padding: 15px 20px;
    width: ${ props => props.width ? props.width : 'fit-content' };
    height: ${ props => props.height ? props.height : 'fit-content' };
    background: white;
    border-radius: 30px;
    // transition: all 1.5s;
    box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -webkit-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -moz-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    max-width: 85%;

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

    switch ( state.which ) {
        case 'login': 
            body = <Login />;
            dims = { height: '400px', width: '300px' };
            break;
        case 'register':
            body = <Register />
            dims = { height: '500px', width: '300px' };
            break;
        case 'habitAdd':
            body = <HabitAdd />
            dims = { height: '500px', width: '800px' };
            break;
        case 'preset':
            body = <Preset/>
            dims = { height: '500px', width: '800px' };
            break;
        default:
            body = <div></div>;
            dims = {};
    }

    return (
        <ModalOuterContainer className="modal-outer" open={ state.opened }>
            <ModalContainer className={`${state.opened ? 'slide-in' : 'slide-out'}`} width={ dims.width } height={ dims.height }>
                <ModalContent>
                    <span style={ { cursor: 'pointer' } } onClick={ () => dispatch(toggleModalAction())}>x</span>
                    {body}
                </ModalContent>
            </ModalContainer>
        </ModalOuterContainer>  
    )
}

export default Modal