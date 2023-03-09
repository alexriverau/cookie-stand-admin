import {useAuth} from "@/contexts/auth";

export default function Header() {

    const {user, logout} = useAuth();

    return (
        <header className='flex items-center p-4 justify-between text-gray-800 bg-emerald-500 '>
            <h1 className='font-bold text-4xl ml-96'>Cookie Stand Admin</h1>
            <div className='flex flex-row items-right justify-between space-x-2 mr-96'>
                <button className='bg-gray-100 text-sm hover:bg-gray-300 px-1 rounded'>{user.username}</button>
                <button onClick={logout} className='w-20 h-8 bg-emerald-600 text-white text-sm hover:bg-emerald-300 px-1 rounded'>Sign Out</button>
                <button className='bg-gray-100 text-sm hover:bg-gray-300 px-1 rounded'>Overview</button>
            </div>
        </header>
    )
}