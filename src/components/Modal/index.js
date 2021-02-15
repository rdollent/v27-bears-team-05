import styled from 'styled-components'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './index.css'


const ModalContainer = styled.div`
    padding: 20px;
    width: 600px;
    height: 500px;
    background: white;
    border: 5px solid #E56B6F;
    border-radius: 30px;
    transition: all 1.5s;

    &.slide-in {
        transform: translateX(0);
    }

    &.slide-out {
        transform: translateX(-9999px);
    }
`


const Modal = (props) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.modalReducer)
    return (
        <ModalContainer className={`${state.toggleModal ? 'slide-in' : 'slide-out'}`}>
            {props.children}
        </ModalContainer>
    )
}

export default Modal
