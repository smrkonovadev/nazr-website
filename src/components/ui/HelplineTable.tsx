"use client";

const helplineData = [
  { id: 1, number: "7827170170", description: "National Commission for Women Helpline" },
  { id: 2, number: "10920", description: "Shakti Shalini Helpline" },
  { id: 3, number: "011-24619821", description: "Sakhi Women's Helpline" },
  { id: 4, number: "181", description: "Domestic Violence Helpline" },
  { id: 5, number: "1800-2000-737", description: "Rape Crisis Helpline" },
  { id: 6, number: "181", description: "Women Helpline Number" },
  { id: 7, number: "14678", description: "SUBHADRA Yojana" }
];

export function HelplineTable() {
  return (
    <div className="w-full flex justify-center px-3 sm:px-4 md:px-[40px] pb-0 relative z-10 overflow-x-auto">
      <table className="w-full max-w-full mx-auto md:mx-0 border-collapse border border-[#161616]/30">
        <thead>
          <tr className="bg-[#161616] text-white text-left">
            <th 
              className="p-2.5 sm:p-3 md:p-6 font-normal border border-[#161616] w-[40%] md:w-1/2 text-[14px] sm:text-[16px] md:text-[18px]"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              }}
            >
              Help Line Number
            </th>
            <th 
              className="p-2.5 sm:p-3 md:p-6 font-normal border border-[#161616] w-[60%] md:w-1/2 text-[14px] sm:text-[16px] md:text-[18px]"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {helplineData.map((row) => (
            <tr key={row.id} className="text-[#161616]">
              <td 
                className="p-2.5 sm:p-3 md:px-6 md:py-5 border border-[#161616]/30 text-[13px] sm:text-[14px] md:text-[16px] font-bold break-all sm:break-normal"
                style={{
                  fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                }}
              >
                <a href={`tel:${row.number.replace(/\s+/g, '')}`} className="hover:underline text-black">
                  {row.number}
                </a>
              </td>
              <td 
                className="p-2.5 sm:p-3 md:px-6 md:py-5 border border-[#161616]/30 text-[13px] sm:text-[14px] md:text-[16px]"
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
