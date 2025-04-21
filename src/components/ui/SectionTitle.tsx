import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-blue-500 mt-3 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;