import React from 'react'



const Contact = () => {


  return (

    <div>

      <form name="contact" netlify="true">
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message <input type="text" name="message" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>
  )
}

export default Contact
