import React from 'react'




const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('contact');
        console.log(myForm.name)
        let formData = new FormData(myForm)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
    }

    return (

        <div>
            <form name="contact" method="POST" data-netlify="true" id="contact">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>

                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </p>
            </form>

        </div>
    )
}

export default Contact
