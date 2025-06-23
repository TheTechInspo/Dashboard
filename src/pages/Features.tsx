import React, { useEffect } from "react";
import {
  Zap,
  Code,
  Palette,
  Smartphone,
  Globe,
  Rocket,
  Brain,
  Shield,
} from "lucide-react";
import Badge from "../components/UI/Badge";
import Card from "../components/UI/Card";
import AOS from "aos";

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Prompt to Website in Seconds",
      description:
        "Transform natural language descriptions into fully functional websites. Our AI understands context, design principles, and user intent to create exactly what you envision.",
      preview: "prompt-preview",
      image: "/F1.svg",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Template-free Freedom",
      description:
        "Break free from restrictive templates. Every website is uniquely generated based on your specific requirements, brand, and vision.",
      preview: "template-preview",
      image: "/F2.svg",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Smart Section Builder",
      description:
        "AI intelligently creates sections, layouts, and components that match your brand identity and user experience goals.",
      preview: "section-preview",
      image: "/F3.svg",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile-first Intelligence",
      description:
        "Every generated site is automatically responsive and optimized for all devices, ensuring perfect user experience across platforms.",
      preview: "mobile-preview",
      image: "/F4.svg",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Export & Host Anywhere",
      description:
        "Get clean, production-ready code that you can host on any platform. No vendor lock-in, complete ownership of your code.",
      preview: "export-preview",
      image: "/F5.svg",
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Lightning Fast Generation",
      description:
        "From idea to live website in under 30 seconds. Our advanced AI engine processes complex requirements at unprecedented speed.",
      preview: "speed-preview",
      image: "/F6.svg",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Intelligent Design System",
      description:
        "AI automatically creates cohesive design systems with consistent typography, colors, spacing, and component libraries.",
      preview: "design-preview",
      image: "/F7.png",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security & Performance",
      description:
        "Generated websites follow modern security practices and performance optimization techniques out of the box.",
      preview: "security-preview",
      image: "/F8.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-6">🔥 Advanced AI Features</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="text-gradient">Modern Creators</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI-powered platform transforms the way you build
              websites. Every feature designed to make web development
              effortless and intuitive.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-primary-500">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* AI Preview Block */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          AI Generated Preview
                        </Badge>
                        <span className="text-xs text-gray-500">
                          Hover to preview generated section
                        </span>
                      </div>

                      <div className="space-y-3">
                        <img
                          src={feature.image}
                          alt={`${feature.title} preview`}
                          className="rounded-lg border border-gray-700 hover:opacity-90 transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
