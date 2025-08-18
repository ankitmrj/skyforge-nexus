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

      {/* SwiftWings 2025 Registration Form */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                SwiftWings 2025 Registration
              </h2>
              <p className="text-xl text-muted-foreground">
                Theme: Transformer (will update later)
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-2">
                      1. Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" placeholder="Enter your full name" required className="input-neon" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal input-neon",
                                !selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select>
                          <SelectTrigger className="input-neon">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required className="input-neon" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile Number (WhatsApp preferred) *</Label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-muted text-muted-foreground text-sm">
                            +91
                          </span>
                          <Input 
                            id="mobile" 
                            placeholder="9876543210" 
                            required 
                            className="rounded-l-none input-neon" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="profilePhoto">Profile Photo *</Label>
                        <div className="flex items-center space-x-2">
                          <Input 
                            id="profilePhoto" 
                            type="file" 
                            accept="image/*" 
                            required 
                            className="input-neon"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                handleFileUpload(e.target.files[0], 'profilePhoto');
                              }
                            }}
                          />
                          <Upload className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Academic/Institutional Details */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-2">
                      2. Academic / Institutional Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="college">College / University Name *</Label>
                        <Input id="college" placeholder="Enter your institution name" required className="input-neon" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" className="input-neon" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger className="input-neon">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                            <SelectItem value="telangana">Telangana</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="department">Department / Branch</Label>
                        <Input id="department" placeholder="e.g., ECE, CSE, Mech" className="input-neon" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study</Label>
                        <Select>
                          <SelectTrigger className="input-neon">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="final">Final Year</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID / Roll Number (Optional)</Label>
                      <Input id="studentId" placeholder="Enter your student ID" className="input-neon" />
                    </div>
                  </div>

                  {/* Participation Details */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-2">
                      3. Participation Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="participationType">Participation Type *</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, participationType: value }))}>
                          <SelectTrigger className="input-neon">
                            <SelectValue placeholder="Select participation type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="team">Team</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {formData.participationType === 'team' && (
                        <div className="space-y-2">
                          <Label htmlFor="teamName">Team Name</Label>
                          <Input id="teamName" placeholder="Enter team name" className="input-neon" />
                        </div>
                      )}
                    </div>

                    {formData.participationType === 'team' && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="teamSize">Team Size</Label>
                          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: parseInt(value) }))}>
                            <SelectTrigger className="input-neon">
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2">2 Members</SelectItem>
                              <SelectItem value="3">3 Members</SelectItem>
                              <SelectItem value="4">4 Members</SelectItem>
                              <SelectItem value="5">5 Members</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-4">
                          <Label>Team Members</Label>
                          {Array.from({ length: formData.teamSize - 1 }, (_, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-border rounded-lg">
                              <Input placeholder={`Member ${i + 2} Name`} className="input-neon" />
                              <Input placeholder={`Member ${i + 2} Email`} type="email" className="input-neon" />
                              <Input placeholder={`Member ${i + 2} Contact`} className="input-neon" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-2">
                      4. Payment Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Registration Fee</Label>
                        <div className="p-3 bg-muted rounded-lg">
                          <span className="text-lg font-semibold text-primary">
                            ₹{formData.participationType === 'individual' ? '500' : '1500'}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            ({formData.participationType === 'individual' ? 'Individual' : 'Team'})
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Payment Method</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}>
                          <SelectTrigger className="input-neon">
                            <SelectValue placeholder="To be confirmed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="upi">UPI</SelectItem>
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="transactionId">Transaction ID *</Label>
                        <Input id="transactionId" placeholder="Enter transaction ID" required className="input-neon" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="paymentProof">Upload Payment Proof *</Label>
                        <Input 
                          id="paymentProof" 
                          type="file" 
                          accept=".jpg,.jpeg,.png,.pdf" 
                          required 
                          className="input-neon"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], 'paymentProof');
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Declarations & Consents */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-2">
                      5. Declarations & Consents
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rules" required />
                        <Label htmlFor="rules" className="text-sm">
                          I agree to Event Rules & Regulations <a href="#" className="text-primary hover:underline">(link)</a>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm">
                          I consent to use of photos/videos for promotion
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="liability" required />
                        <Label htmlFor="liability" className="text-sm">
                          I acknowledge safety & liability terms
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="digitalSignature">Digital Signature (Type your full name) *</Label>
                      <Input id="digitalSignature" placeholder="Type your full name" required className="input-neon" />
                      <p className="text-xs text-muted-foreground">
                        By typing your name, you are providing your digital signature. 
                        Timestamp: {new Date().toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" className="w-full btn-neon text-lg py-6">
                      Submit Registration
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Auto-generated Registration ID and email confirmation will be sent upon submission.
                      Payment verification status will be updated within 24-48 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;