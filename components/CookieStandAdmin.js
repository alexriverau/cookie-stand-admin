import Header from '@/components/Header'
import CreateForm from '@/components/CreateForm'
import ReportTable from '@/components/ReportTable'
import Footer from '@/components/Footer'
import useResource from "@/hooks/useResource";

export default function CookieStandAdmin() {
    const {resources, deleteResource} = useResource()
    const standCount = resources ? resources.length : 0;

    return (
        <div>

            <Header/>

            <main>
                <CreateForm/>
                <ReportTable stands={resources || []} deleteStand={deleteResource}/>
            </main>


            <Footer locationsCount={standCount}/>
        </div>
    )
}
