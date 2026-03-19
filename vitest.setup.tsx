/* eslint-disable @next/next/no-img-element */
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt, src, ...props }: Record<string, unknown>) => {
    const imageSrc = typeof src === "string" ? src : "";
    const imageAlt = typeof alt === "string" ? alt : "";
    return <img alt={imageAlt} src={imageSrc} {...props} />;
  },
}));
