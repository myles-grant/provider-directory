import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { LoadingSpinner } from "../components/library/molecules/loading-spinner";

export default function RootPage() {
    const navigation = useNavigation()
    return (
        <>
            <Outlet />
            {
                navigation.state === "loading" ? (
                    <div className="absolute top-0 w-screen h-screen flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <div className="absolute p-6 bg-white rounded">
                            <LoadingSpinner />
                        </div>
                    </div>
                ) : <></>
            }
        </>
    )
}