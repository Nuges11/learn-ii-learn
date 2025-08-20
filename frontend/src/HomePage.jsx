import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-f316e2b8753e?auto=format&fit=crop&w=1400&q=60')" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating equal opportunities through quality education
          </h1>
          <div className="space-x-4">
            <button className="bg-white text-green-800 px-6 py-3 rounded-full">
              Get Started
            </button>
            <button className="bg-green-700 px-6 py-3 rounded-full text-white">
              Become a Tutor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
