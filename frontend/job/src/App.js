// import logo from './logo.svg';
import './App.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import React from 'react';
import HeroSection from './components/HeroSection';
import JobCategories from './components/JobCategories';
import FeaturedJobs from './components/FeaturedJobs';
import Testimonials from './components/Testimonials';
// import Profile from './components/Profile';
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <main>
    {/* <Profile></Profile> */}
    
    <HeroSection></HeroSection>

    <JobCategories></JobCategories>

    <FeaturedJobs></FeaturedJobs>

    <Testimonials></Testimonials>

    </main>
    
    <Footer></Footer>
    
       </div>
    
  )
}


export default App;
