import React, {useEffect, useState} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { useForm } from 'react-hook-form';
import "./form.css"

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="singlebox">
        <div className="contaniner">
          <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
          <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        </div>
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <input type="text" placeholder="Subject" {...register("Subject", {required: true})} />
        <input type="text" placeholder="Type your message here..." {...register("Message", {required: true})} />

        <input type="submit" />
      </div>
    </form>
  );
}