import { gold } from '@/styles/colors'
import Link from 'next/link'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import styled from 'styled-components'
// import { CardStyle } from './Styled'

const Cards = ({data}) => {
    const {images, videos, title, location, _id} = data
  return (
    <CardStyle noShadow={false}>
        <img src={images[0]} alt={title} />
        <h3>{title}</h3>
        <p><HiLocationMarker />{location}</p>

        <Link href={`/sadata/${_id}`}>
            <div className="enquire">
                Enquire
            </div>
        </Link>
        
    </CardStyle>
  )
}

 const CardStyle = styled.div`
  padding: 15px;
  box-shadow:${({noShadow})=> noShadow ? "none" :" 0 6px 100px rgba(0, 0, 0, 0.1)" };
  background-color: white;
  width: 100%;
  border-radius: 16px;
  border: ${({noShadow})=> !noShadow ? "none" :"1px solid rgb(200,200,200)" };;
  img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
  h3 {
    font-size: 1rem;
  }
  p {
    padding: 10px 0;
    font-size: 14px;
  }
  .enquire {
    padding: 18px 10px;
    border-radius: 4px;
    background-color: ${gold};
    color: white;
    text-align: center;
    width: 100%;
    font-size: 14px;
    margin: 3px 0;
    cursor: pointer;
  }
  .btns{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 5px;
    align-items: center;
    justify-content: center;
    justify-items: space-evenly;
    .view{
      border: 1px solid;
      background-color: #2f4858;
      color: white;
      padding: 10px 5px;
      border-radius: 7px;
      font-weight: 700;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }
    .edit{
      border: 1px solid #2f4858;
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: center;
      padding: 10px 5px;
      color: #2f4858;
      cursor: pointer;
      border-radius: 7px;
    }
    .delete{
      color: white;
      border: 1px solid;
      background-color: rgb(255, 50,50);
    }
  }
`;


export default Cards