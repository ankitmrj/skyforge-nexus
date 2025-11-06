import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Printer, Network, Bot, CpuIcon, FanIcon } from "lucide-react";

import heroImage from "@/assets/hero-drone.jpg";
import facultyImage from "@/assets/faculty-advisor.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.png";
import event3 from "@/assets/event3.jpg";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Event Carousel Data
  const eventDays = [
    {
      day: "Day 1",
      title: "Inauguration Ceremony",
      description:
        "The grand opening of SwiftWings 2025 featuring keynote speeches, drone showcases, and an inspiring start to the event.",
      image: event1,
    },
    {
      day: "Day 2",
      title: "Assembly & Preparation",
      description:
        "Teams assemble their drones and prepare them for performance tests, innovation displays, and flight-readiness evaluations.",
      image: event2,
    },
    {
      day: "Day 3",
      title: "Testing & Flight",
      description:
        "Final testing day with real-time flight demonstrations and performance scoring by the judges.",
      image: event3,
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventDays.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [eventDays.length]);

  const workAreas = [
    {
      icon: FanIcon,
      title: "Multirotor Drones",
      description:
        "Design and build advanced quadcopter and hexacopter drones with cutting-edge flight control systems.",
    },
    {
      icon: Bot,
      title: "AI Workshop",
      description:
        "Learn AI concepts and robotics integration. Apply AI to real-world drone applications.",
    },
    {
      icon: Network,
      title: "IoT Workshop",
      description:
        "Explore IoT devices and smart systems. Connect drones and sensors seamlessly.",
    },
    {
      icon: Plane,
      title: "Fixed-Wing Drones",
      description:
        "Develop efficient fixed-wing aircraft for long-range missions and advanced aerial applications.",
    },
    {
      icon: Printer,
      title: "3D Printing",
      description:
        "Create custom drone components and prototypes using state-of-the-art 3D printing technology.",
    },
    {
      icon: CpuIcon,
      title: "And Many More",
      description:
        "Discover exciting projects beyond drones. Innovate with tech, AI, and robotics.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
        <div
          className="absolute inset-0 w-full h-full parallax-bg"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
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
            <Button
              onClick={() =>
                window.open("https://sw-leaderboard-three.vercel.app/", "_blank")
              }
              size="lg"
              className="btn-neon text-lg px-8 py-6"
            >
              Leaderboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

     {/* ================= EVENT CAROUSEL SECTION (Split Layout) ================= */}
<section className="py-20 bg-background-secondary">
  <div className="container mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-12 text-center"
    >
      SwiftWings 2025 – Event Highlights
    </motion.h2>

    <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden">
      {/* Left Side – Image (2/3 width) */}
      <motion.div
        key={eventDays[currentSlide].image}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-2/3 h-[400px] lg:h-[670px]"
      >
        <img
          src={eventDays[currentSlide].image}
          alt={eventDays[currentSlide].title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Side – Text (1/3 width) */}
      <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
        <motion.h3
          key={eventDays[currentSlide].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-primary"
        >
          {eventDays[currentSlide].day}: {eventDays[currentSlide].title}
        </motion.h3>

        <motion.p
          key={eventDays[currentSlide].description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {eventDays[currentSlide].description}
        </motion.p>

        {/* Slide Indicators */}
        <div className="flex justify-center lg:justify-start space-x-3 mt-6">
          {eventDays.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ================= AREAS OF WORK ================= */}
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

      {/* ================= FACULTY MESSAGE ================= */}
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
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                      Message from Faculty Advisor
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "As the Faculty Advisor and Head of the Department of Electronics & Communication Engineering at Madan Mohan Malaviya University of Technology,
                      I am dedicated to ensuring that our students receive the highest quality education..."
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Warm regards,<br /> Prof. S.K. Soni
                    </p>
                  </div>

                  <div className="flex flex-col items-center lg:items-end">
                    <div className="relative w-64">
                      <img
                        src={facultyImage}
                        alt="Prof. S.K. Soni"
                        className="w-64 h-64 object-cover rounded-xl shadow-card"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mt-4">
                      Prof. S.K. SONI
                    </h3>
                    <p className="text-muted-foreground">
                      Head of Department<br />
                      Electronics and Communication Engineering
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
