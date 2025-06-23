import React, { useEffect } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Badge from "../components/UI/Badge";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import AOS from "aos";

const Blog: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const articles = [
    {
      title: "Transforming Web Development",
      excerpt:
        "Businesses cannot afford wasted time or money on antiquated, manual website-building techniques in the cutthroat digital world of today. An innovative alternative is provided by AI-powered website builders, which automates design, content, and SEO duties so businesses can concentrate on expansion and client interaction.",
      author: "TheTechInspo AI Assistant",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Design",
      image:
        "/B1.png",
      link: "/blog1",
    },
    {
      title: "Scaling with Simplicity",
      excerpt:
        "For SMEs and independent business owners who frequently balance several responsibilities, this ease is very helpful. Business owners can update their websites themselves and react swiftly to market developments or opportunities rather than investing time in learning to code or employing a full-time developer.",
      author: "TheTechInspo AI Assistant",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "Tutorial",
      image:
        "/B2.png",
      link: "/blog2",
    },
    {
      title: "AI Website Builders vs Traditional Agencies",
      excerpt:
        "Businesses must make a critical choice when deciding whether to use an AI-powered website builder or a traditional agency when creating or redesigning their websites. Budget, schedules, customisation requirements, and long-term objectives all play a role in making the best decision. Business executives can make a well-informed, strategic choice by being aware of the distinctions.",
      author: "TheTechInspo AI Assistant",
      date: "April 14, 2025",
      readTime: "10 min read",
      category: "AI & Design",
      image:
        "/B3.png",
      link: "/blog3",
    },
    {
      title: "Empowering Non-Tech Entrepreneurs",
      excerpt:
        "Technical know-how has long been one of the biggest obstacles for entrepreneurs and small business owners looking to access the digital marketplace. It used to be necessary to master HTML and CSS to create a website, or to hire developers—a costly and frequently daunting process. This dynamic is being altered by AI-powered website builders, which make it simple for non-techies to develop polished, useful websites.",
      author: "TheTechInspo AI Assistant",
      date: "May 21, 2025",
      readTime: "8 min read",
      category: "Inspiration",
      image:
        "/B4.png",
      link: "/blog4",
    },
    {
      title: "From Launch to Lead Generation",
      excerpt:
        "In the fiercely competitive industry of today, building a website is just the beginning. Making your website a lead-generating machine is the true problem for firms. By increasing traffic, generating leads, and turning visitors into customers, AI-powered website builders are not only transforming the way websites are created but also assisting companies in achieving tangible, quantifiable outcomes.",
      author: "TheTechInspo AI Assistant",
      date: "January 10, 2025",
      readTime: "4 min read",
      category: "Tutorial",
      image:
        "/B5.png",
      link: "/blog5",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <Badge className="mb-6">📚 AI Insights</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Future of{" "}
              <span className="text-gradient">Web Development</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover insights, tutorials, and inspiration for building better
              websites with AI. Written by our AI assistant to help you master
              the future of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-0 overflow-hidden mb-16" data-aos="fade-up">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <Badge variant="secondary" className="mb-4">
                  Featured Article
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{articles[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{articles[0].date}</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <Button>
                  <a href="/blog1">Read Article</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="p-0 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <a href={article.link} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 text-center p-8" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI web development delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
