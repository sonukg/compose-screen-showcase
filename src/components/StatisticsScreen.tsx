
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, ShoppingBag, Car, Home, Utensils } from 'lucide-react';

const StatisticsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Week');
  
  const periods = ['Day', 'Week', 'Month', 'Year'];
  
  const chartData = [
    { name: 'Mon', value: 20000 },
    { name: 'Tue', value: 35000 },
    { name: 'Wed', value: 25000 },
    { name: 'Thu', value: 45000 },
    { name: 'Fri', value: 30000 },
    { name: 'Sat', value: 55000 },
    { name: 'Sun', value: 40000 },
  ];

  const spendingCategories = [
    { icon: ShoppingBag, name: 'Shopping', amount: '$120', percentage: '62%', color: 'bg-teal-500' },
    { icon: Car, name: 'Transportation', amount: '$32', percentage: '17%', color: 'bg-blue-500' },
    { icon: Home, name: 'Home', amount: '$28', percentage: '14%', color: 'bg-purple-500' },
    { icon: Utensils, name: 'Food', amount: '$12', percentage: '7%', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Statistics</h1>
          <p className="text-gray-600">Your financial overview</p>
        </div>

        {/* Time Period Selector */}
        <div className="flex bg-white rounded-xl p-2 mb-6 shadow-sm">
          {periods.map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "ghost"}
              className={`flex-1 ${
                selectedPeriod === period 
                  ? 'bg-teal-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </Button>
          ))}
        </div>

        {/* Chart Card */}
        <Card className="mb-6 shadow-lg border-0">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Total Spending</h3>
                <p className="text-3xl font-bold text-teal-600 mt-1">$1,235</p>
                <div className="flex items-center mt-2">
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500 font-medium">+2.5%</span>
                  <span className="text-sm text-gray-500 ml-1">vs last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  />
                  <YAxis hide />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#14B8A6" 
                    strokeWidth={3}
                    dot={{ fill: '#14B8A6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#14B8A6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Income vs Outcome */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Income</span>
                <ArrowUp className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-xl font-bold text-green-600">$2,420</p>
              <p className="text-xs text-gray-500 mt-1">+8.2% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Outcome</span>
                <ArrowDown className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-xl font-bold text-red-600">$1,235</p>
              <p className="text-xs text-gray-500 mt-1">+2.5% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Spending Categories */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Top Spending</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {spendingCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{category.name}</p>
                    <p className="text-sm text-gray-500">{category.percentage} of total</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">{category.amount}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsScreen;
