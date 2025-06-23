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
    title: 'AI Website Builders vs Traditional Agencies: Which is Right for Your Business?',
    imageUrl: '/B3.png', // This URL is kept from your original code. Consider updating for better relevance to the new title.
    imageAlt: 'AI website builder interface vs traditional web development tools',
    date: 'June 22, 2025', // Current date
    author: 'TheTechInspo Team',
    content: [
      { type: 'paragraph', text: 'Businesses must make a critical choice when deciding whether to use an **AI-powered website builder** or a **traditional agency** when creating or redesigning their websites. Budget, schedules, customisation requirements, and long-term objectives all play a role in making the best decision. Business executives can make a well-informed, strategic choice by being aware of the distinctions.' },
      { type: 'heading', level: 3, text: 'Traditional Agencies: Pros and Cons' },
      { type: 'paragraph', text: 'Conventional agencies provide full-service development, in-depth consulting, and custom designs as high-touch services. They are perfect for big companies or companies with special needs. But there is a time and financial penalty to this strategy. A custom website frequently requires a substantial budget and can take months to construct.' },
      { type: 'heading', level: 3, text: 'AI Website Builders: Speed and Accessibility' },
      { type: 'paragraph', text: 'However, **AI website builders** make it easier for anyone to create a website. Businesses can rapidly and affordably create beautiful websites using automation. Businesses can develop or update websites in a matter of hours because of these platforms\' pre-designed templates, drag-and-drop editors, and intelligent content production.' },
      { type: 'paragraph', text: 'One of the biggest benefits of **AI builders** is their speed. Time to market is important in a competitive environment. Businesses must move quickly when establishing a seasonal campaign or reacting to consumer trends. Rapid deployment is made possible by **AI builders** without sacrificing quality.' },
      { type: 'paragraph', text: 'However, **AI website builders** make it easier for anyone to create a website. Businesses can rapidly and affordably create beautiful websites using automation. Businesses can develop or update websites in a matter of hours because of these platforms\' pre-designed templates, drag-and-drop editors, and intelligent content production.' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <Badge className="mb-6">
              💡 Tech Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              By {blogPost.author} | {blogPost.date}
            </p>
          </div>

          <div className="mb-12" data-aos="fade-up">
            <img
              src={blogPost.imageUrl}
              alt={blogPost.imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96"
            />
          </div>

          <Card className="p-8" data-aos="fade-up">
            <div className="prose prose-gray max-w-none text-gray-300">
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

              <div className="mt-8 p-4 bg-gray-800 rounded-lg text-center">
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