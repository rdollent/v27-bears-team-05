import React from 'react'
import styled from 'styled-components';
import { toggleModalAction, whichModalAction } from "./../../actions/modalActions.js";
import { useDispatch } from "react-redux";

const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px;

    img {
        width: 64px;
        margin: 0 10px;
        cursor: pointer;
    }
`;

const FooterButtons = () => {
    const dispatch = useDispatch()
    const openModal = (modal)  => {
        dispatch(toggleModalAction());
        dispatch(whichModalAction(modal));
    }
    return (
        <ButtonsContainer>
            <img src="./images/addCheck.png" />
            <img src="./images/addHabit.png" onClick={() => openModal('preset') } />
        </ButtonsContainer>
    )
}

export default FooterButtons
