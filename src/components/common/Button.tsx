"use client";

import { useRouter } from "next/navigation";

const Button = ({ children, href, ...props }: any) => {
    const router = useRouter();

    return (
        <button
            type="button"
            className={`bg-red-500 text-white font-medium py-2 px-4 hover:bg-red-700 ${props.className}`}
            {...props}
            onClick={() => router.push(href || "/")}
        >
            {children}
        </button>
    );
};

export default Button;
