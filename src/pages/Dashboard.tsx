import React, { useEffect } from 'react';
import { Plus, Zap, Calendar, Eye, Download } from 'lucide-react';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported

const Dashboard: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const mockProjects = [
    {
      id: 1,
      name: 'Organic Cosmetics Store',
      type: 'E-commerce',
      created: '2 days ago',
      status: 'Ready',
      preview: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      type: 'Portfolio',
      created: '5 days ago',
      status: 'Ready',
      preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'SaaS Landing Page',
      type: 'Business',
      created: '1 week ago',
      status: 'Ready',
      preview: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <section className="py-8 sm:py-12"> {/* Adjusted vertical padding for mobile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8 sm:mb-12" data-aos="fade-up"> {/* Adjusted bottom margin */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left"> {/* Added flex-col for mobile stacking */}
              <div className="mb-4 sm:mb-0"> {/* Added margin for spacing when stacked */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2"> {/* Adjusted font size for mobile */}
                  Welcome to TheTechInspo, <span className="text-gradient">Creator</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300"> {/* Adjusted font size for mobile */}
                  Ready to build something amazing with AI?
                </p>
              </div>
              <Button to="/demo" size="lg" className="w-full sm:w-auto"> {/* Made button full width on small screens */}
                <Plus className="mr-2 h-5 w-5" />
                Start New AI Project
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="200"> {/* Adjusted grid for mobile/tablet and gap */}
            <Card className="p-4 sm:p-6 text-center"> {/* Adjusted padding */}
              <div className="text-primary-500 mb-3">
                <Zap className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" /> {/* Adjusted icon size */}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">3</div> {/* Adjusted font size */}
              <div className="text-gray-400 text-sm sm:text-base">Projects Created</div> {/* Adjusted font size */}
            </Card>
            
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-accent-400 mb-3">
                <Eye className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">1.2k</div>
              <div className="text-gray-400 text-sm sm:text-base">Total Views</div>
            </Card>
            
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-primary-500 mb-3">
                <Download className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">3</div>
              <div className="text-gray-400 text-sm sm:text-base">Code Exports</div>
            </Card>
          </div>

          {/* Recent Projects */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-6 sm:mb-8 text-center sm:text-left"> {/* Added flex-col for mobile stacking */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 sm:mb-0"> {/* Adjusted font size and margin */}
                Your AI Projects
              </h2>
              <Button variant="outline" to="/demo" className="w-full sm:w-auto"> {/* Made button full width on small screens */}
                View All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"> {/* Adjusted grid for mobile/tablet and gap */}
              {mockProjects.map((project) => (
                <Card key={project.id} className="p-0 overflow-hidden">
                  <div className="aspect-video bg-gray-800 overflow-hidden">
                    <img
                      src={project.preview}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6"> {/* Adjusted padding */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                      <Badge variant="primary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2"> {/* Adjusted font size */}
                      {project.name}
                    </h3>
                    <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-4"> {/* Adjusted font size */}
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" /> {/* Adjusted icon size */}
                      Created {project.created}
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"> {/* Stack buttons on extra small screens */}
                      <Button variant="outline" size="sm" className="flex-1 w-full"> {/* Full width on small screens */}
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 w-full"> {/* Full width on small screens */}
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="600"> {/* Adjusted top margin */}
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 sm:mb-8"> {/* Adjusted font size and margin */}
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"> {/* Adjusted grid for mobile/tablet and gap */}
              <Card className="p-4 sm:p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer"> {/* Adjusted padding */}
                <div className="text-primary-500 mb-3">
                  <Plus className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">New Website</h3> {/* Adjusted font size */}
                <p className="text-sm text-gray-400">Start with a prompt</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="text-accent-400 mb-3">
                  <Zap className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">Try Templates</h3>
                <p className="text-sm text-gray-400">AI-generated starters</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="text-primary-500 mb-3">
                  <Eye className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">Browse Gallery</h3>
                <p className="text-sm text-gray-400">Community creations</p>
              </Card>
              
              <Card className="p-4 sm:p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="text-accent-400 mb-3">
                  <Download className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">Export Center</h3>
                <p className="text-sm text-gray-400">Download your code</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;