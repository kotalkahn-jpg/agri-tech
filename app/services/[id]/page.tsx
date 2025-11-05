    "use client"

    import { getServiceById, Service } from "@/lib/services";
    import { useParams } from "next/navigation";
    import { useCallback, useEffect, useState } from "react";
    import { ServiceDetail } from "../../../components/ServiceDetail"

    export const ServiceDescriptionPage = ()=>{
        const {id} = useParams()
        const [service, setService] = useState<Service>()

        const onGetService = useCallback(async()=>{
            if(!id) return;
            const myService = await getServiceById(id as string)
            setService(myService)
        },[id])

        useEffect(()=>{
            onGetService()
        },[id])
        return(
            <div className="flex">
                <ServiceDetail service={service}/>
            </div>
        )
    }


    export default ServiceDescriptionPage;