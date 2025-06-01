
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfileScreen from '@/components/ProfileScreen';
import StatisticsScreen from '@/components/StatisticsScreen';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('profile');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full shadow-lg p-2 flex space-x-2">
        <Button
          variant={currentScreen === 'profile' ? 'default' : 'ghost'}
          className={currentScreen === 'profile' ? 'bg-teal-500 hover:bg-teal-600' : ''}
          onClick={() => setCurrentScreen('profile')}
        >
          Profile
        </Button>
        <Button
          variant={currentScreen === 'statistics' ? 'default' : 'ghost'}
          className={currentScreen === 'statistics' ? 'bg-teal-500 hover:bg-teal-600' : ''}
          onClick={() => setCurrentScreen('statistics')}
        >
          Statistics
        </Button>
      </div>

      {/* Screen Content */}
      {currentScreen === 'profile' && <ProfileScreen />}
      {currentScreen === 'statistics' && <StatisticsScreen />}
    </div>
  );
};

export default Index;
