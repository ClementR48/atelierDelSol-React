
import gsap from 'gsap/gsap-core';
import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import logo from "../../images/logo2.png"
import emailjs from 'emailjs-com';

const Formulaire = () => {



 /*  const [name, setName] = useState("");
  const [objet, setObjet] = useState("");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); */

  

  const hello = useRef(null)
  const contact = useRef(null) 
  const right = useRef(null) 
  const pictureLogo = useRef(null) 


/*   const handleSubmit = (event) => {
    event.preventDefault();

    sendFeedback("template_o4g4vph", {
      name,
      email,
      objet,
      message,

    })
  };
  

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success');
        setName("");
        setObjet("")
        setMessage('');
        setEmail("")
      })
      .catch(
        (err) => {
          console.log(err);
          return <p>ca c'est mal passé poto</p>
        }
      )
  } */

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p1h4m9i', 'template_o4g4vph', e.target, 
    'user_S6W9cox0UxXXczGLydsea')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  useEffect(() => {
    gsap.from(hello.current, {x:-500,y:-500, duration:1, opacity:0})
    gsap.from(contact.current, {x:-500,y:500, duration:1,opacity:0})
    gsap.from(right.current, {y:500, duration:1,opacity:0})
    gsap.from(pictureLogo.current, {opacity:0, duration:1})
  }, [])

  return (
    <div className="formulaire">
      <div className="left">
        <div className="hello" ref={hello}>
          <p className="just">just</p>
          <p className="say-hi">say hi !</p>
        </div>
        <div className="contact" ref={contact}>
          <a href="http://www.google.com"><Instagram /></a>
          <a href="http://www.google.com"><Facebook /></a>
          <a href="http://www.google.com"><Mail /></a>
          
        </div>
        <img src={logo} alt="logo" ref={pictureLogo}></img>
      </div>
      <form className="right" ref={right} onSubmit={sendEmail}>
        
          <input
            type="text"
            placeholder="Nom"
            name="name"
          /*   value={name}
            onChange={(event) => {
              setName(event.target.value)
          }} */></input>

          <input
            type="mail"
            placeholder="Email"
            /* value={email} */
            name="email"
           /*  onChange={(event) => {
              setEmail(event.target.value)
            }} */
            >
          </input>
          <input
            type="text"
            placeholder="Objet"
           /*  value={objet} */
            name="objet"
            /* onChange={(event) => {
              setObjet(event.target.value)
            }} */
            >
          </input>
          <textarea
            placeholder="Votre message"
            /* value={message} */
            name="message"
            /* onChange={(event) => {
              setMessage(event.target.value)
            }} */
          
          ></textarea>
          <button type="submit" >Envoyer</button>
        
      </form>
      
      
    </div>
  );
};

export default Formulaire;