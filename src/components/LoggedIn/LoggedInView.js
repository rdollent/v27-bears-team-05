import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from "./../Button.js";
import { toggleModalAction, whichModalAction } from "./../../actions/index.js";
import { below } from "./../../elements/utilities";
import HabitsList from './HabitsList.js';
import FooterButtons from './FooterButtons.js';

const LoggedInContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LoggedInContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 100%;

    p {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${below.xs`
      flex-direction: column;
    `}
`;

const HeaderLeft = styled.div`
    display: flex;

    h1 {
        align-self: flex-end;
    }

    > ul {
        display: flex;
        list-style: none;
        padding-left: 15px;
        align-items: center;
        align-self: flex-end;
        padding-bottom: 5px;

        li {
            padding: 0 8px;
            color: #8f8d8d;
            cursor: pointer;
        }
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-size: .9em;
    }
    select {
        padding: 5px 10px;
        border-radius: 20px;
        margin-top:  5px;
        border: 1px solid #8f8d8d;
        outline: none;
    }

    ${below.xs`
      padding-top: 15px;
    `}
`;

const LoggedInView = () => {
    const dispatch = useDispatch()

    return (
        <LoggedInContainer>
            <LoggedInContent>
                <Header>
                    <HeaderLeft className="header-left">
                        <h1>Habits</h1>
                        <ul>
                            <li>All</li>
                            <li>Completed</li>
                            <li>Pending</li>
                        </ul>
                    </HeaderLeft>
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