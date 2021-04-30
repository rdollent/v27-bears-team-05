import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faHeart, faUtensils, faLaptopHouse, faGraduationCap, faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
    height: 100px;
    width: 165px;
    border: 1px solid rgba(0,0,0,.1);
    margin: 10px;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    box-shadow: 3px 3px 9px -4px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 3px 9px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 9px -4px rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in-out;
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${ props => props.custom ? 'black' : 'white' };
    color: ${ props => props.custom ? 'white' : 'black' };

    &:hover {
        transform: translateY(-5px);
    }

    .item-text {
        font-weight: bold;
        position: absolute;
        bottom: 8px;
        font-weight: bold;
    }

    .icon {
        text-align: center;
        padding-top: 20px;
        font-size: 50px;
        margin: 0 auto;
    }
`;

const HabitCard = ( { item, handleClick, img, custom=false, category }) => {

    const categoryIcons = {
        Exercise: faRunning,
        Health: faHeart,
        Productivity: faLaptopHouse,
        Diet: faUtensils,
        Learn: faGraduationCap,
    }

    // console.log( categoryIcons, category, categoryIcons[category])
    return (
        <CardContainer className={ custom && 'custom' }
            key={ item }
            onClick={ handleClick }
            img={ img }
            custom={ custom }
            data-category={category} 
            >
            <FontAwesomeIcon className="icon" icon={ custom ? faPlus : categoryIcons[category]} />
            <span className="item-text">{ custom ? 'Add Your Own' : item }</span>   
        </CardContainer>
    );
};

export default HabitCard;
