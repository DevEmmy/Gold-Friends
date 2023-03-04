import React from 'react'
import img1 from "media/1.jpeg"
import img2 from "media/2.jpeg"
import img3 from "media/3.jpeg"
import img4 from "media/5.jpeg"
import img5 from "media/6.jpeg"
import img6 from "media/7.jpeg"
import img7 from "media/8.jpeg"
import img8 from "media/9.jpeg"


import EachMember from './EachMember'
import styled from 'styled-components'

const Members = () => {
    const members = [
        {
            image: img1,
            name: "Adefaka Funmilayo",
            number: "08079960033",
            facebook: null,
            ig: null
        },
        {
            image: img2,
            name: "Abel Victoria",
            number: "07054723868",
            facebook: null,
            ig: null
        },
        {
            image: img3,
            name: "Kehinde Olamide",
            number: "07055558095",
            facebook: null,
            ig: null
        },
        {
            image: img4,
            name: "Oluwagbemiga Aloa",
            number: "07064690936",
            facebook: null,
            ig: null
        },
        {
            image: img5,
            name: "Agunbiade Tega Fisayomi",
            number: "09126303292",
            facebook: null,
            ig: null
        },
        {
            image: img6,
            name: "Ogunbiyi Adedoyin",
            number: null
        },
        {
            image: img7,
            name: "Adeola Adeoye"
        },
        {
            image: img8,
            name: "Fatunke Olufunke",
            number: "08183742696"
        }
    ]
  return (
    <MembersStyle>
        <h2>Our Team</h2>
        <p>Experience the best with our dedicated and highly-skilled team of professionals who are committed to exceeding your expectations.</p>

        <div className="members">
            {
            members.map((member, i) =>{
                return(
                    <EachMember member={member} key={i}/>
                )
            })
        }
        </div>
        
    </MembersStyle>
  )
}

export const MembersStyle = styled.div`
    text-align: center;
    width: 80%;
    margin: 100px auto;
    p{
        width: 50%;
        margin: 0 auto;
    }
    .members{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    margin: 30px 0;
    }
    @media screen and (max-width: 700px) {
      width: 90%;
      margin: 50px auto;
      p{
        width: 96%;
      }
      .members{
        grid-template-columns: none;
      }
    }
`

export default Members