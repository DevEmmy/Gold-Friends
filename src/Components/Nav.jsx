import { deepGreen, lightGreen } from '@/styles/colors'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {HiMenuAlt3} from "react-icons/hi"
import {HiXMark} from "react-icons/hi2"
import logo from "media/media/logo.png"
import { Link as Link1, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    const navItems = [
        {
            title: "About Us",
            link: "/about"
        },
        {
            title: "Contact Us",
            link: "#contact"
        },
        {
            title: "Travel & Tours",
            link: "/travels"
        },
        {
            title: "Sadata Homes & Properties",
            link: "/sadata"
        }
    ]

    const [showNav, setShowNav] = useState(false)
    const [loggedUser, setLoggedUser] = useState();

    useEffect(()=>{
        setLoggedUser(JSON.parse(localStorage.getItem("user")))
    }, [])

  return (
    <>
        <Container>
            <Link href={"/"}>
                <div className="logo">
                    <img src={logo.src} alt="" />
                </div>
            </Link>
            

            <div className="navItems">
                {
                    navItems.map((nav, i)=>{
                        return(
                            <Link key={i} href={nav.link}>
                                <p className="nav">
                                    {nav.title}
                                </p>
                            </Link>
                            
                        )
                    })
                }

                
                
            </div>
            
            {
                loggedUser ? 
                <p>Welcome, {loggedUser.firstName}</p>:
                <Link href={"/sign-up"}>
                <div className="signup">
                    Sign up
                </div>
            </Link>
            }
            
            
        </Container>

        <MobileContainer showNav={showNav}>
            <div className="icon" >
                {
                    showNav ?
                    <HiXMark size={"30px"} onClick={()=> setShowNav(!showNav)}/>
                    :
                    <HiMenuAlt3 size={"30px"} onClick={()=> setShowNav(!showNav)}/>
                }
                
            </div>

            <div className="contents">
            {
                    navItems.map((nav, i)=>{
                        return(
                            <Link key={i} href={nav.link}>
                                <p className="mobile_nav">
                                    {nav.title}
                                </p>
                            </Link>
                            
                        )
                    })
                }

                <Link href={"/login"} onClick={()=> localStorage.clear()}>
                <p className="mobile_nav">
                    Logout
                </p>
                </Link>
            </div>
        </MobileContainer>
    </>
    
  )
}

const MobileContainer = styled.div`
    display: none;
    @media (max-width: 700px){
        display: block;
    }
    .icon{
        /* width: fit-content; */
        display: flex;
        align-items: flex-end;
        justify-content: end;
        color: ${lightGreen};
        padding:0 10px;

        
    }
    .contents{
        padding: 10px 0;
        transition: all .3s;
        background-color: black;
        color: white;
        display: ${({showNav}) => showNav ? "block" : "none"};
        height: ${({showNav}) => showNav ? "auto" : "0"};

        .mobile_nav{
         padding: 10px;
        }

        /* .mobile_nav:not(&:last-child){
            border-bottom: 1px solid;
        } */
    }
`

const Container = styled.div`
    padding: 0px 50px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: white;
    color: rgb(100,100,100);
    font-family: "Roboto";
    align-items: center;
    gap: 100px;
    justify-content: space-between;
    scroll-behavior: smooth;

    
    .logo{
        img{
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 700px){
        padding: 10px;
        display: flex;
        gap: 0;

        a{
        width: 50%;
        }

        .logo{
            width: 50%;
        }
    }
    
    

    .navItems{
        display: flex;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 700px) {
            display: none;
        }
    }

    .nav{
        transition: all .3s;
        cursor: pointer;
    }

    .nav:hover{
        border-bottom: 2px solid;
    }

    .signup{
        border: 1px solid ${lightGreen};
        width: fit-content;
        border-radius: 26px;
        padding: 10px 20px;
        color: ${lightGreen};
        /* font-weight: 700; */
        cursor: pointer;
    }

`

export default Nav