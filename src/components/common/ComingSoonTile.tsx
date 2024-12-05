import React from "react";

interface ComingSoonTileProps {
    topic: string;
}

function ComingSoonTile({ topic }: ComingSoonTileProps) {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="bg-white w-4/5 flex mt-4 shadow-lg">
                <div className="grow p-4 text-black text-left">
                    <p className="font-bold text-medium">{"Keynote Topic"}</p>
                    <p className="text-gray-800 bold">
                        {`${topic} `}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ComingSoonTile;