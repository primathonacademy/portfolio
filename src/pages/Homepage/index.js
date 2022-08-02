import { useNavigate } from 'react-router-dom';

import { removeStorageData, USER_DATA } from '../../services/storage';
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

const Homepage = () => {
  let navigate = useNavigate();

  const onLogout = () => {
    removeStorageData(USER_DATA);
    navigate('/login');
  };

  return (
    <div className='homepage'>
      <Header onLogout={onLogout} />
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

export default Homepage;
