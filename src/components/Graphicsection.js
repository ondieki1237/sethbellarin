import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileImage, Layout, Film, Presentation } from "lucide-react";
import styles from './Graphicsection.module.css';

export default function GraphicsShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Add the base path for the subdirectory deployment
  const basePath = "/sethbellarin";
  const coverImages = [
    `${basePath}/images/cover1.png`,
    `${basePath}/images/cover2.png`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? coverImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === coverImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="graphics" className={styles.graphicsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Design Portfolio</h2>

        {/* Cover Image Slider */}
        <div className={styles.sliderContainer}>
          {coverImages.map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={src}
                alt={`Cover design ${index + 1}`}
              />
              <div className={styles.slideOverlay} />
            </div>
          ))}

          <button
            onClick={handlePrevImage}
            className={`${styles.sliderButton} ${styles.prevButton}`}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNextImage}
            className={`${styles.sliderButton} ${styles.nextButton}`}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Design Categories */}
        <div className={styles.categoriesGrid}>
          <DesignCategory
            title="Posters"
            icon={<FileImage className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/poster1.jpg`}
            link="https://drive.google.com/drive/folders/1CHh3MnKyITHP9Q4VLRbD5k_pEYQE01J9?usp=sharing"
          />

          <DesignCategory
            title="Logos"
            icon={<Layout className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/poster2.jpg`}
            link="https://drive.google.com/drive/folders/139Z7qJH87yKM6JByVOEJjWfPPkwgmAxg?usp=sharing"
          />

          <DesignCategory
            title="Videos"
            icon={<Film className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/video-thumbnail.jpg`}
            link="https://drive.google.com/file/d/1YLYbzURG7DRzT1z1mXVqAASye8T5_V4G/view?usp=sharing"
          />

          <DesignCategory
            title="Slides"
            icon={<Presentation className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/cover2.png`}
            link="https://drive.google.com/drive/folders/139Z7qJH87yKM6JByVOEJjWfPPkwgmAxg?usp=sharing"
          />
        </div>
      </div>
    </section>
  );
}

function DesignCategory({ title, icon, imageSrc, link }) {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryImage}>
        <img src={imageSrc} alt={title} />
      </div>

      <div className={styles.categoryContent}>
        {icon}
        <h3 className={styles.categoryTitle}>{title}</h3>
        <p className={styles.categoryDescription}>
          View my collection of {title.toLowerCase()}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewButton}
        >
          View {title}
        </a>
      </div>
    </div>
  );
}