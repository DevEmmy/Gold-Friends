import React from 'react'
import styled from 'styled-components'
// import { AvailableContainer } from './Styled'

const Available = ({data}) => {
    
  return (
    <AvailableContainer>
        <div className="top">
            <img src={data.image} alt="" />
            <h4>{data.country}</h4>
        </div>
        <div className="text">
            <p>{data.description}</p>
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