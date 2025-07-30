import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VisualPortfolio.module.css';

const VisualPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center item

  const filters = ['All', 'Logos', 'Posters', 'Web UI', 'Social Media', 'Branding'];

  const designs = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Logos',
      image: '/sethbellarin/images/poster1.jpg',
      description: 'Modern logo design for tech startup'
    },
    {
      id: 2,
      title: 'Event Poster',
      category: 'Posters',
      image: '/sethbellarin/images/poster2.jpg',
      description: 'Creative poster for music festival'
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      category: 'Social Media',
      image: '/sethbellarin/images/cover1.png',
      description: 'Social media campaign visuals'
    },
    {
      id: 4,
      title: 'Web Interface',
      category: 'Web UI',
      image: '/sethbellarin/images/cover2.png',
      description: 'Modern web application design'
    },
    {
      id: 5,
      title: 'Brand Package',
      category: 'Branding',
      image: '/sethbellarin/images/poster1.jpg',
      description: 'Complete branding solution'
    },
    {
      id: 6,
      title: 'Art Exhibition Poster',
      category: 'Posters',
      image: '/sethbellarin/images/poster3.jpg',
      description: 'Minimalist poster design for art show'
    },
    {
      id: 7,
      title: 'Tech Conference Ad',
      category: 'Social Media',
      image: '/sethbellarin/images/cover3.png',
      description: 'Bold design for digital event promotion'
    },
    {
      id: 8,
      title: 'Mobile UI Concepts',
      category: 'Web UI',
      image: '/sethbellarin/images/cover4.png',
      description: 'Clean and intuitive mobile interface designs'
    },
    {
      id: 9,
      title: 'Product Branding Mockup',
      category: 'Branding',
      image: '/sethbellarin/images/mockup1.jpg',
      description: 'Realistic brand packaging mockups'
    },
    {
      id: 10,
      title: 'Event Teaser Poster',
      category: 'Posters',
      image: '/sethbellarin/images/poster4.jpg',
      description: 'Hype-building visual for upcoming event'
    }
  ];

  const filteredDesigns = activeFilter === 'All' 
    ? designs 
    : designs.filter(design => design.category === activeFilter);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? filteredDesigns.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === filteredDesigns.length - 1 ? 0 : prev + 1
    );
  };

  const getCarouselItems = () => {
    const items = [];
    const totalItems = filteredDesigns.length;
    
    for (let i = 0; i < totalItems; i++) {
      const position = (i - currentIndex + totalItems) % totalItems;
      let className = styles.carouselItem;
      
      if (position === 0) className += ` ${styles.center}`;
      else if (position === 1 || position === totalItems - 1) className += ` ${styles.side}`;
      else className += ` ${styles.hidden}`;
      
      items.push({
        ...filteredDesigns[i],
        className,
        position
      });
    }
    
    return items;
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  return (
    <section id="visual-portfolio" className={styles.portfolioSection}>
      <div className={styles.backgroundBlur} />
      
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.header}>
            <h2 className={styles.title}>My Visual Diary</h2>
            <p className={styles.subtitle}>Explore my world of design and visuals</p>
          </div>

          <div className={styles.filterButtons}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              {getCarouselItems().map((item) => (
                <div
                  key={item.id}
                  className={item.className}
                  style={{
                    transform: item.position === 0 
                      ? 'translateX(0) scale(1) rotateY(0deg)'
                      : item.position === 1
                      ? 'translateX(120px) scale(0.8) rotateY(-25deg)'
                      : item.position === filteredDesigns.length - 1
                      ? 'translateX(-120px) scale(0.8) rotateY(25deg)'
                      : 'translateX(0) scale(0.6) rotateY(0deg)'
                  }}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${styles.designImage} ${
                        item.category === 'Web UI' ? styles.landscapeImage : ''
                      }`}
                    />
                    <div className={styles.imageOverlay}>
                      <h3 className={styles.designTitle}>{item.title}</h3>
                      <p className={styles.designDescription}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={handlePrevious}
              aria-label="Previous design"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next design"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.indicators}>
            {filteredDesigns.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.activeIndicator : ''
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to design ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualPortfolio;
