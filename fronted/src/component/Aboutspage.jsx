import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Users,
  Award,
  Heart,
  Sparkles,
  Library,
  BookMarked,
  Globe
} from 'lucide-react';

import liahImg from '../assets/liah.jpg';
import heroVideo from '../assets/265731_large.mp4';

const AboutsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: BookOpen, value: '1000+', label: 'Books Available', color: 'text-amber-500' },
    { icon: Users, value: '5000+', label: 'Active Readers', color: 'text-blue-500' },
    { icon: Award, value: '100+', label: 'Premium Authors', color: 'text-emerald-500' },
    { icon: Heart, value: '10L+', label: 'Books Read', color: 'text-rose-500' }
  ];

  const features = [
    {
      icon: Library,
      title: 'Vast Collection',
      description: 'Access thousands of books across all genres from classic literature to modern bestsellers.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with readers worldwide, share reviews, and discover new literary adventures.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookMarked,
      title: 'Personalized Experience',
      description: 'Get tailored recommendations based on your reading preferences and history.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Enjoy carefully curated content with professional formatting and illustrations.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const team = [
    {
      name: 'Samantha',
      role: 'Founder & CEO',
      image: 'https://www.telugubulletin.com/wp-content/uploads/2023/04/Samantha-1.jpg'
    },
    {
      name: 'Katrina Kaif',
      role: 'Head of Curation',
      image: 'https://www.dpirates.com/src/images/actress/pimg/14-03-2020-3491-katrina-kaif.jpg'
    },
    {
      name: 'Liah Gotti',
      role: 'Community Manager',
      image: liahImg // local image fixed
    },
    {
      name: 'Mrunal',
      role: 'Tech Lead',
      image: 'https://www.celebsfacts.com/wp-content/uploads/2023/08/Mrunal-Thakur.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* HERO SECTION */}
        <div className="relative overflow-hidden text-white py-24 bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block animate-bounce mb-6">
                <BookOpen className="w-16 h-16 mx-auto" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                  LibraryHub
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-teal-200">
                Your Gateway to Endless Literary Adventures
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['📚', '✒️', '🌟', '📖', '💫'].map((emoji, index) => (
                  <span
                    key={index}
                    className="text-4xl animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z"
                fill="#24f0c0"
              />
            </svg>
          </div>
        </div>

        {/* STATS */}
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-teal-100 shadow-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-purple-500"
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mb-4 mx-auto animate-pulse`} />
                <h3 className="text-3xl text-pink-500 font-bold mb-2">{stat.value}</h3>
                <p className="text-fuchsia-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STORY SECTION */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                  Story
                </span>
              </h2>

              <p className="text-lg">
                LibraryHub was born from a passion for making literature accessible to everyone.
              </p>

              <p className="text-lg">
                Books connect cultures, ignite imagination, and expand knowledge — and we help bring them to you.
              </p>

              <div className="flex gap-4 pt-4">
                {['Innovation', 'Quality', 'Community'].map((item, i) => (
                  <div
                    key={i}
                    className={`badge badge-lg bg-gradient-to-r p-4 text-white border-0 ${
                      i === 0
                        ? 'from-blue-500 to-cyan-500'
                        : i === 1
                        ? 'from-amber-500 to-orange-500'
                        : 'from-emerald-500 to-teal-500'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-amber-400 rounded-3xl rotate-6 opacity-20"></div>

              <img
                src="https://i.pinimg.com/736x/30/16/06/30160603ab6de41a76c3437b4231b070.jpg"
                alt="Library"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                LibraryHub?
              </span>
            </h2>

            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              Discover the features that make us the preferred choice for readers worldwide
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto border p-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-teal-400 cursor-pointer hover:-translate-y-2 transition-all"
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-transform ${
                      activeCard === i ? 'scale-110 rotate-12' : ''
                    }`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
              Team
            </span>
          </h2>

          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Dedicated professionals committed to delivering the best reading experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 rounded-2xl rotate-6 group-hover:rotate-12 opacity-25 transition-transform"></div>

                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all transform group-hover:-translate-y-2">
                  <div className="h-70 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-amber-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsPage;
