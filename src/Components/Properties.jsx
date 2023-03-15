import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaLocationArrow, FaSearchLocation } from 'react-icons/fa'
import { HiChevronDoubleRight, HiLocationMarker } from 'react-icons/hi'
import Cards from './Cards'
import {data} from "./data.js"
import styled from 'styled-components'
import { brown, deepGreen } from '@/styles/colors'

const Properties = () => {

  return (
    <PropertiesContainer>
        <div className="title">
            <p>Our Properties</p>
            <h2>Upgrade Your Living Space: Real Estate Properties Available</h2>
        </div>

        <div className="properties">
            {
                data.map((d, i)=>{
                    return(
                        <Cards data={d} />
                    )
                })
            }
            
            {/* <Cards data={data} />
            <Cards data={data} /> */}
        </div>

        
        
    </PropertiesContainer>
  )
}

 const PropertiesContainer = styled.div`
 

 .title{
    display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 }

p{
    font-size: 16px;
}

h2{
    font-size: 30px;
    width: 90%;
    margin: 0px;
    color: ${deepGreen};
}
  margin: 100px 0;
  color: ${brown};
  .title {
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .properties {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    width: 80%;
    margin: 50px auto;
    p.location {
      font-size: 18px;
    }
  }
  .explore {
    background: #2f4858;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    width: fit-content;
    align-items: center;
    display: flex;
  }
  @media screen and (max-width: 700px) {
    .properties{
      grid-template-columns: none;
      width: 90%;
      gap: 20px;
    }
  }
`;

export default Properties