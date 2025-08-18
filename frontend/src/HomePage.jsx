import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/african_students.jpg')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating equal opportunities through quality education
          </h1>
          <div className="space-x-4">
            <button className="bg-white text-green-800 px-6 py-3 rounded-full">Get Started</button>
            <button className="bg-green-700 px-6 py-3 rounded-full text-white">Become a Tutor</button>
          </div>
        </div>
      </section>
    </div>
  );
};
      {/* About Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">About Learn ii Learn</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Learn ii Learn is a platform committed to removing barriers and providing quality education,
          mentorship, and practical learning opportunities to everyone — for free.
        </p>
      </section>
export default HomePage;
