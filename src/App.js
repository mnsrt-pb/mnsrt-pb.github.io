import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './js/components/Header'
import Home from './js/components/Home'
import About from './js/components/About'
import Experience from './js/components/Experience'
import Projects from './js/components/Projects'
import Footer from './js/components/Footer'


function App() {
  return (
    <div>
      <Header />

      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
