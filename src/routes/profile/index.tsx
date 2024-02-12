import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProviders, fetchProvider } from "../../scripts/api"
import { Provider } from "../../interfaces/provider";
import { Card } from "../../components/library/organism/card";
import { LoadingSpinner } from "../../components/library/molecules/LoadingSpinner";
import { Body } from "../../components/library/atoms/text/body";
import { Image } from "../../components/library/atoms/image";
import { Button } from "../../components/library/atoms/button/button";


export default function ProfilePage() {

    const params = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [profileDetails, setProfileDetails] = useState<Provider>()

    useEffect(() => {

        (async () => {
            if (params && params.profileId) {
                const details = await fetchProvider(params.profileId)
                setProfileDetails(details)
            }
        })()
    }, [params, params.profileId])

    return (
        <div>
            {
                isLoading ? (
                    <div className="flex justify-center bg-neutral-300 w-full h-screen">
                        <LoadingSpinner className={"my-3"} />
                    </div>
                ) : (
                    <div className="flex justify-center bg-neutral-300 w-full h-screen">
                        <div className="flex flex-row w-1/2 max-w-screen-lg">
                            <div className={"mr-3"}>
                                <Image
                                    style={{
                                        width: "400px"
                                    }}
                                    src={profileDetails?.avatarUrl as any} />
                            </div>
                            <div>
                                <Card
                                    header={{
                                        title: profileDetails?.name,
                                        subtitle: profileDetails?.title
                                    }}>
                                    <Body size="4">{profileDetails?.bio}</Body>
                                </Card>
                                <Button>Book with us</Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}