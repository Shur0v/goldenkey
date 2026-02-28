'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  Star, 
  Shield, 
  Clock, 
  MapPin, 
  Calendar, 
  Car, 
  Phone, 
  Globe,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

// --- Mock Data ---
const FEATURED_CARS = [
  {
    id: 1,
    name: 'Range Rover Sport',
    category: 'Luxury SUV',
    price: 1200,
    image: 'https://picsum.photos/seed/rr-sport-2024/800/600',
    specs: { transmission: 'Auto', seats: 5, fuel: 'Petrol' },
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: 'Mercedes G63 AMG',
    category: 'Super Luxury',
    price: 2500,
    image: 'https://picsum.photos/seed/g63-amg-black/800/600',
    specs: { transmission: 'Auto', seats: 5, fuel: 'Petrol' },
    rating: 5.0,
    reviews: 89
  },
  {
    id: 3,
    name: 'Tesla Model Y',
    category: 'Electric',
    price: 450,
    image: 'https://picsum.photos/seed/tesla-white-2024/800/600',
    specs: { transmission: 'Auto', seats: 5, fuel: 'Electric' },
    rating: 4.8,
    reviews: 210
  }
];

const CATEGORIES = [
  { name: 'Luxury', image: 'https://picsum.photos/seed/luxury-car-interior/600/400', count: 12 },
  { name: 'SUVs', image: 'https://picsum.photos/seed/suv-desert/600/400', count: 24 },
  { name: 'Sports', image: 'https://picsum.photos/seed/sports-car-track/600/400', count: 8 },
  { name: 'Electric', image: 'https://picsum.photos/seed/ev-charging/600/400', count: 15 },
];

const TESTIMONIALS = [
  {
    name: 'James Wilson',
    role: 'Business Traveler',
    content: 'The G63 was in pristine condition. Golden Key made my Dubai business trip seamless and stylish.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    car: 'Mercedes G63'
  },
  {
    name: 'Sarah Al-Maktoum',
    role: 'Local Resident',
    content: 'Best rental service in the UAE. The Range Rover delivery to my home was perfectly on time.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    car: 'Range Rover Sport'
  },
  {
    name: 'David Chen',
    role: 'Tourist',
    content: 'Renting a Tesla was the highlight of our trip. Charging was easy and the car was spotless.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    car: 'Tesla Model Y'
  }
];

const LOCATIONS = [
  { name: 'Dubai Int. Airport', address: 'Terminal 1 & 3, Arrivals', phone: '+971 4 123 4567' },
  { name: 'Business Bay', address: 'The Opus by Omniyat, Dubai', phone: '+971 4 765 4321' },
  { name: 'Abu Dhabi Airport', address: 'Main Terminal, Arrivals', phone: '+971 2 111 2222' },
];

// --- Components ---

