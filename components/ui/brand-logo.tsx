import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative h-14 w-44 sm:h-16 sm:w-52", className)}>
      <Image
        src={siteConfig.brand.logoSrc}
        alt={siteConfig.brand.logoAlt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 224px, 176px"
        className={cn("object-contain", imageClassName)}
      />
    </div>
  );
}
