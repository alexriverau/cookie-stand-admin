import { hours } from "@/data";

export default function ReportTable( { stands } ) {
    if (stands && stands.length == 0) {
        return (
            <h2 className="w-8/12 mx-auto mt-5 text-2xl font-medium text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className="w-8/12 px-3 pb-2 mx-auto my-5 rounded text-sm bg-emerald-400">
                <thead>
                    <tr>
                        <th>Location</th>
                        {hours.map(hour => <th key={ hour } className='text-bold'>{ hour }</th>)}
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='font-bold text-center border border-gray-500'>Totals</td>
                        {hours.map(hour => <td key={ hour } className='font-bold text-center border border-gray-500'>N/A</td>)}
                        <td className='font-bold text-center border border-gray-500'>N/A</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}