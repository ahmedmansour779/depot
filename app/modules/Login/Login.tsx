
export default function Login() {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="User Name" className="p-4 text-xs" />
        <input type="password" placeholder="Password" className="p-4 text-xs" />
      </div>
      <div className="flex flex-row gap-2 text-hover text-s mb-8">
        <input type="checkbox" />
        <label>Remember me</label>
      </div>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-xs text-hover hover:text-primary">Lost Your password?</a>
        <button className="w-full bg-black text-white py-4 text-sm hover:opacity-60">
          LOGIN
        </button>
      </div>
    </div>
  );
}
