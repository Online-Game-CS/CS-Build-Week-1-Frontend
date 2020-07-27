import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainButton, WhiteDiv } from '../../styles';

const Credits = () => {
	return (
		<CreditContainer>
			<h1>Credits</h1>
			<div>
				<p>
					Being Beyoncé’s Assistant was made by Emily Abrahart, Kiyani Bamba, Oladimeji Lawal-Are and Ifiok Udoidiok.
				</p>
				<p>
					Original concept by green chyna on Twitter. Music by Beyoncé herself.
				</p>
				<p>Thank you for playing!</p>
			</div>

			<Link to="/">
				<MainButton>HOME</MainButton>
			</Link>
		</CreditContainer>
	);
};

export default Credits;

const CreditContainer = styled(WhiteDiv)`
	width: 746px;
	padding: 1rem;

	a:hover {
		padding: 0;
		border: none;
	}
`;
