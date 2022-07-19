import AboutUs from '../../components/AboutUs';
import Header from '../../components/Header';
import Poster from '../../components/Poster';
import OurExperience from '../../components/OurExperience';
import TeamMember from '../../components/TeamMember';
import OurWork from '../../components/OurWork';
import ClientsFeedback from '../../components/ClientsFeedback';
import OurBlog from '../../components/OurBlog';
import Footer from '../../components/Footer';

import './style.css';

const App = () => {
  return (
    <div className='homepage'>
      <Header />
      <Poster />
      <AboutUs />
      <OurExperience />
      <TeamMember />
      <OurWork />
      <ClientsFeedback />
      <OurBlog />
      <Footer />
    </div>
  );
};

export default App;
