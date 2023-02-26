import React from 'react'
import img1 from "media/clients/_1.jpeg"
import img2 from "media/clients/_2.jpeg"
import img3 from "media/clients/_3.jpeg"
import img4 from "media/clients/_4.jpeg"
import img5 from "media/clients/_5.jpeg"
import styled from 'styled-components'
import { brown, deepGreen, gold, grey } from '@/styles/colors'

const Client = () => {
  return (
    <Container>
      <h2>Our Happy Client</h2>
      <div className="video_container">
        <div className="text">
          <p>
            Our satisfied clients are a testament to our commitment to quality and customer satisfaction. From large corporations to small businesses, we have helped a diverse range of clients achieve their goals and transform their operations.
          </p>

          <p>
             Take a look at some of our happy customers and see how we've made a positive impact on their success.
          </p>
        
        </div>

        <video preload={true} controls={true}>
            <source src={"https://res.cloudinary.com/devemmy/video/upload/v1676825621/video_hwv1ap.mp4"} type="video/mp4"/>
        </video>
      </div>
    </Container>
  )
}

const Container = styled.div`
h2{
  text-align: center;
  font-size: 40px;
  color: ${gold};
}
  .video_container{
    padding: 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    width: 90%;
    margin: 10px auto;

    video{
      width: 100%;
      height: 200px;
    }

    .text{
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 20px;
      color: ${brown};
      border-left: 2px solid;
      padding-left: 20px;
      height: fit-content;
    }

    @media (max-width: 700px) {
        grid-template-columns: none;
    }
  }
`

export default Client