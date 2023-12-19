import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hh3xts9', 'template_2zn0ptz', form.current, 'AFIaZeVNiKsUzBKNI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};
export default App