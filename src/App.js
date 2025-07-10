import './App.css';
import Hero from './Components/Hero/hero';
import Programs from './Components/Programs/programs';
import Reasons from './Components/Reasons/reasons';
import Plans from './Components/Plans/plans';
import Testimonials from './Components/Testimonial/testimonial';
import JoinUs from './Components/JoinUs/joinus';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;