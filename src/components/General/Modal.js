import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HabitAdd from '../HabitAdd/HabitAdd';
import { toggleModalAction } from '../../actions/modalActions';
import Login from '../Home/Login';
import Register from '../Home/Register';
import Preset from '../HabitAdd/Preset';

import { ModalOuterContainer, ModalContainer, ModalContent } from "../../styled_components/styled";


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
            dims = { height: '525px', width: '675px' };
            break;
        case 'preset':
            body = <Preset/>
            dims = { height: '525px', width: '675px' };
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