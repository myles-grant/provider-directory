import React, { useEffect, useState } from "react";
import { useParams, redirect } from "react-router";
import { fetchProvider } from "../../scripts/api"
import { Provider } from "../../interfaces/provider";
import { Card } from "../../components/library/organism/card";
import { LoadingSpinner } from "../../components/library/molecules/loading-spinner";
import { Body } from "../../components/library/atoms/text/body";
import { Image } from "../../components/library/atoms/image";
import { Button } from "../../components/library/atoms/button/button";
import { CollapseView } from "../../components/library/molecules/collapse-view";
import { Label } from "../../components/library/atoms/text/label";
import { useLoaderData, useNavigation } from "react-router-dom";


export const loader = async ({ params }: any) => {
    return await fetchProvider(params.profileId)
}

export default function ProfilePage() {

    const nav = useNavigation()
    const profileDetails = useLoaderData() as Provider;
    const [isLoading, setIsLoading] = useState(nav.state === "loading")

    useEffect(() => {
        if (nav.state !== "loading") {
            setIsLoading(false)
        }
    }, [nav.state])

    return (
        <div>
            {
                isLoading ? (
                    <div className="flex justify-center bg-neutral-300 w-full h-screen">
                        <LoadingSpinner className={"my-3"} />
                    </div>
                ) : (
                    <div className="flex justify-center bg-neutral-300 w-full h-screen">
                        <div className="flex flex-row w-1/2 max-w-screen-lg mt-5">
                            <div className={"mr-3"}>
                                <Image
                                    style={{
                                        width: "400px"
                                    }}
                                    src={profileDetails?.avatarUrl as any} />
                            </div>
                            <div>
                                <Card
                                    className="mb-1"
                                    header={{
                                        title: profileDetails?.name,
                                        subtitle: profileDetails?.title
                                    }}>
                                    <Body size="4">{profileDetails?.bio}</Body>
                                </Card>
                                <div className="bg-white p-4 mb-3 rounded">
                                    <CollapseView
                                        collapseLabel={"Read More"}
                                        expandedLabel={"Read Less"}
                                        collapseView={<div />}
                                        expandedView={(
                                            <div className="ml-2">
                                                <div className="flex flex-row mb-3">
                                                    <Image className="mr-2" src={"MapIcon"} />
                                                    <div className="flex flex-col">
                                                        <Label>Location</Label>
                                                        <Body size="4">{profileDetails?.location}</Body>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row  mb-3">
                                                    <Image className="mr-2" src={"EducationIcon"} />
                                                    <div className="flex flex-col">
                                                        <Label>Education</Label>
                                                        <Body size="4">{profileDetails?.education}</Body>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row  mb-3">
                                                    <Image className="mr-2" src={"MapIcon"} />
                                                    <div className="flex flex-col">
                                                        <Label size="4">Language</Label>
                                                        <Body size="4">{profileDetails?.languages.join(", ")}</Body>
                                                    </div>
                                                </div>
                                            </div>
                                        )} />
                                    <Button className="mt-3 w-full">Book with us</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}