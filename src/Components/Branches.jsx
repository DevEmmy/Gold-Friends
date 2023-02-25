import { brown, grey } from '@/styles/colors'
import React from 'react'
import styled from 'styled-components'

const Branches = () => {
    const branches = [
        {
            name: "GoldFriends - Travel and Tour",
            content: "Travel without stress - let us handle your visa needs",
            image: "https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.webp"
        },
        {
            name: "GoldFriends - Sadata Homes and Gardens",
            content: "We are here to help you realize your housing dreams.",
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80"
        },
        {
            name: "Mining",
            content: "Coming Soon",
            image: "https://images.unsplash.com/photo-1505833464198-4993b36cdfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    ]
  return (
    <Container>
        <div className="header">
            <p>Our Branches</p>
            <h3>Our Branches are offering top-notch products and services.</h3>
        </div>

        <div className="branches">
            {
                branches.map((branch, i)=>{
                    return(
                        <div key={i} className="branch">
                            <img src={branch.image} alt="" />
                            <div className="textContents">
                                <h3>{branch.name}</h3>
                                <p>{branch.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </Container>
  )
}

const Container = styled.div`
    margin: 100px auto 200px;
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        h3{
            
            font-size: 40px;
            width: 60%;
            color: ${brown};
        }

        p{
            font-size: 20px;
            color: ${grey};
        }
    }

    .branches{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        gap: 30px;
        margin: 50px auto;

        .branch{
            border-radius: 26px 26px;
            /* border: 1px solid ${grey}; */
            box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
            

            img{
                width: 100%;
                height: 150px;
                border-radius: 26px 26px 0 0;
            }

            .textContents{
                padding: 20px;
                background-color: white;
                color: ${brown};
                border-radius: 26px;
                height: 150px;

                h3{
                    font-weight: 600;
                }

                p{
                    padding: 10px 0;
                    font-size: 16px;
                }
            }
        }
    }

    @media (max-width: 700px){
        .header{
            h3{
                font-size: 30px;
                width: 90%;
            }
        }

        .branches{
            display: flex;
            flex-direction: column;

            .branch{
                width: 100%;
            }
        }
    }
`

export default Branches