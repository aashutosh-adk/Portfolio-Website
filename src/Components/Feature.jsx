const skills = [
  { name: "React.JS", percentage: 70, color: "text-red-500" },
  { name: "HTML/CSS", percentage: 90, color: "text-red-300" },
  { name: "Tailwind css", percentage: 40, color: "text-cyan-400" },
  { name: "Javascript", percentage: 70, color: "text-yellow-400" },
  { name: "C,C++", percentage: 80, color: "text-blue-600" },
  { name: "JAVA", percentage: 60, color: "text-green-500" },
];

export default function Skills() {
  return (
    <section className="bg-slate-900/70 py-20 px-4">
      <div className="relative mx-auto max-w-6xl rounded-[30px] bg-white/5 shadow-xl p-10 md:p-16 border border-white/30">
        
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 h-6 w-6 rounded-full bg-blue-600 shadow-lg"></div>
        <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-blue-600 shadow-lg"></div>

        {/* Heading */}
        <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text">
        <h2 className="text-center text-4xl font-bold mb-20  text-white">
          MY <span className="text-blue-500">SKILLS</span>
        </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-y-16 gap-x-20 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              
              {/* Skill Header */}
              <div className="mb-3 flex items-center justify-between ">
                <h3 className={`text-xl font-medium ${skill.color}`}>
                  {skill.name}
                </h3>

                <span className="md:text-lg sm:text-xl font-bold text-white">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-gray-300">
                <div
                  className="h-full bg-blue-600 transition-all duration-1000 slide-in-from-bottom"
                  style={{ width: `${skill.percentage}% ` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}