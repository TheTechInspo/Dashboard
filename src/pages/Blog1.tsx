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
    title: 'Transforming Web Development: How AI Website Builders Save Time and Money for Businesses',
    imageUrl: '/B1.png', // More relevant image
    imageAlt: 'AI website builder interface with code and business data',
    date: 'June 20, 2025', // Using the provided date
    author: 'TheTechInspo Team', // Using your company name as author
    content: [
      { type: 'paragraph', text: 'Businesses cannot afford wasted time or money on antiquated, manual website-building techniques in the cutthroat digital world of today. An innovative alternative is provided by AI-powered website builders, which automates design, content, and SEO duties so businesses can concentrate on expansion and client interaction.' },
      { type: 'heading', level: 3, text: 'The Usual Difficulties in Web Development' },
      { type: 'paragraph', text: 'Creation of websites used to necessitate hiring developers, designers, and copywriters, which frequently resulted in lengthy and expensive projects. Businesses had to rely on suppliers for even the smallest changes, and updates took time.' },
      { type: 'paragraph', text: 'Having a professional online presence is very essential in the current digital era. Traditional web creation, however, is frequently costly, time-consuming, and dependent on technical know-how. Website builders with AI capabilities are changing this market by giving companies a more intelligent, quick, and affordable option. In addition to expediting the creation process, these technologies enable business owners to design and administer websites without knowing a single line of code.' },
      { type: 'paragraph', text: 'The essential components of web design, including layout creation, content suggestions, image optimization, and SEO implementation, are automated by AI website builders using complex algorithms. These platforms cut drastically the amount of manual labor required for creating a website from weeks to hours. For startups and small businesses trying to quickly create a web presence without spending a lot of money, this is groundbreaking.' },
      { type: 'paragraph', text: 'An AI website builder, for instance, can be used by a startup to quickly create a homepage from a business description or a few input keywords. After that, the system adds already set up navigation, optimized pictures, and appropriate content blocks to the website. This shortens the time needed to go live and eliminates the need to hire web developers or designers.' },
      { type: 'paragraph', text: 'In terms of finance, AI website builders provide significant savings. Companies can avoid the high expenses of continued maintenance contracts and traditional development agencies. Alternatively, customers can sign up for cost-effective per-month rates that cover upgrades, security, and hosting.' },
      { type: 'paragraph', text: 'Furthermore, by automatically adhering to best practices, AI-powered systems guarantee consistency in branding and user experience. The clever design tools apply appropriate color schemes, suggest fonts that complement the brand\'s identity, and adapt layouts for mobile responsiveness. These elements add to a polished appearance without necessitating design knowledge.' },
      { type: 'paragraph', text: 'The creation of content is yet another substantial benefit. A lot of AI website builders have built-in AI copywriters that produce blog entries, product descriptions, and headlines that are meant for search engine optimization and user engagement. Just this feature can guarantee excellent results while saving marketing teams hours of labor.' },
      { type: 'paragraph', text: 'AI web development methods give businesses a competitive advantage. They are able to scale their online presence with ease, react to market trends instantly, and iterate more quickly. AI makes the process quick and effective, whether it\'s testing new layouts, launching landing pages for campaigns, or updating product pages.' },
      { type: 'paragraph', text: 'To sum up, **AI-powered website builders** are strategic company assets rather than merely tools. They enable companies to concentrate on growing rather than being mired in technological difficulties by saving time, lowering costs, and boosting creative freedom. Businesses that make use of these smart platforms will be in the best position to prosper as the digital world evolves further.' }
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