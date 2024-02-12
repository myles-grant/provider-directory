import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/library/atoms/text/header";
import { Card } from "../../components/library/organism/card";
import { fetchProviders, fetchProvider } from "../../scripts/api"
import { Provider } from "../../interfaces/provider";
import { LoadingSpinner } from "../../components/library/molecules/loading-spinner";
import { Label } from "../../components/library/atoms/text/label";
import { List } from "../../components/library/organism/list";
import { Image } from "../../components/library/atoms/image";


export default function DirectoryPage() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [providers, setProviders] = useState<Provider[]>([])

    // Fetch Provider List
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const _providers = await fetchProviders()
            if (_providers) {
                setIsLoading(false)
                setProviders(_providers)
            }
        })()
    }, [])

    return (
        <div>
            <div className="flex justify-center">
                <header className="bg-white w-1/2 max-w-screen-lg py-10">
                    <Header>Browse Provider Directory</Header>
                    <Label size="3">Mental Wellness</Label>
                    <div className="flex justify-start mt-3">
                        <div
                            className="flex px-3 p7-5 items-center rounded-full border-2 border-neutral-300">
                            <Image className={"mr-1"} src={"LocationPinIcon"} />
                            <Label>ON</Label>
                        </div>
                    </div>
                </header>
            </div>
            {
                isLoading ? (
                    <div className="flex justify-center bg-neutral-300 w-full h-screen">
                        <LoadingSpinner className={"my-3"} />
                    </div>
                ) : (
                    <div className="flex justify-center bg-neutral-300 w-full">
                        <div className="w-1/2 max-w-screen-lg">
                            <div className={"my-3"}>
                                <Label size="3"><b>{providers.length}</b> providers in Ontario</Label>
                            </div>
                            <List
                                items={providers}
                                render={({ id, name, title, bio, availabilty, avatarUrl }) => (
                                    <Card
                                        header={{
                                            title: name,
                                            subtitle: title,
                                            image: avatarUrl
                                        }}
                                        body={{
                                            message: bio
                                        }}
                                        footer={{
                                            message: availabilty
                                        }}
                                        onClick={() => {
                                            navigate(`${id}`)
                                        }} />

                                )} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}