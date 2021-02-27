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
    padding-right: 25px;
    font-weight: ${ props => props.preset ? 'bold' : 'normal' };
    color: ${ props => props.preset ? 'black' : '#8f8d8d' };
`;

const HeaderRight = styled.div``;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    max-height: 80%;
`;

const Card = styled.div`
    height: 100px;
    width: 165px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    box-shadow: 3px 3px 9px -4px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 9px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 9px -4px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    background-image: ${ props => props.img && `url("${ props.img }")` }

    &:hover {
        transform: translateY(-5px);
    }

    &.custom {
        display: flex;
        flex-direction: column;
        background: black;
        color: white;

        span:first-of-type {
            text-align: center;
            padding-top: 10px;
            font-size: 45px;
        }

        span:last-of-type {
            font-weight: bold;
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

    const categoriesList = categories.map( item => <ListItem key={item} onClick={(e) => setPreset(e.target.innerText)} preset={preset === item}>{item}</ListItem>);

    const categoryItems = {
        Health: { 
            items: ['Mediate', 'Take multivitamins', 'De-stress'] 
        },
        Diet: {
            items: ['Eat brocolli', 'Drink coconut juice', 'Count calories'],
        },
        Learn: {
            items: ['Study python', 'Learn how to knit', 'Learn how to draw']
        },
        Exercise: {
            items: ['Do some situps', 'Try yoga poses', 'Run 5k']
        },
        Productivity: {
            items: ['Make your bed', 'Study 8pm everyday', 'Finish work by 1pm']
        }
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
            <CardsContainer>
                { preset === 'Custom' ? 
                    <Card className="custom" onClick={(e) => openModal('habitAdd', e, 'custom')}><span>+</span><span>Add Your Own</span></Card>
                    : 
                    ( categoryItems[ preset ].items.map((item) => <Card onClick={(e) => openModal('habitAdd', e, categoryItems[ preset ] )}>{item}</Card>) )
                }
            </CardsContainer>
        </AddHabitContainer>
    )
}

export default Preset;