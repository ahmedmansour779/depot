import { logIn } from "@/app/store/slice/authSlice";
import { useTrans } from "@/app/store/translation/transFunc";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
              props.close();
              console.log("done");
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

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handelSubmit}>
      <div className="flex flex-col gap-1">
        <input onChange={(e) => setUserEmail(e.target.value)} value={email} type="email" placeholder={useTrans("userName")} className="p-4 text-xs" />
        {errorEmail && <p className="!text-red-600 text-xs pl-4">{useTrans("theEmailIsIncorrect")}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder={useTrans("password")} className="p-4 text-xs" />
        {errorPassword && <p className="!text-red-600 text-xs pl-4">{useTrans("thePasswordIsIncorrect")}</p>}
      </div>
      <div className="flex flex-row gap-2 text-hover text-s">
        <input type="checkbox" />
        <label>{useTrans("rememberMe")}</label>
      </div>
      <div className="flex flex-col gap-1">
        <Link href="/forgot-password"><p className="text-xs text-hover hover:text-primary">{useTrans("LostPassword")}</p></Link>
        <button type="submit" className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
          {useTrans("login")}
        </button>
        {errorLogin && <p className="!text-red-600 text-xs">{useTrans("connectionError")}</p>}
      </div>
    </form>
  );
}
