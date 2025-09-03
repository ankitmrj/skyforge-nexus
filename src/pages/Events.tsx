import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, MapPin, Clock, Users, FileText, Upload } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    participationType: '',
    teamSize: 1,
    paymentMethod: '',
    profilePhoto: null as File | null,
    paymentProof: null as File | null,
  });

  const events = [
    {
      title: 'SwiftWings 2025',
      date: 'Coming Soon',
      location: 'Main Campus',
      description: 'Annual drone competition featuring transformer theme with multiple categories and exciting challenges.',
      status: 'Registration Open',
      registrationDeadline: '---',
    },
    {
      title: 'IoT Workshop Series',
      date: 'Coming soon',
      location: 'Tech Lab A',
      description: 'Hands-on workshop covering IoT fundamentals, sensor integration, and data analytics.',
      status: 'Coming Soon',
      registrationDeadline: '---',
    },
    {
      title: 'Drone Photography Contest',
      date: 'Coming soon',
      location: 'Campus Grounds',
      description: 'Showcase your aerial photography skills in this exciting competition.',
      status: 'Registration Closed',
      registrationDeadline: '---',
    },
  ];

  const handleFileUpload = (file: File, field: string) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Events & Competitions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our exciting events, competitions, and workshops to enhance your 
              skills and connect with fellow drone enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-display text-foreground">
                        {event.title}
                      </CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.status === 'Registration Open' 
                          ? 'bg-success/20 text-success' 
                          : event.status === 'Coming Soon'
                          ? 'bg-warning/20 text-warning'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Registration Deadline: {event.registrationDeadline}
                    </div>
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow-primary"
                      disabled={event.status === 'Registration Closed'}
                    >
                      {event.status === 'Registration Closed' ? 'Closed' : 'Register Now'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-background-secondary">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <Card className="relative overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-2xl rounded-3xl border border-white/10">
        
        {/* Background Logo */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <img src="/sw25logo.png" alt="SWIFTWINGS’25 Logo" className="max-w-[70%]" />
        </div>

        <CardContent className="p-12 relative z-10 text-center">
          
          {/* Logos Row */}
<div className="flex justify-between items-center mb-10">
  {/* Left: Transformers Symbol */}
  <img 
  src="/transformer.png" 
  alt="Transformers Symbol" 
  className="h-20 drop-shadow-[0_0_25px_rgba(0,191,255,0.8)]"
/>




            {/* Right: SWIFTWINGS Logo */}
            <img 
              src="/sw25logo.png" 
              alt="SWIFTWINGS Logo" 
              className="h-20 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            />
          </div>

          {/* Event Title */}
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "Megatron, sans-serif" }}
          >
            SWIFTWINGS’25
          </motion.h2>

          {/* Theme */}
          <p className="text-lg md:text-xl mb-10">
            🚀 RC Fixed-Wing Drone Competition <br />
            <span className="text-yellow-400 font-bold tracking-wide uppercase">
              Theme: Transformers
            </span>
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
            <div>
              <Calendar className="mx-auto mb-2 h-7 w-7 text-cyan-400" />
              <p className="text-sm opacity-90">Date</p>
              <p className="font-bold text-lg">Coming Soon</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-2 h-7 w-7 text-cyan-400" />
              <p className="text-sm opacity-90">Venue</p>
              <p className="font-bold text-lg">Main Campus</p>
            </div>
            <div>
              <Users className="mx-auto mb-2 h-7 w-7 text-cyan-400" />
              <p className="text-sm opacity-90">Participation</p>
              <p className="font-bold text-lg">Team / Individual</p>
            </div>
          </div>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] transition"
            >
              Coming Soon – Stay Tuned
            </Button>
          </motion.div>

          <p className="text-xs text-center mt-6 opacity-80">
            Registration will open soon. Stay connected for updates!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default Events;