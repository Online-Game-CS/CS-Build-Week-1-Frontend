import React from 'react';
import { Link } from 'react-router-dom';
import { CreditDiv, MainButton, TitleCredit } from "../../styles";
import credits from '../../styles/credits.png';


const Credits = () => {
	return (
        <div>
            <CreditDiv>
            <TitleCredit src={credits} />
				<br/>
                <div>
                    <p>
                        Being Beyoncé’s assistant was made by Emily Abrahart, Kiyani Bamba, Oladimeji Lawal-Are and Ifiok Udoidiok.
                    </p>
                    <br/>
                    <p>
                        Original concept by green china on twitter. Music by Beyoncé herself.
                    </p> <br/>
                    <p>
                        Thank you for playing! 
                    </p><br/>
                </div>
            <MainButton>
                <Link to="/" style={{ textDecoration: 'none' }}>
            
                    <h3>
                        BACK TO HOME
                    </h3> 
                </Link>
            </MainButton>
            </CreditDiv>
        </div>
	);
};

export default Credits;