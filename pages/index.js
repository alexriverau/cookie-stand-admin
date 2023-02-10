import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [cookieStand, createCookieStand] = useState('');

  function createCookieStandHandler(event) {
    event.preventDefault();
    const newCookieStand = {
      'location': event.target.location.value,
      'minCustomersHour': event.target.minCustomersHour.value,
      'maxCustomersHour': event.target.maxCustomersHour.value,
      'avgCookies': event.target.avgCookies.value,
    }
    createCookieStand(JSON.stringify(newCookieStand));
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className='flex items-center p-12 justify-between bg-green-500 '>
        <h1 className='text-6xl'>Cookie Stand Admin</h1>
      </header>
      <main className='mt-6'>
        <div className=' mt-16 flex justify-center'>
          <div className='p-10 rounded-md w-min flex-col bg-green-300'>
            <h1 className='mb-5 flex justify-center text-4xl'>
              Create Cookie Stand
            </h1>
            <form onSubmit={createCookieStandHandler}>
              <div className='py-6 flex text-3xl'>
                <label className='pr-3'>Location</label>
                <input name='location' className='w-11/12 h-10' />
              </div>
              <div className='py-6 flex items-center'>
                <div className='text-3xl text-center'>
                  <label>Minimum Customers per Hour</label>
                  <input name='minCustomersHour' className='w-auto h-10' />
                </div>
                <div className='p-4 text-3xl text-center'>
                  <label>Maximum Customers per Hour</label>
                  <input name='maxCustomersHour' className='w-auto h-10' />
                </div>
                <div className='text-3xl text-center'>
                  <label>Average Cookies per Sale</label>
                  <input name='avgCookies' className='w-auto h-10' />
                </div>
                <button className='ml-4 px-24 py-14 text-3xl bg-green-500'>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className='p-8 mt-6 text-2xl text-gray-600 relative flex items-center justify-center'>
            Report Table Coming Soon...
          </p>
          <p className='p-2 text-2xl text-gray-600 relative flex items-center justify-center'>{cookieStand}</p>
        </div>
      </main>
      <footer className='fixed bottom-0 w-full p-10 bg-green-500'>
        <p className='text-3xl text-gray-800'>&copy; 2023</p>
      </footer>
    </div>
  );
}
