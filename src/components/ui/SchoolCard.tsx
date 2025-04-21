import React from 'react';
import { School, MapPin, Phone, FileDown } from 'lucide-react';

interface SchoolCardProps {
  name: string;
  address: string;
  contacts: string[];
  applicationFormUrl: string;
  imageUrl: string;
}

const SchoolCard: React.FC<SchoolCardProps> = ({
  name,
  address,
  contacts,
  applicationFormUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <School className="text-blue-500 h-5 w-5 mr-2" />
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>
        
        <div className="flex items-start mb-2">
          <MapPin className="text-blue-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
          <p className="text-gray-600">{address}</p>
        </div>
        
        <div className="flex items-start mb-4">
          <Phone className="text-blue-500 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
          <div>
            {contacts.map((contact, index) => (
              <p key={index} className="text-gray-600">{contact}</p>
            ))}
          </div>
        </div>
        
        <a 
          href={applicationFormUrl}
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          download
        >
          <FileDown className="h-4 w-4 mr-2" />
          Download Application Form
        </a>
      </div>
    </div>
  );
};

export default SchoolCard;