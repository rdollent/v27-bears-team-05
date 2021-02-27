import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { below } from "./../../elements/utilities";
import { whichModalAction } from "./../../actions/modalActions.js";
import { loadHabit } from "./../../actions/habitLoadActions";

const AddHabitContainer = styled.div`
    height: 90%;
    width: 90%;

    h1 {
        text-align: center;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    ${below.xs`
      flex-direction: column;
    `}
`;

const HeaderLeft = styled.div`
    display: flex;
    padding-right: 15px;

    > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        align-items: center;
        align-self: flex-end;
        padding-bottom: 5px;
        flex-wrap: wrap;
    }
`;

const ListItem =  styled.li`
    cursor: pointer;
    padding-right: 15px;
    font-weight: ${ props => props.preset ? 'bold' : 'normal' };
    color: ${ props => props.preset ? 'black' : '#8f8d8d' };
`;

const HeaderRight = styled.div``;

const Preset = () => {
    const [preset, setPreset] = useState('Health');
    const dispatch = useDispatch()
    const openModal = (modal, e, type)  => {
        dispatch(whichModalAction(modal));
        if(type !== 'custom') {
            dispatch(loadHabit({ name: e.target.innerText, type: type }));
        }
    }

    const categories = ['Health', 'Diet', 'Learn', 'Exercise', 'Productivity', 'Custom'];

    const categoriesList = categories.map( item => <ListItem key={item} onClick={(e) => setPreset(e.target.innerText)} preset={preset === item}>{item}</ListItem>);


    const showItems = (currentState) => {
        const health = ['Mediate', 'Take multivitamins', 'De-stress'];
        const diet = ['Eat brocolli', 'Drink coconut juice', 'Count calories'];
        const learn = ['Study python', 'Learn how to knit', 'Learn how to draw'];
        const exercise = ['Do some situps', 'Try yoga poses', 'Run 5k'];
        const productivity = ['Make your bed', 'Study 8pm everyday', 'Finish work by 1pm'];
    
        let body;
    
        switch (currentState) {
            case 'Health': 
                body = health.map((item) => <div onClick={(e) => openModal('habitAdd', e, 'health')}>{item}</div>);
                break;
            case 'Diet':
                body = diet.map((item) => <div onClick={(e) => openModal('habitAdd', e, 'diet')}>{item}</div>);
                break;
            case 'Learn': 
                body = learn.map((item) => <div onClick={(e) => openModal('habitAdd', e, 'learn')}>{item}</div>);
                break;
            case 'Exercise':
                body = exercise.map((item) => <div onClick={(e) => openModal('habitAdd', e, 'exercise')}>{item}</div>);
                break;
            case 'Productivity':
                body = productivity.map((item) => <div onClick={(e) => openModal('habitAdd', e, 'productivity')}>{item}</div>);
                break;
            case 'Custom':
                body = <div onClick={(e) => openModal('habitAdd', e, 'custom')}>Add Your Own</div>;
                break;
            default:
                return <div></div>
        }
    
        return body;
    }
    
    return (
        <AddHabitContainer>
            <h1>Pick a Habit</h1>
            <Header>
                <HeaderLeft className="header-left">
                    <ul>
                        {categoriesList}
                    </ul>
                </HeaderLeft>
                <HeaderRight>Filter</HeaderRight>
            </Header>
            {showItems(preset)}
        </AddHabitContainer>
    )
}

export default Preset;