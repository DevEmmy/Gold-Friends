import React from 'react'
import styled from 'styled-components'

const BottomBanner = () => {
  return (
    <Container>
        <h1>Gold Friends & Companies</h1>
        <p>Elevate your real estate experience with our expert management services and streamlined visa processing.</p>
    </Container>
  )
}

const Container = styled.div`
    background-color: #e09f1f;
background-image: linear-gradient(45deg, #e09f1f 0%, #b18641 100%);

height: 70vh;
color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;

    h1{
        font-size: 60px;
        width: 100%;
    }

    p{
        font-size: 24px;
        width: 70%;
    }

    @media (max-width: 700px){
        h1{
            font-size: 40px;
            width: 80%;
        }

        p{
            font-size: 16px;
            width: 80%;
        }
    }
`

export default BottomBanner