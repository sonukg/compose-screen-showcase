
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronRight, User, Settings, Bell, Heart, Users, HelpCircle, LogOut } from 'lucide-react';

const ProfileScreen = () => {
  const menuItems = [
    { icon: Users, label: 'Invite Friends', hasNotification: false },
    { icon: User, label: 'Account info', hasNotification: false },
    { icon: User, label: 'Personal profile', hasNotification: false },
    { icon: Settings, label: 'Settings', hasNotification: false },
    { icon: Bell, label: 'E-statement', hasNotification: false },
    { icon: Heart, label: 'Referral code', hasNotification: true },
  ];

  const bottomItems = [
    { icon: Settings, label: 'FAQs' },
    { icon: HelpCircle, label: 'Our Handbook' },
    { icon: Users, label: 'Community' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback className="bg-teal-500 text-white text-2xl">EM</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Enjelin Morgeana</h2>
          <p className="text-teal-600 font-medium">@enjelin_morgeana</p>
        </div>

        {/* Main Menu Items */}
        <Card className="mb-6 shadow-lg border-0">
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.hasNotification && (
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                {index < menuItems.length - 1 && (
                  <div className="border-b border-gray-100 ml-16"></div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom Menu Items */}
        <Card className="mb-6 shadow-lg border-0">
          <CardContent className="p-0">
            {bottomItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                {index < bottomItems.length - 1 && (
                  <div className="border-b border-gray-100 ml-16"></div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button variant="outline" className="w-full py-3 border-red-200 text-red-600 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-2" />
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default ProfileScreen;
