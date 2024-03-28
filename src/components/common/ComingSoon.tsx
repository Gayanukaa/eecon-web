import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className="w-1/2 text-center">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
                Coming Soon
            </h2>
            <p>
                Get ready for the premier Electrical Engineering conference at
                the University of Moratuwa! Discover groundbreaking research,
                network with industry experts, and explore the future of
                technology.
            </p>
            <div className="mt-2">
                <Link
                    target="blank"
                    href={"https://eesoc.lk/"}
                    className="pr-4 text-red-600"
                >
                    Official Website
                </Link>
                <Button href="/contact">Contact Info</Button>
            </div>
        </div>
    );
}
