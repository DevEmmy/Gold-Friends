import { brown, gold } from '@/styles/colors'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Link as Link1, animateScroll as scroll } from "react-scroll";

const Banner = ({bigText, smallText, cta}) => {
  return (
    <Container>
        <h1>{bigText || "GoldFriends & Companies"}</h1>
        <p>
        {smallText || "Gold Friends is a company that offers a range of services including Real Estate Management, Ticket Booking and Visa Processing."}
        </p>

        {
            cta ||
            <Link1 
            activeClass="active"
            to="branches"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            <div className="getStarted scrollDown">
                Get Started
            </div>
            </Link1>
            
        }
        
    </Container>
  )
}

const Container = styled.div`
    background-color: #00a190;
    background-image: linear-gradient(180deg, #00a190 0%, #006c5e 100%);
    height: 90vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(230,230,230);
    line-height: 1.5;
    text-shadow: 0 5px 10px rgba(0,0,0,0.2);
    scroll-behavior: smooth;

    h1{
        font-size: 4rem;
        padding: 0px;
    }

    p{
        width: 50%;
        font-size: 20px;
    }

    .scrollDown{
        -webkit-transition: all .3s ease-in-out;
   -moz-transition: all .3s ease-in-out;
   -o-transition: all .3s ease-in-out;
   transition: all .3s ease-in-out;
    }

    .getStarted{
        background-color: ${gold};
        color: white;
        padding: 10px 30px;
        border: 3px solid;
        border-radius: 26px;
        box-shadow: 0 8px 20px rgb(0,0,0,0.3);
        margin: 30px 0;
        scroll-behavior: smooth;
        cursor: pointer;
    }

    @media (max-width: 700px){
        padding: 0 5%;
        line-height: 1.2;

        h1{
            font-size: 40px;
        }

        p{
            width: 100%;
            font-size: 16px;
        }
    }
`

export default Banner