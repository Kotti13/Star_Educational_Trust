import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <SectionTitle title="Get in Touch" />
            
            <div className="space-y-8">
              {/* School 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Little Star International School</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      9/7B, KVR Nagar Main Road, Mangalam Rd, Erukkadu Extension, Tiruppur, Tamil Nadu 641604
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-orange-500 h-5 w-5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">9787555527, 9159785213</p>
                  </div>
                </div>
              </div>
              
              {/* School 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Little Starr International School</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Vetuvapalayam, Somanur Road, Mangalam, Tiruppur - 641 663
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-orange-500 h-5 w-5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">9585811112, 9585733334</p>
                  </div>
                </div>
              </div>
              
              {/* General Contact */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">General Inquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-orange-500 h-5 w-5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">info@stareducationaltrust.in</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-orange-500 h-5 w-5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Working Hours: 9:00 AM – 4:00 PM (Monday to Saturday)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <SectionTitle title="Send Us a Message" />
            <ContactForm />
          </div>
        </div>
        
        {/* Maps */}
        <div className="mt-16">
          <SectionTitle 
            title="Visit Our Schools" 
            subtitle="Use the maps below to find our schools"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Map School 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Little Star International School</h3>
              <div className="h-80 w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1747058457245!2d77.33115!3d11.019951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzExLjgiTiA3N8KwMTknNTIuMSJF!5e0!3m2!1sen!2sin!4v1603356157561!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Little Star International School Map"
                ></iframe>
              </div>
            </div>
            
            {/* Map School 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Little Starr International School</h3>
              <div className="h-80 w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0247058457134!2d77.27115!3d11.029951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzQ3LjgiTiA3N8KwMTYnMTUuMSJF!5e0!3m2!1sen!2sin!4v1603356157561!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Little Starr International School Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;