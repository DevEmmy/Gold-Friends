import { brown, gold, grey } from '@/styles/colors'
import React from 'react'
import styled from 'styled-components'

const BriefAbout = () => {
  return (
    <Container>
        {/* <h1>About Us</h1> */}

        <div className="content">
        <div className="text">
                <p className="about">About us</p>
                <p className='big'>
                    Gold Friends is a dynamic and innovative company that is dedicated to simplifying the lives of its clients. 
                </p>
                {/* <p>
                With its wide range of services, including Real Estate Management, Ticket booking, and Visa processing, the company is a one-stop-shop for all your needs.
                    Its team of highly skilled and compassionate professionals is committed to delivering unparalleled services with a personal touch, ensuring that each and every client feels valued and well taken care of.
                </p> */}

                <div className="readMore">
                    Read More
                </div>
            </div>


            <img src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />

        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: ${grey};
    color: white;
    width: 96%;
    text-align: center;
    padding: 50px 10%;
    margin: 100px auto;
    border-radius: 60px;

    @media (max-width: 700px) {
        border-radius: 30px;
    }


    h1{
        color: white;
        font-size: 60px;
    }

    .content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding: 50px 0;
        /* align-items: center; */

        @media (max-width: 700px){
            /* display: flex; */
            grid-template-columns: none;

            img{
                /* display: none; */
            }

            .text{
                text-align: center;
            }
        }

        p.about{
            font-size: 16px;
            font-weight: 700;
            color: ${brown};
        }
        p.big{
            font-size: 45px;
            padding: 0;
            line-height: 1;
            font-weight: 600;
            /* text-shadow: 0 3px 10px rgba(0,0,0,0.2); */
        }

        img{
            width: 100%;
            height: 400px;
            border-radius: 25px;
        }

        .text{
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: left;
            /* line-height: 1.5; */

            @media (max-width: 700px){
                /* text-align: center; */
            }
        }

        .readMore{
            width: fit-content;
            border-radius: 10px;
            background-color: ${gold};
            color: white;
            padding: 15px 30px;
            cursor: pointer;
        }
    }
`

export default BriefAbout