import React from 'react';
import { useSelector, useDispatch, useStore } from "react-redux";
import { Redirect } from 'react-router-dom'
import Button from "./../Button.js";
import { toggleModalAction, whichModalAction } from "./../../actions/modalActions.js";
import { below } from "./../../elements/utilities";
import HabitsList from './HabitsList.js';
import FooterButtons from './FooterButtons.js';

import { LoggedInContainer, LoggedInContent, Header, HeaderLeftLoggedIn, HeaderRight } from "../../styled_components/styled.js";



const LoggedInView = () => {
    const dispatch = useDispatch()
    const authenticated = useSelector((state) => state.isAuthenticated)

    // if(!authenticated) {
    //     return <Redirect to="/"/>    }
    
    return (
        <LoggedInContainer>
            <LoggedInContent>
                <Header>
                    <HeaderLeftLoggedIn className="header-left">
                        <h1>Habits</h1>
                        <ul>
                            <li>All</li>
                            <li>Completed</li>
                            <li>Pending</li>
                        </ul>
                    </HeaderLeftLoggedIn>
                    <HeaderRight className="header-right">
                        <label>Filter:</label>
                        <select>
                            <option>All</option>
                            <option>Exercise</option>
                            <option>Productivity</option>
                        </select>
                    </HeaderRight>
                </Header>
                <HabitsList />
            </LoggedInContent>
            <FooterButtons />
        </LoggedInContainer>
    )
}

export default LoggedInView