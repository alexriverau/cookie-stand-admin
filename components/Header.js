export default function Header() {
    return(
        <header className='flex items-center p-4 justify-between text-gray-800 bg-emerald-500 '>
            <h1 className='text-4xl'>Cookie Stand Admin</h1>
            <button className='bg-gray-100 hover:bg-gray-300 px-1 rounded' type='submit'>Overview</button>
        </header>
    )
}