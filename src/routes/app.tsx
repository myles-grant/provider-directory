import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../components/library/atoms/button/button";

export default function RootPage() {
    return (
        <>
            <Outlet />
        </>
    )
}