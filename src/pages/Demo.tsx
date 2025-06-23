import React, { useState, useEffect } from "react";
import { Send, Palette, Code, Eye } from "lucide-react";
import Badge from "../components/UI/Badge";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("prompt");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const tabs = [
    {
      id: "prompt",
      label: "Prompt Explorer",
      icon: <Send className="h-4 w-4" />,
    },
    {
      id: "section",
      label: "Section Forge",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      id: "style",
      label: "Palette & Style",
      icon: <Palette className="h-4 w-4" />,
    },
    { id: "code", label: "Code Output", icon: <Code className="h-4 w-4" /> },
  ];

  const samplePrompts = [
    "Create a modern landing page for a SaaS startup",
    "Build a portfolio site for a creative photographer",
    "Design an e-commerce site for organic cosmetics",
    "Make a blog site for a travel influencer",
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20"> {/* Adjusted padding for mobile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-4 md:mb-6">🎨 Interactive Demo</Badge> {/* Adjusted margin */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"> {/* Adjusted font size and margin */}
              See AI in <span className="text-gradient">Action</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2"> {/* Adjusted font size and added horizontal padding */}
              Experience the power of AI website generation. Try different
              prompts, explore features, and see how quickly you can create
              professional websites.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="pb-16 md:pb-20"> {/* Adjusted padding for mobile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-0 overflow-hidden" data-aos="fade-up">
            {/* Tab Navigation */}
            <div className="flex flex-wrap border-b border-gray-700 bg-gray-800"> {/* Added flex-wrap for tabs on small screens */}
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center sm:justify-start space-x-2 flex-grow sm:flex-grow-0 px-4 py-3 sm:px-6 sm:py-4 font-medium transition-colors text-sm sm:text-base ${ /* Adjusted padding, font size, and flex properties */
                    activeTab === tab.id
                      ? "text-primary-500 border-b-2 border-primary-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span> {/* Hide label on extra small screens */}
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span> {/* Show only first word on extra small screens */}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 md:p-8"> {/* Adjusted padding for mobile */}
              {/* Prompt Explorer Tab */}
              {activeTab === "prompt" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white"> {/* Adjusted font size and margin */}
                      Prompt Explorer
                    </h3>
                    <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base"> {/* Adjusted font size and margin */}
                      Describe your vision and watch AI create a website in
                      real-time.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Changed to 1 column on mobile, 2 on md */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 md:mb-3">
                        Your Prompt
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the website you want to create..."
                        className="w-full h-24 sm:h-32 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none text-sm" // Adjusted height and font size
                      />

                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-400">
                          Try these examples:
                        </p>
                        {samplePrompts.map((sample, index) => (
                          <button
                            key={index}
                            onClick={() => setPrompt(sample)}
                            className="block text-sm text-primary-500 hover:text-primary-400 transition-colors text-left" // Added text-left for better alignment
                          >
                            "{sample}"
                          </button>
                        ))}
                      </div>

                      <Button
                        onClick={handleGenerate}
                        className="mt-6 w-full text-base py-3" // Adjusted padding and font size
                        disabled={!prompt || isGenerating}
                      >
                        {isGenerating ? "Generating..." : "Generate Website"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 md:mb-3">
                        AI Preview
                      </label>
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 h-60 sm:h-80 flex items-center justify-center"> {/* Adjusted height and padding */}
                        {isGenerating ? (
                          <div className="space-y-4 animate-pulse w-full">
                            <div className="h-4 bg-primary-500/30 rounded w-3/4 mx-auto"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto"></div>
                            <div className="h-20 bg-gradient-to-r from-primary-500/20 to-accent-400/20 rounded mt-6 w-full"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
                          </div>
                        ) : prompt ? (
                          <div className="space-y-4 w-full">
                            <Badge variant="secondary" className="mx-auto block w-fit">Generated Preview</Badge> {/* Centered badge */}
                            <div className="h-4 bg-primary-500/50 rounded w-3/4 mx-auto"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto"></div>
                            <div className="h-20 bg-gradient-to-r from-primary-500/30 to-accent-400/30 rounded mt-6 w-full"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500 text-center text-sm md:text-base px-4">
                            Enter a prompt to see AI generate your website
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Section Forge Tab */}
              {activeTab === "section" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"> {/* Adjusted grid for mobile/tablet */}
                  {[
                    {
                      label: "Hero Section",
                      image: "/D1.svg",
                    },
                    {
                      label: "Features Grid",
                      image: "/D2.svg",
                    },
                    {
                      label: "Pricing Table",
                      image: "/D3.svg",
                    },
                  ].map((section, index) => (
                    <Card key={index} className="text-center p-4">
                      <h4 className="font-semibold text-white mb-3 text-lg"> {/* Adjusted font size */}
                        {section.label}
                      </h4>
                      <div className="h-36 overflow-hidden rounded-lg mb-4 border border-gray-700">
                        <img
                          src={section.image}
                          alt={section.label}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <Button variant="outline" size="sm" className="w-full"> {/* Made button full width on small screens */}
                        Generate {section.label}
                      </Button>
                    </Card>
                  ))}
                </div>
              )}

              {/* Palette & Style Tab */}
              {activeTab === "style" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white"> {/* Adjusted font size and margin */}
                      Palette & Style Preview
                    </h3>
                    <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base"> {/* Adjusted font size and margin */}
                      Choose colors and styles to see instant previews of your
                      design.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Changed to 1 column on mobile, 2 on md */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 md:mb-4 text-lg"> {/* Adjusted font size and margin */}
                        Color Palette
                      </h4>
                      <div className="grid grid-cols-5 gap-2 md:gap-3"> {/* Adjusted gap for mobile */}
                        {[
                          "#A305E8",
                          "#F7FD04",
                          "#FF6B6B",
                          "#4ECDC4",
                          "#45B7D1",
                          "#96CEB4",
                          "#FECA57",
                          "#FF9FF3",
                          "#54A0FF",
                          "#5F27CD",
                        ].map((color, index) => (
                          <div
                            key={index}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg cursor-pointer hover:scale-110 transition-transform" // Adjusted size for mobile
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3 md:mb-4 text-lg"> {/* Adjusted font size and margin */}
                        Style Preview
                      </h4>
                      <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700"> {/* Adjusted padding */}
                        <div className="space-y-3">
                          <div className="h-4 bg-primary-500 rounded w-1/2"></div>
                          <div className="h-2 bg-gray-600 rounded"></div>
                          <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                          <div className="h-8 bg-accent-400 rounded w-1/3 mt-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Code Output Tab */}
              {activeTab === "code" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white"> {/* Adjusted font size and margin */}
                      Code Output
                    </h3>
                    <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base"> {/* Adjusted font size and margin */}
                      See the clean, production-ready code generated by AI.
                    </p>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-700"> {/* Adjusted padding */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0"> {/* Adjusted flex for mobile badges */}
                      <Badge variant="secondary">Generated Code</Badge>
                      <Badge variant="primary">Export Ready</Badge>
                    </div>

                    <pre className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap"> {/* Adjusted font size and added whitespace-pre-wrap */}
                      <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Generated Website</title>
  <style>
    /* Basic Reset & Body */
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #1a202c; /* Equivalent to bg-gray-900 */
      color: #e2e8f0; /* Equivalent to text-gray-300 */
    }

    /* Hero Section Styling */
    .hero-section {
      background: linear-gradient(135deg, #A305E8, #F7FD04);
      padding: 60px 20px; /* Adjusted padding for mobile */
      text-align: center;
      color: white;
    }
    
    .hero-title {
      font-size: 2.5rem; /* Adjusted for mobile */
      font-weight: bold;
      margin-bottom: 0.75rem; /* Adjusted margin */
      line-height: 1.2;
    }
    @media (min-width: 768px) { /* md breakpoint */
      .hero-title {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
    
    .hero-subtitle {
      font-size: 1rem; /* Adjusted for mobile */
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (min-width: 768px) { /* md breakpoint */
      .hero-subtitle {
        font-size: 1.2rem;
      }
    }

    /* Card Component (simplified for demo) */
    .card {
      background-color: #2d3748; /* Equivalent to bg-gray-800 */
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 1.5rem; /* Default padding */
      border: 1px solid #4a5568; /* Equivalent to border-gray-700 */
    }
    @media (min-width: 768px) {
      .card {
        padding: 2rem; /* Larger padding on md screens */
      }
    }

    /* Button Component (simplified for demo) */
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.25rem; /* Adjusted padding */
      font-size: 0.875rem; /* Adjusted font size */
      font-weight: 500;
      border-radius: 0.375rem;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    .button-primary {
      background-color: #6366f1; /* Example primary color */
      color: white;
      border: 1px solid #6366f1;
    }
    .button-primary:hover {
      background-color: #4f46e5;
    }
    .button-outline {
      background-color: transparent;
      color: #6366f1;
      border: 1px solid #6366f1;
    }
    .button-outline:hover {
      background-color: rgba(99, 102, 241, 0.1);
    }

    /* Badge Component (simplified for demo) */
    .badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px; /* Pill shape */
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge-primary {
      background-color: #6366f1;
      color: white;
    }
    .badge-secondary {
      background-color: #4a5568; /* Equivalent to bg-gray-700 */
      color: #e2e8f0; /* Equivalent to text-gray-300 */
    }
  </style>
</head>
<body>
  <section class="hero-section">
    <h1 class="hero-title">Welcome to Your AI Site</h1>
    <p class="hero-subtitle">Built with intelligent design, crafted for your vision.</p>
  </section>

  <section style="padding: 40px 20px; text-align: center; background-color: #2d3748;">
    <h2 style="font-size: 2rem; color: white; margin-bottom: 20px;">Powerful Features</h2>
    <div style="display: grid; gap: 20px; grid-template-columns: 1fr; max-width: 900px; margin: 0 auto;">
      <div class="card">
        <h3 style="color: white; margin-bottom: 10px;">Intuitive Interface</h3>
        <p style="color: #cbd5e0; font-size: 0.9rem;">Drag and drop to build your dreams.</p>
      </div>
      <div class="card">
        <h3 style="color: white; margin-bottom: 10px;">AI-Powered Content</h3>
        <p style="color: #cbd5e0; font-size: 0.9rem;">Generate text and images effortlessly.</p>
      </div>
    </div>
  </section>

  </body>
</html>`}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Demo;