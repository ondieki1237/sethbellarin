import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VisualPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);

  const filters = ['All', 'Logos', 'Posters', 'Web UI', 'Social Media', 'Branding'];

  const designs = [
    { id: 26, title: 'Web UI Design', category: 'Web UI', image: '/sethbellarin/images/cadiet.jpg' },
    { id: 3, title: 'Event Poster', category: 'Posters', image: '/sethbellarin/images/poster2.jpg' },
    { id: 12, title: 'HER Campaign Poster', category: 'Posters', image: '/sethbellarin/images/h4h1.jpg' },
    { id: 15, title: 'YAGC Poster', category: 'Posters', image: '/sethbellarin/images/yagc.png' },
    { id: 1, title: 'Company Logo Design', category: 'Logos', image: '/sethbellarin/images/cover1.png' },
    { id: 2, title: 'Product Logo Concept', category: 'Logos', image: '/sethbellarin/images/cover2.png' },
    { id: 23, title: 'Branding', category: 'Branding', image: '/sethbellarin/images/branding1.png' },
    { id: 4, title: 'Personal Logo Design', category: 'Logos', image: '/sethbellarin/images/logosmo.png' },
    { id: 6, title: 'Brand Package', category: 'Posters', image: '/sethbellarin/images/poster1.jpg' },
    { id: 7, title: 'Art Exhibition Poster', category: 'Posters', image: '/sethbellarin/images/poster3.jpg' },
    { id: 13, title: 'Thank You Poster', category: 'Posters', image: '/sethbellarin/images/thankyou.jpg' },
    { id: 14, title: "Wanda's Showcase Poster", category: 'Posters', image: '/sethbellarin/images/wandas.png' },
    { id: 16, title: 'Inspiration Poster 1', category: 'Posters', image: '/sethbellarin/images/nice1.jpg' },
    { id: 17, title: 'Inspiration Poster 2', category: 'Posters', image: '/sethbellarin/images/nice2.jpg' },
    { id: 18, title: 'Inspiration Poster 3', category: 'Posters', image: '/sethbellarin/images/nice3.jpg' },
    { id: 19, title: 'Business Impact Poster', category: 'Posters', image: '/sethbellarin/images/business.jpg' },
    { id: 20, title: 'Third Edition Poster', category: 'Posters', image: '/sethbellarin/images/third.jpg' },
    { id: 21, title: 'Fourth Edition Poster', category: 'Posters', image: '/sethbellarin/images/fourth.jpg' },
    { id: 22, title: 'Quotation Poster', category: 'Posters', image: '/sethbellarin/images/quotation.jpg' },
    { id: 5, title: 'Company Branding', category: 'Branding', image: '/sethbellarin/images/hue1.png' },
    { id: 6, title: 'Brand Package', category: 'Branding', image: '/sethbellarin/images/hue2.png' },
    { id: 24, title: 'Web UI Design', category: 'Web UI', image: '/sethbellarin/images/anah.jpg' },
    { id: 25, title: 'Web UI Design', category: 'Web UI', image: '/sethbellarin/images/food.jpg' },
  ];

  const filteredDesigns = activeFilter === 'All' ? designs : designs.filter(design => design.category === activeFilter);
  const extendedDesigns = [...filteredDesigns, ...filteredDesigns, ...filteredDesigns];

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying || selectedDesign) return;
    
    autoplayRef.current = setInterval(() => {
      if (carouselRef.current && !selectedDesign) {
        carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(autoplayRef.current);
  }, [isAutoPlaying, selectedDesign]);

  // Reset scroll on filter change
  useEffect(() => {
    if (carouselRef.current && !selectedDesign) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * filteredDesigns.length;
      setCurrentIndex(0);
    }
  }, [activeFilter]);

  // Handle drag start
  const handleDragStart = (e) => {
    if (selectedDesign) return;
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
    clearInterval(autoplayRef.current);
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging || selectedDesign) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (selectedDesign) return;
    setIsDragging(false);
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        if (carouselRef.current && !selectedDesign) {
          carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
        }
      }, 4000);
    }
  };

  // Handle infinite scroll
  const handleScroll = () => {
    if (selectedDesign) return;
    const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
    const middle = offsetWidth * filteredDesigns.length;
    
    if (scrollLeft <= 0) {
      carouselRef.current.scrollLeft = middle;
    } else if (scrollLeft >= scrollWidth - offsetWidth) {
      carouselRef.current.scrollLeft = middle;
    }
  };

  // Navigation functions
  const handlePrevious = () => {
    if (selectedDesign) {
      // move modal to previous design and update selectedDesign
      const newIndex = (currentIndex - 1 + filteredDesigns.length) % filteredDesigns.length;
      setCurrentIndex(newIndex);
      setSelectedDesign(filteredDesigns[newIndex]);
    } else if (carouselRef.current) {
      // safe-guard carousel scroll
      carouselRef.current.scrollBy({ left: -Math.round(carouselRef.current.offsetWidth / 3), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (selectedDesign) {
      // move modal to next design and update selectedDesign
      const newIndex = (currentIndex + 1) % filteredDesigns.length;
      setCurrentIndex(newIndex);
      setSelectedDesign(filteredDesigns[newIndex]);
    } else if (carouselRef.current) {
      // safe-guard carousel scroll
      carouselRef.current.scrollBy({ left: Math.round(carouselRef.current.offsetWidth / 3), behavior: 'smooth' });
    }
  };

  // Handle design click
  const handleDesignClick = (design, index) => {
    const actualIndex = index % filteredDesigns.length;
    setSelectedDesign(design);
    setCurrentIndex(actualIndex);
    setIsAutoPlaying(false);
    clearInterval(autoplayRef.current);
  };

  // Close modal
  const closeModal = () => {
    setSelectedDesign(null);
    setIsAutoPlaying(true);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedDesign) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (selectedDesign) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedDesign, currentIndex]);

  // Get current design for modal
  const currentDesign = selectedDesign || filteredDesigns[currentIndex];

  return (
    <>
      <style>{`
        .portfolioSection_visual {
          min-height: 100vh;
          padding: 6rem 1rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #e5e5e5;
        }

        .subtleGradient_visual {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 50%, #d5d5d5 100%);
          opacity: 0.3;
          z-index: -1;
        }

        .container_visual {
          max-width: 90rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .neumorphicCard_visual {
          background: #e5e5e5;
          border-radius: 2rem;
          padding: 3rem;
          box-shadow: 
            8px 8px 16px rgba(0, 0, 0, 0.1),
            -8px -8px 16px rgba(255, 255, 255, 1);
          max-width: 80rem;
          width: 100%;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header_visual {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .title_visual {
          font-size: 3.5rem;
          font-weight: 700;
          color: #593c2a;
          margin-bottom: 0.75rem;
          line-height: 1.2;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.6);
        }

        .subtitle_visual {
          font-size: 1.25rem;
          color: #593c2a;
          font-weight: 400;
          opacity: 0.8;
        }

        .filterButtons_visual {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filterButton_visual {
          background: #e5e5e5;
          border: none;
          color: #593c2a;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 1);
        }

        .filterButton_visual:hover {
          color: #faba00;
          transform: translateY(-2px);
          box-shadow: 
            8px 8px 16px rgba(0, 0, 0, 0.12),
            -8px -8px 16px rgba(255, 255, 255, 0.9);
        }

        .filterButton_visual.active {
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          box-shadow: 
            6px 6px 12px rgba(250, 186, 0, 0.3),
            -6px -6px 12px rgba(255, 255, 255, 0.8) inset;
          border: 1px solid #faba00;
        }

        .carouselContainer_visual {
          height: 500px;
          overflow: hidden;
          position: relative;
          border-radius: 1.5rem;
          background: #e5e5e5;
          box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.08),
            inset -4px -4px 8px rgba(255, 255, 255, 1);
          transition: opacity 0.3s ease;
        }

        .carouselContainerHidden_visual {
          opacity: 0;
          pointer-events: none;
        }

        .carousel_visual {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          width: max-content;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: scroll-position;
          padding: 1rem;
          cursor: pointer;
        }

        .carousel_visual::-webkit-scrollbar {
          display: none;
        }

        .carousel_visual {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .carouselItem_visual {
          flex: 0 0 300px;
          height: 400px;
          border-radius: 1.5rem;
          overflow: hidden;
          transform: translateZ(0);
          transition: all 0.3s ease;
          background: #e5e5e5;
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 1);
        }

        .carouselItem_visual.dragging {
          cursor: grabbing;
        }

        .carouselItem_visual:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            10px 10px 20px rgba(0, 0, 0, 0.15),
            -10px -10px 20px rgba(255, 255, 255, 0.8);
        }

        .carouselItem_visual:focus {
          outline: 2px solid #faba00;
          outline-offset: 2px;
        }

        .imageWrapper_visual {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #e5e5e5;
          box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.08),
            inset -4px -4px 8px rgba(255, 255, 255, 1);
          cursor: pointer;
        }

        .designImage_visual {
          width: 100%;
          height: 70%;
          object-fit: cover;
          transition: transform 0.3s ease;
          display: block;
        }

        .imageWrapper_visual:hover .designImage_visual {
          transform: scale(1.05);
        }

        .landscapeImage_visual {
          aspect-ratio: 16 / 9;
          height: auto;
          border-radius: 1rem 1rem 0 0;
        }

        .imageOverlay_visual {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(89, 60, 42, 0.95), transparent);
          padding: 1.5rem;
          color: #ffffff;
          border-radius: 0 0 1.5rem 1.5rem;
        }

        .designTitle_visual {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .designCategory_visual {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.4;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          background: rgba(250, 186, 0, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          display: inline-block;
          font-weight: 500;
        }

        .navigation_visual {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .navButton_visual {
          background: #e5e5e5;
          border: none;
          color: #593c2a;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 1);
          font-size: 1.2rem;
        }

        .navButton_visual:hover {
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          transform: translateY(-2px);
          box-shadow: 
            8px 8px 16px rgba(250, 186, 0, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
        }

        .navButton_visual:active {
          transform: translateY(0) scale(0.95);
          box-shadow: 
            4px 4px 8px rgba(0, 0, 0, 0.1),
            -4px -4px 8px rgba(255, 255, 255, 1);
        }

        /* Modal Styles */
        .modalOverlay_visual {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(5px);
        }

        .modalContent_visual {
          background: #e5e5e5;
          border-radius: 2rem;
          max-width: 90vw;
          max-height: 90vh;
          width: 800px;
          height: auto;
          position: relative;
          box-shadow: 
            12px 12px 24px rgba(0, 0, 0, 0.2),
            -12px -12px 24px rgba(255, 255, 255, 0.8);
          overflow: hidden;
        }

        .modalHeader_visual {
          position: absolute;
          top: 1rem;
          right: 1rem;
          left: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .closeButton_visual {
          background: #e5e5e5;
          border: none;
          color: #593c2a;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 
            4px 4px 8px rgba(0, 0, 0, 0.1),
            -4px -4px 8px rgba(255, 255, 255, 1);
          transition: all 0.3s ease;
        }

        .closeButton_visual:hover {
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          transform: scale(1.1);
        }

        .modalNavigation_visual {
          display: flex;
          gap: 1rem;
        }

        .modalNavButton_visual {
          background: #e5e5e5;
          border: none;
          color: #593c2a;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 1);
        }

        .modalNavButton_visual:hover {
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          transform: translateY(-2px);
          box-shadow: 
            8px 8px 16px rgba(250, 186, 0, 0.3),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
        }

        .modalImageWrapper_visual {
          width: 100%;
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .modalImage_visual {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .modalDetails_visual {
          padding: 2rem;
          background: #e5e5e5;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .modalTitle_visual {
          font-size: 2rem;
          font-weight: 700;
          color: #593c2a;
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.6);
        }

        .modalCategory_visual {
          font-size: 1rem;
          color: #593c2a;
          background: linear-gradient(135deg, #faba00, #f6a800);
          padding: 0.5rem 1rem;
          border-radius: 1.5rem;
          display: inline-block;
          font-weight: 500;
          margin-bottom: 1rem;
          box-shadow: 
            4px 4px 8px rgba(250, 186, 0, 0.3),
            -4px -4px 8px rgba(255, 255, 255, 0.8);
        }

        .modalDescription_visual {
          color: #593c2a;
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .neumorphicCard_visual {
            padding: 2rem;
            margin: 0 1rem;
          }
          
          .title_visual {
            font-size: 2.5rem;
          }
          
          .carouselContainer_visual {
            height: 400px;
          }
          
          .carouselItem_visual {
            flex: 0 0 260px;
            height: 340px;
          }
          
          .modalContent_visual {
            width: 95vw;
            max-width: 95vw;
          }
          
          .modalImageWrapper_visual {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .portfolioSection_visual {
            padding: 4rem 0.5rem;
          }
          
          .neumorphicCard_visual {
            padding: 1.5rem;
            margin: 0 0.5rem;
          }
          
          .title_visual {
            font-size: 2rem;
          }
          
          .subtitle_visual {
            font-size: 1rem;
          }
          
          .filterButtons_visual {
            gap: 0.5rem;
          }
          
          .filterButton_visual {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
          
          .carouselContainer_visual {
            height: 350px;
          }
          
          .carouselItem_visual {
            flex: 0 0 220px;
            height: 300px;
          }
          
          .navigation_visual {
            gap: 1rem;
          }
          
          .navButton_visual {
            width: 48px;
            height: 48px;
          }
          
          .modalContent_visual {
            border-radius: 1rem;
            margin: 1rem;
          }
          
          .modalHeader_visual {
            top: 0.5rem;
            right: 0.5rem;
            left: 0.5rem;
          }
          
          .modalImageWrapper_visual {
            height: 300px;
          }
          
          .modalDetails_visual {
            padding: 1.5rem;
          }
          
          .modalTitle_visual {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .carouselContainer_visual {
            height: 300px;
          }
          
          .carouselItem_visual {
            flex: 0 0 180px;
            height: 260px;
          }
          /* Compact 3-column grid for filter buttons on small phones */
          .filterButtons_visual {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.5rem;
            width: 100%;
            justify-items: center;
            margin-bottom: 1rem;
          }

          .filterButton_visual {
            width: 100%;
            max-width: none;
            padding: 0.45rem 0.5rem;
            font-size: 0.85rem;
            border-radius: 0.75rem;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .title_visual {
            font-size: 1.75rem;
          }
          
          .modalImageWrapper_visual {
            height: 250px;
          }
          
          .modalDetails_visual {
            padding: 1rem;
          }
        }
      `}</style>

      <section id="visual-portfolio" className="portfolioSection_visual">
        <div className="subtleGradient_visual" />
        <div className="container_visual">
          <motion.div 
            className="neumorphicCard_visual"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="header_visual">
              <h2 className="title_visual">My Visual Diary</h2>
              <p className="subtitle_visual">Explore my world of design and visuals</p>
            </div>

            <div className="filterButtons_visual">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  className={`filterButton_visual ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => {
                    setActiveFilter(filter);
                    setSelectedDesign(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            <div
              className={`carouselContainer_visual ${selectedDesign ? 'carouselContainerHidden_visual' : ''}`}
              onMouseEnter={() => !selectedDesign && setIsAutoPlaying(false)}
              onMouseLeave={() => !selectedDesign && setIsAutoPlaying(true)}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
            >
              <div className="carousel_visual" ref={carouselRef} onScroll={handleScroll}>
                {extendedDesigns.map((item, index) => (
                  <motion.div 
                    key={`${item.id}-${index}`} 
                    className={`carouselItem_visual ${isDragging ? 'dragging' : ''}`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleDesignClick(item, index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleDesignClick(item, index)}
                  >
                    <div className="imageWrapper_visual">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`designImage_visual ${item.category === 'Web UI' ? 'landscapeImage_visual' : ''}`}
                        loading="lazy"
                      />
                      <div className="imageOverlay_visual">
                        <h3 className="designTitle_visual">{item.title}</h3>
                        <p className="designCategory_visual">{item.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="navigation_visual">
              <motion.button 
                className="navButton_visual" 
                onClick={handlePrevious}
                aria-label="Previous design"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button 
                className="navButton_visual" 
                onClick={handleNext}
                aria-label="Next design"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Modal for selected design */}
        <AnimatePresence>
          {selectedDesign && (
            <motion.div 
              className="modalOverlay_visual"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="modalContent_visual"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 500 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modalHeader_visual">
                  <button 
                    className="closeButton_visual"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                  <div className="modalNavigation_visual">
                    <button 
                      className="modalNavButton_visual" 
                      onClick={handlePrevious}
                      aria-label="Previous design"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      className="modalNavButton_visual" 
                      onClick={handleNext}
                      aria-label="Next design"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                <div className="modalImageWrapper_visual">
                  <img
                    src={currentDesign.image}
                    alt={currentDesign.title}
                    className="modalImage_visual"
                  />
                </div>

                <div className="modalDetails_visual">
                  <h3 className="modalTitle_visual">{currentDesign.title}</h3>
                  <p className="modalCategory_visual">{currentDesign.category}</p>
                  <div className="modalDescription_visual">
                    <p>Click navigation arrows or use keyboard (← →) to browse through the collection.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default VisualPortfolio;