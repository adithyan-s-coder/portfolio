import React from 'react';
import { FiAward, FiBookOpen, FiCode, FiDownload } from "react-icons/fi";
import { 
  SiReact, 
  SiTailwindcss, 
  SiPython, 
  SiMysql, 
  SiGit 
} from "react-icons/si";

export default function About() {
  const Aboutdata = [
    {
      icon: <FiCode size={20} />,
      title: "Languages",
      desc: "HTML5, CSS3, JavaScript, Python, MySQL, React.js",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Education",
      desc: "B.Sc Computer Science (AI & DS)",
    },
    {
      icon: <FiAward size={20} />,
      title: "Projects",
      desc: "Built 3+ web projects",
    },
  ];

  const Tools = [
    { icon: <SiReact size={24} />, title: "React js" },
    { icon: <SiTailwindcss size={24} />, title: "Tailwind css" },
    { icon: <SiPython size={24} />, title: "Python" },
    { icon: <SiMysql size={24} />, title: "MySQL" },
    { icon: <SiGit size={24} />, title: "Git" },
  ];

  return (
    <div id="about" className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-20 px-6 md:px-12">
        
        {/* --- BG EFFECTS --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 z-[15] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)" }}></div>

        {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img 
               src="/profile.jpg" 
               alt="About Profile" 
               className="w-full h-full object-cover opacity-50 grayscale" 
            />
        </div>

        {/* --- CONTENT (RIGHT SIDE) --- */}
        <div className="relative z-[50] w-full flex flex-col items-center lg:items-end justify-center lg:justify-end">
            
            {/* Main Content Pane */}
            <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-12 border border-white/5 rounded-2xl lg:ml-auto">
                {/* Header */}
                <div className="space-y-2">
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM INFO</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                        About Me<span className="text-blue-500">.</span>
                    </h2>
                </div>

                {/* Bio Paragraph */}
                <div className="robotic-section">
                    <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
                        I am an enthusiastic and self-motivated aspiring <span className="text-white font-medium">Web Developer</span> with strong knowledge in Frontend Development, Responsive Web Design, JavaScript, Python, and MySQL. Passionate about building responsive and user-friendly web applications using modern web technologies.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {Aboutdata.map((item) => (
                        <div key={item.title} className="group flex flex-col h-full p-5 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl">
                            <div className="text-blue-500 mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed flex-grow">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Dock */}
                <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-5">
                        {Tools.map((tool) => (
                            <div key={tool.title} className="group relative p-4 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help">
                                <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {tool.icon}
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                                    {tool.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                    <a 
                        href="/resume.pdf" 
                        download="Adithyan_S_Resume.pdf"
                        className="flex md:inline-flex justify-center items-center space-x-6 px-8 md:px-12 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20 w-full md:w-auto"
                    >
                        <span>Download Resume</span>
                        <FiDownload size={16} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
