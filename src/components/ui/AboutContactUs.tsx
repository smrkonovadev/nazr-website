import Image from "next/image";

export function AboutContactUs() {
  return (
    <section className="w-full bg-[#FFF1EB] pt-[60px] pb-[48px] px-4 flex flex-col items-center justify-center text-center relative -mt-[2px] border-none outline-none z-20">
      <div className="flex flex-col items-center max-w-[621px] mx-auto">
        <h2
          className="m-0 text-[#161616] uppercase"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontWeight: 400,
            fontSize: "100px",
            lineHeight: "90%",
            letterSpacing: "-0.03em",
            textAlign: "center"
          }}
        >
          JOIN THE CONVERSATION.
        </h2>

        <p
          className="text-[#161616]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginTop: "32px",
            maxWidth: "460px"
          }}
        >
          NAZR is built through conversations with the <br /> people we build for. We'd love to hear yours.
        </p>

        <button
          className="bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white rounded-[5px]"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            lineHeight: "150%",
            padding: "8px 20px",
            marginTop: "40px"
          }}
        >
          Tell us More
        </button>
      </div>
    </section>
  );
}
