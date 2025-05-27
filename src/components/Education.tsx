const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Formazione ed Esperienza</h2>
          <p className="text-slate-400 text-lg">Il mio percorso accademico e professionale</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg mr-3"></div>
              Istruzione
            </h3>
            
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-cyan-400">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-semibold">Laurea Triennale in Informatica</h4>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">In corso</span>
                </div>
                <p className="text-cyan-400 mb-2">Università di Bologna</p>
                <p className="text-slate-400">Bologna, Italia</p>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-white font-semibold mb-2">Diploma Tecnico Industriale</h4>
                <p className="text-blue-400 mb-2">Settore Informatica e Telecomunicazioni</p>
                <p className="text-slate-400">Istituto Tecnico Industriale, Chieti</p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg mr-3"></div>
              Esperienza
            </h3>
            
            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-purple-400">
              <h4 className="text-white font-semibold mb-2">Inserimento Dati e Gestione Piattaforma</h4>
              <p className="text-purple-400 mb-2">Life Learning</p>
              <p className="text-slate-400 mb-4">Pescara</p>
              <p className="text-slate-300">
                Gestione e amministrazione di piattaforma e-learning, 
                inserimento e organizzazione dati, supporto tecnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;