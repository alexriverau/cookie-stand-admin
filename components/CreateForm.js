import {useAuth} from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CreateForm() {
    const {user} = useAuth();
    const {createResource} = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const report = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minCustomersHour.value),
            maximum_customers_per_hour: parseInt(event.target.maxCustomersHour.value),
            average_cookies_per_sale: parseFloat(event.target.avgCookies.value),
            owner: user.id,
        }
        createResource(report)
    }

    return (
        <form onSubmit={handleSubmit} className='w-3/4 p-6 mx-auto my-10 bg-emerald-200 border-2 border-emerald-400 rounded-xl'>
            <div className='flex justify-around'>
                <div className='flex flex-col'>
                    <label className='text-center text-sm font-bold mx-80 p-2'>ADD LOCATION</label>
                    <input name='location' placeholder='Cookie Stand Location' className='w-full h-10 px-2'/>
                </div>

                <button className='w-96 mt-6 h-14 text-sm bg-emerald-500 rounded hover:bg-emerald-400' type='submit'>
                    CREATE STAND
                </button>
            </div>

            <div className='flex flex-row items-center justify-around space-x-16 w-full h-10 mt-8 mb-4'>
                <div className='flex flex-col'>
                    <label className='text-center text-sm font-bold mx-8 p-2'>MINIMUM CUSTOMERS PER HOUR</label>
                    <input name='minCustomersHour' type='text' className='w-full h-8'/>
                </div>

                <div className='flex flex-col'>
                    <label className='text-center text-sm font-bold mx-8 p-2'>MAXIMUM CUSTOMERS PER HOUR</label>
                    <input name='maxCustomersHour' type='text' className='w-full h-8'/>
                </div>

                <div className='flex flex-col'>
                    <label className='text-center text-sm font-bold mx-8 p-2'>AVERAGE COOKIES PER SALE</label>
                    <input name='avgCookies' type='text' className='w-full h-8'/>
                </div>
            </div>
        </form>
    )
}