"use client";

const dummyData = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  number: "Help Line Number",
  description: "Description"
}));

export function HelplineTable() {
  return (
    <div className="w-full flex justify-center px-4 md:px-16 lg:px-10 pb-8 md:pb-32 relative z-10">
      <table className="w-full max-md:max-w-[346px] mx-auto md:mx-0 border-collapse border border-[#161616]/30">
        <thead>
          <tr className="bg-[#161616] text-white text-left">
            <th 
              className="p-3 md:p-6 font-normal border border-[#161616] w-1/2 text-[16px] md:text-[18px]"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              }}
            >
              Help Line Number
            </th>
            <th 
              className="p-3 md:p-6 font-normal border border-[#161616] w-1/2 text-[16px] md:text-[18px]"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row) => (
            <tr key={row.id} className="text-[#161616]">
              <td 
                className="p-3 md:px-6 md:py-5 border border-[#161616]/30 text-[14px] md:text-[16px]"
                style={{
                  fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                }}
              >
                {row.number}
              </td>
              <td 
                className="p-3 md:px-6 md:py-5 border border-[#161616]/30 text-[14px] md:text-[16px]"
                style={{
                  fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
