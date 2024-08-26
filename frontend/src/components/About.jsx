import React from 'react'

const About = () => {
  return (
    <div>
      <div className="mb-6">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-gray-700 mt-4">
              I'm a Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {[
                { title: 'UI/UX Design', description: 'Lorem ipsum dolor sit amet...' },
                { title: 'App Development', description: 'Lorem ipsum dolor sit amet...' },
                { title: 'Photography', description: 'Lorem ipsum dolor sit amet...' },
                { title: 'Management', description: 'Lorem ipsum dolor sit amet...' },
                { title: 'Web Development', description: 'Lorem ipsum dolor sit amet...' }
              ].map(service => (
                <div key={service.title} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default About
