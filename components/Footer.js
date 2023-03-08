export default function Footer( { locationsCount } ) {
    return(
        <footer className='fixed bottom-0 w-full p-4 bg-emerald-500'>
            <p className='text-center text-xl text-gray-800'>{ locationsCount } Locations World Wide</p>
        </footer>
    )
}