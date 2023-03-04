import { hours } from '@/data';

export default function ReportTable(props) {
  const { cookieStandsList } = props;
  const hours_idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let total = 0;

  function rowTotal(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    total += sum;
    return sum;
  }

  function colTotal(idx) {
    let sum = 0;
    for (let stand of cookieStandsList) {
      sum += stand.hourly_sales[idx];
    }
    return total;
  }

  if (cookieStandsList.length === 0) {
    return (
      <h2 className='p-6 mt-6 text-2xl text-gray-600 relative flex items-center justify-center'>
        No Cookie Stands Available
      </h2>
    );
  } else {
    return (
      <table className='w-8/12 px-3 pb-2 mx-auto my-5 rounded text-sm bg-emerald-400'>
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((item) => (
              <th key={item}>{item}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {cookieStandsList.map((cookieStand) => (
            <tr
              className='w-8/12 px-3 pb-2 mx-auto my-5 rounded text-sm bg-emerald-400'
              key={cookieStand.id}
            >
              <td className='text-center text-sm border border-gray-400 bg-emerald-300'>
                {cookieStand.location}
              </td>
              {cookieStand.hourly_sales.map((hour) => (
                <td
                  className='text-center text-sm border border-gray-400 bg-emerald-300'
                  key={hour}
                >
                  {hour}
                </td>
              ))}
              <td className='text-center text-sm border border-gray-400 bg-emerald-300'>
                {rowTotal(cookieStand.hourly_sales)}
              </td>
            </tr>
          ))}
          <tr>
            <td className='font-bold text-center border border-gray-400'>
              Totals
            </td>
            {hours_idx.map((idx) => (
              <td key={idx}>{colTotal(idx)}</td>
            ))}
            <td className='font-bold text-center border border-gray-400'>
              {total}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
