import { result_Number } from "../constants";
import Logo from "../assets/png/logo.png";

export const OneCrInfo = () => {
  return (
    <div className="max-w-full sm:max-w-3xl mx-auto px-4 py-4 bg-white text-black font-sans text-sm">
      {/* Logo */}
      <img src={Logo} className="w-auto h-12 mx-auto mb-4" alt="Logo" />

      {/* Title */}
      <h2 className="text-lg sm:text-2xl font-bold text-center mb-4 underline decoration-dashed decoration-2 decoration-red-500">
        HOW TO PLAY?
      </h2>

      {/* Description */}
      <p className="mb-6 text-justify text-xs sm:text-sm md:text-base">
        Each ticket you buy will have a unique set of four letters (A-Z) and six
        numbers (0-9). The scheme will have 5,00,000 (Five Lakh) tickets in
        total. You can win something like A/C/E, or full matching numbers
        (000000 to 999999) to win top or many other prizes as per the table
        below.
      </p>

      {/* Result Number */}
      <div className="bg-orange-600 text-white text-center font-bold px-2 rounded-full mx-auto mb-4 w-full sm:w-3/4 h-[42px] text-[10px] md:w-1/2 h-[42px]">
        {result_Number}
      </div>
 
      {/* Prize Table */}
      <div className="overflow-x-auto mb-8 bg-yellow-400 p-2 rounded-md">
        <table className="table-auto w-full text-xs sm:text-sm border border-gray-300 text-center border-separate">
          <thead>
            <tr className="bg-orange-500 text-white text-xs sm:text-sm md:text-base font-bold">
              <th className="border px-2 sm:px-3 py-2">Prizes</th>
              <th className="border px-2 sm:px-3 py-2">No. of Results</th>
              <th className="border px-2 sm:px-3 py-2">Demo Ticket No.</th>
              <th className="border px-2 sm:px-3 py-2">&</th>
              <th className="border px-2 sm:px-3 py-2">How to Match?</th>
            </tr>
          </thead>
          <tbody className="bg-[#5c2d91] text-white font-medium">
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                1st Prize ₹100,00,000
                <br />
                (No. of Prizes: 01)
              </td>
              <td className="border px-2 sm:px-3 py-2">01</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">5 digits with series</td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                Cons. Prize ₹50,000,00
                <br />
                (No. of Prizes: 04)
              </td>
              <td className="border px-2 sm:px-3 py-2">01</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">
                All remaining series of 1st prize winning number
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                2nd Prize ₹1,00,000
                <br />
                (No. of Prizes: 50)
              </td>
              <td className="border px-2 sm:px-3 py-2">10</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">
                5 digits without series
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                3rd Prize ₹9,000
                <br />
                (No. of Prizes: 500)
              </td>
              <td className="border px-2 sm:px-3 py-2">10</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">
                Last 4 digits without series
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                4th Prize ₹5,000
                <br />
                (No. of Prizes: 500)
              </td>
              <td className="border px-2 sm:px-3 py-2">10</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">
                Last 4 digits without series
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-3 py-2">
                5th Prize ₹2,000
                <br />
                (No. of Prizes: 1,000)
              </td>
              <td className="border px-2 sm:px-3 py-2">20</td>
              <td className="border px-2 sm:px-3 py-2">A-99684</td>
              <td className="border px-2 sm:px-3 py-2">-</td>
              <td className="border px-2 sm:px-3 py-2">
                Last 4 digits without series
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Points */}
      <div className="pb-8">
        <h3 className="text-md sm:text-lg font-semibold mb-3 flex justify-center items-center underline decoration-dashed decoration-2 decoration-red-500">
          Key Points
        </h3>
        <ul className="list-disc list-inside space-y-2 text-justify text-xs sm:text-sm md:text-base">
          <li>
            All the prizes are winning above ₹10,000/- are subject to government
            tax.
          </li>
          <li>
            Tickets can be bought online or from authorized resellers only.
          </li>
          <li>
            Winners must claim the prize within 30 days from the draw date.
          </li>
          <li>
            Claim forms can be submitted online or by post to the official
            address.
          </li>
          <li>
            Provide original ticket and valid ID proof at the time of claiming.
          </li>
          <li>
            Do not fold, tear or write on the ticket; damaged tickets are not
            valid.
          </li>
          <li>All disputes subject to jurisdiction of Goa courts.</li>
        </ul>
      </div>

    </div>
  );
};
