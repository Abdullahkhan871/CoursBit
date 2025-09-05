"use client";
import React from "react";

interface BtnClassName {
    padding: boolean
    color?: string,
    bg?: string,
    hover?: string,
    focus?: string,
    outline?: string,
    outlineHover?: string,
}

interface BtnProps {
    status?: boolean,
    label: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: () => void;
    className?: BtnClassName;
}

const Btn: React.FC<BtnProps> = ({
    status,
    label,
    leftIcon,
    rightIcon,
    onClick,
    className
}) => {
    return (
        <button
            onClick={onClick}
            disabled={status}
            className={`${className?.bg} ${className?.color} ${className?.padding ? "py-1 sm:py-1.5 md:py-2.5 lg:py-3 xl:py-4 px-2.5 sm:px-3 md:px-4 lg:px-5" : "p-0"} flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 xl:gap-3 rounded-full ${className?.outline} ${className?.focus} ${className?.hover} transition ease-in-out ${status ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
        >
            {leftIcon && <span className="md:text-xl xl:text-2xl">{leftIcon}</span>}
            <span className="text-xs sm:text-sm xl:text-lg font-bold">{label}</span>
            {rightIcon && <span className="md:text-xl xl:text-2xl">{rightIcon}</span>}
        </button>
    );
};

export default Btn;


//   <Btn label={"sign up"} leftIcon={<User weight="bold" />} rightIcon={<ArrowRight weight="bold" />} className={{ bg: "bg-gray-500", color: "text-white", padding: true, hover: "hover:bg-blue-800", focus: "focus:outline-2 focus:outline-blue-900", outline: "outline-1 outline-black" }} />