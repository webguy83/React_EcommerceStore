import React, { useState } from 'react';
import axios from 'axios';
import { Instructions, FormGroup } from './Styles/Form';
import CustomInput from './UI/CustomInput';
import CustomButton from './UI/CustomButton'
import styled from 'styled-components/macro';
import ConfirmationMsg from './UI/ConfirmationMsg';

// css
const ContactForm = styled.div`
    width: 80%;
    margin: 0 auto;
`
// jsx

const Contact = () => {
    const initFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comments: ""
    }
    const [userData, setUserData] = useState(initFormData);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");
        axios({
            method: "POST",
            url: "/contactsubmit",
            data: userData
        }).then(res => {
            const { msg } = res.data;
            setStatus(msg);
            setUserData(initFormData);
        }).catch(err => {
            console.log(err);
        })
    }
    const { firstName, lastName, email, phoneNumber, comments } = userData;
    const statusMessages = {
        success: "Submission sent! I will get back to you as soon as possible.",
        fail: "Submission has failed! Please try again later.",
        sending: "Sending..."
    }
    return (
        <ContactForm>
            <h2>Have a question? Please contact me!</h2>
            <Instructions style={{
                margin: "1.3rem 0"
            }}>Please leave your contact information below and I will get back to you soon.</Instructions>
            {status !== "" ? <ConfirmationMsg statusMessages={statusMessages} status={status} /> : null}
            <FormGroup onSubmit={handleSubmit} method="POST">
                <CustomInput type="text"
                    name="firstName"
                    handleChange={handleChange}
                    value={firstName}
                    label="First Name"
                    labelToInputLink="firstName"
                    required />
                <CustomInput type="text"
                    name="lastName"
                    handleChange={handleChange}
                    value={lastName}
                    label="Last Name"
                    labelToInputLink="lastName"
                    required />
                <CustomInput type="email"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    label="Email"
                    labelToInputLink="email"
                    required />
                <CustomInput type="tel"
                    name="phoneNumber"
                    handleChange={handleChange}
                    value={phoneNumber}
                    label="Phone Number"
                    labelToInputLink="phoneNumber"
                    size="20" minlength="9" maxlength="14"
                    required />
                <CustomInput type="textarea"
                    name="comments"
                    handleChange={handleChange}
                    value={comments}
                    label="Comments"
                    labelToInputLink="comments"
                    required />
                <CustomButton type="submit" value="Submit Form" style={{
                    alignSelf: "flex-end"
                }} />
            </FormGroup>
        </ContactForm>
    );
};

export default Contact;