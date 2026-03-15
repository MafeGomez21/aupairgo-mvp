import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Select all elements with the 'reveal-hidden' class
    const revealElements = document.querySelectorAll('.reveal-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is visible in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset so it triggers slightly before it's fully in view
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
