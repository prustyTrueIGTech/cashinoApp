import React, { useEffect, useState } from "react";
import thirtyLacks from "../assets/png/girl7.png"; // Image import
import { addTicket, removeALP } from "../redux/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
import leftArrow from "../assets/png/leftArrow.png";
import {SixtyLacksInfo} from "../Info/SixtyLacksInfo"
import { Info_Button } from "../constants";
import Dialog from "../components/ui/dialog";

export const SixtyLack = () => {
  const bunch1Tickets = [
    "A/01108",
    "A/01113",
    "A/01121",
    "A/01123",
    "A/01124",
    "A/01126",
    "A/01127",
    "A/01128",
    "A/01132",
    "A/01134",
    "A/01135",
    "A/01136",
    "A/01137",
    "A/01138",
    "A/01139",
    "A/01140",
    "A/01141",
    "A/01142",
    "A/01143",
    "A/01144",
  ];

  const bunch5Tickets = [
    "A-E/29001",
    "A-E/29002",
    "A-E/29003",
    "A-E/29004",
    "A-E/29005",
    "A-E/29006",
    "A-E/29007",
    "A-E/29008",
    "A-E/29009",
    "A-E/47080",
    "A-E/47081",
    "A-E/47082",
    "A-E/47083",
    "A-E/47084",
    "A-E/47085",
    "A-E/47086",
    "A-E/47087",
    "A-E/47088",
    "A-E/47089",
    "A-E/47090",
    "A-E/47091",
    "A-E/47092",
    "A-E/47093",
    "A-E/47094",
    "A-E/47095",
    "A-E/47096",
    "A-E/47097",
  ];

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedBunch, setSelectedBunch] = useState(1);
  const [bunchLpValues, setBunchLpValues] = useState({ 1: 0, 5: 0 });
  const [bunchLpClicked, setBunchLpClicked] = useState({ 1: false, 5: false });
  const [visibleCount, setVisibleCount] = useState(15);
  const tickets = selectedBunch === 1 ? bunch1Tickets : bunch5Tickets;
  const dispatch = useDispatch();

  const lpValue = bunchLpValues[selectedBunch] || 0;
  const isLpClicked = bunchLpClicked[selectedBunch] || false;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const selectedTickets = useSelector((state) => state.ticket.selectedTickets);
  const infoBtn = Info_Button.find((b) => b.name === "Info");

  function getTodaysDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function addToCart(ticket) {
    dispatch(
      addTicket({
        type: "ticket",
        value: ticket,
        amount: 50,
      })
    );
  }

  function removeALPFromCart() {
    dispatch(removeALP(selectedBunch));
  }

  function totalAmount() {
    return selectedTickets.reduce((sum, ticket) => sum + ticket.amount, 0);
  }

   const handleButtonClick = (btn) => {
      setActiveButton(btn);
      setDialogOpen(true);
    };
  
    const handleClose = () => {
      setDialogOpen(false);
      setActiveButton(null);
    };
  
    const renderDialogContent = () => {
      if (activeButton?.name === "Info")
        return <SixtyLacksInfo onClose={handleClose} />;
      return null;
    };
  useEffect(() => {
    const drawTime = new Date("2025-06-06T20:30:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = drawTime - now;
      if (distance < 0) return clearInterval(interval);
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShowMore = () => setVisibleCount((prev) => prev + 5);

  return (
    <div className="w-full mx-auto p-6 font-sans overflow-x-hidden mt-11">
      {/* Banner */}
      <div className="mb-10">
        <img
          src={thirtyLacks}
          alt="Thirty Lacks Banner"
          className="w-full h-[400px] sm:h-[560px] mx-auto object-fill"
        />
      </div>

      {/* Back Button below banner */}
      <div className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200"
        >
          <img src={leftArrow} alt="Back" className="object-cover" />
        </button>
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-x-10">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
            <div>
              <h1 className="text-xl font-bold">TrueiGTech 30 Weekly</h1>
              <p className="text-lg font-medium mt-1">
                Ticket Price <span className="font-bold text-xl">₹50</span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-lg">
                <span>
                  Draw Date : <strong>06/05/2025</strong>
                </span>
                <span>
                  Draw Time : <strong>8:30 PM</strong>
                </span>
              </div>
            </div>
            <button
              className={infoBtn.className}
              onClick={() => handleButtonClick(infoBtn)}
            >
              {infoBtn.name}
            </button>
          </div>

          {/* Bunch Selector */}
          <div className="mb-4">
            <h2 className="text-md font-semibold mb-2">Select Bunch</h2>
            <div className="flex gap-3">
              {[1, 5].map((bunch) => (
                <button
                  key={bunch}
                  className={`w-16 py-2 rounded-full ${
                    selectedBunch === bunch
                      ? "bg-black text-white"
                      : "border border-gray-400"
                  }`}
                  onClick={() => {
                    setSelectedBunch(bunch);
                    setVisibleCount(15);
                  }}
                >
                  {bunch}
                </button>
              ))}
            </div>
          </div>

          {/* LP Add Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mb-4">
              <h2 className="text-md font-semibold">Select Ticket Number</h2>
              {!isLpClicked && (
                <button
                  onClick={() => {
                    setBunchLpClicked((prev) => ({
                      ...prev,
                      [selectedBunch]: true,
                    }));
                  }}
                  className="bg-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-md"
                >
                  ADD LP
                </button>
              )}

              {isLpClicked && (
                <div className="flex gap-4">
                  <button
                    className="bg-red-700 rounded-l-full px-2 text-white hover:bg-black"
                    onClick={() => {
                      if (lpValue === 1) {
                        setBunchLpClicked((prev) => ({
                          ...prev,
                          [selectedBunch]: false,
                        }));
                      }
                      setBunchLpValues((prev) => ({
                        ...prev,
                        [selectedBunch]: Math.max(lpValue - 1, 0),
                      }));
                      removeALPFromCart();
                    }}
                  >
                    -
                  </button>
                  {lpValue}
                  <button
                    className="bg-red-700 rounded-r-full px-2 text-white hover:bg-black"
                    onClick={() => {
                      const newValue = lpValue + 1;
                      setBunchLpValues((prev) => ({
                        ...prev,
                        [selectedBunch]: newValue,
                      }));
                      dispatch(
                        addTicket({
                          type: "LP",
                          value: selectedBunch,
                          amount: 50 * selectedBunch,
                        })
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>

            {/* Ticket Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tickets.slice(0, visibleCount).map((ticket, idx) => (
                <button
                  onClick={() => addToCart(ticket)}
                  key={idx}
                  className="border-2 border-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-100 text-center whitespace-nowrap w-full sm:w-auto"
                >
                  {ticket}
                </button>
              ))}
            </div>

            {visibleCount < tickets.length && (
              <div
                className="flex items-center justify-center mt-4 text-lg font-medium text-red-600 gap-2 cursor-pointer"
                onClick={handleShowMore}
              >
                <span>More</span>
                <span className="rotate-180">⬇️</span>
              </div>
            )}
          </div>

          {/* Additional Draw */}
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2">Add Another Draw</h3>
            <button className="bg-black text-white px-6 py-2 rounded-full text-md">
              15/05/2025
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gray-800 text-white px-10 py-3 rounded-full w-full sm:w-auto">
              🛒 Add to Cart
            </button>
            <button className="bg-red-700 text-white px-20 py-3 rounded-full w-full sm:w-auto">
              🚀 Buy
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2">
          <div className="text-center w-full">
            <p className="font-semibold text-lg">Sale closes in</p>
            <div className="flex justify-center flex-wrap gap-4 mt-2">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div
                  key={key}
                  className="w-12 h-16 border-4 border-gray-700 rounded-full flex flex-col items-center justify-center bg-white text-black"
                >
                  <span className="text-lg font-bold">
                    {value < 10 ? `0${value}` : value}
                  </span>
                  <span className="text-xs">{key.charAt(0).toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Ticket Table */}
          <div className="border-2 border-black rounded-xl p-4 mt-8 w-full overflow-x-auto">
            <table className="table-auto w-full text-center border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="px-2 py-2 border-r border-black">Date</th>
                  <th className="px-2 py-2 border-r border-black">Bunch</th>
                  <th className="px-2 py-2 border-r border-black">Qty</th>
                  <th className="px-2 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const grouped = {};
                  selectedTickets.forEach((item) => {
                    const isLP = item.type === "LP";
                    const key = isLP
                      ? `LP_${item.value}`
                      : `Ticket_${item.value}`;
                    if (!grouped[key]) {
                      grouped[key] = {
                        type: item.type,
                        label: isLP ? `${item.value}(LP)` : item.value,
                        qty: 1,
                        amount: item.amount,
                      };
                    } else {
                      grouped[key].qty += 1;
                      grouped[key].amount += item.amount;
                    }
                  });

                  return Object.values(grouped).map((entry, idx) => (
                    <tr key={idx} className="border-b border-gray-400">
                      <td className="border-r border-black py-2">
                        {idx === 0 ? getTodaysDate() : ""}
                      </td>
                      <td className="border-r border-black py-2 font-semibold">
                        {entry.label}
                      </td>
                      <td className="border-r border-black py-2">
                        <span className="border border-black rounded-full px-2 py-1 inline-block">
                          {entry.qty}
                        </span>
                      </td>
                      <td className="py-2 font-medium">₹{entry.amount}</td>
                    </tr>
                  ));
                })()}
                <tr className="border-t-2 border-black">
                  <td colSpan="3" className="font-bold text-left py-2">
                    SubTotal
                  </td>
                  <td className="font-bold py-2">₹{totalAmount()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
            {isDialogOpen && (
              <Dialog
                isOpen={isDialogOpen}
                onClose={handleClose}
                width="w-[70%]" // Responsive width
                height="h-[90%]"
              >
                {renderDialogContent()}
              </Dialog>
            )}
    </div>
  );
};
