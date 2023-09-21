
export default function Register() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="User Name" className="p-4 text-xs" />
        <input type="email" placeholder="Email" className="p-4 text-xs" />
        <input type="password" placeholder="Password" className="p-4 text-xs" />
        <input type="password" placeholder="Repeat Password" className="p-4 text-xs" />
      </div>
      <p className="text-hover text-sm leading-relaxed my-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-black">privacy policy.</a></p>
      <button className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
        REGISTER
      </button>
    </div>
  );
}
