import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, BookOpen, ChevronRight } from 'lucide-react';

import Carousel from '../components/ui/Carousel';
import SectionTitle from '../components/ui/SectionTitle';
import SchoolCard from '../components/ui/SchoolCard';

const carouselImages = [
  "https://images.pexels.com/photos/8617566/pexels-photo-8617566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/8617899/pexels-photo-8617899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <section>
        <Carousel images={carouselImages} />
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Welcome to STAR Educational Trust" 
            subtitle="Inspiring minds, shaping futures."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 mb-6">
              STAR Educational Trust proudly manages two distinguished institutions committed to academic excellence and holistic development. From modern lab facilities and dedicated sports infrastructure to foundation coaching for NEET, IIT, and JEE, our schools are designed to empower students academically and beyond.
            </p>
          </div>

          {/* School Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SchoolCard 
              name="Little Star International School"
              address="9/7B, KVR Nagar Main Road, Mangalam Rd, Erukkadu Extension, Tiruppur, Tamil Nadu 641604"
              contacts={["9787555527", "9159785213"]}
              applicationFormUrl="/forms/little-star-application.pdf"
              imageUrl="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            
            <SchoolCard 
              name="Little Starr International School"
              address="Vetuvapalayam, Somanur Road, Mangalam, Tiruppur - 641 663"
              contacts={["9585811112", "9585733334"]}
              applicationFormUrl="/forms/little-starr-application.pdf"
              imageUrl="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-orange-100 inline-block rounded-full mb-6">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To cultivate confident, responsible individuals prepared to thrive in a dynamic world.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-orange-100 inline-block rounded-full mb-6">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality education blended with values, discipline, and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Founder's Message" centered={true} />
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-orange-100 rounded-full overflow-hidden mb-4">
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
                <p className="text-gray-600">
                  Beyond education, he has been an active participant in Tamil Nadu's political landscape, holding positions such as the Chairman of BTK College of Education and Kokila Arts and Science College. His leadership and vision continue to inspire the STAR Educational Trust's mission to deliver exceptional education.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link 
              to="/gallery" 
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Explore Our Campus
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors"
            >
              Learn More About Us
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;