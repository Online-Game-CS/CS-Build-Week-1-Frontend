import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { MAP_HEIGHT } from '../../utils/constants';
import dialogue from "../../state/actions/dialogue";

const DialogueText = props => {
    // const fetchText = e => {
    //     e.preventDefault();
    //     props.dialogue();
    // };

    return(
        <>
            <DialogueDiv>
                <h1>
                    Instruction
                </h1>
                <p>
                    {props.dialogue}
                </p>
            
            </DialogueDiv>

        </>
    )
}



export default connect (state => state, {dialogue})(DialogueText);




const DialogueDiv = styled.div`
    background: rgb(248, 248, 248);
    padding: 12px 24px;
    height: ${MAP_HEIGHT}px;
    width:320px; 
    border: 3px solid black ; 
    h1 {
        text-align:center;
    }

    a {
        text-coloration : none;

    }
`


