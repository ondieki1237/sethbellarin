import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VisualPortfolio.module.css';

const VisualPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Duplicate designs for infinite scroll
  const extendedDesigns = [...filteredDesigns, ...filteredDesigns, ...filteredDesigns];

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoplayRef.current = setInterval(() => {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
    }, 3000);

    return () => clearInterval(autoplayRef.current);
  }, [isAutoPlaying]);

  // Reset scroll on filter change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * filteredDesigns.length;
    }
  }, [activeFilter]);

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
    clearInterval(autoplayRef.current);
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
      }, 3000);
    }
  };

  // Handle infinite scroll
  const handleScroll = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
    const middle = offsetWidth * filteredDesigns.length;
    if (scrollLeft <= 0) {
      carouselRef.current.scrollLeft = middle;
    } else if (scrollLeft >= scrollWidth - offsetWidth) {
      carouselRef.current.scrollLeft = middle;
    }
  };

  // Navigation buttons
  const handlePrevious = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
  };

  const handleNext = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth / 3, behavior: 'smooth' });
  };

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
                className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div
            className={styles.carouselContainer}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
              {extendedDesigns.map((item, index) => (
                <div key={`${item.id}-${index}`} className={styles.carouselItem}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${styles.designImage} ${item.category === 'Web UI' ? styles.landscapeImage : ''}`}
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay}>
                      <h3 className={styles.designTitle}>{item.title}</h3>
                      <p className={styles.designDescription}>{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.navigation}>
            <button className={styles.navButton} onClick={handlePrevious} aria-label="Previous design">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.navButton} onClick={handleNext} aria-label="Next design">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualPortfolio;