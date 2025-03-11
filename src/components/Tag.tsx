import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-violet-400 gap-2 text-violet-400 px-3 py-1 rounded-full uppercase items-center cursor-pointer transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
