import React from 'react'
import styled from 'styled-components'
// import { AvailableContainer } from './Styled'

const Available = () => {
    const data = {
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "A Trip to Dubia",
        description: "Embark on an unforgettable adventure in the land of luxury and wonder - Dubai!",
        price: "N1,000,000"
    }
  return (
    <AvailableContainer>
        <div className="top">
            <img src={data.image} alt="" />
            <h4>{data.title}</h4>
        </div>
        <div className="text">
            <p>{data.description}</p>
            <p className="price">{data.price}</p>
        </div>
    </AvailableContainer>
  )
}
export const AvailableContainer = styled.div`
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.10);
  border-radius: 20px;
  cursor: pointer;
    .top{
      display: flex;
      gap: 10px;
      align-items: center;
      img{
        width: 50px;
        height: 50px;
        clip-path: circle();
      }
    }
    p{
      padding: 10px 0;
    }
`

export default Available