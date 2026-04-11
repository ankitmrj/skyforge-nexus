import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Lightbulb, Code, Users, Trophy, Target, Network,
  User, Crown, CheckCircle, FileText, Search, Zap, UserCheck, Users2
} from "lucide-react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    interests: [] as string[],
    experience: "",
    motivation: "",
    agreedToTerms: false
  });

  const handleInterestChange = (interest: string, checked: boolean | "indeterminate") => {
    setFormData(prev => ({
      ...prev,
      interests: checked === true
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Join Our Mission
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a community shaping the future through innovation. Learn, build, and lead in drone technology and IoT.
          </p>
          <Button className="btn-neon text-lg px-8 py-3"onClick={() => window.open("https://www.linkedin.com/company/drone-iot-club-mmmut/", "_blank")}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why Join
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hands-on Learning", icon: Lightbulb, desc: "Work with cutting-edge drone technology, IoT systems, and AI/ML projects." },
              { title: "Technical Skills", icon: Code, desc: "Develop expertise in programming, electronics, and system integration." },
              { title: "Collaborative Environment", icon: Users, desc: "Work with like-minded peers and learn from experienced mentors." },
              { title: "Competition Opportunities", icon: Trophy, desc: "Participate in national and international competitions and hackathons." },
              { title: "Leadership Development", icon: Target, desc: "Take on leadership roles and develop project management skills." },
              { title: "Industry Connections", icon: Network, desc: "Network with industry professionals and alumni in the tech sector." },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Levels Section
      <section className="py-16 px-4" style={{ background: "var(--secondary-glow / 0.1)" }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Membership Levels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Associate Member",
                icon: User,
                duration: "1 Semester",
                hours: "2-3 hours/week",
                description: "Perfect for beginners wanting to explore drone and IoT technologies.",
                benefits: ["Access to workshops and tutorials", "Basic project participation", "Mentorship from senior members", "Technical skill development"],
                requirements: ["Basic interest in technology", "Regular workshop attendance", "Complete one small project"],
              },
              {
                title: "Core Member",
                icon: Users2,
                duration: "2+ Semesters",
                hours: "5-7 hours/week",
                description: "For dedicated members ready to take on significant projects and responsibilities.",
                popular: true,
                benefits: ["Lead project teams", "Competition participation", "Advanced workshop access", "Research opportunities", "Industry mentorship"],
                requirements: ["6 months as Associate Member", "Complete 2+ projects", "Technical assessment", "Interview with leadership"],
              },
              {
                title: "Team Lead",
                icon: Crown,
                duration: "1+ Year",
                hours: "8-10 hours/week",
                description: "Leadership positions for experienced members who can guide teams and projects.",
                benefits: ["Team management experience", "Strategic planning involvement", "External representation", "Industry networking", "Mentorship responsibilities"],
                requirements: ["1+ year as Core Member", "Demonstrated leadership", "Technical expertise", "Committee approval"],
              }
            ].map((level, index) => (
              <Card key={index} className="bg-card border-border card-hover relative">
                {level.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <level.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl text-primary">{level.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{level.duration}</div>
                      <div className="text-sm font-medium text-primary">{level.hours}</div>
                    </div>
                  </div>
                  <CardDescription>{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {level.benefits.map((b, i) => <li key={i}>• {b}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {level.requirements.map((r, i) => <li key={i}>• {r}</li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}
{/* Application Process Section */}
<section className="py-16 px-4 bg-gray-950">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold text-center mb-12 text-sky-400">
      Application Process
    </h2>

    {/* GRID - Bas 2 stage: <767px => 1 column, >=768px => 5 columns */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {[
        {
          step: 1,
          title: "Application Submission",
          description:
            "Fill out the online application form with your details and interests.",
          timeline: "Ongoing",
        },
        {
          step: 2,
          title: "Initial Screening",
          description:
            "Review of application and basic eligibility criteria.",
          timeline: "1-2 days",
        },
        {
          step: 3,
          title: "Technical Assessment",
          description:
            "Basic aptitude test and technical knowledge evaluation.",
          timeline: "1 week",
        },
        {
          step: 4,
          title: "Interview",
          description:
            "Personal interview with club leadership and current members.",
          timeline: "2-3 days",
        },
        {
          step: 5,
          title: "Induction",
          description:
            "Welcome session and orientation program for new members.",
          timeline: "Next session",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="rounded-xl border border-sky-500/30 hover:border-sky-400 transition-all duration-300 p-8 flex flex-col items-center text-center bg-gray-900"
        >
          {/* Step Number Circle */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-gray-900 font-bold text-lg mb-4 shadow-lg border border-sky-400">
            {step.step}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-sky-400 mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-3">{step.description}</p>

          {/* Timeline Badge */}
          <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs border border-gray-700">
            {step.timeline}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>


      {/*

      Application Form Section
      <section className="py-16 px-4" style={{ background: "var(--secondary-glow / 0.1)" }}>
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Join the Drone & IoT Club</CardTitle>
              <CardDescription>
                Fill out the form below to start your journey with us. We'll get back to you within 48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} className="input-neon" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} className="input-neon" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="input-neon" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} className="input-neon" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Select value={formData.branch} onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}>
                      <SelectTrigger><SelectValue placeholder="Select your branch" /></SelectTrigger>
                      <SelectContent>
                        {["cse","ece","ee","me","ce","other"].map(b => (
                          <SelectItem key={b} value={b}>{b.toUpperCase()}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Current Year</Label>
                    <Select value={formData.year} onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}>
                      <SelectTrigger><SelectValue placeholder="Select your year" /></SelectTrigger>
                      <SelectContent>
                        {["1","2","3","4"].map(y => <SelectItem key={y} value={y}>{y} Year</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Drone Technology", "IoT Systems", "AI/ML", "Robotics", "Web Development", "Mobile Apps"].map(interest => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={interest} checked={formData.interests.includes(interest)} onCheckedChange={(checked) => handleInterestChange(interest, checked)} />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Experience</Label>
                  <Textarea id="experience" placeholder="Tell us about any relevant experience..." value={formData.experience} onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))} rows={3} className="input-neon" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join?</Label>
                  <Textarea id="motivation" placeholder="Share your motivation for joining..." value={formData.motivation} onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))} rows={3} className="input-neon" required />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={formData.agreedToTerms} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToTerms: checked === true }))} required />
                  <Label htmlFor="terms" className="text-sm">I agree to the club's terms and commit to active participation</Label>
                </div>

                <Button type="submit" className="btn-neon w-full">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>*/}

      {/* FAQ Section */}
<section className="py-16 px-4">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-center mb-12 text-tech-blue">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {[
        {
          question: "Do I need prior experience with drones or IoT?",
          answer: "No prior experience is required! We welcome beginners and provide comprehensive training from the basics to advanced concepts."
        },
        {
          question: "What is the time commitment?",
          answer: "It varies by membership tier. Associate members typically commit 2-3 hours per week, while core members dedicate 5-7 hours weekly."
        },
        {
          question: "Are there any fees?",
          answer: "Basic membership is free. Some specialized workshops or competition participation may have nominal fees for materials and components."
        },
        {
          question: "Can I join mid-semester?",
          answer: "Yes! We accept applications throughout the year, though joining at the beginning of a semester is ideal for following structured programs."
        },
        {
          question: "What programming languages should I know?",
          answer: "Python, C++, and JavaScript are commonly used. However, we provide training in these languages as part of our curriculum."
        }
      ].map((faq, index) => (
        <Card key={index} className="bg-card border-border card-hover">
          <CardHeader>
            <CardTitle className="text-lg text-tech-blue">{faq.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{faq.answer}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default JoinUs;
