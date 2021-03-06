import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from '@material-ui/core'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import firebase from 'firebase/compat/app'


function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        db.collection("emails").add({
            to: formData.To,
            subject: formData.Subject,
            message: formData.Message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input                     
                    placeholder="To" 
                    type="text"                     
                    type="email"
                    {...register("To", { required: true})}
                />

                {errors.To && <p className="sendMail__error">To is required</p>}

                <input 
                    placeholder="Subject" 
                    type="text" 
                    {...register("Subject", { required: true})}
                />

                {errors.Subject && <p className="sendMail__error">Subject is required</p>}

                <input 
                    placeholder="Message" 
                    type="text" 
                    className="sendMail__message" 
                    {...register("Message", { required: true})}
                />

                {errors.Message && <p className="sendMail__error">Message is required</p>}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
