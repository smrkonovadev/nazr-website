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
          className="text-[#161616]/80 text-center max-md:font-['Switzer',_sans-serif] max-md:text-[16px] max-md:font-normal max-md:leading-[140%] max-md:tracking-[-0.03em] max-md:text-center md:font-[family-name:var(--font-inter)] max-w-[841px] max-md:max-w-[370px] max-md:w-full mx-auto m-0"
          style={{
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
          }}
        >
          Behind NAZR is a team rethinking preparedness<br className="max-md:block hidden" />{" "}
          through design, culture, technology and the<br className="max-md:block hidden" />{" "}
          everyday negotiations women make with the world.<br className="max-md:block hidden" />{" "}
          The result is an ecosystem that belongs in everyday<br className="max-md:block hidden" />{" "}
          life and a movement that goes beyond them.
        </p>
      </div>
    </section>
  );
}
