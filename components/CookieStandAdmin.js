import Head from "next/head";
import Header from '@/components/Header'
import CreateForm from '@/components/CreateForm'
import ReportTable from '@/components/ReportTable'
import Footer from '@/components/Footer'
import {useState} from "react";

export default function CookieStandAdmin() {
    const [cookieStands, createStand] = useState([])

    function createCookieStand() {
        const cookieStand = {
            location: 'Seattle',
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            id: cookieStands.length + 1
        }
        createStand([...cookieStands, cookieStand])
    }

  return(
    <div>
        <Head>
            <title>Cookie Stand Admin</title>
        </Head>

        <Header/>

        <main className='mt-6'>
            <div className=' flex justify-center'>
              <div className='p-4 rounded-lg w-8/12 flex-col bg-emerald-300'>
                <h1 className='p-2 flex justify-center text-2xl'> Create Cookie Stand </h1>

                <CreateForm createCookieStand={ createCookieStand }/>

              </div>
            </div>
        </main>

        <ReportTable cookieStandsList={ cookieStands } />

        <Footer locationsCount={ cookieStands.length }/>
    </div>
    )
}
