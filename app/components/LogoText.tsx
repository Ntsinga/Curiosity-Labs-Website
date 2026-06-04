interface LogoTextProps {
  size?: "sm" | "md" | "lg";
  showSlogan?: boolean;
  className?: string;
}

export function LogoText({
  size = "md",
  showSlogan = true,
  className = "",
}: LogoTextProps) {
  const sizeStyles = {
    sm: {
      name: "text-xs",
      labs: "text-[9px]",
      slogan: "text-[9px]",
      nameSpacing: "0.46em",
      labsSpacing: "0.72em",
      sloganSpacing: "0.46em",
      gap: "gap-0.5",
    },
    md: {
      name: "text-xl",
      labs: "text-sm",
      slogan: "text-xs",
      nameSpacing: "0.48em",
      labsSpacing: "0.82em",
      sloganSpacing: "0.62em",
      gap: "gap-1.5",
    },
    lg: {
      name: "text-3xl md:text-4xl",
      labs: "text-lg md:text-2xl",
      slogan: "text-[11px] md:text-sm",
      nameSpacing: "0.5em",
      labsSpacing: "0.9em",
      sloganSpacing: "0.68em",
      gap: "gap-2",
    },
  };

  const s = sizeStyles[size];

  return (
    <div
      className={`flex flex-col items-center ${s.gap} font-[var(--font-orbitron)] font-normal uppercase leading-none ${className}`}
    >
      <span
        className={`${s.name} text-white`}
        style={{ letterSpacing: s.nameSpacing }}
      >
        CURIOSITY
      </span>
      <span
        className={`${s.labs} text-[#7F9BFF]`}
        style={{ letterSpacing: s.labsSpacing }}
      >
        LABS
      </span>
      {showSlogan && (
        <span
          className={`${s.slogan} text-[#78D7FF] mt-2`}
          style={{ letterSpacing: s.sloganSpacing }}
        >
          WHAT IF IT&apos;S POSSIBLE?
        </span>
      )}
    </div>
  );
}
