import React from 'react'
import { useDispatch } from 'react-redux'
import Button from "../General/Button";
import { logout } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';

import { NavContainer, Icon } from "../../styled_components/styled";

const NavBar = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout());
    }
    return (
        <NavContainer>
            <Icon>
                <h6>habit</h6><h6 className="orange">track</h6>
            </Icon>
            <Button content='Sign out' color='#355070' width="100px" padding="7px 10px" handleClick={() => logoutUser()} />
        </NavContainer>
    )
}

export default NavBar
