import { brown, gold, grey } from '@/styles/colors'
import React from 'react'
import styled from 'styled-components'
import Available from './Available'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'

const Travels = () => {
  return (
    <>
        <Nav/>
        <Banner />
        <MainContainer>

        <div className="available_container">
          <h2>Available Tickets</h2>
        <div className="availables">
            {
              [1,2,3,4,5].map((a, n)=>{
                return(
                  <>
                    <Available key={n}/>
                  </>
                )
              })
            }
            
        </div>
        </div>
        
    </MainContainer>

    <Container>
        {/* <h1>About Us</h1> */}

        <div className="content">
        <div className="text">
                <p className="about">Why you should choose us</p>
                <p className='big'>
                Say goodbye to long lines, complicated paperwork, and endless phone calls. Book your travel tickets and process your visa with us for a hassle-free experience that allows you to focus on what truly matters - making memories on your trip.
                </p>
                {/* <p>
                With its wide range of services, including Real Estate Management, Ticket booking, and Visa processing, the company is a one-stop-shop for all your needs.
                    Its team of highly skilled and compassionate professionals is committed to delivering unparalleled services with a personal touch, ensuring that each and every client feels valued and well taken care of.
                </p> */}

            </div>
            <img src="https://thumbs.dreamstime.com/b/word-writing-text-why-choose-us-question-business-concept-reasons-choosing-our-brand-over-others-arguments-black-coffee-w-121980515.jpg" alt="" />

        </div>
    </Container>
        <Footer />
    </>
  )
}

export const MainContainer = styled.div`
    width: 80%;
    margin: 100px auto;
    .why{
        
        h2{
            text-align: center;
            padding: 20px 0;
        }
        p{
            line-height: 1.5;
        }
    }
    .availables{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      padding: 30px 0;
      @media (max-width: 700px){
        grid-template-columns: none;
      }
    }
    .available_container{
      margin: 100px 0;
      h2{
        text-align: center;
      }
    }
`

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
            font-size: 35px;
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

export default Travels