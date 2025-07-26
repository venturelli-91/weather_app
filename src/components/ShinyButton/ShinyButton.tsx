import React from "react";

interface ShinyButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
	children,
	onClick,
	className = "",
	disabled = false,
	type = "button",
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-green-400
        via-green-500
        to-green-600
        px-8
        py-3
        font-bold
        text-sm
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:from-green-500
        hover:via-green-600
        hover:to-green-700
        hover:shadow-xl
        hover:scale-105
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/20
        before:to-transparent
        before:translate-x-[-100%]
        before:transition-transform
        before:duration-1000
        hover:before:translate-x-[100%]
        ${className}
      `}>
			<span className="relative z-10">{children}</span>
		</button>
	);
};

export default ShinyButton;
