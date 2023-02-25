import { deepGreen, lightGreen } from '@/styles/colors'
import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    const navItems = [
        {
            title: "About Us",
        },
        {
            title: "Contact Us"
        },
        {
            title: "Travel & Tours",
        },
        {
            title: "Sadata Homes & Properties"
        }
    ]
  return (
    <Container>
        <div className="logo">
            <h1>Logo</h1>
        </div>

        <div className="navItems">
            {
                navItems.map((nav, i)=>{
                    return(
                        <p className="nav" key={i}>
                            {nav.title}
                        </p>
                    )
                })
            }
        </div>

        <div className="signup">
            Sign up
        </div>
    </Container>
  )
}

const Container = styled.div`
    padding: 20px 50px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: white;
    color: rgb(100,100,100);
    font-family: "Roboto";
    align-items: center;
    gap: 100px;
    justify-content: space-between;

    @media (max-width: 700px){
        padding: 10px;
        display: flex;
        
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