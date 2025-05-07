export const Support = () => {
    return (
      <div className="flex flex-wrap justify-center gap-8 py-12 px-6">
        {/* Get in Touch Card */}
        <div className="bg-slate-800 text-white w-full md:w-[24%] rounded-xl p-6 text-center space-y-4 shadow-lg">
          <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
          <p className="text-2xl font-medium">Talk to our support team</p>
          <p>
            Got a question about Book my Rajshree? Get in touch with our friendly staff.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700">
              Chat with us
            </button>
            <button className="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700">
              Email us
            </button>
          </div>
        </div>
  
        {/* FAQs Card */}
        <div className="bg-cyan-400 text-white w-full md:w-[24%] rounded-xl p-6 text-center space-y-4 shadow-lg">
          <h2 className="text-3xl font-semibold text-black">FAQs</h2>
          <p className="text-2xl font-medium">Our guide to Book my Rajshree</p>
          <p>
            Check out our FAQs to see if we can help you out. Otherwise, we're always happy to chat
          </p>
          <div className="pt-4">
            <button className="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700">
              FAQs and Help
            </button>
          </div>
        </div>
      </div>
    );
  };
  