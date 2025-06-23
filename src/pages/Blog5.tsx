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
    title: 'From Launch to Lead Generation: How AI Website Builders Drive Business Results',
    imageUrl: '/B5.png', // This URL is kept from your original code. Consider updating for better relevance to the new title.
    imageAlt: 'Graph showing business growth and lead generation from a website',
    date: 'June 22, 2025', // Updated to current date
    author: 'TheTechInspo Team',
    content: [
      { type: 'paragraph', text: 'In the fiercely competitive industry of today, building a website is just the beginning. Making your website a lead-generating machine is the true problem for firms. By increasing traffic, generating leads, and turning visitors into customers, **AI-powered website builders** are not only transforming the way websites are created but also assisting companies in achieving tangible, quantifiable outcomes.' },
      { type: 'paragraph', text: 'These days, **AI website builders** are much more than just drag-and-drop tools. Intelligent systems built into these platforms aid in site optimization for each phase of the consumer experience. The goal is the same whether you\'re an e-commerce company, freelancer, or service provider: create leads and close deals. This result informs the design of **AI website builders**.' },
      { type: 'heading', level: 3, text: 'Goal-Driven Strategy and Optimized Design' },
      { type: 'paragraph', text: 'Developing a goal-driven website strategy is the first step. **AI builders** walk consumers through customized setup procedures where they specify their goals, including expanding their email list, scheduling appointments, or making sales. The platform uses this input to create call-to-action components, content sections, and page layouts that support that particular objective. This guarantees that every element of the website works together to get the intended result.' },
      { type: 'paragraph', text: 'Consider landing pages as an example. **AI algorithms** use industry best practices to create highly optimized landing page templates. These pages have benefit-driven bullet points, compelling headlines, and well-placed calls to action. This increases conversion rates for companies that run promotions or ad campaigns without hiring a designer or copywriter.' },
      { type: 'heading', level: 3, text: 'Personalization and Seamless Integration' },
      { type: 'paragraph', text: 'AI has the ability to personalize users. Real-time user experience customization is possible with **AI builders** using machine learning and behavior-based triggers. For instance, recurring users may get different product recommendations or headlines than new users. Engagement and conversion rates are greatly increased by this degree of customisation.' },
      { type: 'paragraph', text: 'Integration is another crucial element. Analytics tools, email marketing platforms, and CRM systems are all easily integrated with **AI website builders**. This implies that leads that are collected on your website can be automatically sent into sales pipelines, follow-up sequences, or nurture programs. It ensures that no opportunity is lost while reducing physical labor.' },
      { type: 'paragraph', text: 'Take the example of a local fitness instructor who created a website in a day using an **AI builder** to demonstrate the impact. Two weeks later, [It seems the example got cut off here in your original content. If you have more to add, let me know!]' },
      { type: 'heading', level: 3, text: 'Continuous Optimization for Peak Performance' },
      { type: 'paragraph', text: 'Through ongoing tuning, **AI builders** support performance maintenance even after launch. Using A/B testing tools, you may test several versions of buttons, images, or headlines to determine which ones perform the best. The software keeps track of these outcomes and automatically applies the version that works best.' },
      { type: 'paragraph', text: 'Last but not least, lead creation requires both speed optimization and mobile responsiveness, which are managed automatically. **Artificial intelligence (AI) builders** make sure your website runs quickly and looks fantastic on all devices, which raises SEO rankings and lowers bounce rates.' },
      { type: 'paragraph', text: 'In summary, **AI website builders** produce business outcomes in addition to visually appealing websites. They are made for results, not just looks, and can help you set your objectives, use lead generation tools, and optimize your whole conversion funnel. Any company hoping to increase its clientele, revenue, and leads should invest [It seems the sentence got cut off here in your original content. If you have more to add, let me know!]' }
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
            <div className="prose prose-gray max-w-none text-gray-300 text-justify">
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