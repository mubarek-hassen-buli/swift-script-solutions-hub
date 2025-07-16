import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BottomNavigation } from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, User, CreditCard, Shield, HelpCircle } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  const handleNavigation = (itemId: string) => {
    console.log(`Navigated to ${itemId}`);
  };

  return (
    <div className="bg-background flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-4 min-h-screen">
      <Header />
      
      <main className="flex flex-col w-full flex-1 px-6 py-6">
        <h1 className="text-2xl font-semibold text-foreground mb-6">Settings</h1>
        
        {/* Account Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-foreground mb-4">Account</h2>
          <div className="bg-card p-4 rounded-lg border">
            <p className="text-sm text-muted-foreground mb-2">Signed in as</p>
            <p className="text-sm text-foreground mb-4">rayyu0@gmail.com</p>
            <Button variant="destructive" className="w-full">
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-foreground mb-4">Quick Settings</h2>
          
          <div className="space-y-4">
            {/* Notifications */}
            <div className="flex items-center justify-between bg-card p-4 rounded-lg border">
              <div>
                <h3 className="font-medium text-foreground">Notifications</h3>
                <p className="text-sm text-muted-foreground">Receive push notifications</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between bg-card p-4 rounded-lg border">
              <div>
                <h3 className="font-medium text-foreground">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">Switch to dark theme</p>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            {/* Language */}
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-medium text-foreground mb-3">Language</h3>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-card p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium text-foreground">Profile Settings</h3>
                <p className="text-sm text-muted-foreground">Update your personal information</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between bg-card p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium text-foreground">Payment Methods</h3>
                <p className="text-sm text-muted-foreground">Manage your payment options</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between bg-card p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium text-foreground">Privacy & Security</h3>
                <p className="text-sm text-muted-foreground">Control your privacy settings</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between bg-card p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium text-foreground">Help & Support</h3>
                <p className="text-sm text-muted-foreground">Get help and contact support</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Version Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Version 1.0.0</p>
          <p className="text-xs text-muted-foreground">© 2024 Luxury Hotel Services</p>
        </div>
      </main>
      
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default Settings;