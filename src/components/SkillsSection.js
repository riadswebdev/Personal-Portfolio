export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", percentage: 95, offset: "12.5" },
    { name: "React.js", percentage: 90, offset: "25.1" },
    { name: "Tailwind CSS", percentage: 98, offset: "5.0" },
    { name: "Next.js", percentage: 85, offset: "37.6" },
  ];

  return (
    <section className="py-section-gap" id="skills">
      <div className="text-center mb-stack-lg space-y-4">
        <h2 className="font-h2 text-h2">Technical <span className="text-primary-container">Expertise</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Weaponry of choice for building future-proof digital landscapes.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card p-stack-lg rounded-2xl flex flex-col items-center gap-4 group">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-container-highest" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="6"></circle>
                <circle 
                  className="text-primary-container skill-ring filter drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" 
                  cx="48" 
                  cy="48" 
                  fill="transparent" 
                  r="40" 
                  stroke="currentColor" 
                  strokeDasharray="251.2" 
                  strokeDashoffset={skill.offset} 
                  strokeWidth="6"
                ></circle>
              </svg>
              <span className="absolute text-xl font-bold">{skill.percentage}%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,240,255,1)]"></div>
              <span className="font-label-caps">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
