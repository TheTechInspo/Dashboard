import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import AOS from 'aos';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const projectTypes = [
    'Personal Portfolio',
    'Business Website',
    'E-commerce Store',
    'Blog/Content Site',
    'SaaS Platform',
    'Agency Website',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-6">
              🚀 Join the Waitlist
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reserve Your{' '}
              <span className="text-gradient">AI Spot</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be among the first to experience the future of web development. 
              Join our exclusive waitlist and get early access to TheTechInspo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get Early Access
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project (optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Describe your project vision..."
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <ReCAPTCHA
                    sitekey="6LezXGorAAAAAEkym13FtM_IDZw1FPd8w8fvaQ-7"
                    onChange={handleCaptchaChange}
                    ref={recaptchaRef}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Reserve Your Spot
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Info */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Early access to AI website generation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Exclusive beta features and updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Priority support and feedback channels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Special launch pricing when we go live</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <div>
                      <div className="text-white font-medium">Beta Launch</div>
                      <div className="text-sm text-gray-400">Q1 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <div className="text-white font-medium">Public Release</div>
                      <div className="text-sm text-gray-400">Q2 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-4"></div>
                    <div>
                      <div className="text-white font-medium">Advanced Features</div>
                      <div className="text-sm text-gray-400">Q3 2025</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary-500/10 to-accent-400/10 border-primary-500/30">
                <Badge className="mb-4">
                  Limited Spots Available
                </Badge>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Join 5,000+ Creators
                </h3>
                <p className="text-gray-300">
                  Already on the waitlist and excited to build the future of web development with AI.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
