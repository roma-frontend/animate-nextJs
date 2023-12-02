"use client";

import {Loader2} from "lucide-react";

export const Icons = {
    spinner: Loader2,
};

const Loader = () => {
    return (
        <div
            className="fixed top-0 left-0 flex justify-center items-center z-[100000] bg-black opacity-40 backdrop-blur-[35px] w-full h-full">
            <Icons.spinner className="h-12 w-12 animate-spin text-blue-400"/>
        </div>
    );
};

export default Loader;
