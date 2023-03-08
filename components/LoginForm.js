export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <div className='w-1/3 m-3 mx-auto border-2 border-solid p-7 rounded-xl bg-emerald-200 border-emerald-500'>
            <form
                onSubmit={handleSubmit}>
                <label className="block m-2 font-bold text-center" htmlFor="username">USER NAME</label>
                <input className="block w-full p-2 m-2 mx-auto" type="text" name="username" placeholder="User Name"/>
                <label className="block m-2 mt-5 font-bold text-center" htmlFor="password">PASSWORD</label>
                <input className="block w-full p-2 m-2 mx-auto" type="password" name="password" placeholder="Password"/>
                <button className="block w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>
            </form>
        </div>
    );
}