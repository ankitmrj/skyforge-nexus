'use client';

// Importing required libraries and components

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Teams = () => {
  const final_year = [
    {
      name: 'Vijit Bhadana',
      position: 'President',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/VijitBhadana.png',
      linkedin: '#',
    },
    {
      name: 'Ujjwal Kumar',
      position: 'Vice-President',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/UjjwalKumar.png',
      linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-3446a325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Ayush Kannojia',
      position: 'Vice-President',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/AyushKannojia.jpeg',
      linkedin: 'https://www.linkedin.com/in/ayush-kannojia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Devesh Yadav',
      position: 'Vice-President',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/DeveshYadav.jpg',
      linkedin: 'https://www.linkedin.com/in/y-devesh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Utkarsh Kumar',
      position: 'Treauserer',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/UtkarshKumar.jpg',
      linkedin: 'https://www.linkedin.com/in/utkarsh-kumar-76a03a2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Vishal Singh',
      position: 'Treauserer',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/VishalSingh.png',
      linkedin: 'https://www.linkedin.com/in/vishal-singh-53139225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Khushi Dubey',
      position: 'Social Media Head',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/KhushiDubey.png',
      linkedin: 'https://www.linkedin.com/in/khushi-dubey-8a57732ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Himanshu Patwa',
      position: 'Social Media Head',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/HimanshuPatwa.jpg',
      linkedin: 'https://www.linkedin.com/in/himanshu-patwa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Shreya Pandey',
      position: 'Sponsorship Head',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/ShreyaPandey.png',
      linkedin: 'https://www.linkedin.com/in/shreya-pandey-040709272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Amisha',
      position: 'Event Head',
      branch:'Electronics and Communication Engineering',
      image: '/final-year/Amisha.png',
      linkedin: '#',
    },];
  const third_year=[   {
    name: 'Vaishnavi Khare',
      position: 'Secretary',
    branch:'Electronics and Communication Engineering',
      image: '/third-year/VaishnaviKhare.jpg',
      linkedin: 'https://www.linkedin.com/in/vaishnavi-khare-91354229b/',
    },
    {
      name: 'Priyanshu Kashyap',
      position: 'Joint Secretary',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/PriyanshuKashyap.jpg',
      linkedin: 'https://www.linkedin.com/in/priyanshu-kashyap-8a2392209/',
    },
    {
      name: 'Aman Jaiswal',
      position: 'Joint Secretary',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AmanJaiswal.jpg',
      linkedin: 'https://www.linkedin.com/in/amanjais00/',
    },
    {
      name: 'Pranjal Mishra',
      position: 'Finance Secretary',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/PranjalMishra.png',
      linkedin: 'https://www.linkedin.com/in/pranjalmishra2601/',
    },
    {
      name: 'Paras Varshrey',
      position: 'Finance Secretary',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/ParasVarshney.jpg',
      linkedin: 'https://www.linkedin.com/in/paras-varshney-076244294/',
    },
    {
      name: 'Abhishek Shakya',
      position: 'Event Coordination',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AbhishekShakya.jpg',
      linkedin: 'https://www.linkedin.com/in/abhishek-shakya-42bab8212/',
    },
    {
      name: 'Tanmay Tripathi',
      position: 'Event Coordination',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/TanmayTripathi.jpg',
      linkedin: '#',
    },
    {
      name: 'Tejaswi',
      position: 'Lead Graphics',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/Tejaswi.jpg',
      linkedin: '#',
    },
    {
      name: 'Akash Chaturvedi',
      position: 'Lead Multirotor',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AkashChaturvedi.png',
      linkedin: 'https://www.linkedin.com/in/thyakash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Akarsh Tiwari',
      position: 'Lead Fixed Wing/AI',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AkarshTiwari.jpg',
      linkedin: 'https://www.linkedin.com/in/akarsh-tiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Rajneesh Yadav',
      position: 'Lead Robotics',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/RajneeshYadav.jpg',
      linkedin: 'https://www.linkedin.com/in/rajneesh0507?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Divyanshi Sonkar',
      position: 'Lead Publicity',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/DivyanshiSonkar.jpg',
      linkedin: 'https://www.linkedin.com/in/divyanshi-sonkar-00aa892a4/',
    },
    {
      name: 'Vishu Srivastava',
      position: 'Lead Team IoT',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/VishuSrivastava.png',
      linkedin: 'https://www.linkedin.com/in/vishutx/',
    },
    {
      name: 'Ashish Pathak',
      position: 'Lead Sponsorship',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AshishPathak.jpg',
      linkedin: '#',
    },
    {
      name: 'Sonu Chaudhary',
      position: 'Lead Editorial',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/SonuChaudhary.jpg',
      linkedin: '#',
    },
     {
      name: 'Ankit Srivastav',
      position: 'Lead Web Development',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AnkitSrivastav.JPG',
      linkedin: '#',
    },
    {
      name: 'Shivansh Singh',
      position: 'Co-Lead Fixed Wing',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/ShivanshSingh.jpg',
      linkedin: '#',
    },
    {
      name: 'Shreyansh Singh Sengar',
      position: 'Co-Lead Fixed Wing',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/ShreyanshSinghSengar.jpeg',
      linkedin: 'https://www.linkedin.com/in/shreyansh-singh-sengar-953aa0306/',
    },
    {
      name: 'Ayush Shukla',
      position: 'Co-Lead IoT',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/AyushShukla.jpg',
      linkedin: '#',
    },
     {
      name: 'Shristi Dixit',
      position: 'Co-Lead web Dev',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/ShristiDixit.jpg',
      linkedin: 'https://www.linkedin.com/in/shristi-dixit-6226442a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Anshika Kumari',
      position: 'Co-Lead Web Dev',
      branch:'Electronics and Communication Engineering',
      image: '/third-year/Anshika.jpg',
      linkedin: '#',
    },
  ];

const second_year=[   {
  name: 'Aditya Tiwari',
      image: 'second-year/Aditya.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/aditya-tiwari-5601172b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Akshat Mishra',
      image: 'second-year/Akshat2.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/akshat-mishra-b65a09264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Bhavya Agarwal',
      image: 'second-year/Bhavya.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/bhavya-agrawal-46b8312b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Pari Singh',
      image: 'second-year/Pari.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/pari-singh-46770a329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Sanya Chaudhary',
      image: 'second-year/Shanya.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://in.linkedin.com/in/sanya-chaudhary-a78070331',
    },
    {
      name: 'Utkrisht Srivastava',
      image: 'second-year/Utkrisht.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/utkrisht099/',
    },
    {
      name: 'Shreya Rawat',
      image: 'second-year/ShreyaRawat.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/shreya-rawat-801891310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Mradul Singh',
      image: 'second-year/Mradul.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/mradulsingh09',
    },
    {
      name: 'Rasshi Ashish Srivastav',
      image: 'second-year/Rasshi2.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/rasshi-ashish-srivastav-055a812a1',
    },
    {
      name: 'Alok Kumar',
      image: 'second-year/Alok.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/alok-kumar-5a6141303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Shreya Srivastava',
      image: 'second-year/Shreya.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/shreya-srivastava-7569a9285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Ayushi Verma',
      image: 'second-year/Ayushi.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/ayushi-verma-95a6a933b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Adarsh Tripathi',
      image: 'second-year/Adarsh.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/adarsh-tripathi-2b310429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Divyansh Singh',
      image: 'second-year/Divyansh.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/divyansh-singh-527151370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Chandramauli Patel',
      image: 'second-year/CM.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/chandramauli-patel-261436327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
     {
      name: 'Manas Manish',
      image: 'second-year/Manas.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/manash-manish-a29250327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Saurabh Kumar',
      image: 'second-year/Saurabh.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/saurabh-kumar-5139b5314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Ayush Kumar Chaubey',
      image: 'second-year/Ayush.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/ayush-kumar-chaubey-561a942b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Mansi Patel',
      image: 'second-year/Mansi.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/mansi-patel-856644331',
    },
    {
      name: 'Anjali Singh',
      image: 'second-year/Anjali.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/anjali-singh-993b3630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
     {
      name: 'Abhishek Tiwari',
      image: 'second-year/Abhishek.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/abhishek-tiwari-2500b2349',
    },
    {
      name: 'Nyasi',
      image: 'second-year/Nyasi.jpg',
      branch:'Electronics and Communication Engineering',
      linkedin: 'https://www.linkedin.com/in/nyasi-b365b0327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ];

  // Reusable slide card (same markup as pehle)
const MemberCard = (member: { name: string; position?: string; branch?: string; image: string; linkedin: string }) => (
  <Card className="bg-card border-border card-hover overflow-hidden group relative">
    <div className="relative overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Subtle Blue Overlay (lighter + professional) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* LinkedIn Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          <Linkedin className="h-5 w-5 text-primary-foreground" />
        </a>
      </div>

      {/* Branch Info: slide-in left → right
      <div className="absolute bottom-0 left-0 right-0 -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-600/70 text-white p-3 text-sm">
        {member.branch}
      </div>*/}
    </div> 

    {/* Content */}
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-display font-semibold mb-1 text-foreground">
        {member.name}
      </h3>
      {member.position && (
        <p className="text-primary text-sm font-medium mb-1">
          {member.position}
        </p>
      )}
    </CardContent>
  </Card>
);



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
Meet the visionaries behind our Club — driven by curiosity, innovation, and a passion for shaping the future of smart technologies
            </p>
          </motion.div>
        </div>
      </section>
      
 {/* ---------- FINAL YEAR ---------- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Final Year
          </h2>

          {/* 👉 Mobile & Tablet → Slider */}
          <div className="lg:hidden">
            <Swiper
  modules={[FreeMode, Mousewheel, Navigation]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  freeMode={{
    enabled: true,
    momentum: true,
    momentumRatio: 0.45,
    momentumVelocityRatio: 0.9,
    minimumVelocity: 0.02,
    sticky: false,
  }}
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: true,
    sensitivity: 0.6,
  }}
  grabCursor={true}
  spaceBetween={20}
  slidesPerView={1.2}   // 👈 mobile ke liye by default
  breakpoints={{
    480: { slidesPerView: 1.5 }, // thoda bada mobile
    640: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
    1280: { slidesPerView: 4 },  // large desktop
  }}
>

              {final_year.map((member, index) => (
                <SwiperSlide key={`final-${index}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {MemberCard(member)}
                  </motion.div>
                </SwiperSlide>
              ))}
              {/* navigation buttons */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>

          {/* 👉 Large screens → 5×2 grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {final_year.map((member, index) => (
              <motion.div
                key={`final-grid-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {MemberCard(member)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THIRD YEAR ---------- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Pre-Final Year
          </h2>
          <Swiper
  modules={[FreeMode, Mousewheel, Navigation]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  freeMode={{
    enabled: true,
    momentum: true,
    momentumRatio: 0.45,
    momentumVelocityRatio: 0.9,
    minimumVelocity: 0.02,
    sticky: false,
  }}
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: true,
    sensitivity: 0.6,
  }}
  grabCursor={true}
  spaceBetween={20}
  slidesPerView={1.2}   // 👈 mobile ke liye by default
  breakpoints={{
    480: { slidesPerView: 1.5 }, // thoda bada mobile
    640: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
    1280: { slidesPerView: 4 },  // large desktop
  }}
>

            {third_year.map((member, index) => (
              <SwiperSlide key={`third-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {MemberCard(member)}
                </motion.div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </section>

      {/* ---------- SECOND YEAR ---------- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">
            Second Year – Executive Members
          </h2>
          <Swiper
  modules={[FreeMode, Mousewheel, Navigation]}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  freeMode={{
    enabled: true,
    momentum: true,
    momentumRatio: 0.45,
    momentumVelocityRatio: 0.9,
    minimumVelocity: 0.02,
    sticky: false,
  }}
  mousewheel={{
    forceToAxis: true,
    releaseOnEdges: true,
    sensitivity: 0.6,
  }}
  grabCursor={true}
  spaceBetween={20}
  slidesPerView={1.2}   // 👈 mobile ke liye by default
  breakpoints={{
    480: { slidesPerView: 1.5 }, // thoda bada mobile
    640: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
    1280: { slidesPerView: 4 },  // large desktop
  }}
>

            {second_year.map((member, index) => (
              <SwiperSlide key={`second-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {MemberCard(member)}
                </motion.div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </section>


{/* Join the Team Section */}
<section className="py-20 bg-gradient-to-r from-background via-background-secondary to-background">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
        🚀 Want to Join Our Team?
      </h2>

      {/* Subheading */}
<p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
  The Drone & IoT Club is a space to explore 
  <span className="text-primary font-semibold"> emerging technologies, creative ideas, and teamwork</span>.  
  Together, we learn, experiment, and bring visions to life.
</p>

<p className="text-md md:text-lg text-muted-foreground">
  To learn more, <a href="/about" className="text-primary font-semibold hover:underline">click here</a>.
</p>


      {/* CTA Button with LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/company/drone-iot-club-mmmut"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group btn-neon px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 text-lg tracking-wide shadow-md hover:shadow-xl transition-all"
      >
        Learn More
        {/* LinkedIn icon (hidden by default, appears on hover) */}
        <Linkedin className="w-5 h-5 opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </motion.a>
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