const Navbar = ({ isArabic, setIsArabic }: { isArabic: boolean, setIsArabic: (v: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Car className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            GOLDEN KEY
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {['Fleet', 'Categories', 'How it Works', 'Locations', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <div className="h-4 w-px bg-stone-300/30 mx-2" />
          <button 
            onClick={() => setIsArabic(!isArabic)}
            className={`flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full border ${isScrolled ? 'border-stone-200 text-stone-700' : 'border-white/20 text-white'}`}
          >
            <Globe className="w-4 h-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-amber-500/20">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold text-stone-900">GOLDEN KEY</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-stone-900" /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-bold text-stone-900">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Fleet</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Categories</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Locations</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>About</a>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full bg-amber-500 text-white py-4 rounded-2xl font-bold">Book Now</button>
              <button onClick={() => { setIsArabic(!isArabic); setMobileMenuOpen(false); }} className="w-full border border-stone-200 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" /> {isArabic ? 'English' : 'العربية'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ isArabic }: { isArabic: boolean }) => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/dubai-luxury-car/1920/1080" 
          alt="Luxury Car in Dubai" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              Experience the Extraordinary
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] mb-8 tracking-tight">
              Drive the <span className="text-amber-500 italic">Future</span> of Luxury.
            </h1>
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl">
              Golden Key offers an unparalleled fleet of high-performance vehicles, delivered with white-glove service across the UAE.
            </p>
          </motion.div>

          {/* Search Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl p-2 rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col md:flex-row items-stretch gap-2"
          >
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="p-5 hover:bg-white/10 rounded-2xl transition-colors cursor-pointer group">
                <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Pickup Location</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-semibold text-white">Dubai Int. Airport</span>
                </div>
              </div>
              <div className="p-5 hover:bg-white/10 rounded-2xl transition-colors cursor-pointer group">
                <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">Rental Dates</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-semibold text-white">Select Dates</span>
                </div>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group shadow-xl shadow-amber-500/20">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Find Your Car
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] text-white font-bold uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const CarCard = ({ car }: { car: typeof FEATURED_CARS[0] }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={car.image} 
          alt={car.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-stone-800">
          {car.category}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-1">{car.name}</h3>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold text-stone-600">{car.rating} ({car.reviews} reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider">Per Day</span>
            <span className="text-2xl font-black text-amber-600">AED {car.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-6 border-y border-stone-50 mb-6">
          <div className="flex flex-col items-center gap-1">
            <Car className="w-4 h-4 text-stone-400" />
            <span className="text-[10px] font-bold text-stone-500 uppercase">{car.specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-4 h-4 text-stone-400" />
            <span className="text-[10px] font-bold text-stone-500 uppercase">{car.specs.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-4 h-4 text-stone-400" />
            <span className="text-[10px] font-bold text-stone-500 uppercase">Insured</span>
          </div>
        </div>

        <button className="w-full bg-stone-50 group-hover:bg-amber-500 group-hover:text-white text-stone-900 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
          Book Now
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const items = [
    { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive coverage for peace of mind.' },
    { icon: Clock, title: '24/7 Support', desc: 'Our team is always ready to assist you.' },
    { icon: MapPin, title: 'Free Delivery', desc: 'We deliver to your doorstep or airport.' },
    { icon: CheckCircle2, title: 'No Hidden Fees', desc: 'Transparent pricing with no surprises.' },
  ];

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose Golden Key?</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">We redefine the rental experience with premium service and a world-class fleet.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors">
                <item.icon className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CategorySection = () => {
  return (
    <section id="categories" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
              Browse by <span className="text-amber-500">Category</span>
            </h2>
            <p className="text-stone-500 text-lg">
              Whether it&apos;s a desert adventure or a city cruise, we have the perfect ride.
            </p>
          </div>
          <button className="text-stone-900 font-bold hover:text-amber-500 transition-colors flex items-center gap-2">
            View All Categories <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-80 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                <span className="text-white/60 text-sm font-medium">{cat.count} Vehicles Available</span>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { icon: Search, title: 'Choose Your Car', desc: 'Browse our elite fleet and select your dream vehicle.' },
    { icon: Calendar, title: 'Pick Your Dates', desc: 'Select your rental period and pickup location.' },
    { icon: Shield, title: 'Secure Booking', desc: 'Confirm with a small deposit via our secure gateway.' },
    { icon: Car, title: 'Get Your Keys', desc: 'We deliver the car to you, or pick it up at our hub.' },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6">Simple. Fast. <span className="text-amber-500">Golden.</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Booking a luxury car has never been this effortless. Experience the Golden Key difference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-100 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 bg-stone-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-stone-100 shadow-sm relative group">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">0{idx + 1}</div>
                <step.icon className="w-10 h-10 text-stone-900 group-hover:text-amber-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">What Our <span className="text-amber-500">Clients</span> Say</h2>
            <p className="text-white/50 text-lg">Trusted by thousands of travelers and residents in the UAE.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-stone-900 overflow-hidden bg-stone-800">
                  <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" width={48} height={48} referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-xs font-bold">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 relative"
            >
              <div className="absolute top-10 right-10 opacity-10">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-amber-500 font-bold uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
              <p className="text-white/70 italic leading-relaxed mb-8">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                <Car className="w-4 h-4" /> Rented: {t.car}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppPromo = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-amber-500 rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative shadow-2xl shadow-amber-500/30">
          <div className="flex-1 text-center lg:text-left relative z-10">
            <span className="text-white/80 font-bold text-xs uppercase tracking-widest mb-6 block">Mobile Experience</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">Golden Key in Your <span className="italic">Pocket.</span></h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl">Download our mobile app for exclusive early-bird discounts, real-time tracking, and one-tap booking.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-black transition-colors">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] opacity-50 uppercase font-bold">Download on the</span>
                  <span className="text-lg">App Store</span>
                </div>
              </button>
              <button className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-black transition-colors">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] opacity-50 uppercase font-bold">Get it on</span>
                  <span className="text-lg">Google Play</span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-[400px] mx-auto aspect-[9/19] bg-stone-900 rounded-[3rem] border-[8px] border-stone-800 shadow-2xl overflow-hidden">
               <Image 
                src="https://picsum.photos/seed/mobile-app-car/800/1600" 
                alt="App Screenshot" 
                fill 
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent" />
              <div className="absolute bottom-12 left-0 w-full px-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <Car className="text-amber-500 w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-xl">Ready to Drive?</h4>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationsSection = () => {
  return (
    <section id="locations" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6">Find Us <span className="text-amber-500">Everywhere.</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Strategically located hubs across the UAE to serve you better.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                <MapPin className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{loc.name}</h3>
              <p className="text-stone-500 mb-6 text-sm leading-relaxed">{loc.address}</p>
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm mb-8">
                <Phone className="w-4 h-4 text-amber-500" /> {loc.phone}
              </div>
              <button className="w-full py-4 border border-stone-100 rounded-2xl text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center gap-2">
                Get Directions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 h-[400px] bg-stone-200 rounded-[3rem] overflow-hidden relative group">
          <Image 
            src="https://picsum.photos/seed/dubai-map/1920/800" 
            alt="Map" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center animate-bounce shadow-2xl shadow-amber-500/50">
              <MapPin className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const [isArabic, setIsArabic] = useState(false);

  return (
    <div className={`min-h-screen selection:bg-amber-500 selection:text-white ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />
      
      <Hero isArabic={isArabic} />

      {/* Featured Fleet */}
      <section id="fleet" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
              Our <span className="text-amber-500 italic">Elite</span> Fleet
            </h2>
            <p className="text-stone-500 text-lg">
              Handpicked luxury and performance vehicles maintained to the highest standards.
            </p>
          </div>
          <button className="flex items-center gap-2 text-stone-900 font-bold hover:text-amber-500 transition-colors group">
            View All Fleet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_CARS.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <CategorySection />

      <HowItWorks />

      <Testimonials />

      <AppPromo />

      <LocationsSection />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8">Ready to hit the road?</h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">Book your dream car in less than 60 seconds. No paperwork, no hassle, just the keys to your next adventure.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-amber-500 text-white px-16 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-amber-500/40">
                Start Booking
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-16 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-3 border border-white/10">
                <Phone className="w-6 h-6" /> Contact Sales
              </button>
            </div>
          </div>
          {/* Background Car Silhouette or Image */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image 
              src="https://picsum.photos/seed/luxury-car-side/1920/1080" 
              alt="Car Silhouette" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-stone-900" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Car className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">GOLDEN KEY</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-10">
                The premier car rental service in the UAE. Redefining luxury, reliability, and excellence in every mile since 2010.
              </p>
              <div className="flex gap-4">
                {['FB', 'IG', 'TW', 'LI'].map(s => (
                  <div key={s} className="w-12 h-12 bg-white/5 hover:bg-amber-500 hover:text-white text-white/40 rounded-2xl flex items-center justify-center transition-all cursor-pointer font-bold text-xs">
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-5 text-sm text-white/40 font-medium">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Search Fleet</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Special Offers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Our Locations</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Rental</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-5 text-sm text-white/40 font-medium">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Rental Terms</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Insurance Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
              <ul className="space-y-6 text-sm text-white/40 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="block text-white/20 text-[10px] uppercase font-bold mb-1">Call Us</span>
                    <span className="text-white">+971 4 000 0000</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="block text-white/20 text-[10px] uppercase font-bold mb-1">Email Us</span>
                    <span className="text-white">info@goldenkey.ae</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="block text-white/20 text-[10px] uppercase font-bold mb-1">Visit Us</span>
                    <span className="text-white leading-relaxed">The Opus, Business Bay,<br />Dubai, UAE</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-xs font-medium">© 2023 Golden Key Car Rental L.L.C. All rights reserved. Licensed by RTA Dubai.</p>
            <div className="flex items-center gap-8">
              <div className="flex gap-4 grayscale opacity-30">
                <div className="w-12 h-8 bg-white rounded-md" />
                <div className="w-12 h-8 bg-white rounded-md" />
                <div className="w-12 h-8 bg-white rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-10 right-10 w-20 h-20 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group">
        <MessageCircle className="w-10 h-10" />
        <span className="absolute right-full mr-6 bg-white text-stone-900 px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-100">
          Need help? Chat with us
        </span>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </button>
    </div>
  );
}
