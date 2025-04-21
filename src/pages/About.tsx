import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Eye, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-50 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About STAR Educational Trust</h1>
          <p className="max-w-3xl mx-auto text-lg text-black">
            A leading educational institution committed to nurturing young minds through quality education.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <SectionTitle title="About STAR Educational Trust" />
            <div className="space-y-4 text-gray-600">
              <p>
                STAR Educational Trust is committed to nurturing young minds through quality education, values, and a passion for innovation. Founded with the vision to provide affordable, world-class education, the trust has grown into a beacon of academic excellence in Tiruppur.
              </p>
              <p>
                Our schools aim to strike the right balance between strong academic foundations and all-round development. Our experienced faculty, student-first policies, and future-ready infrastructure make us a trusted choice for parents and students alike.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-md h-60">
  <img 
    src="https://img.freepik.com/free-vector/flat-background-international-day-education_23-2151062628.jpg?ga=GA1.1.2113263236.1745217660&semt=ais_hybrid&w=740" 
    alt="STAR Educational Trust" 
    className="w-full h-full object-cover"
  />
</div>

        </div>

        {/* Vision & Mission */}
        <div className="mt-20">
          <SectionTitle title="Vision & Mission" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="p-3 bg-blue-100 inline-block rounded-full mb-6">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To cultivate confident, responsible individuals prepared to thrive in a dynamic world.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="p-3 bg-blue-100 inline-block rounded-full mb-6">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality education blended with values, discipline, and leadership.
              </p>
            </div>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="mt-20">
          <SectionTitle title="Founder's Message" centered={true} />
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-blue-100 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="B.T. Arasakumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-gray-800 mb-1">B.T. Arasakumar, M.A.</h3>
                <p className="text-gray-500 mb-4">Founder & Chairman, STAR Educational Trust</p>
                <p className="text-gray-500 mb-4">
                  Founder President, Tamil Nadu Private Schools Association<br />
                  Vice President and Spokesperson, DMK
                </p>
                <p className="text-gray-600 mb-4">
                  Mr. B.T. Arasakumar, affectionately known as BT Kumar, hails from Maruthanthalai, a remote village in Pudukottai district of South Tamil Nadu. Born on June 22, 1968, he pursued his education diligently, culminating in a Master's degree in History from Annamalai University.
                </p>
                <p className="text-gray-600 mb-4">
                  Beyond education, he has been an active participant in Tamil Nadu's political landscape, holding positions such as the Chairman of BTK College of Education and Kokila Arts and Science College. His leadership and vision continue to inspire the STAR Educational Trust's mission to deliver exceptional education.
                </p>
                <p className="text-gray-600">
                  Under his guidance, STAR Educational Trust has become synonymous with quality education, ethical values, and all-round development of students. Mr. Arasakumar believes that education is the most powerful tool to change society, and he is dedicated to making it accessible to all deserving students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;