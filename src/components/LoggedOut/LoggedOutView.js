import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from "../General/Button";
import { toggleModalAction, whichModalAction } from "../../actions/modalActions";

import { LoggedOutContainer, LoggedOutContent, Title, Buttons } from "../../styled_components/styled";


const LoggedOutView = () => {
    const dispatch = useDispatch()

    const openModal = (modal)  => {
        dispatch(toggleModalAction());
        dispatch(whichModalAction(modal));
    }
    
    return (
        <LoggedOutContainer>
            <LoggedOutContent>
                <Title>
                    <h1>habit</h1><h1 className="orange">track</h1>
                </Title>
                <p>An easy way to make better choices automatic</p>
                <Buttons>
                    <Button content='Register' color='#355070' fontWeight="bold" width="130px" handleClick={ () => openModal('register') } />
                    <Button content='Login' color='#6d597a' fontWeight="bold" width="130px" handleClick={ () => openModal('login') }/>
                </Buttons>
            </LoggedOutContent>
        </LoggedOutContainer>
    )
}

export default LoggedOutView