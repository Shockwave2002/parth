import React from 'react';

import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ProjectList from '../Components/ProjectList/ProjectList';

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectList /> {/* Using ProjectList component instead of Heroimg2 */}
      <Footer />
    </div>
  );
};

export default Project;
