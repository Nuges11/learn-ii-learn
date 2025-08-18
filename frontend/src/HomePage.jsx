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
      {/* Browse Courses Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Browse Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Course Card Placeholder */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-2">Course Title 1</h3>
            <p className="text-gray-600">Brief course description goes here.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-2">Course Title 2</h3>
            <p className="text-gray-600">Brief course description goes here.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-2">Course Title 3</h3>
            <p className="text-gray-600">Brief course description goes here.</p>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow mb-6">
            <p className="italic text-gray-700 mb-2">
              “Learn ii Learn helped me gain the confidence to pursue my dreams.”
            </p>
            <h4 className="font-semibold">– Adeola O.</h4>
          </div>
          <div className="bg-white rounded-xl p-6 shadow mb-6">
            <p className="italic text-gray-700 mb-2">
              “The mentorship support was life changing for me!”
            </p>
            <h4 className="font-semibold">– Chinedu K.</h4>
          </div>
        </div>
      </section>
      {/* Mentorship Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Mentorship</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Get paired with experienced tutors and industry professionals to guide your learning journey.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-full">
          Request Mentorship
        </button>
      </section>
      {/* Job Simulations Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Job Simulations</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Test real-world skills with virtual projects from our partner companies.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-full">
          Explore Simulations
        </button>
      </section>

export default HomePage;
