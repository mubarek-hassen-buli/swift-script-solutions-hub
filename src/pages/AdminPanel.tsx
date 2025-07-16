import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BottomNavigation } from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageSquare, Plus } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'food',
    available: true
  });

  const handleNavigation = (itemId: string) => {
    console.log(`Navigated to ${itemId}`);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Service added:', formData);
    setShowAddServiceForm(false);
    setFormData({
      name: '',
      price: '',
      description: '',
      category: 'food',
      available: true
    });
  };

  const renderServicesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Manage Services</h2>
        <Button 
          className="bg-slate-900 hover:bg-slate-800 text-white"
          onClick={() => setShowAddServiceForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {showAddServiceForm && (
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Add New Service</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter service name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Description
              </label>
              <Textarea
                placeholder="Enter service description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">food</SelectItem>
                  <SelectItem value="room">room</SelectItem>
                  <SelectItem value="spa">spa</SelectItem>
                  <SelectItem value="transport">transport</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="available"
                checked={formData.available}
                onCheckedChange={(checked) => handleInputChange('available', checked as boolean)}
              />
              <label htmlFor="available" className="text-sm font-medium text-foreground">
                Available
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Service Image
              </label>
              <Input type="file" accept="image/*" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={handleSubmit} className="flex-1">
                Add Service
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAddServiceForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFeedbackTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">User Feedback</h2>
        <span className="text-sm text-muted-foreground">0 Reviews</span>
      </div>

      <div className="bg-card p-12 rounded-lg border text-center">
        <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">No Feedback Yet</h3>
        <p className="text-muted-foreground">
          User feedback will appear here once customers start leaving reviews.
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-background flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-4 min-h-screen">
      <Header />
      
      <main className="flex flex-col w-full flex-1 px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            Administrator
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-muted rounded-lg p-1 mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'services' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('services')}
          >
            Services Management
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'feedback' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('feedback')}
          >
            User Feedback
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'services' ? renderServicesTab() : renderFeedbackTab()}
      </main>
      
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default AdminPanel;