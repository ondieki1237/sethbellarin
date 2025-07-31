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
    title: 'Company Logo Design',
    category: 'Logos',
    image: '/sethbellarin/images/cover1.png'
  },
  {
    id: 2,
    title: 'Product Logo Concept',
    category: 'Logos',
    image: '/sethbellarin/images/cover2.png'
  },
  {
    id: 3,
    title: 'Event Poster',
    category: 'Posters',
    image: '/sethbellarin/images/poster2.jpg'
  },
  // {
  //   id: 5,
  //   title: 'Web Interface',
  //   category: 'Web UI',
  //   image: '/sethbellarin/images/cover4.png'
  // },
  {
    id: 6,
    title: 'Brand Package',
    category: 'Posters',
    image: '/sethbellarin/images/poster1.jpg'
  },
  {
    id: 7,
    title: 'Art Exhibition Poster',
    category: 'Posters',
    image: '/sethbellarin/images/poster3.jpg'
  },
  // {
  //   id: 9,
  //   title: 'Mobile UI Concepts',
  //   category: 'Web UI',
  //   image: '/sethbellarin/images/cover4.png'
  // },
  {
    id: 12,
    title: 'HER Campaign Poster',
    category: 'Posters',
    image: '/sethbellarin/images/h4h1.jpg'
  },
  {
    id: 13,
    title: 'Thank You Poster',
    category: 'Posters',
    image: '/sethbellarin/images/thankyou.jpg'
  },
  {
    id: 14,
    title: 'Wanda\'s Showcase Poster',
    category: 'Posters',
    image: '/sethbellarin/images/wandas.png'
  },
  {
    id: 15,
    title: 'YAGC Poster',
    category: 'Posters',
    image: '/sethbellarin/images/yagc.png'
  },
  {
    id: 16,
    title: 'Inspiration Poster 1',
    category: 'Posters',
    image: '/sethbellarin/images/nice1.jpg'
  },
  {
    id: 17,
    title: 'Inspiration Poster 2',
    category: 'Posters',
    image: '/sethbellarin/images/nice2.jpg'
  },
  {
    id: 18,
    title: 'Inspiration Poster 3',
    category: 'Posters',
    image: '/sethbellarin/images/nice3.jpg'
  },
  {
    id: 19,
    title: 'Business Impact Poster',
    category: 'Posters',
    image: '/sethbellarin/images/business.jpg'
  },
  {
    id: 20,
    title: 'Third Edition Poster',
    category: 'Posters',
    image: '/sethbellarin/images/third.jpg'
  },
  {
    id: 21,
    title: 'Fourth Edition Poster',
    category: 'Posters',
    image: '/sethbellarin/images/fourth.jpg'
  },
  {
    id: 22,
    title: 'Quotation Poster',
    category: 'Posters',
    image: '/sethbellarin/images/quotation.jpg'
  },
  
  {
    id: 23,
    title: 'Branding',
    category: 'Branding',
    image: '/sethbellarin/images/branding1.png'
  },
   {
    id: 24,
    title: 'Web Ui Design',
    category: 'Web UI',
    image: '/sethbellarin/images/anah.jpg'
  },
     {
    id: 25,
    title: 'Web Ui Design',
    category: 'Web UI',
    image: '/sethbellarin/images/food.jpg'
  },
     {
    id: 26,
    title: 'Web Ui Design',
    category: 'Web UI',
    image: '/sethbellarin/images/cadiet.jpg'
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