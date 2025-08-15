import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      position: 'Club President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
    },
    {
      name: 'Sarah Chen',
      position: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/sarahchen',
    },
    {
      name: 'Marcus Johnson',
      position: 'Drone Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/marcusjohnson',
    },
    {
      name: 'Emily Zhang',
      position: 'IoT Systems Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/emilyzhang',
    },
    {
      name: 'David Kumar',
      position: 'Hardware Team Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/davidkumar',
    },
    {
      name: 'Lisa Thompson',
      position: 'Software Development Lead',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/lisathompson',
    },
    {
      name: 'Ryan Patel',
      position: 'Competition Team Captain',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/ryanpatel',
    },
    {
      name: 'Ava Martinez',
      position: 'Research & Development',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/avamartinez',
    },
    {
      name: 'James Wilson',
      position: 'Safety Officer',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/jameswilson',
    },
    {
      name: 'Sophia Lee',
      position: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/sophialee',
    },
    {
      name: 'Daniel Brown',
      position: 'Documentation Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/danielbrown',
    },
    {
      name: 'Maya Singh',
      position: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/mayasingh',
    },
  ];

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
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the passionate individuals who drive innovation and excellence 
              in drone technology and IoT systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border card-hover overflow-hidden group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* LinkedIn Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary-foreground" />
                      </a>
                    </div>
                  </div>

                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {member.position}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for passionate individuals who share our vision 
              for innovation and excellence. Whether you're a beginner or an expert, 
              there's a place for you in our diverse team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon px-8 py-4 rounded-lg font-semibold"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary-neon px-8 py-4 rounded-lg font-semibold"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Total Members' },
              { number: '12', label: 'Core Team' },
              { number: '25+', label: 'Projects Led' },
              { number: '5', label: 'Years Active' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;