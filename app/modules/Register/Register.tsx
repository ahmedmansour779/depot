import { logIn } from "@/app/store/slice/formSlice";
import { RegType, RootState } from "@/app/types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const translations = useSelector((state: RootState) => state.translations.translations);


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
    let regObj: RegType = {
      id, name, password, email, isAdmin: false, wishList: [], cart: []
    };
    if (isValidateRegister()) {
      try {
        const response = await fetch(`https://depot-data.onrender.com/users/`, {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(regObj)
        });
        if (!response.ok) {
          throw new Error('Failed to register.');
        } else {
          dispatch(logIn())
        }
      } catch (err) {
        setNotificationError(true);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder={translations.userName} className="p-4 text-xs border-solid border-[1px] border-gray-300 text-black" />
          <div className="flex flex-col gap-1">
            <input value={email} onChange={(e) => { setId(e.target.value); setEmail(e.target.value) }} type="email" placeholder={translations.email} className="p-4 text-xs border-solid border-[1px] border-gray-300 text-black" />
            {notificationWarningEmail && <p className="!text-red-600 text-xs pl-4">{translations.theEmailIsIncorrect}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={translations.password} className="p-4 text-xs border-solid border-[1px] border-gray-300 text-black" />
            {notificationWarningPassword && <p className="!text-red-600 text-xs pl-4">{translations.thePasswordIsIncorrect}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <input value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} type="password" placeholder={translations.repeatPassword} className="p-4 text-xs border-solid border-[1px] border-gray-300 text-black" />
            {notificationErrorPassword && <p className="!text-red-600 text-xs pl-4">{translations.passwordDoesNotMatch}</p>}
          </div>
        </div>
        <p className="text-hover text-xs leading-relaxed">{translations.msgPrivacy}<a href="#" className="text-black">{translations.privacyPolicy}</a></p>
        <div className="flex flex-col gap-1">
          <button type="submit" className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
            {translations.register}
          </button>
          {notificationError && <p className="!text-red-600 text-xs">{translations.errorInRegister}r</p>}
        </div>
      </form>
    </>
  );
}
