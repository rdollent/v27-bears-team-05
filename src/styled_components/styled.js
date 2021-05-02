import styled from 'styled-components';
import { below } from "../utilities";

export const Container = styled.div`
    margin: 2rem auto 0;
    padding: 0 2rem;
    max-width: 85rem;

    ${below.s`
      padding: 0;
      width: 90%;
  `}

    ${below.xs`
      width: 92.5%;
  `}
`;


export const HabitsListContainer = styled.div`
    width: 100%;
    padding-top: 40px;
`;

export const EmptyHabits = styled.div`
    .add-habit-link {
        color: #355070;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }

    .img-container {
        width: 100%;
        text-align: center;

        img {
            width: 35%;
            max-width: 320px;
            padding-top: 50px;
        }
    }
`;

export const HabitsItems = styled.section`
    display: flex;
    flex-wrap: wrap;
`;


export const CardContainer = styled.div`
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


export const AddHabitContainer = styled.div`
    height: 90%;
    width: 90%;

    h1 {
        text-align: center;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
    ${below.xs`
      flex-direction: column;
    `}
`;

export const HeaderLeft = styled.div`
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

export const ListItem = styled.li`
    cursor: pointer;
    padding-right: 25px;
    font-weight: ${(props) => (props.preset ? "bold" : "normal")};
    color: ${(props) => (props.preset ? "black" : "#8f8d8d")};
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    max-height: 80%;
`;


export const Back = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: 14px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const AddHabitForm = styled.div`
    height: 90%;
    width: 90%;
    position: relative;

    h1 {
        text-align: center;
        padding: 25px 0;
        ${below.xs`
            padding: 10px 0;
        `}
    }

    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

export const FormColumns = styled.div`
    display: flex;
    justify-content: space-between;
    ${below.xs`
      flex-direction: column;
    `}

    > div {
        width: 47%;
        display: flex;
        flex-flow: column;
        ${below.xs`
            width: 100%;
        `}
    }
`;

export const Label = styled.label`
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
`;

export const HabitSelect = styled.select`
    background: #d6d6d6;
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

export const ButtonContainer = styled.button`
background: ${ props => props.color };
color: ${ props => props.font };
outline: none;
border: none;
padding: ${ props => props.padding };
border-radius: 15px;
text-align: center;
font-size: .9em;
font-weight: ${ props => props.fontWeight };
min-width: ${ props => props.width };
cursor: pointer;
box-shadow: 3px 3px 11px -4px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 3px 11px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 11px -4px rgba(0,0,0,0.75);
`;

export const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

export const InputField = styled.input`
    background: #d6d6d6;
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        padding-bottom: 25px;
    }

    p {
        font-size: 0.8rem;
        padding-top: 25px;

        span {
            font-weight: bold;
            cursor: pointer;
            color: #355070;
        }
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalOuterContainer = styled.div`
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,.55);
    visibility: ${props => props.open ? 'visible': 'hidden'};
`;

export const ModalContainer = styled.div`
    transform: translate(-50%, -50%);
    padding: 15px 20px;
    width: ${ props => props.width ? props.width : 'fit-content' };
    height: ${ props => props.height ? props.height : 'fit-content' };
    background: white;
    border-radius: 30px;
    transition: all 1s;
    box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -webkit-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    -moz-box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.5);
    max-width: 85%;

    &.slide-in {
        position: relative;
        top: 50%;
        left: 50%;
        /*background: ${ props => props.bgColor ? props.bgColor : 'white'};*/
    }

    &.slide-out {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-9999px);
    }
`;

export const ModalContent =  styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    > span {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: bold;
        font-size: 22px;

    }
`;

export const NavContainer = styled.div`
    max-width: 100%;
    width: 100vw;
    background: #F2F2F2;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
`;

export const Icon = styled.div`
    display: flex;

    h6 {
        font-size: 1.2em;
    }

    .orange {
        color: #e56b6f;
    }
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        padding-bottom: 25px;
    }

    p {
        font-size: 0.8rem;
        padding-top: 25px;

        span {
            font-weight: bold;
            cursor: pointer;
            font-color: #355070;
        }
    }
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoggedInContainer = styled.div`
    max-width: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoggedInContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 100%;

    /* p {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    } */
`;

// const Header = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     ${below.xs`
//       flex-direction: column;
//     `}
// `;

export const HeaderLeftLoggedIn = styled.div`
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

export const HeaderRight = styled.div`
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


export const LoggedOutContainer = styled.div`
    max-width: 100%;
    height: 100vh;
    width: 100vw;
    background-image: url("/images/skyBackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoggedOutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    p {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
`;

export const Title = styled.div`
    display: flex;

    h1 {
        font-size: 3em;
    }

    .orange {
        color: #e56b6f;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    button {
        margin: 0 10px;
    }
`;

export const ButtonsContainer = styled.div`
position: absolute;
bottom: 0;
right: 0;
padding: 15px;

img {
    width: 64px;
    margin: 0 10px;
    cursor: pointer;
}
`;