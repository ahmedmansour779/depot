import { logIn } from "@/app/store/slice/authSlice";
import { RootState } from "@/app/types";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login(props: any) {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const dispatch = useDispatch();

  const validate = () => {
    let result = true;
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      result = false;
    }
    return result;
  }

  const handelSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorLogin(false);
    if (validate()) {
      fetch("https://depot-data.onrender.com/users/" + email)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            setErrorEmail(true);
          } else {
            if (resp.password === password) {
              dispatch(logIn(resp));
              localStorage.setItem('email', resp.id)
              localStorage.setItem('isAdmin', resp.isAdmin)
              localStorage.setItem('name', resp.name)
              props.close();
            } else {
              setErrorPassword(true);
            }
          }
        })
        .catch((err) => {
          setErrorEmail(true);
        });
    }
  }

  const translations = useSelector((state: RootState) => state.translations.translations);


  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handelSubmit}>
      <div className="flex flex-col gap-1">
        <input onChange={(e) => setUserEmail(e.target.value)} value={email} type="email" placeholder={translations.email} className="p-4 text-xs" />
        {errorEmail && <p className="!text-red-600 text-xs pl-4">{translations.theEmailIsIncorrect}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder={translations.password} className="p-4 text-xs" />
        {errorPassword && <p className="!text-red-600 text-xs pl-4">{translations.thePasswordIsIncorrect}</p>}
      </div>
      <div className="flex flex-row gap-2 text-hover text-s">
        <input type="checkbox" />
        <label>{translations.rememberMe}</label>
      </div>
      <div className="flex flex-col gap-1">
        <Link href="/forgot-password"><p className="text-xs text-hover hover:text-primary">{translations.LostPassword}</p></Link>
        <button type="submit" className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
          {translations.login}
        </button>
        {errorLogin && <p className="!text-red-600 text-xs">{translations.connectionError}</p>}
      </div>
    </form>
  );
}
