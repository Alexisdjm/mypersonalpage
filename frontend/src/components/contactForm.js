import images from '../images/exporting.js';
import { useState } from 'react';
import Modal from './modal.js';

const Contact = () => {


    const [formvalue, setFormvalue] = useState({email:'', name:'', body: ''})
    const [show, setShow] = useState(false)

    const handleimput = (e) => {
        const {name, value} = e.target;
        setFormvalue({...formvalue, [name]:value})
    }

    const getCookie = (name) => {
        let cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookie ? cookie[2] : null;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formvalue)
        fetch('http://127.0.0.1:8000/api/compose', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                "X-CSRFToken": getCookie("csrftoken"),
            },
            body: JSON.stringify({
                name: formvalue.name,
                email: formvalue.email,
                body: formvalue.body
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('body').value = '';
          
        setShow(true)
        
        setTimeout(() => {
            setShow(false)
        }, 3000)

        
    }


    return(
        <div id='contact' className='section-container flex-col align-center section-margin section-padding' style={{backgroundImage: `url(${images.background})`, backgroundSize: 'cover'}}>
            <h4 className='skills-title'>Contact me</h4>
            <form className='contact-form flex-col section-padding' onSubmit={handlesubmit}>
                <input name='name' onChange={handleimput} value={formvalue.name} id='name' type='text' placeholder='Your name' className='contact-input' required></input>
                <input name='email' onChange={handleimput}  value={formvalue.email}  id='email' type='text' placeholder='Your email' className='contact-input' required></input>
                <div className='flex-col'>
                    <label className='message-label'>Your message</label>
                    <textarea id='body' name='body' onChange={handleimput}  value={formvalue.body} className='message' required></textarea>
                </div>
                <input type='submit' className='submit' value='Submit'></input>
            </form>
            <Modal open={show} content={'Mail successfully sent'}/>
        </div>
    )
}

export default Contact