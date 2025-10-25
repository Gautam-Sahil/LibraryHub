import React, { useState } from 'react';
import book1 from '../assets/book1.jpg';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, BookOpen } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'work@libraryhub.com',
      description: 'Send us your queries',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '9834827323',
      description: 'Mon-Fri, 9 AM - 6 PM',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Bhiwandi',
      description: ' 3rd Floor, Sharma Building',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ];

  const quickInfo = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We reply within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Friendly Support',
      description: 'Always happy to help'
    },
    {
      icon: BookOpen,
      title: 'Book Guidance',
      description: 'Get personalized recommendations'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Header Section */}
      <div className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold  mb-4">
            Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-blue-600">Touch</span>
          </h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Have questions about LibraryHub? We're here to help you discover your next great read.
          </p>
        </div>
      </div>

      {/* Quick Info Pills */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {quickInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex border border-sky-500 items-center gap-3  backdrop-blur-sm rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-sky-400"
              >
                <Icon className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <p className="text-sm font-semibold ">{item.title}</p>
                  <p className="text-xs ">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          <div className=" rounded-3xl border border-teal-400 shadow-xl p-8 md:p-10 hover:shadow-teal-300 transition-shadow duration-300">
            <div className="mb-8">
              <h2 className="text-3xl font-bold  mb-2">Send a Message</h2>
              <p>Fill out the form and we'll be in touch soon</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold  mb-2">Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium  mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Deepa Mishra"
                      className={`w-full px-4 py-3 rounded-xl border-2  transition-all duration-300  focus:outline-none ${
                        focusedField === 'name'
                          ? 'border-blue-500 shadow-lg shadow-blue-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium  mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border-2  transition-all duration-300  focus:outline-none ${
                        focusedField === 'email'
                          ? 'border-pink-500 shadow-lg shadow-pink-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="How can we help?"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300  focus:outline-none ${
                      focusedField === 'subject'
                        ? 'border-teal-500 shadow-lg shadow-teal-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border-2  transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-blue-500 shadow-lg shadow-blue-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700  font-semibold py-4 rounded-xl shadow-lg text-white hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
               <div className="w-full flex justify-center ">
  <img src={book1} alt="Book" className="max-w-xs w-50 mt-5" />
</div>
              </form>
            )}
          </div>

    
          <div className="space-y-6">
            <div className="bg-linear-to-br from-blue-600 to-pink-600 rounded-3xl p-8 text-white  shadow-md hover:shadow-indigo-500 duration-300">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className=" mb-6">
                Whether you need book recommendations, have questions about membership, or just want to chat about literature — we're here for you!
              </p>
              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold ">Live Chat Available</p>
                  <p className="text-sm">Get instant answers</p>
                </div>
              </div>
            </div>

            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className=" rounded-2xl p-6  border-2 border-teal-200  shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${card.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 `}>
                      <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold  text-lg mb-1">{card.title}</h3>
                      <p className={`font-semibold bg-linear-to-r ${card.color} bg-clip-text text-transparent mb-1`}>
                        {card.info}
                      </p>
                      <p className="text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-linear-to-br  rounded-2xl p-6 border-2 border-teal-200">
              <h4 className="font-bold  mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-600" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold ">Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className=" border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-bold text-pink-500  mb-3">
            Ready to explore our collection?
          </h3>
          <p className=" mb-6">
            Join thousands of readers discovering amazing books every day
          </p>
          <button className="bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <a href="/Course">   Browse Library</a>
         
          </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;
