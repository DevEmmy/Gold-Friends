import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <form>
            <h2>
                Get in touch today &#x1F44B;
            </h2>

            <div className="form">
                <input type="email" placeholder='youremail@gmail.com'/>
                <input type="text" placeholder='your name'/>
                <textarea placeholder='Your Message' />
                <div className="btn">Submit</div>
            </div>
        </form>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  margin: 100px 0;
  form {
    width: 50%;
    margin: 20px auto;
    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px 0;
      input,
      textarea,
      .btn {
        /* width: 50%; */
        padding: 12px 20px;
      }
      textarea {
        /* width: 50%; */
        resize: none;
        height: 3cm;
      }
      .btn {
        background-color: #b18641;
        text-align: center;
        color: white;
        cursor: pointer;
      }
    }
    @media screen and (max-width: 700px) {
        width: 80%;
    }
  }
`;

export default Contact