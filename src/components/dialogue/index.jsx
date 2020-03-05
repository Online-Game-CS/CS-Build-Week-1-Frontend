import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { MAP_HEIGHT } from '../../utils/constants';
import dialogue from "../../state/actions/dialogue";


const textArray = [
    {
        id : 0,
        "question": "Congratulation, you just got your dream internship.-You have the chance to be Beyoncé’s assistant!- But be careful, heavy is the hand who assist the crown.-Every day, you have to make the best decision.-Just don’t get fired.-Move to the moving bee case to get your first task! "
        
    },
    {
        id : 1,
        "question": "It’s your first day on the job and Beyoncé is getting ready for a red carpet.-What are you getting her for breakfast? Yogurt, granola, and strawberries or a 5-star breakfast?",
        "choice_1" : "Click here if you chose the yogurt, granola, and strawberries ",
        "choice_2" : "Click here if you chose the 5 start breakfast."
    },
    {
        id : 2,
        "question": "She nods at you for choosing the healthy breakfast.-She then asks you to FaceTime her daughter who are you FaceTiming, Blue Or Rumi?",
        "choice_1" : "Click here if you’re FaceTiming Rumi ",
        "choice_2" : "Click here if you’re FaceTiming Blue Ivy "
    },
    {
        id : 3,
        "question": "Beyoncé needs something to do while she waits for hair and makeup.-What do you suggest? Swimming or drinking and gossiping",
        "choice_1" : "Click here if you chose painting ",
        "choice_2" : "Click here if you chose drinking and gossiping"

    },
    {
        id : 4,
        "question": "She tells you to play that song from Lemonade.-Which song are you playing Sandcastles or All Night.",
        "choice_1" : "Click here if you chose sandcastles ",
        "choice_2" : "Click here if you chose All Night"
    },
    {
        id : 5,
        "question": "Beyoncé is running late should she go to the hotel and get ready or do it in the car?",
        "choice_1" : "Click here if she should get ready in the car",
        "choice_2" : "Click here if she should go to the hotel and get ready "
    },
    {
        id : 6,
        "question": "She’s arrived at the hotel but the paparazzi have already spotted her Maybach.-Should she risk being spotted at this event that she’s supposed to make a surprise appearance or run late and go to another hotel?",
        "choice_1" : "Click here if she should risk being spotted",
        "choice_2" : "Click here if she should run late and go to another hotel "
    },
    {
        id : 7,
        "question": "She has thankfully not been spotted.-She’s making her way to the presidential suite 10 floors upstairs should be ditch everyone and go by herself so she doesn’t draw attention or take the risk with and go with her team?",
        "choice_1" : "Click here if she should go alone to the presidential suite",
        "choice_2" : "Click here if she should go with her team to the presidential suite "
    },
    {
        id : 8,
        "question": "The west family offers her to join them in their suite and Motel 6 is able to provide a whole floor.-Which should you suggest?",
        "choice_1" : "Click here if you chose the West Suite",
        "choice_2" : "Click here if you chose the Motel 6 "
    },
    {
        id : 9,
        "question": "The west family offers her to join them in their suite and Motel 6 is able to provide a whole floor.-Which should you suggest?",
        "choice_1" : "Click here if you chose the West Suite",
        "choice_2" : "Click here if you chose the Motel 6 "
    },
    {
        id : 10,
        "question": "Congratulation, you have survived on your first day!-Are you relieved to finally go home?",
        "choice_1" : "Yes!",
        "choice_2" : "No, I want to keep breathing beyoncé air till I die"
    }
]

function refreshPage(){ 
    window.location.reload(); 
}

const DialogueText = props => {
    
    // debugger
    const [display, setDisplay ] = useState(textArray[0].question);
    const [choice1, setChoice1] = useState("");
    const [choice2, setChoice2] = useState("");

    const currentRoom = props.game.player.currentRoom;
    useEffect(() => {
        if (currentRoom){
            if (currentRoom.bee === true){
                setDisplay(
                    textArray[currentRoom.question].question 
                )
                setChoice1(
                    textArray[currentRoom.question].choice_1
                )
                setChoice2(
                    textArray[currentRoom.question].choice_2
                )
            }
        }
	}, [currentRoom]);
    
    return(
        <>
            <DialogueDiv>
                <h1>
                    Instruction
                </h1>
                <div className="text-div">
                <div className="typewriter">
                    {/* <div className="typewriter-text"> */}
                    
                    <div>
                        {display.split('-').map((item, i) => <p key={i}>{item}</p>)} 
                    </div>
                    <a href="/" >
                        {choice1}
                    </a> <br/><br/>
                    <a href="/">
                        {choice2} 
                    </a>
                    {/* </div> */}
                </div>
                <div className="bottom-menu">
                <button type="button" className="start-over " onClick={ refreshPage }> 
                    Start over
                </button> 
                </div>
                </div>
            </DialogueDiv>

        </>
    )
}
export default connect (state => state, {dialogue})(DialogueText);




const DialogueDiv = styled.div`
    background: rgb(248, 248, 248);
    padding: 12px 24px;
    height: ${MAP_HEIGHT}px;
    width:350px; 
    border: 3px solid black ; 
    display:flex;
    flex-direction:column;

    margin-right: 2rem;
    box-sizing: border-box;
    h1 {
        text-align:center;
        font-family: Courier, monospace;
    }

    a {
        text-decoration: none;
        
    }

    a:hoover {
        color: #F314A7;
    }
    
    .typewriter {
        font-family: Courier, monospace;
        // display: inline-block;
    }
    
    .typewriter-text {
        // display: inline-block;
          overflow: hidden;
          letter-spacing: 2px;
         animation: typing 5s steps(500, end), blink .75s step-end infinite;
        // white-space: nowrap;
        font-size: 20px;
        border-right: 4px solid #F314A7;
        // box-sizing: border-box;
    }

    .bottom-menu{
        bottom: 0;
        font-family: Courier, monospace;
    }

    .text-div{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:540px;
        font-size: 15px;
    }
    
    @keyframes typing {
        from { 
            width: 0% 
        }
        to { 
            width: 100% 
        }
    }
    
    @keyframes blink {
        from, to { 
            border-color: transparent 
        }
        50% { 
            border-color:  #F314A7; 
        }
    }
    .start-over {
        background: #F314A7; 
        height:auto;
        color: white;
        font-family: Courier, monospace;
        font-size: 20px;
        marging: 10px;
    }
`




