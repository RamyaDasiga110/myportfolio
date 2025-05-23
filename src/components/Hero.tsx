
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin, Sparkle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreativeHeroBackground, ParallaxEffect } from "./DecorativeElements";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useResponsive } from "@/hooks/use-responsive";

const Hero = () => {
  const { isTablet } = useResponsive();
  
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Creative background elements */}
      <CreativeHeroBackground />
      <ParallaxEffect />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className={`md:col-span-7 ${isTablet ? 'md:col-span-12 text-left' : ''} animate-fade-in opacity-0`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-portfolioBlue text-white rounded-full mb-4 shadow-md">
              <Sparkle size={18} className="text-white" />
              <span className="font-medium">Software Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Ramya Shravani <span className="bg-gradient-to-r from-purple-600 to-portfolioBlue bg-clip-text text-transparent">Dasiga</span>
            </h1>
            <p className={`text-gray-700 mb-8 text-lg leading-relaxed ${isTablet ? 'max-w-2xl' : 'max-w-lg'}`}>
              Experienced software developer with expertise in C#, ASP.NET, and web technologies. 
              Also a content creator passionate about travel, lifestyle, and food.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:ramya.shravanid@gmail.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors hover:scale-105 transform duration-200"
              >
                <Mail size={18} className="text-portfolioBlue" /> ramya.shravanid@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/ramya-shravani-dasiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors hover:scale-105 transform duration-200"
              >
                <Linkedin size={18} className="text-portfolioBlue" /> ramya-shravani-dasiga
              </a>
              <a 
                href="https://github.com/RamyaDasiga110" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors hover:scale-105 transform duration-200"
              >
                <Github size={18} className="text-portfolioBlue" /> RamyaDasiga110
              </a>
              <a 
                href="https://www.youtube.com/@DailyDoseWithRamya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-700 hover:text-portfolioBlue transition-colors hover:scale-105 transform duration-200"
              >
                <Youtube size={18} className="text-red-500" /> DailyDoseWithRamya
              </a>
              <span className="flex items-center gap-2 text-gray-700 hover:scale-105 transform duration-200">
                <Phone size={18} className="text-portfolioBlue" /> +39 351 358 7870, +91 7760669686
              </span>
              <span className="flex items-center gap-2 text-gray-700 hover:scale-105 transform duration-200">
                <MapPin size={18} className="text-portfolioBlue" /> Pisa, Italy
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-portfolioBlue hover:shadow-lg hover:shadow-purple-500/20 text-white transition-all">
                <a href="#experience" className="flex items-center gap-2">
                  View My Work <ArrowDown size={16} />
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
                <a href="#youtube" className="flex items-center gap-2">
                  <Youtube size={16} /> My YouTube Channel
                </a>
              </Button>
            </div>
          </div>
          
          <div className={`md:col-span-5 ${isTablet ? 'md:col-span-12 mt-8' : ''} flex justify-center animate-fade-in opacity-0`} style={{ animationDelay: '0.4s' }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-portfolioBlue opacity-20 rounded-full blur-md"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-portfolioBlue p-1 shadow-xl">
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={`${import.meta.env.BASE_URL}lovable-uploads/a0e96d51-a83a-4940-a633-2655f1561f35.png`} alt="Ramya Shravani Dasiga" className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-r from-portfolioBlue to-purple-500">
                      <span className="text-7xl font-bold text-white">RS</span>
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-300 bg-opacity-20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-portfolioBlue bg-opacity-20 rounded-full"></div>
              
              {/* Code symbols */}
              <div className="absolute -top-8 right-10 text-purple-500 opacity-30 text-xl font-mono">&lt;/&gt;</div>
              <div className="absolute bottom-0 left-5 text-purple-500 opacity-30 text-xl font-mono">{`{ }`}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
        <a 
          href="#experience" 
          className="animate-bounce p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll down to experience section"
        >
          <ArrowDown size={24} className="text-purple-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
