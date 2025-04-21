import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ActivityCard from '../components/ui/ActivityCard';
import { Music, ChevronRight as ChessKnight, Bot, MessageSquare, Swords, Cog as Yoga, Dumbbell, Music2 } from 'lucide-react';

const Activities: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-50 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Curricular Activities</h1>
          <p className="max-w-3xl mx-auto text-lg text-black">
            Well-rounded development through a variety of extracurricular programs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            title="Well-Rounded Development Through Extracurriculars" 
            centered={true}
          />
          
          <p className="text-gray-600 text-center mb-12">
            We believe that education goes beyond textbooks. Our wide range of extracurricular activities enhances creativity, discipline, teamwork, and self-confidence. These activities help students discover their passions and develop essential life skills alongside academic learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActivityCard title="Silambam" icon={Swords} />
          <ActivityCard title="Yoga" icon={Yoga} />
          <ActivityCard title="Karate" icon={Dumbbell} />
          <ActivityCard title="Dance (Western & Classical)" icon={Music2} />
          <ActivityCard title="Robotics" icon={Bot} />
          <ActivityCard title="Band" icon={Music} />
          <ActivityCard title="Chess" icon={ChessKnight} />
          <ActivityCard title="Communication" icon={MessageSquare} />
          <ActivityCard title="Music" icon={Music} />
        </div>
      </div>
      
      {/* Featured Activities */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Featured Activities" 
            subtitle="Highlights from our extracurricular programs" 
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Featured Activity 1 */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-40 md:h-full">
                  <img
                    src="https://images.pexels.com/photos/8617874/pexels-photo-8617874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Students in dance class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dance Programs</h3>
                <p className="text-gray-600">
                  Our dance programs cover both classical and western forms, nurturing rhythm, discipline, and cultural appreciation. Students regularly participate in competitions and cultural programs, showcasing their talents and gaining confidence.
                </p>
              </div>
            </div>
            
            {/* Featured Activity 2 */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-40 md:h-full">
                  <img
                    src="https://images.pexels.com/photos/8617457/pexels-photo-8617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Robotics class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Robotics Club</h3>
                <p className="text-gray-600">
                  Our robotics program introduces students to the basics of programming, electronics, and mechanical engineering. This hands-on learning develops problem-solving skills and prepares students for the technology-driven future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Annual Events */}
      <div className="container mx-auto py-16 px-4">
        <SectionTitle 
          title="Annual Events Calendar" 
          subtitle="Major activities and celebrations throughout the academic year"
          centered={true}
        />
        
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-8">
          <table className="min-w-full">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Month</th>
                <th className="py-3 px-4 text-left">Event</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="py-3 px-4 font-medium">June</td>
                <td className="py-3 px-4">Annual Sports Day</td>
                <td className="py-3 px-4">A celebration of physical fitness and sportsmanship</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">August</td>
                <td className="py-3 px-4">Science Exhibition</td>
                <td className="py-3 px-4">Showcase of student projects and innovations</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">October</td>
                <td className="py-3 px-4">Cultural Festival</td>
                <td className="py-3 px-4">Celebration of arts, music, and performances</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">December</td>
                <td className="py-3 px-4">Annual Day</td>
                <td className="py-3 px-4">Recognition of academic and extracurricular achievements</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">February</td>
                <td className="py-3 px-4">Talent Show</td>
                <td className="py-3 px-4">Platform for students to showcase individual talents</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;