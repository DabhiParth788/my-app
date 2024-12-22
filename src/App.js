import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Client from './components/Client';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import "./App.css"


function App() {
  return (
    <div>
    <Navigation />
    <HomePage />
    <About />
    <Services />
    <Team />
    <Projects />
    <Client />
    <Contact />
    <Copyright />
  </div>
  );
}

export default App;
