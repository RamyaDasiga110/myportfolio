
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CircleGrid } from "./DecorativeElements";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white relative">
      {/* Decorative elements */}
      <CircleGrid />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title mb-8 relative">
          Professional Experience
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-portfolioBlue to-purple-500 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {/* Experience timeline line */}
          <div className="absolute left-[50%] md:left-8 w-px h-full bg-gradient-to-b from-portfolioBlue via-purple-400 to-transparent rounded-full hidden md:block"></div>
          
          <div className="glass-card animate-fade-in opacity-0 relative" style={{ animationDelay: '0.2s' }}>
            {/* Company logo abstraction */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-portfolioBlue/30 to-purple-400/30 rounded-xl blur-lg"></div>
            
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Software Developer I</h3>
                <div className="flex items-center gap-1 text-gray-600">
                  <Briefcase size={16} className="text-portfolioBlue" />
                  <span>Autodesk</span>
                </div>
              </div>
              <div>
                <Badge className="bg-gradient-to-r from-portfolioBlue to-purple-500 text-white font-medium">
                  May 2021 - Dec 2023
                </Badge>
                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <MapPin size={16} className="text-portfolioBlue" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
            
            <ul className="mt-6 space-y-4 text-gray-700">
              {experienceItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2 transform hover:translate-x-1 transition-transform duration-300 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-portfolioBlue/20 to-purple-400/20 flex items-center justify-center group-hover:from-portfolioBlue group-hover:to-purple-400 transition-colors">
                    <Star size={12} className="text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-portfolioBlue transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const experienceItems = [
  "Worked on Autodesk's initiative to develop a new pricing tool solution aimed at replacing existing Price Management and Price Administration tools, focusing on flexibility, scalability, reduced dependency on back-office development, enhanced productivity, robust reporting capabilities, and historical data retention.",
  "Spearheaded development of Pricing Willow Application, reducing pricing operation time by 40% through implementation of automated workflows and efficient business model creation processes.",
  "Engineered and optimized SQL queries resulting in 30% faster data retrieval, handling over 1M+ records for critical pricing operations.",
  "Implemented automated deployment pipeline using AWS CodePipeline, reducing deployment time by 60% and achieving 96% deployment success rate.",
  "Developed responsive user interfaces using C# and ASP.NET MVC, improving user satisfaction scores by 25% and reducing support tickets by 35%.",
  "Resolved 50+ critical bugs and reduced bug backlog by 45% through systematic tracking and prioritization system.",
  "Created and maintained 10+ cron jobs on Virtual EC2 Servers, ensuring 99% uptime for business-critical applications.",
  "Collaborated with 3 cross-functional teams to deliver 15+ major features ahead of schedule, receiving recognition for exceptional performance.",
  "Worked in an Agile environment using JIRA, mentoring two junior developers and promoting best practices in code development and deployment."
];

export default Experience;
