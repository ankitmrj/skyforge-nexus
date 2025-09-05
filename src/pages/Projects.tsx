import React from 'react';
import ImageAgri from '@/assets/agricultureDrone.jpg';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  Github, Calendar } from 'lucide-react';
import ImageNabard from '@/assets/Nabard_project.jpg';
import ImageGuidar from '@/assets/GuidAR.jpg';
import ImageLF from '@/assets/lineFollowerBot.png';
import ImageNeo from '@/assets/NeoAttend.png';
import ImagePrint from '@/assets/PrintSecure2.jpg';
import ImageSS from '@/assets/Screenshot 2025-03-29 113438 - PRIYANSHU Kashyap.png';
import ImageTS from '@/assets/TollSphere.jpg';
import ImageCF from '@/assets/CryoFi.jpg';
import ImageSP from '@/assets/Smartphone2.jpg';
import { Description } from '@radix-ui/react-toast';
import { describe } from 'node:test';

const Projects = () => {
  const projects = [
    {
      title: 'Agriculture Drones',
      /*description: 'Distributed sensor network using drones for environmental data collection and real-time monitoring of air quality.',*/
      description:'This advanced agriculture drone revolutionizes modern farming with precision spraying technology.Equipped with high-capacity tanks and intelligent flight control, it ensures uniform coverage across fields.Efficient, eco-friendly, and time-saving, it boosts crop yield while reducing manual effort.',
      image: ImageAgri,
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
      //description: 'AI-powered drone capable of autonomous patrol missions with real-time object detection and tracking capabilities.',
      description:'An AI-powered drone capable of autonomous patrol missions with real-time object detection and tracking. Designed for intelligent monitoring and enhanced security, Its versatility makes it suitable for applications in agriculture, defense, disaster management, and smart surveillance.',
      image: ImageNabard,
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
      //description: 'Smartphone controlled Wi-Fi based Quadcopter , using ESP-32 as Flight Controller( self designed flight controller PCB ) and the required sensors for holding altitude and pressure along with integration of GPS sensor  to  implement return to home feature .',
      description:'A smartphone-controlled Wi-Fi quadcopter powered by an ESP-32 based self-designed flight controller PCB. Equipped with sensors for altitude and pressure stabilization, it also integrates a GPS module to implement the return-to-home feature. Designed for precision, reliability, and user-friendly operation.',
  
      image: ImageSP,
      
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
      //description: 'Working prototype of the toll collection and management system using esp8266(NodeMCU)',
      description:'A working prototype of an automated toll collection and management system built using ESP8266 (NodeMCU). The system enables seamless, cashless transactions with real-time data handling, reducing human intervention and enhancing efficiency in toll operations.',
      image: ImageTS,
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
      //description: 'CryoFi is an intelligent baby monitoring system that listens, understands, and alerts.',
      description:'CryoFi is an intelligent baby monitoring system that listens and interprets a baby’s cry in real time. It instantly alerts parents with smart notifications, ensuring timely attention and enhanced child safety. Designed for reliability and peace of mind in modern parenting.',
      image: ImageCF ,
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
      description:'PrintSecure is a smart and intelligent biometric locking system powered by Arduino for secure, seamless, and keyless access through fingerprint authentication. By combining IoT innovation with advanced security features, it provides a fast, reliable, and tamper-resistant alternative to traditional locks.',    
      image: ImagePrint,
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
      //description: 'Multi-drone coordination system for collaborative missions using swarm intelligence algorithms.',
        description: 'PrintSecure is a smart biometric locking system powered by Arduino for secure, keyless access through fingerprint authentication. By combining IoT innovation with advanced security, it provides a fast, reliable, and tamper-resistant alternative to traditional locks. Designed for modern safety needs, it ensures both convenience and protection.',
      image: ImageLF,
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
      //description: 'GuidAR is a smart belt for the visually impaired, using ESP32 and two angled ultrasonic sensors—one for front obstacles, the other for ground hazards like potholes, stones, and stairs. An internal algorithm detects obstacle type and sends movement instructions (left, right, stop) via Telegram. A notification reader app reads these messages aloud on the user’s phone, working best with earphones or AirPods.',
      description:'GuidAR is a smart assistive belt for the visually impaired, built with ESP32 and ultrasonic sensors to detect both front obstacles and ground hazards. Its intelligent algorithm identifies obstacle types and provides movement instructions (left, right, stop) via Telegram. Paired with a notification reader app, it ensures real-time audio guidance for safe and independent navigation.',
      image: ImageGuidar,
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
      //description: 'An AI-powered face attendance system designed to automate and streamline identity verification using facial recognition. The system supports multiple modes, including real-time live detection and batch photo upload, ensuring accurate, flexible, and secure attendance tracking in academic or organizational settings.',
      description: 'NeoAttend is an AI-powered face attendance system that automates identity verification through advanced facial recognition. Supporting both real-time live detection and batch photo upload, it ensures accurate, secure, and flexible attendance tracking. Designed for academic and organizational use, it enhances efficiency while reducing manual effort.',
      image: ImageNeo,
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
             Explore our visionary Drone and IoT innovations — redefining what’s possible by shaping the future of technology and inspiring smarter, sustainable, and impactful solutions for a safer, more connected world.
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
              <a href="mailto:droneiotclub.mmmut@gmail.com" >
              <Button className="btn-neon px-8 py-4">
                Propose a Project
                
              </Button>
              </a>
              <a href="https://www.linkedin.com/company/drone-iot-club-mmmut/" >
              <Button
                variant="outline"
                className="px-8 py-4 border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                Join Development Team
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
