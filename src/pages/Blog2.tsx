import React, { useEffect } from 'react';
import Badge from '../components/UI/Badge'; // Assuming this path is correct
import Card from '../components/UI/Card';   // Assuming this path is correct
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const BlogPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Your integrated blog post data
  const blogPost = {
    title: 'Scaling with Simplicity: Why AI Website Builders Are Built for Business Growth',
    imageUrl: '/B2.png', // This URL is kept from your original code, ensure it's suitable for the new title.
    imageAlt: 'AI website builder interface with code and business data representing growth',
    date: 'June 22, 2025', // Updated to current date
    author: 'TheTechInspo Team',
    content: [
      { type: 'paragraph', text: 'For SMEs and independent business owners who frequently balance several responsibilities, this ease is very helpful. Business owners can update their websites themselves and react swiftly to market developments or opportunities rather than investing time in learning to code or employing a full-time developer.' },
      { type: 'paragraph', text: 'In addition, **artificial intelligence website builders** can interface with other tools that promote growth, like analytics dashboards, email marketing programs, eCommerce platforms, and CRMs. Without these connectors, businesses can automate customer journeys, consolidate their tech stack, and make data-driven decisions—all from a single platform.' },
      { type: 'paragraph', text: 'AI website builders are more flexible as a business expands than traditional systems, which necessitate extensive developer participation or human configuration. AI-generated templates and simple tools for dragging and dropping allow you to add new pages, features, or entire sections in a matter of minutes.' },
      { type: 'paragraph', text: 'For SMEs and solopreneurs who frequently balance several responsibilities, this simplicity is very helpful. Business owners can update their websites themselves and react swiftly to market developments or opportunities rather than investing time in learning to code or hiring a full-time developer.' },
      { type: 'paragraph', text: 'In addition, **artificial intelligence website builders** can interface with other tools that facilitate growth, like analytics dashboards, email marketing programs, eCommerce platforms, and CRMs. Using these connectors, companies can automate customer journeys, simplify their tech stack, and make based on data decisions—all from a single platform.' },
      { type: 'paragraph', text: 'Support for various languages is another crucial growth element. In recent years, a lot of AI builders have automated translation capabilities that let companies access international markets without needing custom code or expert translators. International sales and higher awareness of the brand are made feasible by this.' },
      { type: 'paragraph', text: 'Scalability includes both performance maintenance and content addition. Even as the number of material increases, AI techniques improve SEO ranks, mobile friendliness, and website speed. This guarantees that no matter how large the website grows, the user experience will always be excellent.' },
      { type: 'paragraph', text: 'Additionally, powered by AI personalization enables companies to offer dynamic content that is catered to various visitor groups. This degree of personalization boosts engagement and conversions, whether it\'s via displaying region-specific information or making product recommendations based on Browse activity.' },
      { type: 'paragraph', text: 'Finally, growth-focused analytics dashboards allow business owners to track performance metrics like traffic, bounce rates, and conversion rates in real time. These insights help businesses measure ROI and identify areas for improvement, enabling sustainable and strategic growth.' },
      { type: 'paragraph', text: 'In essence, **AI website builders** are not just about creating a site—they’re about building a platform for scale. By combining automation, integration, and insight, they give businesses the tools to grow confidently and intelligently. For any business with ambition, an AI website builder is a powerful partner on the path to expansion.' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            {/* Optional: You can keep a Badge for "Blog Post" if you like, or remove it */}
            <Badge className="mb-6">
              💡 Tech Insights
            </Badge>
            {/* Blog Post Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {blogPost.title}
            </h1>
            {/* Author and Date */}
            <p className="text-lg text-gray-400 mb-6">
              By {blogPost.author} | {blogPost.date}
            </p>
          </div>

          {/* Blog Image */}
          <div className="mb-12" data-aos="fade-up">
            <img
              src={blogPost.imageUrl}
              alt={blogPost.imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96" // Added object-cover and max-h-96 for better image display
            />
          </div>

          <Card className="p-8" data-aos="fade-up">
            <div className="prose prose-gray max-w-none text-gray-300 text-justify">
              {/* Blog Content */}
              {blogPost.content.map((item, itemIndex) => {
                if (item.type === 'paragraph') {
                  return <p key={itemIndex} className="mb-4" dangerouslySetInnerHTML={{ __html: item.text }}></p>;
                } else if (item.type === 'heading') {
                  const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
                  return <HeadingTag key={itemIndex} className={`text-${(item.level === 3 ? 'xl' : 'lg')} font-bold text-white mb-3 mt-6`}>{item.text}</HeadingTag>;
                } else if (item.type === 'list') {
                  return (
                    <ul key={itemIndex} className="list-disc list-inside ml-4 mb-4 space-y-2">
                      {item.items.map((listItem, liIndex) => (
                        <li key={liIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}

              <div className="mt-8 p-4 bg-gray-800 rounded-lg text-center"> {/* Centered the text */}
                <p className="text-sm text-gray-400">
                  Published on: {blogPost.date}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;