import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Agriculture Drones',
      /*description: 'Distributed sensor network using drones for environmental data collection and real-time monitoring of air quality.',*/
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      tags: ['IoT', 'Environmental', 'Data Analytics'],
      status: 'Completed',
      date: '2024',
      links: {
        // demo: '#',
        github: '#',
      },
    }, 
    {
      title: ' NABARD PROJECT',
      description: 'AI-powered drone capable of autonomous patrol missions with real-time object detection and tracking capabilities.',
      image: 'src/assets/Nabard_project.jpg',
      tags: ['AI', 'Computer Vision', 'Autonomous Flight'],
      status: 'Completed',
      date: '2024',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: '@AV32 (Smartphone controlled Wi-Fi Quadcopter with ESP 32 as Flight Controller) ',
      description: 'Smartphone controlled Wi-Fi based Quadcopter , using ESP-32 as Flight Controller( self designed flight controller PCB ) and the required sensors for holding altitude and pressure along with integration of GPS sensor  to  implement return to home feature .',
      image: 'src/assets/Smartphone2.jpg',
      
      tags: ['IoT', 'Environmental', 'Data Analytics'],
      status: 'Completed',
      date: '2024',
      links: {
        // demo: '#',
        github: '#',
      },  
    },
    {
      title: ' TollSphere',
      description: 'Working prototype of the toll collection and management system using esp8266(NodeMCU)',
      image: 'src/assets/TollSphere.jpg',
      tags: ['Agriculture', 'Precision Farming', 'Analytics'],
      status: 'Completed',
      date: '2023',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: 'CryoFi',
      description: 'CryoFi is an intelligent baby monitoring system that listens, understands, and alerts.',
      image: 'src/assets/CryoFi.jpg',
      tags: ['Agriculture', 'Precision Farming', 'Analytics'],
      status: 'Completed',
      date: '2023',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: ' PrintSecure',
      description: 'It is a smart biometric locking system powered by Arduino, designed for secure, keyless access using fingerprint authentication. Combining IoT innovation with precision security, it offers a modern solution to traditional locks—fast, reliable, and tamper-resistant.',
      image: 'src/assets/PrintSecure2.jpg',
      tags: ['Agriculture', 'Precision Farming', 'Analytics'],
      status: 'Completed',
      date: '2023',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: 'Line FollowerBot',
      description: 'Multi-drone coordination system for collaborative missions using swarm intelligence algorithms.',
      image: 'src/assets/LineFollower.jpg',
      tags: ['Swarm Robotics', 'Machine Learning', 'Coordination'],
      status: 'Completed',
      date: '2023',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: 'GuidAR',
      description: 'GuidAR is a smart belt for the visually impaired, using ESP32 and two angled ultrasonic sensors—one for front obstacles, the other for ground hazards like potholes, stones, and stairs. An internal algorithm detects obstacle type and sends movement instructions (left, right, stop) via Telegram. A notification reader app reads these messages aloud on the user’s phone, working best with earphones or AirPods.',
      image: 'src/assets/GuidAR.jpg',
      tags: ['Emergency Response', 'Medical', 'Search & Rescue'],
      status: 'In Progress',
      date: '2024',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    {
      title: 'NeoAttend',
      description: 'An AI-powered face attendance system designed to automate and streamline identity verification using facial recognition. The system supports multiple modes, including real-time live detection and batch photo upload, ensuring accurate, flexible, and secure attendance tracking in academic or organizational settings.',
      image: 'src/assets/NeoAttend.png',
      tags: ['Photogrammetry', '3D Mapping', 'Computer Vision'],
      status: 'Planning',
      date: '2024',
      links: {
        // demo: '#',
        github: '#',
      },
    },
    // {
    //   title: 'Hearten: Your AI Healing Ally',
    //   description: 'Precision agriculture solution using drones for crop monitoring, health assessment, and yield optimization.',
    //   image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    //   tags: ['Agriculture', 'Precision Farming', 'Analytics'],
    //   status: 'Completed',
    //   date: '2023',
    //   links: {
    //     demo: '#',
    //     github: '#',
    //   },
    // },
    //  {
    //   title: ' EduTrack AI',
    //   description: 'EduTrack AI is an intelligent academic platform designed to replicate the ideal university environment using AI-powered personalization. It equips professors with real-time, detailed insights into each student’s progress, enabling tailored mentorship and academic support. Simultaneously, AI-driven teacher agents provide students with personalized, context-aware responses to academic queries and decisions, ensuring continuous, adaptive learning.Beyond academics, EduTrack AI monitors students’ mental well-being, detecting stress indicators to prevent potential issues, with all data overseen by real human supervisors. The system also helps students evaluate the pros and cons of their choices—academically and personally—promoting informed, balanced decision-making. EduTrack AI bridges technology and human care to create a safe, responsive, and student-centric university ecosystem.',
    //   image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    //   tags: ['Agriculture', 'Precision Farming', 'Analytics'],
    //   status: 'Completed',
    //   date: '2023',
    //   links: {
    //     demo: '#',
    //     github: '#',
    //   },
    // },
     
  ];

   const getStatusColor = (status: string) => {
      
    switch (status) {
      case 'Completed':
        return 'bg-success text-success-foreground';
      case 'In Progress':
        return 'bg-primary text-primary-foreground';
      case 'Planning':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
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
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our innovative drone and IoT projects that are shaping the future 
              of technology and solving real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col bg-card border-border card-hover overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full  h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    {/* Project Info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                   {/* class */}
                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                          <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary"
                          >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {/* <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow-primary"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button> */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/20 hover:border-primary hover:bg-primary/10 "
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Want to Collaborate?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have an idea for a new project or want to contribute to existing ones? 
              We're always looking for passionate individuals to join our development teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-neon px-8 py-4">
                Propose a Project
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                Join Development Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
