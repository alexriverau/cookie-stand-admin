export default function CreateForm( { createCookieStand } ) {
    function handleSubmit(event) {
        event.preventDefault();
        createCookieStand();
        event.target.reset();
    }

    return(
        <form onSubmit={ handleSubmit } className="w-full px-10 pt-5 pb-3 mx-auto rounded-lg border-emerald-400">
              <div className='flex items-end'>
                <label className='block mx-auto pr-2'>Location</label>
                <input name='location' className='w-full' />
              </div>

              <div className='flex mt-5'>
                <div className='w-1/3 p-3 mx-1 my-2 rounded bg-emerald-200'>
                  <label className='block mx-auto text-center'>Minimum Customers per Hour</label>
                  <input name='minCustomersHour' type='text' className='w-full' />
                </div>

                <div className='w-1/3 p-3 mx-1 my-2 rounded bg-emerald-200'>
                  <label className='block mx-auto text-center'>Maximum Customers per Hour</label>
                  <input name='maxCustomersHour' type='text' className='w-full' />
                </div>

                <div className='w-1/3 p-3 mx-1 my-2 rounded bg-emerald-200'>
                  <label className='block mx-auto text-center'>Average Cookies per Sale</label>
                  <input name='avgCookies' type='text' className='w-full' />
                </div>

                <button className='w-1/3 mx-1 my-2 rounded bg-emerald-500 hover:bg-emerald-600' type='submit'>
                  Create
                </button>
              </div>
            </form>
    )

}