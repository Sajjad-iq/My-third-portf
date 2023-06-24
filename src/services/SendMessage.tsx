import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const SendMessage = (ref: any) => {

  const [MessageInput, setMessageInput] = useState("")

  const SendMessageHandler = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_xgn72nl', 'template_9sqhvqg', ref.current, 'HKs2JAPkVWe_NF0tb')
      .then((result) => {
        window.alert("Massage Sent")
      }, (error) => {
        window.alert("Massage not Sent")
      });
  };

  return { MessageInput, setMessageInput, SendMessageHandler }
}
