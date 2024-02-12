import React from "react";
import { Header } from "../../components/library/atoms/text/header";
import { Body } from "../../components/library/atoms/text/body";
import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-9">
            <Header>Uh Oh!</Header>
            <Body>We could not process the request</Body>
            <Link  to={"/provider"}>Go to provider directory</Link>
        </div>
    )
}