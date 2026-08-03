export function JoinConversation() {
  return (
    <section className="w-full bg-transparent flex flex-col items-center justify-center pt-0 pb-8 md:pt-0 md:pb-12 px-4 relative z-20">
      <div className="relative z-10 flex flex-col items-center max-w-[800px] mx-auto text-center">
        <h2
          className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-center uppercase max-md:max-w-[336px] max-md:mx-auto max-[380px]:text-[32px] text-[48px] md:text-[80px] leading-[90%] tracking-[-0.03em]"
        >
          JOIN THE CONVERSATION.
        </h2>

        <p
          className="font-['Inter',_sans-serif] font-normal text-[#161616] text-center mt-[12px] max-md:max-w-[336px] max-md:mx-auto text-[18px] leading-[140%] tracking-[-0.03em] max-w-[600px]"
        >
          NAZR is built through conversations with the people we build for. We'd love to hear yours.
        </p>

        <button
          className="max-md:mt-[16px] md:mt-[24px] bg-[#FF0E97] text-white font-['Roboto',_sans-serif] font-normal text-[16px] leading-[150%] tracking-normal w-[127px] h-[40px] px-[20px] py-[8px] rounded-[4px] border border-[#FF0E97] flex items-center justify-center gap-[8px] mx-auto cursor-default whitespace-nowrap"
          style={{ opacity: 1 }}
        >
          <span
            className="w-[87px] h-[24px] flex items-center justify-center font-['Roboto',_sans-serif] font-normal text-[16px] leading-[150%] tracking-normal whitespace-nowrap"
            style={{ opacity: 1 }}
          >
            Tell us More
          </span>
        </button>
      </div>
    </section>
  );
}
