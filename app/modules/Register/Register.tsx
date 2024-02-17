import { RegType } from "@/app/types";
import { useState } from "react";

export default function Register() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [notificationError, setNotificationError] = useState(false);
  const [notificationErrorPassword, setNotificationErrorPassword] = useState(false);
  const [notificationWarningEmail, setNotificationWarningEmail] = useState(false);
  const [notificationWarningPassword, setNotificationWarningPassword] = useState(false);

  const isValidateRegister = (): boolean => {
    let isProceed = true;
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={};':"|,.<>?]).{8,}$/.test(password)) {
      isProceed = false;
      setNotificationWarningPassword(true);
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isProceed = false;
      setNotificationWarningEmail(true);
    }
    if (password !== passwordTwo) {
      isProceed = false;
      setNotificationErrorPassword(true);
    }
    return isProceed;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotificationError(false);
    setNotificationWarningEmail(false);
    setNotificationWarningPassword(false);
    setNotificationErrorPassword(false);
    let regObj: RegType = { id, name, password, email, isAdmin: false };
    if (isValidateRegister()) {
      try {
        const response = await fetch(`https://depot-data.onrender.com/users/`, {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(regObj)
        });
        if (!response.ok) {
          throw new Error('Failed to register.');
        }
      } catch (err) {
        setNotificationError(true);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="User Name" className="p-4 text-xs" />
          <div className="flex flex-col gap-1">
            <input value={email} onChange={(e) => { setId(e.target.value); setEmail(e.target.value) }} type="email" placeholder="Email" className="p-4 text-xs" />
            {notificationWarningEmail && <p className="!text-red-600 text-xs pl-4">Please enter a valid email </p>}
          </div>
          <div className="flex flex-col gap-1">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-4 text-xs" />
            {notificationWarningPassword && <p className="!text-red-600 text-xs pl-4">Please enter a valid password </p>}
          </div>
          <div className="flex flex-col gap-1">
            <input value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} type="password" placeholder="Repeat Password" className="p-4 text-xs" />
            {notificationErrorPassword && <p className="!text-red-600 text-xs pl-4">Password does not match</p>}
          </div>
        </div>
        <p className="text-hover text-sm leading-relaxed my-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-black">privacy policy.</a></p>
        <div className="flex flex-col gap-2">
          <button type="submit" className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
            REGISTER
          </button>
          {notificationError && <p className="!text-red-600 text-xs">Error in register</p>}
        </div>
      </form>
    </>
  );
}
