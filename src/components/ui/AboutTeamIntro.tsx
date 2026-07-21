export function AboutTeamIntro() {
  return (
    <section className="w-full bg-[#FFF1EB] pt-[36px] max-md:pb-6 md:pb-[60px] flex flex-col items-center justify-center text-center px-4 border-none outline-none">
      <div className="w-full max-w-[800px] flex flex-col items-center">
        <h2
          className="font-[family-name:var(--font-bebas)] text-[#161616] text-center"
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 8vw, 120px)",
            lineHeight: "70%",
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: "16px",
          }}
        >
          MEET THE TEAM
        </h2>
        <p
          className="text-[#161616]/80 text-center font-[family-name:var(--font-inter)] max-w-[841px] m-0"
          style={{
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
          }}
        >
          Behind NAZR is a team rethinking preparedness through design, culture, technology and the everyday negotiations women make with the world. The result is an ecosystem that belongs in everyday life and a movement that goes beyond them.
        </p>
      </div>
    </section>
  );
}
