import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import bgVideo from './assets/earth-bg.mp4';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import bgMusic from './assets/bgmusic.mp3';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });

    // Initialize background music
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Function to play music after user interaction
    const playMusic = async () => {
      try {
        await audioRef.current.play();
        console.log('Background music playing');
      } catch (error) {
        console.error('Error playing background music:', error.message);
      }
    };

    // Add event listener to play music on user interaction
    document.addEventListener('click', playMusic);

    // Cleanup
    return () => {
      audio.pause();
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return (
    <div>
      <div className='h-[700px] relative'>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'
        >
          <source src={bgVideo} type='video/mp4' />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
