import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/8617566/pexels-photo-8617566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Classrooms",
    caption: "Interactive classroom session"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/8617707/pexels-photo-8617707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Labs",
    caption: "Students in science laboratory"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Events",
    caption: "Annual cultural event"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/8617911/pexels-photo-8617911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Labs",
    caption: "Computer lab session"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/8617457/pexels-photo-8617457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Activities",
    caption: "Robotics club project"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/8617874/pexels-photo-8617874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Activities",
    caption: "Dance rehearsal"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/8617832/pexels-photo-8617832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Classrooms",
    caption: "Modern classroom facilities"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/8617546/pexels-photo-8617546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Campus",
    caption: "School entrance view"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/8617899/pexels-photo-8617899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Activities",
    caption: "Group project work"
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Sports",
    caption: "Sports day event"
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/8617765/pexels-photo-8617765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Events",
    caption: "Graduation ceremony"
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Campus",
    caption: "Campus building"
  }
];

const categories = ["All", "Classrooms", "Labs", "Activities", "Events", "Sports", "Campus"];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-50 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h1>
          <p className=" text-black max-w-3xl mx-auto text-lg">
            A glimpse into our vibrant campus life and activities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <SectionTitle 
          title="A Glimpse into Our World" 
          subtitle="Discover moments from school events, academic activities, and campus life"
          centered={true}
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 my-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="overflow-hidden rounded-lg h-56">
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2">
                <p className="text-gray-500 text-sm">{image.category}</p>
                <p className="text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.caption} 
              className="max-h-[70vh] mx-auto object-contain"
            />
            <div className="text-white text-center mt-4">
              <p className="text-lg font-semibold">{selectedImage.caption}</p>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;