import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Smartphone,
  Code,
  Palette,
  Globe,
  Rocket,
} from "lucide-react";
import Badge from "../components/UI/Badge";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Prompt to Website in Seconds",
      description:
        "Describe your vision in natural language and watch AI build your website instantly.",
      image: "/H1.svg",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Template-free Freedom",
      description:
        "No rigid templates. Every site is uniquely generated based on your specific needs.",
      image: "/H2.svg",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Smart Section Builder",
      description:
        "AI intelligently creates sections, layouts, and components that match your brand.",
      image: "/H3.svg",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-first Intelligence",
      description:
        "Every generated site is responsive and optimized for all devices automatically.",
      image: "/H4.svg",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Export & Host Anywhere",
      description:
        "Get clean, production-ready code that you can host on any platform.",
      image: "/H5.svg",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lightning Fast Generation",
      description:
        "From idea to live website in under 30 seconds with our advanced AI engine.",
      image: "/H6.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-6">🚀 AI-Powered Website Builder</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Just Describe It.{" "}
              <span className="text-gradient">We'll Build It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              TheTechInspo is an AI-native website builder for startups,
              creators & freelancers. Powered by prompts, not code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button to="/demo" size="lg" className="text-lg">
                Generate a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="text-lg"
              >
                Get Early Access
              </Button>
            </div>
          </div>

          {/* AI Animation Placeholder */}
          <div data-aos="fade-up" data-aos-delay="200" className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Badge variant="secondary" className="ml-4">
                  AI Typing...
                </Badge>
              </div>
              <div className="font-mono text-left text-sm text-gray-300 space-y-2">
                <div className="flex items-center">
                  <span className="text-accent-400">$</span>
                  <span className="ml-2 animate-pulse">
                    Generating your website...
                  </span>
                </div>
                <div className="text-primary-500">
                  {'<div className="hero-section">'}
                </div>
                <div className="text-gray-400 ml-4">
                  {"<h1>Welcome to Your Site</h1>"}
                </div>
                <div className="text-gray-400 ml-4">
                  {"<p>Professional, responsive, ready.</p>"}
                </div>
                <div className="text-primary-500">{"</div>"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">TheTechInspo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of web development with AI-powered design
              and generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      AI Preview
                    </Badge>
                    <span className="text-xs text-gray-500">
                      Hover to preview
                    </span>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-80 h-20 object-cover rounded border border-gray-600"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500/10 to-accent-400/10">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already building with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/demo" size="lg">
              Try Demo Now
            </Button>
            <Button to="/pricing" variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
