// Main JavaScript for HTML Mock

// Hero Carousel Functionality
function initHeroCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.hero-slide');
    const prevBtn = carousel.querySelector('.hero-carousel-prev');
    const nextBtn = carousel.querySelector('.hero-carousel-next');
    const indicators = carousel.querySelectorAll('.hero-carousel-indicators .indicator');
    
    let currentSlide = 0;
    let autoplayInterval;

    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current slide and indicator
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoplay();
            showSlide(index);
            startAutoplay();
        });
    });

    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (carousel.querySelector('.hero-slide.active')) {
            if (e.key === 'ArrowLeft') {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            }
        }
    });

    // Start autoplay
    startAutoplay();
}

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero carousel
    initHeroCarousel();
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    }

    // Add to Cart Button Handlers
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // Simulate adding to cart
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
            
            console.log(`Added ${productName} to cart`);
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Lazy Loading Images (if not using native lazy loading)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Product Card Hover Effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Testimonial Animation on Scroll
if ('IntersectionObserver' in window) {
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        testimonialObserver.observe(card);
    });
}
