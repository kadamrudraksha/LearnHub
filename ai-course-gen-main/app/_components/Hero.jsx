import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            AI Course Generator
            <strong className="font-extrabold text-primary sm:block"> Create Custom Learning Paths, Powered By </strong>
          </h1>
          
          <p className="mt-6 sm:text-xl/relaxed text-gray-700">
            The AI Course Generator is a cutting-edge tool that simplifies educational content creation by generating structured lesson plans and quizzes tailored to specific learning objectives
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <a
              className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring"
              href="dashboard"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero