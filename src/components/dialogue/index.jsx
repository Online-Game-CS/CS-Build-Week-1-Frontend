/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MAP_HEIGHT } from '../../utils/constants';
import dialogue from '../../state/actions/dialogue';
import { completeChallenge, failChallenge } from '../../state/actions/game';
import { MainButton, tablet, mobile } from '../../styles';

const textArray = [
	{
		id: 0,
		question:
			'Congratulations, you just got your dream internship.-You have the chance to be Beyoncé’s assistant!- But be careful, heavy is the hand who assist the crown.-Every day, you have to make the best decision.-Just don’t get fired.-Move to the moving bee case to get your first task! ',
	},
	{
		id: 1,
		question:
			'It’s your first day on the job and Beyoncé is getting ready for a red carpet.-What are you getting her for breakfast? Yogurt, granola, and strawberries or a 5-star breakfast?',
		choice_1: 'Click here if you chose the yogurt, granola, and strawberries ',
		choice_2: 'Click here if you chose the 5 star breakfast.',
		answer: 'choice_1',
		fail_response:
			'She yells at you “are you trying to make me fat like you?!” then has her team of lawyers send you a termination letter.',
	},
	{
		id: 2,
		question:
			'She nods at you for choosing the healthy breakfast.-She then asks you to FaceTime her daughter who are you FaceTiming, Blue Or Rumi?',
		choice_1: 'Click here if you’re FaceTiming Rumi ',
		choice_2: 'Click here if you’re FaceTiming Blue Ivy ',
		answer: 'choice_2',
		fail_response:
			'She says “She’s only 2....” then has her team of lawyers send you a termination letter.',
	},
	{
		id: 3,
		question:
			'Beyoncé needs something to do while she waits for hair and makeup.-What do you suggest? Swimming or drinking and gossiping',
		choice_1: 'Click here if you chose painting ',
		choice_2: 'Click here if you chose drinking and gossiping',
		answer: 'choice_1',
		fail_response:
			'She tells you “I’m not going to get drunk before an event and gossip with some peasant” then calls a new assistant.',
	},
	{
		id: 4,
		question:
			'She tells you to play that song from Lemonade.-Which song are you playing Sandcastles or All Night.',
		choice_1: 'Click here if you chose sandcastles ',
		choice_2: 'Click here if you chose All Night',
		answer: 'choice_2',
		fail_response: 'She starts crying then fires you after the 3:03 minutes',
	},
	{
		id: 5,
		question:
			'Beyoncé is running late should she go to the hotel and get ready or do it in the car?',
		choice_1: 'Click here if she should get ready in the car',
		choice_2: 'Click here if she should go to the hotel and get ready ',
		answer: 'choice_2',
		fail_response:
			'She got car sick and threw up all over her outfit. You’ve been kicked out of the car and fired.',
	},
	{
		id: 6,
		question:
			'She’s arrived at the hotel but the paparazzi have already spotted her Maybach.-Should she risk being spotted at this event that she’s supposed to make a surprise appearance or run late and go to another hotel?',
		choice_1: 'Click here if she should risk being spotted',
		choice_2: 'Click here if she should run late and go to another hotel ',
		answer: 'choice_1',
	},
	{
		id: 7,
		question:
			'She has thankfully not been spotted.-She’s making her way to the presidential suite 10 floors upstairs should be ditch everyone and go by herself so she doesn’t draw attention or take the risk with and go with her team?',
		choice_1: 'Click here if she should go alone to the presidential suite',
		choice_2:
			'Click here if she should go with her team to the presidential suite ',
		answer: 'none',
		fail_response_1:
			'Beyoncé was kidnapped so Beyoncé’s other assistant fires you.',
		fail_response_2:
			'She’s been spotted and you ruin a whole era so she fires you',
	},
	{
		id: 8,
		question:
			'The west family offers her to join them in their suite and Motel 6 is able to provide a whole floor.-Which should you suggest?',
		choice_1: 'Click here if you chose the West Suite',
		choice_2: 'Click here if you chose the Motel 6 ',
		answer: 'choice_2',
		fail_response: 'Beyoncé says nothing. Julius has fired you.',
	},
	{
		id: 9,
		question:
			'The west family offers her to join them in their suite and Motel 6 is able to provide a whole floor.-Which should you suggest?',
		choice_1: 'Click here if you chose the West Suite',
		choice_2: 'Click here if you chose the Motel 6 ',
		answer: 'choice_2',
		fail_response: 'Beyoncé says nothing. Julius has fired you.',
	},
	{
		id: 10,
		question:
			'Congratulation, you have survived on your first day!-Are you relieved to finally go home?',
		choice_1: 'Yes!',
		choice_2: 'No, I want to keep breathing beyoncé air till I die',
		answer: 'choice_1',
		fail_response:
			'The Queen loves her privacy, plus you’re being creepy... ew',
	},
];

