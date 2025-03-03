import React from 'react';
import { Monitor, Puzzle } from 'lucide-react';
import '../Styles/AboutSection.css';

const AboutSection
 = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        
        <div className="about-description">
          <p>
            Welcome to spinfunbuzz, your ultimate destination for fun and entertainment! We bring together a diverse collection of games, 
            ranging from action-packed adventures to mind-bending puzzles and exciting casino slots. Whether you're here to compete, 
            connect with friends, or just relax and play, we've got something for everyone. Join our vibrant community, explore new challenges, 
            and enjoy endless hours of gaming fun. At spinfunbuzz, it's all about playing together and having a great time!
          </p>
        </div>
        
        <div className="mission-vision-container">
          <div className="mission-container">
            <div className="mission-icon">
              <Monitor color="#5a1e96" size={24} />
            </div>
            <h3 className="mission-title">Mission</h3>
            <p className="mission-text">
              At spinfunbuzz, we aim to deliver fun and high-quality gaming experiences. 
              Our goal is to create a platform that offers a wide range of game categories, 
              fostering a competitive and social environment for players. We strive to make 
              every moment enjoyable for gamers of all ages.
            </p>
          </div>
          
          <div className="vision-container">
            <div className="vision-icon">
              <Puzzle color="#5a1e96" size={24} />
            </div>
            <h3 className="vision-title">Vision</h3>
            <p className="vision-text">
              Our vision is to become one of the leading gaming platforms, engaging a 
              global community of players while staying at the forefront of the ever-evolving 
              gaming world. We aim to provide innovative, fun, and accessible 
              gaming experiences, making spinfunbuzz the go-to platform for gamers 
              everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;