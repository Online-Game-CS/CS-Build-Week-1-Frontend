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
    flx-direction: column;
    position: absolute;
    width: 528px;
    height: 506px;
    background: #FFFFFF;
    border: 1px solid #FDE600;
    box-sizing: border-box;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);

    h1 {
        position: absolute;
        width: 505px;
        height: 158px;

        font-family: Saira SemiCondensed;
        font-style: normal;
        font-weight: 800;
        font-size: 50px;
        line-height: 79px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #F89F00;
    }

    a {
        position: absolute;
        width: 376px;
        height: 86px;
        text-decoration: none;
        font-family: Saira SemiCondensed;
        font-style: normal;
        font-weight: normal;
        font-size: 45px;
        line-height: 71px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;

    }

    a:hover {
        width: 373px;
        height: 74px;

        border: 5px solid #FFD500;
        box-sizing: border-box;
    }

    p {
        position: absolute;
        width: 687px;
        height: 144px;

        font-family: Saira SemiCondensed;
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 41px;
        display: flex;
        align-items: center;

        color: #000000;
    }
`
export const MainButton = styled.div`
    position: absolute;
    width: 285px;
    height: 62px;

    background: #F314A7;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
`


