import "./styles/main.css";

import Navbar from "./components/Navbar.tsx"
import Hero from "./components/Hero.tsx"
import Skills from "./components/Skills.tsx"
import Education from "./components/Education.tsx";
import Hobbies from "./components/Hobbies.tsx";
import Contacts from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
 
  return (
    <div className="min-h-screen bg-slate-900 scroll-smooth">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Education/>
      <Hobbies/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
