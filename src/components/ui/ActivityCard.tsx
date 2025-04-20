import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  icon: LucideIcon;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, icon: Icon }) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center space-x-3 hover:border-orange-200">
      <div className="p-2 bg-orange-50 rounded-md text-orange-500 group-hover:bg-orange-100 transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-medium text-gray-800">{title}</h3>
    </div>
  );
};

export default ActivityCard;