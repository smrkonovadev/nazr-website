"use client";

export function OneTapSOSSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-16 pb-32 pt-16 md:pt-24">

      {/* Heading */}
      <h2
        className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] max-[380px]:text-[32px] text-[40px] md:text-[160px] max-[380px]:w-full max-md:w-[346px] max-md:mx-auto"
        style={{
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: '90%',
          letterSpacing: '-0.03em',
          textAlign: 'center',
        }}
      >
        ONE TAP SOS
      </h2>

      {/* Paragraph */}
      <p
        className="mt-4 md:mt-[2px] text-[#161616] max-w-4xl text-[12px] md:text-[20px] max-[380px]:w-full max-md:w-[346px] max-md:mx-auto"
        style={{
          fontFamily: 'Switzer, var(--font-geist-sans), sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: '140%',
          letterSpacing: '-0.03em',
          textAlign: 'center',
        }}
      >
        Emergencies don't give you time to think. One tap and Nazr handles everything: location locked, Trusted Circle alerted, help in motion. All of it, before you've had a second to process.      </p>

    </div>
  );
}
