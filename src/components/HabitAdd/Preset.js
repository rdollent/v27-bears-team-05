import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { below } from "./../../elements/utilities";
import { whichModalAction } from "./../../actions/modalActions.js";
import { loadHabit } from "./../../actions/habitLoadActions";




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

    const categoriesList = categories.map( item => <li key={item} onClick={(e) => setPreset(e.target.innerText)}>{item}</li>);


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
        <div>
            <h1>Pick a Habit</h1>
            <Header>
                <HeaderLeft className="header-left">
                    <ul>
                        {categoriesList}
                    </ul>
                </HeaderLeft>
            </Header>
            {showItems(preset)}
        </div>
    )
}

export default Preset;