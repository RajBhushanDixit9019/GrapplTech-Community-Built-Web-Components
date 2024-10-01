import React from 'react';
import HeroSection from './components/HeroSection';

const App = () => {
  const handleButtonClick = () => {
    alert('Shop Now Clicked!');
  };

  return (
    <div className="App">
      <HeroSection
        title="Welcome to Our Store"
        subtitle="Discover the latest trends and styles"
        imageUrl="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZhc2hpb258ZW58MHx8fHwxNjg0MDAwNzU1&ixlib=rb-1.2.1&q=80&w=1080" // Unsplash CDN URL
        buttonText="Shop Now"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;
