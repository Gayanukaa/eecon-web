"use client";

import { useRouter } from "next/navigation";

const ActionButton = ({ children, ...props }: any) => {
    const router = useRouter();

    return (
        <button
            type="button"
            className={`${props.className} m-2 bg-red-500 text-white text-sm font-medium py-1 px-2 hover:bg-red-700 border-0 rounded-none focus:outline-none`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ActionButton;
