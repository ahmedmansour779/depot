import { useState } from "react";
import { regType } from "../types";
import { isValidateRegister } from "./isValidateRegister";

const [id, setId] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [notificationSuccess, setNotificationSuccess] = useState(false)
const [notificationError, setNotificationError] = useState(false)

export const handelRegister = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [notificationSuccess, setNotificationSuccess] = useState(false)
    const [notificationError, setNotificationError] = useState(false)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let regObj: regType = { id, name, password, email, isAdmin: false };
        if (isValidateRegister(password, email)) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/users`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(regObj)
                });
                if (response.ok) {
                    setNotificationSuccess(true)
                } else {
                    throw new Error('Failed to register.');
                }
            } catch (err) {
                setNotificationError(true)
            }
        }
    }
}