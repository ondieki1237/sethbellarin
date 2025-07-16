import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileImage, Layout, Film, Presentation } from "lucide-react";
import styles from './Graphicsection.module.css';

export default function GraphicsShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    <section id="graphics" className={styles.graphicsSection} aria-label="Graphic Design Portfolio by Seth Makori Bellarin">
      <div className={styles.container}>
        <h2 className={styles.title}>Graphic & Visual Design Showcase - Seth Makori</h2>
        <p className={styles.subtitle}>
          Explore high-quality visual content, from branding assets to promotional materials.
          Designed by Kenyan-based creative and web developer Seth Makori Bellarin.
        </p>

        <div className={styles.sliderContainer} aria-live="polite">
          {coverImages.map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              aria-hidden={index !== currentImageIndex}
            >
              <img
                src={src}
                alt={`Graphic design preview ${index + 1} by Seth Makori Bellarin`}
                loading="lazy"
              />
              <div className={styles.slideOverlay} />
            </div>
          ))}

          <button
            onClick={handlePrevImage}
            className={`${styles.sliderButton} ${styles.prevButton}`}
            aria-label="Show previous graphic preview"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNextImage}
            className={`${styles.sliderButton} ${styles.nextButton}`}
            aria-label="Show next graphic preview"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.categoriesGrid}>
          <DesignCategory
            title="Posters"
            icon={<FileImage className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/poster1.jpg`}
            link="https://drive.google.com/drive/folders/1CHh3MnKyITHP9Q4VLRbD5k_pEYQE01J9?usp=sharing"
            description="A collection of marketing and event posters designed for visual impact."
          />

          <DesignCategory
            title="Logos"
            icon={<Layout className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/poster2.jpg`}
            link="https://drive.google.com/drive/folders/139Z7qJH87yKM6JByVOEJjWfPPkwgmAxg?usp=sharing"
            description="A gallery of brand logos crafted for startups, organizations, and creatives."
          />

          <DesignCategory
            title="Videos"
            icon={<Film className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/video-thumbnail.jpg`}
            link="https://drive.google.com/file/d/1YLYbzURG7DRzT1z1mXVqAASye8T5_V4G/view?usp=sharing"
            description="Short-form video projects for branding and social media campaigns."
          />

          <DesignCategory
            title="Slides"
            icon={<Presentation className={styles.categoryIcon} />}
            imageSrc={`${basePath}/images/cover2.png`}
            link="https://drive.google.com/drive/folders/139Z7qJH87yKM6JByVOEJjWfPPkwgmAxg?usp=sharing"
            description="Professional slide decks for corporate and educational presentations."
          />
        </div>
      </div>
    </section>
  );
}

function DesignCategory({ title, icon, imageSrc, link, description }) {
  return (
    <article className={styles.categoryCard} aria-labelledby={`${title.toLowerCase()}-title`}>
      <div className={styles.categoryImage}>
        <img src={imageSrc} alt={`${title} design sample`} loading="lazy" />
      </div>

      <div className={styles.categoryContent}>
        {icon}
        <h3 id={`${title.toLowerCase()}-title`} className={styles.categoryTitle}>{title}</h3>
        <p className={styles.categoryDescription}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewButton}
          aria-label={`View Seth Makori's ${title}`}
        >
          View {title}
        </a>
      </div>
    </article>
  );
}
