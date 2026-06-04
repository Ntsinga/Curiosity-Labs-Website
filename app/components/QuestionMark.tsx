import Image from "next/image";

interface QuestionMarkProps {
  size?: number;
  className?: string;
}

const MARK_ASPECT_RATIO = 722 / 513;

export function QuestionMark({
  size = 280,
  className = "",
}: QuestionMarkProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: size, height: size * MARK_ASPECT_RATIO }}
      aria-label="Curiosity Labs question mark logo"
      role="img"
    >
      <Image
        src="/logo-mark-tight.png"
        alt=""
        width={513}
        height={722}
        className="absolute left-0 top-0 h-full w-full select-none"
        priority
        quality={100}
        unoptimized
      />
    </div>
  );
}
