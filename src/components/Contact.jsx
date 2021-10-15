import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,223,129,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  padding: 3vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  h1 {
    padding-bottom: 3vw;
    font-size: 2.2vw;
    font-weight: 900;
  }
  .input-values {
    width: 100%;
    input{
      width: 25vw;
      height: 4vw;
      text-align: center;
    }
  }
  .input-message {
    textarea {
      padding: 1vw;
      width: 35vw;
      height: 10vw;
      text-align: center;
    }
    
    .submit {
      margin-top: 2vw;
      padding: 2vw;
    }
    
  }
`

const Contact = () => {


  return (

    <Wrapper>
      <Container>
        <h1>Contact us</h1>
        <form name="contact" method="post">
          <div className="input-values">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <input type="text" id="name" name="name" placeholder="your name" required />
            </p>
            <br />
            <p>
              <input type="email" id="email" name="email" placeholder="your email" required />
            </p>
          </div>
          <div className="input-message">
            <p>
              <br />
              <textarea id="message" name="message" placeholder="your message" required></textarea>
            </p>
            <p>
              <input className="submit" type="submit" value="Submit message" />
            </p>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default Contact
