import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clubLogo from '@/assets/club-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'Teams', path: '/teams' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={clubLogo}
                alt="Drone & IoT Club"
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-bold text-xl text-primary">
                Drone & IoT Club
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovating the skies, one drone at a time. We're passionate about 
              drone technology, IoT innovations, and pushing the boundaries of 
              what's possible in aerial robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:contact@droneiotclub.edu"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contact@droneiotclub.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+91-9876543210"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91-98765-43210
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-foreground">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-4 border-primary/20 hover:border-primary hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Drone & IoT Club. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with passion for innovation and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;