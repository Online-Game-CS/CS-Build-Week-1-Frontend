import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { MAP_HEIGHT } from "../../utils/constants";
import dialogue from "../../state/actions/dialogue";
import { movePlayer } from "../../state/actions/game";

const DialogueText = ({ movePlayer }) => {
  // const fetchText = e => {
  //     e.preventDefault();
  //     props.dialogue();
  // };
  useEffect(() => {
    document.getElementById("up").onclick = () => movePlayer("n");
    document.getElementById("down").onclick = () => movePlayer("s");
    document.getElementById("left").onclick = () => movePlayer("w");
    document.getElementById("right").onclick = () => movePlayer("e");
  }, []);

  return (
    <>
      <DialogueDiv>
        <h1>Instruction</h1>
        <p>
          Congratulations, you just got your dream internship. During the next
          three months, you have the chance to be Beyoncé’s assistant! But be
          careful, heavy is the hand who wears the crown. Every day, you have to
          make the best decision. Just don’t get fired. Move to the bee case to
          get your first task!
        </p>
        <h1>Direction</h1>
        <p>
          You can use the Arrow keys or the Direction buttons to move the player
        </p>
        {/* <p>{props.dialogue}</p> */}{" "}
        <ButtonDiv>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i  id="up" />
          <br />
          <i type="button" id="left" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i type="button" id="right" />
          <br />
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i type="button" id="down" />
          <br />
        </ButtonDiv>
      </DialogueDiv>
    </>
  );
};

export default connect(state => state, {
  movePlayer
})(DialogueText);
const ButtonDiv = styled.div`
  /* border: 3px solid black; */
  width: 30%;
  margin: 0 auto;
`;
const DialogueDiv = styled.div`
  background: rgb(248, 248, 248);
  padding: 12px 24px;
  height: ${MAP_HEIGHT}px;
  width: 320px;
  border: 3px solid black;
  h1 {
    text-align: center;
  }

  a {
    text-coloration: none;
  }
  i {
    cursor: pointer;
    border: 30px solid green;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    margin: 0 auto;
  }
  i:hover{
    border: 30px solid green;
   
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    margin: 0 auto;
  }

  #right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  #left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  #up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  #down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
 `;
