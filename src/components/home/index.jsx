/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { WhiteDiv, Menu, tablet } from '../../styles';
import titleImg from '../../styles/title.png';
import { logout } from '../../state/actions/auth';
import Spinner from '../../styles/Spinner';

const Home = ({
	auth: { isLoggedIn, isFetching },
	game: { isFetchingInitial },
}) => {
	return (
		<HomeContainer>
			<TitleImg src={titleImg} />
			<br />
			{isFetching || isFetchingInitial ? (
				<Spinner />
			) : (
				<Menu>
					{isLoggedIn ? <Link to="/game">Play</Link> : null}

					{isLoggedIn ? (
						<div className="logout" onClick={() => logout()}>
							Logout
						</div>
					) : (
						<Link to="/login">Login</Link>
					)}
					<Link to="/credits">Credits</Link>
				</Menu>
			)}
		</HomeContainer>
	);
};

export default connect((state) => state, { logout })(Home);

const TitleImg = styled.img`
	height: auto;
	width: auto;
	@media ${tablet} {
		max-height: 90vh;
		max-width: 90vw;
	}
`;

const HomeContainer = styled(WhiteDiv)`
	width: 600px;
	height: 550px;
`;
