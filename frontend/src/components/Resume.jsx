import { useState } from "react";

const Resume = () => {
  const [skillsData] = useState([
    { title: "Web Design", percentage: 80 },
    { title: "Mobile App", percentage: 95 },
    { title: "Illustrator", percentage: 65 },
    { title: "Photoshope", percentage: 75 },
  ]);
  const [knowledgesData] = useState([
    { title: "Digital Design", category: "Knowledge" },
    { title: "Marketing", category: "Knowledge" },
    { title: "Social Media", category: "Knowledge" },
    { title: "Print", category: "Knowledge" },
    { title: "Time Management", category: "Knowledge" },
    { title: "Flexibility", category: "Knowledge" },
    { title: "Print", category: "Knowledge" },
    { title: "Time Management", category: "Knowledge" },
    { title: "Flexibility", category: "Knowledge" },
    { title: "Print", category: "Knowledge" },
  ]);
  const education = [
    {
      year: '2021-2023',
      title: 'Ph.D in Horriblensess',
      institute: 'ABC University, Los Angeles, CA',
    },
    {
      year: '2019-Present',
      title: 'Sr. Software Tester',
      institute: 'Google Inc.',
    },
    {
      year: '2021',
      title: 'Best Developer',
      institute: 'University Of Melbourne, NA',
    },
  ];

  const experience = [
    {
      year: '2017-2021',
      title: 'Computer Science',
      institute: 'Imperialize Technical Institute',
    },
    {
      year: '2015-2017',
      title: 'Cr. Web Developer',
      institute: 'ib-themes ltd.',
    },
    {
      year: '2008',
      title: 'Best Writter',
      institute: 'Online Typodev Soluation Ltd.',
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-10">Resume</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {education.map((item, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
              <p className="text-lg font-medium mb-1">{item.year}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.institute}</p>
            </div>
          ))}
          
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          {experience.map((item, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
              <p className="text-lg font-medium mb-1">{item.year}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.institute}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Working Skills</h2>
          {skillsData.map((skill) => (
            <div key={skill.title} className="mb-4">
              <p className="text-lg font-medium">{skill.title}</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-4 bg-red-500"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-right">
                {skill.percentage}%
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Knowledges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {knowledgesData.map((knowledge) => (
              <button
                key={knowledge.title}
                className="px-4 py-2 bg-gray-200 rounded-md text-gray-800"
              >
                {knowledge.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-10">
        © 2024 All Rights Reserved by ib-themes.
      </p>
    </div>
  );
};

export default Resume;
