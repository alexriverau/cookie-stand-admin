import {hours} from '@/data';

export default function ReportTable({stands, deleteStand}) {

    const hour_idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    function getColSum(hourly_sales, colIdx) {
        let colTotal = 0;
        for (let i = 0; i < hourly_sales.length; i++) {
            colTotal += hourly_sales[i][colIdx]
        }
        return colTotal
    }

    function getTotalSum() {
        let totalTotal = 0;
        for (let i = 0; i < hour_idx.length; i++) {
            let hourlyTotal = 0;
            for (let j = 0; j < stands.length; j++) {
                hourlyTotal += stands[j].hourly_sales[i];
            }
            totalTotal += hourlyTotal
        }
        return totalTotal
    }


    if (stands.length == 0) {
        return (
            <h2 className='w-8/12 mx-auto mt-5 text-2xl font-medium text-center'>No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className='w-3/4 p-6 mx-auto my-10 bg-emerald-200 border-2 border-emerald-400 rounded-xl'>
                <thead>
                <tr>
                    <th className='bg-emerald-400 border border-emerald-500'>Location</th>
                    {hours.map(hour => <th key={hour} className='bg-emerald-400 border border-emerald-500'>{hour}</th>)}
                    <th className='bg-emerald-400'>Totals</th>
                </tr>
                </thead>
                <tbody>
                {stands.map((stand) => (
                    <CookieStandRow key={stand.id} report={stand} deleteStand={deleteStand}/>
                ))}
                <tr>
                    <td className='font-bold text-center bg-emerald-400 border border-emerald-500'>Totals</td>
                    {hours.map((hour, idx) => <td key={hour}
                                                  className='font-bold text-center bg-emerald-400 border border-emerald-500'>{getColSum(stands.map(location => location.hourly_sales), idx)}</td>)}
                    <td className="font-bold text-center bg-emerald-400 border border-emerald-500">{getTotalSum()}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

function CookieStandRow({report, deleteStand}) {

    function handleDelete() {
        deleteStand(report.id);
    }

    if (report.hourly_sales.length == 0) {
        report.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <>
            <tr>
                <td className='flex justify-between p-2 pl-4 font-medium text-center bg-emerald-200 border border-emerald-500'>{report.location}
                    <div className='pr-2'>
                        <button onClick={handleDelete}>
                            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 stroke-red-400' fill='none'
                                 viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'/>
                            </svg>
                        </button>
                    </div>
                </td>
                {report.hourly_sales.map((slot, index) => <td key={index}
                                                              className='text-center bg-emerald-200 border border-emerald-500'>{slot}</td>)}
                <td className='font-medium text-center bg-emerald-200 border border-emerald-500'>{report.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
            </tr>
        </>
    );
}
