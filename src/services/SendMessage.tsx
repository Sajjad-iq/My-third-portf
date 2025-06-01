import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const SendMessage = (ref: any) => {

  const [MessageInput, setMessageInput] = useState("")

  const SendMessageHandler = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, ref.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
        window.alert("Massage Sent")
      }, (error) => {
        window.alert("Massage not Sent")
      });
  };

  return { MessageInput, setMessageInput, SendMessageHandler }
}
