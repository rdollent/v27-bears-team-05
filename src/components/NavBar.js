import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import Button from "./Button.js";
import { logout } from '../actions/userActions'

const NavContainer = styled.div`
    width: 100vw;
    background: #F2F2F2;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
`;

const Icon = styled.div`
    display: flex;

    h6 {
        font-size: 1.2em;
    }

    .orange {
        color: #e56b6f;
    }
`;

const NavBar = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logout());

    }
    return (
        <NavContainer>
            <Icon>
                <h6>habit</h6><h6 className="orange">track</h6>
            </Icon>
            <Button content='Sign out' color='#355070' width="100px" padding="7px 10px" />
        </NavContainer>
    )
}

export default NavBar
