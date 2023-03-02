import React from 'react'
import styled from 'styled-components'
import { details } from 'utilities/details'
import Banner from './Banner'
import BriefAbout from './BriefAbout'
import Footer from './Footer'
import Members from './Members'
import Nav from './Nav'

const About = () => {
  return (
    <>
        <Nav />
        <Banner bigText={"Get to Know Us: The Team Behind Your Success"} smallText={"Discover the Passion Behind Our Business: Meet the Team Dedicated to Your SuccessGet to Know Us and See What Sets Us Apart"} cta={<></>}/>

        <AboutContainer>

      <div className="main_content">
        <h2>
              We are your one-stop shop for all things travel and housing.
            </h2>
            <div className="gridContent">
          <div className="first">
            
            <div className="content">
              <p>
              At {details.name}, we are dedicated to providing top-quality
              services to our clients. Whether you are looking to travel, find a
              new home, or both, we have the expertise and resources to make your goals a reality.
            </p>


            <p> Our visa and ticket booking services make it
              easy for you to plan and execute your dream vacation. Our team of
              travel experts will handle all of the details, from finding the
              best flights and accommodations to securing all necessary
              documents.
              </p>
            </div>
            
          </div>

          <div className="second">
            <img src="https://tlmtravelstours.com/wp-content/uploads/2016/05/Travel-PNG-Transparent-Image.png" alt="" />
          </div>
        </div>


        <div className="gridContent">
          
          <div className="content">
            <p> Whether you are
              looking to buy, sell, or rent a property, our team of experienced
              professionals will guide you through the process and help you find
              the perfect home.
            </p>
          </div>

          <div className="second">
            <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>
        </div>
      </div>
        

        <Members />
      </AboutContainer>

        <Footer />
    </>
  )
}

export const AboutContainer = styled.div`
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 100px auto;
    text-align: center;
    h1 {
      font-size: 54px;
    }
  }
  .gridContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
    padding: 30px 0;
    
    .first {
      h2 {
        font-size: 40px;
        padding-bottom: 10px;
      }
    }
    .second {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .main_content{
    width: 80%;
    margin: 50px auto;
    h2{
      text-align: center;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
        line-height: 1.5;
    }
  }
  @media screen and (max-width:700px){
    /* margin: 100px 0; */
    
    .gridContent{
      grid-template-columns: none;
      width: 96%;
      .first{
        h2{
          font-size: 30px;
        }
      }
    }
  }
`;

export default About