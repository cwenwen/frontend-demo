import Divider from './components/Divider';
import Nav from './components/Nav';
import SectionHero from './components/SectionHero';
import SectionAbout from './components/SectionAbout';
import SectionCircular from './components/SectionCircular';
import SectionBrands from './components/SectionBrands';
import SectionForm from './components/SectionForm';

function App() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <Divider />
      <SectionCircular />
      <Divider />
      <SectionBrands />
      <SectionForm />
      <Nav />
    </>
  );
}

export default App;
