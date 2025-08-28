import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import DroneModel3D from '@/components/DroneModel3D';
import { ArrowRight, Plane, Settings, Printer, Network,Bot, CpuIcon,FanIcon} from 'lucide-react';
import heroImage from '@/assets/hero-drone.jpg';
import facultyImage from '@/assets/faculty-advisor.jpg';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workAreas = [
    {
      icon:FanIcon,
      title: 'Multirotor Drones',
      description: 'Design and build advanced quadcopter and hexacopter drones with cutting-edge flight control systems.',
    }, {
      icon: Bot,
      title: 'AI WORKSHOP',
      description: 'Learn AI concepts and robotics integration.Apply AI to real-world drone applications.',
    }, {
      icon: Network,
      title: 'IOT WORKSHOP',
      description: 'Explore IoT devices and smart systems.Connect drones and sensors seamlessly.',
    },
    {
      icon: Plane,
      title: 'Fixed-Wing Drones',
      description: 'Develop efficient fixed-wing aircraft for long-range missions and advanced aerial applications.',
    },
    {
      icon: Printer,
      title: '3D Printing',
      description: 'Create custom drone components and prototypes using state-of-the-art 3D printing technology.',
    },
     {
      icon: CpuIcon,
      title: 'AND MANY MORE',
      description: 'Discover exciting projects beyond drones.Innovate with tech, AI, and robotics.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-full parallax-bg"
        style={{
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: `translateY(${scrollY * 0.5}px)`,
}}

        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text"
          >
            Welcome to the Drone & IoT Club
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium"
          >
            Innovating the Skies, One Drone at a Time
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="btn-neon text-lg px-8 py-6">
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

{/* 3D Drone Model Section */}
     <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Interactive Drone Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge drone technology in 3D. Watch as our virtual drone 
            demonstrates the precision and innovation that drives our club forward.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-full h-[400px] bg-background-secondary rounded-xl overflow-hidden">
            <DroneModel3D />
          </div>
        </motion.div>
      </div>
    </section>

      {/* Areas of Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Our Areas of Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to flight, we cover every aspect of drone technology and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border-border card-hover cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Advisor Message */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                      Message from Faculty Advisor
                    </h2>
                 
                    <p className="text-muted-foreground leading-relaxed mb-6">
                       "As the Faculty Advisor and Head of the Department of Electronics & Communication Engineering at Madan Mohan Malaviya University of Technology,
                       I am dedicated to ensuring that our students receive the highest quality education.
                       Our department is at the forefront of research in Wireless Communication and 5G Networks,
                       and we strive to impart both theoretical knowledge and practical skills to help students thrive in these rapidly evolving fields.
                       I take pride in the success of our students and look forward to continuing our mission of academic excellence and research-driven education.
                       "
                      
                    </p>
                       <p className="text-muted-foreground leading-relaxed">
                       Warm regards,<br />
                       Prof. S.K. Soni<br />
                  
                    </p>
                 
                  </div>
                 <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
 
  <div className="relative w-64">
    <img
      src={facultyImage}
      alt="Prof. S.K. SONI"
      className="w-64 h-64 object-cover rounded-xl shadow-card"
    />
    <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-10" />
  </div>
<br /> <br />
  <p className="mt-3 w-64 text-center lg:text-right font-semibold text-muted-foreground leading-relaxed break-words">
   <h3 className="text-xl font-semibold text-primary mb-4">
                      Prof. S.K. SONI
                    </h3>
    Head of Department<br />
    Electronics and Communication Department
  </p>
</div>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
