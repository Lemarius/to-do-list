import { styled } from "styled-components";

const StyledContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-image: ${props => !props.darkmode ? 'url(./images/bg-desktop-light.jpg)' : 'url(./images/bg-desktop-dark.jpg)'};
    background-size: contain;
    background-repeat: no-repeat;
    background-color: ${props => !props.darkmode ? 'white' : '#353535'};
    margin: auto;
    transition: 0.5s ease all;
`;

const StyledDiv = styled.div`
    width: 540px;
    margin: auto;
    transition: 0.5s ease all;
`;

const StyledLogoCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 50px 0;
    transition: 0.5s ease all;
`;

const StyledLogoH1 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    letter-spacing: 15px;
    color: white;
`;

const StyledLogoImg = styled.img`
    cursor: pointer;
`;

const StyledTab = styled.div`
    margin: auto;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 20px;
    transition: 0.5s ease all;
`;

const StyledTab2 = styled.div`
    margin: auto;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 20px;
    transition: 0.5s ease all;
`;

const StyledTabH2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${({active}) => !active ? '#494C6B' : '#D1D2DA'};
    text-decoration: ${({active}) => active ? 'line-through' : 'none'};
    transition: 0.5s ease all;
`;

const StyledInputCont = styled.div`
    border-radius: 5px;
    border: 1px solid lightgray;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 10px;
    padding: 15px 20px;
    margin-bottom: 20px;
    transition: 0.5s ease all;
`;

const StyledInput = styled.input`
    width: 90%;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    padding-left: 10px;
    border: 0;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    transition: 0.5s ease all;

    &:focus {
        outline: none;
    }
`;

const StyledInputImgCont = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: 1px solid lightgray;
    /* background: linear-gradient(0.35turn, #55DDFF, #C058F3); */
    background: ${({active}) => active ? 'linear-gradient(0.35turn, #55DDFF, #C058F3)' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s ease all;
`;

const StyledInputImg = styled.img`
    transition: 0.5s ease all;
`;

const StyledTabH3 = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #9495A5;
    cursor: pointer;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    transition: 0.5s ease all;
`;

const StyledTabFilter = styled.div`
    display: flex;
    gap: 10px;
    background-color: ${props => !props.darkmode ? 'white' : '#393A4B'};
    transition: 0.5s ease all;
`;

export {StyledContainer, StyledDiv, StyledLogoCont, StyledLogoH1, StyledLogoImg, StyledInputCont, StyledInput,StyledInputImg, StyledInputImgCont, StyledTab, StyledTab2, StyledTabH2, StyledTabH3, StyledTabFilter};