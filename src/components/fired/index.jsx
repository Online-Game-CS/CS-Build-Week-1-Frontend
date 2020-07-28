import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	WhiteDiv,
	inputBackground,
	titlePrimary,
	wallBackground,
	mobile,
} from '../../styles';
import {
	MAP_HEIGHT,
	MAP_WIDTH,
	MAP_HEIGHT_MOB,
	MAP_WIDTH_MOB,
} from '../../utils/constants';

const Fired = ({ game: { isFired } }) => {
	return (
		<FiredContainer isFired={isFired}>
			<FiredDiv>
				<h2>You&apos;ve Been Fired!</h2>
				<p>
					(And no, you can&apos;t try again. You don&apos;t become Beyoncé by
					giving 2nd chances. <br />
					You can create another account - change your identity - and come back
					though.)
				</p>
			</FiredDiv>
		</FiredContainer>
	);
};

export default connect((state) => state)(Fired);

const FiredContainer = styled.div`
	position: absolute;
	z-index: 500;
	height: ${MAP_HEIGHT}px;
	width: ${MAP_WIDTH}px;
	display: ${(props) => (props.isFired ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	background-color: ${inputBackground};
	margin: 2px;
	@media ${mobile} {
		height: ${MAP_HEIGHT_MOB}px;
		width: ${MAP_WIDTH_MOB}px;
	}
`;

const FiredDiv = styled(WhiteDiv)`
	height: 300px;
	width: 500px;
	text-align: center;
	color: ${titlePrimary};
	border: 1px solid black;
	margin: 5px;
	background-color: ${wallBackground};
	@media ${mobile} {
		width: ${MAP_WIDTH_MOB}px;
		height: ${MAP_HEIGHT_MOB}px;
		margin: 0;
		overflow-y: scroll;

		h2 {
			margin: 0;
		}
	}

	p {
		line-height: 19px;
		font-size: 14px;
		font-weight: 200;
	}
`;
