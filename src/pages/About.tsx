import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, History } from 'lucide-react';
import droneOpsImage from '@/assets/drone-operations.jpg';
import teamPhoto from '../assets/team-photo.jpg';

const About = () => {
  const sections = [
    {
      icon: History,
      title: 'Our History',
      content:
        'Founded in 2019, the Drone & IoT Club began as a small group of passionate students interested in aerial robotics. Over the years, we have grown into a leading technical club, participating in national competitions and developing innovative solutions for real-world problems.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      content:
        'To provide a hands-on platform for learning and innovation in Drones, IoT, Embedded Systems, AI, and ML, sparking curiosity and fostering practical skills. We aim to create a collaborative environment where members share ideas, work on real-world projects, and turn innovation into impact.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content:
        'To become a premier center for drone and IoT innovation, producing skilled engineers who will lead the next generation of autonomous systems and aerial robotics. We envision a future where our alumni are at the forefront of technological advancement.',
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
              About Our Club
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn about our journey, mission, and the vision that drives us to push the
              boundaries of drone technology and IoT innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, History */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-border card-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold mb-4 text-center text-foreground">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* US CORE Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Side - Team Photo */}
            <div>
              <img
                src={teamPhoto}
                alt="Our Team"
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>

            {/* Right Side - Text */}
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                US CORE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our club is dedicated to exploring the exciting world of drones and the
                Internet of Things (IoT). We bring together students with a passion for
                cutting-edge technology, innovation, and problem-solving. From building
                drones to developing IoT projects, we engage in hands-on workshops,
                competitions, and research initiatives that push the boundaries of modern
                technology.
              </p>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Our Awesome Team!
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of skilled individuals committed to advancing drone and IoT
              technology through collaboration and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Drone Operations Images */}
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
              Our Operations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at our state-of-the-art facilities and see our drones in action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Main Operations Image */}
            <div className="md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden border-border">
                <div className="relative">
                  <img
                    src={droneOpsImage}
                    alt="Drone Operations"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0" />
                </div>
                <div className="px-6 py-4 ">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Advanced Drone Operations
                  </h3>
                  <p className="text-white/90">
                    Our team conducting precision flight tests and data collection
                    missions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:col-span-2 lg:col-span-3">
              {[
                { number: '150+', label: 'Active Members' },
                { number: '25+', label: 'Projects Completed' },
                { number: '10+', label: 'Competitions Won' },
                { number: '6', label: 'Years of Excellence' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border text-center p-6">
                    <div className="text-3xl font-display font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you’re just starting out or an experienced developer eager to
              innovate, our club welcomes you to explore, create, and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Join the Club button (no link) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon px-8 py-4 rounded-lg font-semibold"
              >
                Join the Club
              </motion.button>

              {/* Contact Us button with LinkedIn link */}
              <motion.a
                href="https://www.linkedin.com/company/drone-iot-club-mmmut/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary-neon px-8 py-4 rounded-lg font-semibold"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
