import {Mail, Phone, MapPin} from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contattami</h2>
          <p className="text-slate-400 text-lg">Sono sempre interessato a nuove opportunità e collaborazioni</p>
        </div>
        
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informazioni di Contatto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="text-white">barbettaismaele@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400">Telefono</p>
                    <p className="text-white">(+39) 348 937 5625</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400">Ubicazione</p>
                    <p className="text-white">Bologna, Italia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-slate-400 mb-4">Lingue parlate:</p>
                <div className="flex gap-4">
                  <span className="bg-slate-700 text-white px-4 py-2 rounded-lg">Italiano (Madrelingua)</span>
                  <span className="bg-slate-700 text-white px-4 py-2 rounded-lg">Inglese</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-4">Collaboriamo insieme</h4>
                <p className="text-slate-400 mb-8">
                  Sono sempre aperto a nuove sfide e opportunità di crescita nel mondo dell'informatica.
                </p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105">
                  Invia un Messaggio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;