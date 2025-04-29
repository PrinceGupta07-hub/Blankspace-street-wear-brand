document.addEventListener("DOMContentLoaded", () => {
  let cart = [];

  const updateCartUI = () => {
    document.getElementById("cart-count").textContent = cart.length;
  };

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product");
      cart.push(productId);
      updateCartUI();
      alert(`Product ${productId} added to cart!`);
    });
  });

  updateCartUI();
});


// Add this to your script.js file
document.addEventListener("DOMContentLoaded", () => {
    // Hero Slider functionality
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Initialize autoplay
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Function to show a specific slide
    function showSlide(index) {
      // Deactivate all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Activate the current slide and dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      // Update current slide index
      currentSlide = index;
      
      // Reset interval timer
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Function to show next slide
    function nextSlide() {
      let nextIndex = currentSlide + 1;
      if (nextIndex >= totalSlides) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
    
    // Function to show previous slide
    function prevSlide() {
      let prevIndex = currentSlide - 1;
      if (prevIndex < 0) {
        prevIndex = totalSlides - 1;
      }
      showSlide(prevIndex);
    }
    
    // Event listeners for navigation
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
    
    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    // Initialize slider
    function showSlide(index) {
      // Hide all slides first
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
      });
      
      // Show the active slide
      slides[index].classList.add('active');
      slides[index].style.opacity = '1';
      
      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    // Set up event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Set up dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    // Auto-rotate slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Initialize first slide
    showSlide(currentSlide);
  });

  // Add this function to your shop.js file
document.addEventListener('DOMContentLoaded', function() {
    // Make product images clickable
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(image => {
      image.style.cursor = 'pointer';
      image.addEventListener('click', function() {
        // Get the product ID from the Add to Cart button in the same product card
        const addToCartBtn = this.parentElement.querySelector('.add-to-cart');
        const productId = addToCartBtn.getAttribute('data-product');
        
        // Navigate to product detail page with the product ID
        window.location.href = `product.html?id=${productId}`;
      });
    });
  });