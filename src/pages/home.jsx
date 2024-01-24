import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Cards from '../components/cards/cards';
import ProfileSection from '../components/ProfileSection/profileSection';
import "../styles/App.scss"


function Home() {
  return (
    <div>
        <ProfileSection />
        <Navbar />
        <Cards />
      <Footer />
    </div>
  );
}

export default Home;
