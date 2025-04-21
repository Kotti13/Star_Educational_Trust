import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FacilityCard from '../components/ui/FacilityCard';
import { Dumbbell, FlaskRound as Flask, Calculator, Bus, Microscope } from 'lucide-react';

const Facility: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-50 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h1>
          <p className="max-w-3xl mx-auto text-lg text-black">
            State-of-the-art infrastructure to support holistic educational development.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <SectionTitle 
          title="State-of-the-Art Facilities for Future Leaders" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Sports Infrastructure */}
          <FacilityCard 
            title="Sports Infrastructure" 
            description="We promote physical development through Football, Athletics, Kho-Kho, Basketball, Cricket, and Table Tennis."
            icon={Dumbbell}
          />
          
          {/* Science Lab */}
          <FacilityCard 
            title="Science Lab" 
            description="Well-equipped science laboratories to facilitate practical learning and scientific curiosity."
            icon={Flask}
          />
          
          {/* Math Lab */}
          <FacilityCard 
            title="Math Lab" 
            description="Interactive mathematics laboratory for concept-based learning and problem-solving skills."
            icon={Calculator}
          />
          
          {/* Computer Lab */}
          <FacilityCard 
            title="Computer Lab" 
            description="Modern computer labs with latest technology to ensure digital literacy and programming skills."
            icon={Microscope}
          />
          
          {/* Transport Services */}
          <FacilityCard 
            title="Transport Services" 
            description="Reliable school transport covering all major routes in and around Tiruppur."
            icon={Bus}
          />
          
          {/* Foundation Course */}
          <FacilityCard 
            title="Foundation Course Training" 
            description="Specialized coaching to prepare students for competitive exams like NEET, IIT, and JEE."
            icon={Microscope}
          />
        </div>
      </div>

      {/* Image Showcase */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Experience Our Campus" 
            subtitle="Take a visual tour of our world-class facilities"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8617832/pexels-photo-8617832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Classroom" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8617707/pexels-photo-8617707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Laboratory" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sports Ground" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8617911/pexels-photo-8617911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Computer Lab" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;