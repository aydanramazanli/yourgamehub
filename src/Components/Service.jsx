import React from 'react';
import { Laptop, ShoppingCart, Users, Gift, Puzzle, Monitor } from 'lucide-react';
import '../Styles/Service.css';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        
        <div className="services-grid">
          {/* Wide Game Categories */}
          <div className="service-card">
            <div className="service-icon">
              <Laptop color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Wide Game Categories</h3>
            <p className="service-description">
              Enjoy a variety of games across action, puzzle, casino slots, and more!
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          
          {/* Multi-Platform Support */}
          <div className="service-card">
            <div className="service-icon">
              <ShoppingCart color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Multi-Platform Support</h3>
            <p className="service-description">
              Play games on your computer, tablet, or mobile phone. Enjoy entertainment wherever you go.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          
          {/* Online Competitions */}
          <div className="service-card">
            <div className="service-icon">
              <Users color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Online Competitions</h3>
            <p className="service-description">
              Compete with players from around the world and climb the leaderboards!
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          
          {/* Exclusive Rewards and Bonuses */}
          <div className="service-card">
            <div className="service-icon">
              <Gift color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Exclusive Rewards and Bonuses</h3>
            <p className="service-description">
              Earn rewards as you play and enhance your experience with exciting bonuses.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          
          {/* Fun Social Features */}
          <div className="service-card">
            <div className="service-icon">
              <Puzzle color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Fun Social Features</h3>
            <p className="service-description">
              Play with friends, share your leaderboard rankings, and engage with the community.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          
          {/* Free Play Experience */}
          <div className="service-card">
            <div className="service-icon">
              <Monitor color="#5a1e96" size={24} />
            </div>
            <h3 className="service-name">Free Play Experience</h3>
            <p className="service-description">
              Start playing with free trials on many of our games and dive into the fun right away.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;