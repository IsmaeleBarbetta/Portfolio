import {Code, Terminal, Database, Palette} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguaggi di Programmazione",
      icon: <Code className="w-6 h-6" />,
      skills: ["C/C++", "JavaScript", "Python", "HTML/CSS", "Markup Languages"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Sistemi e Amministrazione",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Linux (Debian, Arch)", "Shell Scripting", "SSH/SCP", "systemd", "iptables"],
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Strumenti di Sviluppo",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Version Control", "E-learning Platforms"],
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Design e Grafica",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Photoshop", "Illustrator", "Figma", "Blender 3D"],
      color: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Competenze Tecniche</h2>
          <p className="text-slate-400 text-lg">Le tecnologie e strumenti che padroneggio</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;