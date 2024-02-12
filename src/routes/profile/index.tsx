import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProviders, fetchProvider } from "../../scripts/api"
import { Provider } from "../../interfaces/provider";


export default function ProfilePage() {

    const params = useParams();
    const [profileDetails, setProfileDetails] = useState<Provider>()

    useEffect(() => {

    }, [params])

    return (
        <>
        </> 
    )
}