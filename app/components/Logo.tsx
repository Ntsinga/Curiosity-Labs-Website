import { LogoText } from "./LogoText";
import { QuestionMark } from "./QuestionMark";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: "sm" | "md" | "lg";
  showSlogan?: boolean;
  className?: string;
}

export function Logo({
  size = 220,
  showText = true,
  textSize = "lg",
  showSlogan = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <QuestionMark size={size} />
      {showText && (
        <LogoText size={textSize} showSlogan={showSlogan} className="-mt-1" />
      )}
    </div>
  );
}
