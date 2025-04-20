import React from 'react';
import { Link } from 'react-router-dom';
import { School, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-50 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <School className="text-orange-600 h-6 w-6 mr-2" />
              <h3 className="text-orange-600 font-bold text-lg">STAR Educational Trust</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Inspiring minds, shaping futures. Committed to nurturing young minds through quality education,
              values, and a passion for innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-gray-800 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facility" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Our Facility
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Curricular Activities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-gray-800 font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="text-orange-500 h-5 w-5 mr-2 mt-1" />
                <div>
                  <p className="text-gray-600">9787555527, 9159785213</p>
                  <p className="text-gray-600">9585811112, 9585733334</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-orange-500 h-5 w-5 mr-2 mt-1" />
                <p className="text-gray-600">info@stareducationaltrust.in</p>
              </div>
              <div className="flex items-start">
                <MapPin className="text-orange-500 h-5 w-5 mr-2 mt-1" />
                <p className="text-gray-600">KVR Nagar, Tiruppur & Vetuvapalayam, Tiruppur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} STAR Educational Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;