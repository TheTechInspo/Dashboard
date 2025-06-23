import React, { useEffect } from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import AOS from 'aos';

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const plans = [
    {
      name: 'Free',
      icon: <Zap className="h-8 w-8" />,
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out AI website generation',
      features: [
        '3 pages/month',
        'Basic AI templates',
        'Mobile responsive',
        'Community support',
        'Export to HTML/CSS',
      ],
      limitations: [
        'Limited customization',
        'TheTechInspo branding',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro',
      icon: <Crown className="h-8 w-8" />,
      price: '$29',
      period: 'per month',
      description: 'Ideal for freelancers and small businesses',
      features: [
        'Unlimited generations',
        'Advanced AI engine',
        'Custom branding',
        'Priority support',
        'Export to React/Next.js',
        'Custom domains',
        'SEO optimization',
        'Analytics integration',
      ],
      badges: ['AI Powered', 'No Code Needed', 'Export Ready'],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Studio',
      icon: <Building className="h-8 w-8" />,
      price: '$99',
      period: 'per month',
      description: 'For agencies and teams building at scale',
      features: [
        'Everything in Pro',
        'White-label solution',
        'Team collaboration',
        'Client management',
        'Advanced integrations',
        'Custom AI training',
        'Dedicated support',
        'API access',
      ],
      badges: ['White Label', 'Team Access', 'API Ready'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-6">
              💎 Simple Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your{' '}
              <span className="text-gradient">AI Power</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. Every plan includes AI-powered generation, 
              mobile-responsive designs, and clean code export.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 text-center ${
                  plan.popular ? 'border-primary-500 shadow-2xl shadow-primary-500/20' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-primary-500 mb-4 flex justify-center">
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                {plan.badges && (
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {plan.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  
                  {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center text-gray-500">
                      <div className="h-4 w-4 mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                      {limitation}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  to={plan.name === 'Studio' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <p className="text-gray-400 mb-4">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Check className="h-4 w-4 text-primary-500 mr-2" />
                AI Powered Generation
              </span>
              <span className="flex items-center">
                <Check className="h-4 w-4 text-primary-500 mr-2" />
                Mobile Responsive
              </span>
              <span className="flex items-center">
                <Check className="h-4 w-4 text-primary-500 mr-2" />
                Clean Code Export
              </span>
              <span className="flex items-center">
                <Check className="h-4 w-4 text-primary-500 mr-2" />
                No Code Required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Everything you need to know about our AI website builder.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How does AI website generation work?',
                answer: 'Our AI analyzes your prompts and generates complete websites using advanced machine learning. Simply describe what you want, and our AI creates the design, layout, and code automatically.',
              },
              {
                question: 'Can I export the generated code?',
                answer: 'Yes! All plans include code export. Free users get HTML/CSS, while Pro and Studio users can export to modern frameworks like React and Next.js.',
              },
              {
                question: 'Do I need coding skills?',
                answer: 'Not at all! TheTechInspo is designed for everyone. Use natural language to describe your vision, and our AI handles all the technical implementation.',
              },
              {
                question: 'What if I need custom features?',
                answer: 'Our AI is continuously learning and can handle complex requirements. Studio plan users get access to custom AI training for specialized needs.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;