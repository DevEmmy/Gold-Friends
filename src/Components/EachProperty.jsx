import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
// import Footer from '../../Components/Footer';
import Nav from './Nav';
// import { Banner, Details } from '../../Components/Styled';
import {data} from "./data"
import Banner from './Banner';
import Footer from './Footer';
import styled from 'styled-components';
import { createRequest } from './services/Services';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Property = ({property}) => {
    
    // console.log(property)
    const [loggedUser, setLoggedUser] = useState({});
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [message, setMessage] = useState();

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user"))
        setLoggedUser(user)
        setName(user?.firstName + " " + user?.lastName)
        setEmail(user?.email)
        setPhoneNumber(user?.phoneNumber)
    }, [])

    const handleForm = ()=>{
        createRequest(name, email, phoneNumber, message)
    }

  return (
    <>
      <Nav/>
      <Banner img={"https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=740&t=st=1678863234~exp=1678863834~hmac=062dcaff6187c82d557033793c3d84e67202724a5137a522e1668aaebfb998b0"} bigText={property?.title} smallText={"Owning land gives you the opportunity to build your dream home exactly how you want it."} cta={<></>}/>

      <Details>
        <div className="description">
          <h2>Description</h2>
          <p>
            {property?.descriptions}
          </p>
        </div>

        <div className="media">
            <h2>Images</h2>

            <div className="images">
                {
                property?.images?.map((img, i)=>{
                    return(
                        <img src={img} alt="" key={i}/>
                    )
                })
            }
            </div>
            
        </div>

        <div className="media">
            <h2>Videos</h2>

            <div className="images">
                {
                property?.videos?.map((video, i)=>{
                    return(
                        <video src={video} controls={true} alt="" key={i}/>
                    )
                })
            }
            </div>
            
        </div>
        <p className="location">
          <HiLocationMarker />
          {property?.location}
        </p>

        <div className="request">
          <h2>Make a Request for Property</h2>
          <form action="">
            <input type="text" placeholder="John Doe" value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="tel" placeholder="090239239" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
            <textarea
              placeholder="Message"
              onChange={(e)=> setName(e.target.value)}
              value={`
                  Hi, I am interested in ${property?.title}
                `}
            />

            <div className="submit" onClick={handleForm}>Submit</div>
          </form>
        </div>
      </Details>

      <Footer />
    </>
  )
}

export const Details = styled.div`
  width: 80%;
  margin: 30px auto;
  .media{
    padding: 20px 0;
  }
  .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    img, video{
      width: 100%;
      height: 200px;
    }
    @media (max-width: 700px){
      grid-template-columns: none;
    }
  }
  @media (max-width: 700px){
    width: 90%;      
  }
  .location {
    padding: 10px 0;
  }
  .request {
    width: 50%;
    margin: 50px 0;
    @media (max-width: 700px){
      width: 100%;
          
    }
    .submit {
      text-align: center;
      background-color: black;
      color: white;
      padding: 13px 20px;
      border-radius: 6px;
      cursor: pointer;
    }
    form {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        padding: 12px;
      }
      textarea {
        height: 100px;
        resize: none;
        padding: 10px;

      }
    }
  }
`;

export default Property