import React from 'react'
import styled from 'styled-components'


const EachMember = ({member}) => {
    const {image, name, number} = member
  return (
    <EachMemberStyle>
        <img src={image.src} alt="" />
        <div className="texts">
            <h3>{name}</h3>
            <p>{number}</p>
        </div>
    </EachMemberStyle>
  )
}

export const EachMemberStyle = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 200px;
        height: 200px;
        box-shadow: 0 13px 20px rgba(00,0,0,0.2);
        margin: 0;
        /* clip-path: circle(); */
        border-radius: 50%;
        
    }  
    .texts{
        text-align: center;
    }
`

export default EachMember