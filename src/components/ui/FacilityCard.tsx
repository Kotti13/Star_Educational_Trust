import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
      <div className="p-3 bg-orange-100 inline-block rounded-lg mb-4 group-hover:bg-orange-200 transition-colors">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FacilityCard;