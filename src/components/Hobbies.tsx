import { Music, Box, Dice6 } from "lucide-react";

const Hobbies = () => {
    const hobbies = [
        {
            title: "Musica",
            description: "Batterista appassionato interessato alla composizione musicale",
            icon: <Music className="w-8 h-8" />,
            color: "from-yellow-400 to-orange-600"
        },
        {
            title: "Modellazione 3D",
            description: "Utilizzo Blender per creare modelli 3D e scene digitali",
            icon: <Box className="w-8 h-8" />,
            color: "from-indigo-400 to-purple-600"
        },
        {
            title: "Dungeons&Dragons",
            description: "Dungeon Master - Worldbuilding e storytelling tramite TTRPGS.",
            icon: <Dice6 className="w-8 h-8" />,
            color: "from-green-400 to-blue-600"
        }
    ];

    return (
        <section className="py-20 bg-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Passioni e Hobby</h2>
                    <p className="text-slate-400 text-lg">Le mie attività creative e interessi personali</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="bg-slate-900 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${hobby.color} p-4 mb-6`}>
                                <div className="text-white">
                                    {hobby.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{hobby.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;