import React from 'react'
import { toggleModalAction, whichModalAction } from "../../actions/modalActions";
import { useDispatch } from "react-redux";

import { ButtonsContainer } from "../../styled_components/styled";

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
