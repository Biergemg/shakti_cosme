import { Section } from "@/components/ui/section";

export function WowSection() {
  return (
    <Section surface="contrast" className="relative overflow-hidden py-0">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(20,18,17,0.58), rgba(20,18,17,0.7)), url('/6.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative flex min-h-[58vh] items-center justify-center py-24 text-center sm:min-h-[64vh]">
        <div className="mx-auto max-w-4xl px-2">
          <p className="font-serif-display text-[2.6rem] leading-[1.02] tracking-[-0.02em] text-[#F5F3EF] sm:text-[3.6rem] lg:text-[4.8rem]">
            El momento en el que decides cuidarte también es parte del resultado.
          </p>
        </div>
      </div>
    </Section>
  );
}
