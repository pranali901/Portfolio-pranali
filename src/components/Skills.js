import React from 'react';

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "MySQL", icon: "🗄️" },
  { name: "C++", icon: "💻" },
  { name: "C#", icon: "🎯" },
  { name: "PHP", icon: "🐘" },
  { name: "Git", icon: "🛠️" },
  { name: "Java", icon: "☕" },

];

const SkillsSection = () => {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
