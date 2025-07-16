import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BottomNavigation } from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

const Feedback = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleNavigation = (itemId: string) => {
    console.log(`Navigated to ${itemId}`);
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', { category, rating, feedback });
  };

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  return (
    <div className="bg-background flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-4 min-h-screen">
      <Header />
      
      <main className="flex flex-col w-full flex-1 px-6 py-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Share Your Feedback</h1>
          <p className="text-muted-foreground">Help us improve our services</p>
        </div>
        
        <div className="space-y-6">
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="service">Service</SelectItem>
                <SelectItem value="food">Food & Dining</SelectItem>
                <SelectItem value="rooms">Rooms</SelectItem>
                <SelectItem value="facilities">Facilities</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Overall Rating</label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className="transition-colors"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground hover:text-yellow-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Your Feedback</label>
            <Textarea
              placeholder="Share your experience with us..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
            disabled={!category || rating === 0 || !feedback.trim()}
          >
            Submit Feedback
          </Button>
        </div>
      </main>
      
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default Feedback;