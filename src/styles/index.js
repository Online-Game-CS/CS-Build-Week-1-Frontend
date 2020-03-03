import styled from "styled-components";

// Colours
// Background
export const backgroundPrimary = '#FFD500';
export const backgroundLight = '#FFFFFF';
export const buttonPrimary = '#F314A7';

// Font
export const titlePrimary = '#F89F00';
export const titleSecondary = '#FFD500';
export const textDark = '#000000';


// Fonts
export const headerFont = "'Saira Extra Condensed', sans-serif";
export const primaryFont = "'Saira Semi Condensed', sans-serif";

// white window

export const WhiteDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 528px;
    height: 506px;
    background: #FFFFFF;
    border: 1px solid #FDE600;
    box-sizing: border-box;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
    margin-bottom:10%;

    // h3 is for Username and password (teext in the forms)

    h3 {
        position: absolute;
        width: 180px;
        height: 30px;

        font-family: Saira SemiCondensed;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 55px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        color: #000000;
    }

    // h4 is used for the text under the button

    h4 {
        position: absolute;
        width: 278px;
        height: 27px;

        font-family: Saira SemiCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 31px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }
`

export const FirstTitle = styled.div`
    display:flex;
    flex-direction: column;
    margin:5%;

    h2 {
        
        width: 230px;
        height: 83px;
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
        line-height: 94px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFD500;
    }


    h1 {
    font-family: ${headerFont};
    font-style: bold;
    font-weight: 800;
    font-size: 60px;
    line-height: 79px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #F89F00;
    margin-right: 15%;
    margin-left: 15%;
}
`

export const Menu = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:-3%;
    text-align: center;
    a {
        text-decoration: none;
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 45px;
        line-height: 71px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        margin-right: 25%;
        margin-left: 25%;
    }

    a:hover {
        width: 300px;
        display: flex;
        align-items: center;
        text-align: center;
        border: 5px solid #FFD500;
    }
}
`


export const CreditDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 746px;
height: 502px;
margin-bottom:10%;
background: #FFFFFF;
border: 1px solid #FDE600;
box-sizing: border-box;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);

// p is used for the text in the credit page

p {
    text-align: start;
    width: 687px;
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 41px;
    color: #000000;
    margin-top: -2%;
    }
    `
    export const MainButton = styled.div`
        width: 285px;
        height: 50px;
        background: #F314A7;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
        margin-right: 55%;
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: 800;
        h3 {
            color: #FFFFFF;
            margin-top: 0%;
            font-size: 33px;
            margin-left: 12%;
        }
        `
        


    export const TitleCredit = styled.img`
    margin-top:3%;
    width: 332px;
    height: 83px;
    `;

