// src/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const courses = [
    {
      id: 1,
      title: "Data Analysis with Excel",
      description: "Learn how to analyze, visualize, and present data effectively.",
      image: "https://source.unsplash.com/400x250/?data,analysis",
    },
    {
      id: 2,
      title: "Finance for Beginners",
      description: "Understand financial principles and build strong foundations.",
      image: "https://source.unsplash.com/400x250/?finance,books",
    },
    {
      id: 3,
      title: "Introduction to Programming",
      description: "Master coding basics with real-world projects.",
      image: "https://source.unsplash.com/400x250/?coding,computer",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Learn Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Access world-class courses taught by expert Nigerian instructors.
          </p>
          <div>
            <Link
              to="/courses"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md mr-4"
            >
              Explore Courses
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Courses Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <Link
                to="/courses"
                className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Learning Today
        </h2>
        <p className="text-lg mb-6">
          Join thousands of learners across Nigeria gaining practical skills.
        </p>
        <Link
          to="/signup"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md"
        >
          Join for Free
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
