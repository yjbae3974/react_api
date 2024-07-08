import React from 'react';
import './App.css';

// 더미 데이터
const resumeData = [
  {
    name: "John Doe",
    title: "Software Engineer",
    summary: "Experienced software engineer with a background in developing scalable web applications.",
    skills: ["JavaScript", "React", "Node.js"],
    experience: "5 years"
  },
  {
    name: "Jane Smith",
    title: "UI/UX Designer",
    summary: "Creative UI/UX designer with a knack for creating user-friendly interfaces.",
    skills: ["Adobe XD", "Figma", "Sketch"],
    experience: "3 years"
  },
  {
    name: "Samuel Green",
    title: "Data Scientist",
    summary: "Data scientist with a passion for machine learning and big data analytics.",
    skills: ["Python", "R", "TensorFlow"],
    experience: "4 years"
  }
];

// 카드 컴포넌트
const ResumeCard = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
      <p><strong>Skills:</strong> {data.skills.join(', ')}</p>
      <p><strong>Experience:</strong> {data.experience}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Resume Cards</h1>
      <div className="card-container">
        {resumeData.map((resume, index) => (
          <ResumeCard key={index} data={resume} />
        ))}
      </div>
    </div>
  );
}

export default App;
