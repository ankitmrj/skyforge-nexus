import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Autonomous Surveillance Drone',
      description: 'AI-powered drone capable of autonomous patrol missions with real-time object detection and tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      tags: ['AI', 'Computer Vision', 'Autonomous Flight'],
      status: 'Completed',
      date: '2024',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'IoT Environmental Monitoring',
      description: 'Distributed sensor network using drones for environmental data collection and real-time monitoring of air quality.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      tags: ['IoT', 'Environmental', 'Data Analytics'],
      status: 'In Progress',
      date: '2024',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Swarm Intelligence Platform',
      description: 'Multi-drone coordination system for collaborative missions using swarm intelligence algorithms.',
      image: 'https://images.unsplash.com/photo-1544866503-7173af1d4c4a?w=800&h=600&fit=crop',
      tags: ['Swarm Robotics', 'Machine Learning', 'Coordination'],
      status: 'Completed',
      date: '2023',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Emergency Response Drone',
      description: 'Rapid deployment drone system for emergency response with medical supply delivery and search operations.',
      image: 'https://images.unsplash.com/photo-1569163903262-eee900bfb5c5?w=800&h=600&fit=crop',
      tags: ['Emergency Response', 'Medical', 'Search & Rescue'],
      status: 'In Progress',
      date: '2024',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: '3D Mapping Drone System',
      description: 'Advanced photogrammetry system for creating detailed 3D maps and models using drone-captured imagery.',
      image: 'https://images.unsplash.com/photo-1553986944-8d4afe1e1f5d?w=800&h=600&fit=crop',
      tags: ['Photogrammetry', '3D Mapping', 'Computer Vision'],
      status: 'Planning',
      date: '2024',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Agricultural Monitoring System',
      description: 'Precision agriculture solution using drones for crop monitoring, health assessment, and yield optimization.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      tags: ['Agriculture', 'Precision Farming', 'Analytics'],
      status: 'Completed',
      date: '2023',
      links: {
        demo: '#',
        github: '#',
      },
    },
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
                <Card className="h-full bg-card border-border card-hover overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Info */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

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
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:shadow-glow-primary"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/20 hover:border-primary hover:bg-primary/10"
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