const DialogueText = ({
	history,
	completeChallenge,
	failChallenge,
	game: {
		isFinished,
		player: { currentRoom, score },
	},
}) => {
	// debugger
	const [display, setDisplay] = useState(textArray[0].question);
	const [choice1, setChoice1] = useState('');
	const [choice2, setChoice2] = useState('');
	const [answer, setAnswer] = useState('');
	const [response, setResponse] = useState(
		localStorage.getItem('response') || ''
	);
	const [showDialog, setShowDialog] = useState('true');

	useEffect(() => {
		if (currentRoom) {
			if (currentRoom.bee === true && currentRoom.question === score + 1) {
				setDisplay(textArray[currentRoom.question].question);
				setChoice1(textArray[currentRoom.question].choice_1);
				setChoice2(textArray[currentRoom.question].choice_2);
				setAnswer(textArray[currentRoom.question].answer);
				setResponse('');
			}
		}
	}, [currentRoom]);

	useEffect(() => {
		if (
			currentRoom &&
			currentRoom.bee === true &&
			currentRoom.question === score + 1
		) {
			setShowDialog(true);
		}
	}, [currentRoom]);

	const handleAnswer = (choice) => {
		if (answer === choice) {
			completeChallenge();
			setResponse('You survived the challenge! Move on to your next task.');
			localStorage.setItem(
				'response',
				'You survived the challenge! Move on to your next task.'
			);
		} else if (currentRoom.question === 6) {
			completeChallenge();
			completeChallenge();
			setResponse('You survived the challenge! Move on to your next task.');
			localStorage.setItem(
				'response',
				'You survived the challenge! Move on to your next task.'
			);
		} else {
			failChallenge();
			if (currentRoom.question === 7) {
				if (choice === 'choice_1') {
					setResponse(textArray[currentRoom.question].fail_response_1);
					localStorage.setItem(
						'response',
						textArray[currentRoom.question].fail_response_1
					);
				} else {
					setResponse(textArray[currentRoom.question].fail_response_2);
					localStorage.setItem(
						'response',
						textArray[currentRoom.question].fail_response_2
					);
				}
			} else {
				setResponse(textArray[currentRoom.question].fail_response);
				localStorage.setItem(
					'response',
					textArray[currentRoom.question].fail_response
				);
			}
		}
	};

	return (
		<>
			<DialogueDiv showDialog={showDialog}>
				<h1>Instruction</h1>
				<div className="text-div">
					<div className="typewriter">
						{isFinished ? (
							<div>
								<CompleteContainer>
									<p>
										It&apos;s been a long day but you made it! You&apos;ve
										successfully tackled every challenge thrown your way.
									</p>

									<p>Time for some well deserved rest... until tomorrow.</p>
								</CompleteContainer>

								<MainButton
									type="button"
									onClick={() => {
										history.push('/credits');
									}}
								>
									Credits
								</MainButton>
							</div>
						) : response ? (
							<ResponseContainer>
								<div>{response}</div>
								<ResponseButton
									type="button"
									onClick={() => {
										setShowDialog(false);
									}}
								>
									Close
								</ResponseButton>
							</ResponseContainer>
						) : (
							<div>
								<div>
									{display.split('-').map((item, i) => (
										<p key={i}>{item}</p>
									))}
								</div>
								<AnswerDiv onClick={() => handleAnswer('choice_1')}>
									{choice1}
								</AnswerDiv>
								<br />
								<br />
								<AnswerDiv onClick={() => handleAnswer('choice_2')}>
									{choice2}
								</AnswerDiv>
							</div>
						)}
					</div>
				</div>
			</DialogueDiv>
		</>
	);
};
export default withRouter(
	connect((state) => state, {
		dialogue,
		completeChallenge,
		failChallenge,
	})(DialogueText)
);

const DialogueDiv = styled.div`
	background: rgb(248, 248, 248);
	padding: 12px 24px;
	height: ${MAP_HEIGHT}px;
	width: 350px;
	border: 3px solid black;
	display: flex;
	flex-direction: column;
	margin-right: 2rem;
	box-sizing: border-box;
	@media ${tablet} {
		width: 100%;
		height: 100%;
		margin-right: 0;
		display: ${(props) => (props.showDialog ? 'flex' : 'none')};
	}

	@media ${mobile} {
		height: auto;
		border: none;
	}
	h1 {
		text-align: center;
		font-family: Courier, monospace;
	}

	a {
		text-decoration: none;
	}

	a:hoover {
		color: #f314a7;
	}

	.typewriter {
		font-family: Courier, monospace;
		display: inline-block;
	}

	.typewriter-text {
		display: inline-block;
		overflow: hidden;
		letter-spacing: 2px;
		animation: typing 5s steps(500, end), blink 0.75s step-end infinite;
		white-space: nowrap;
		font-size: 20px;
		border-right: 4px solid #f314a7;
		box-sizing: border-box;
	}

	.bottom-menu {
		bottom: 0;
		font-family: Courier, monospace;
	}

	.text-div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 540px;
		font-size: 15px;
	}

	@keyframes typing {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #f314a7;
		}
	}
	.start-over {
		background: #f314a7;
		height: auto;
		color: white;
		font-family: Courier, monospace;
		font-size: 20px;
		margin: 10px;
	}
`;

const AnswerDiv = styled.div`
	&:hover {
		cursor: pointer;
		color: #f314a7;
	}
`;

const CompleteContainer = styled.div`
	margin-bottom: 2rem;
`;
const ResponseContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ResponseButton = styled(MainButton)`
	width: auto;
	padding: 0.5rem 1rem;
	font-size: 1.3rem;
	margin-top: 2rem;
	display: none;

	@media ${tablet} {
		display: block;
	}
`;
