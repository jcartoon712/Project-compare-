// Global variables
let currentSlide = 0;
let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
let selectedCars = { car1: null, car2: null };
let currentRating = 0;

// Login functionality
function login() {
    event.preventDefault();
    // Simulate login - in real app, you'd validate credentials
    window.location.href = 'home.html';
}

function showForgotPassword() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
    document.getElementById('createAccountForm').style.display = 'none';
}

function showCreateAccount() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'none';
}

// Slideshow functionality
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
}

// Auto-advance slideshow
function autoSlideshow() {
    if (document.querySelector('.slideshow-container')) {
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'home.html':
            autoSlideshow();
            break;
        case 'compare.html':
            initializeComparePage();
            break;
        case 'favourites.html':
            loadFavourites();
            break;
        case 'feedback.html':
            initializeFeedbackPage();
            break;
    }
});

// Compare page functionality
function initializeComparePage() {
    // Populate brand dropdowns
    const brands = getAllBrands();
    populateBrandDropdown('brand1', brands);
    populateBrandDropdown('brand2', brands);
}

function populateBrandDropdown(selectId, brands) {
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Select Brand</option>';
    
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        select.appendChild(option);
    });
}

function populateModelDropdown(selectId, models) {
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Select Model</option>';
    
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        select.appendChild(option);
    });
}

function updateModels(carNumber) {
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const modelSelect = document.getElementById(`model${carNumber}`);
    const errorDiv = document.getElementById(`brandError${carNumber}`);
    
    errorDiv.textContent = '';
    
    if (brandSelect.value) {
        const models = getModelsForBrand(brandSelect.value);
        populateModelDropdown(`model${carNumber}`, models);
        modelSelect.disabled = false;
    } else {
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        modelSelect.disabled = true;
    }
    
    // Clear car display
    document.getElementById(`carDisplay${carNumber}`).innerHTML = '<p>Select a car to view details</p>';
    selectedCars[`car${carNumber}`] = null;
    updateComparison();
}

function searchBrand(carNumber) {
    const searchInput = document.getElementById(`brandSearch${carNumber}`);
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const errorDiv = document.getElementById(`brandError${carNumber}`);
    const query = searchInput.value.trim();
    
    if (query) {
        const matchingBrands = searchBrands(query);
        
        if (matchingBrands.length === 0) {
            errorDiv.textContent = 'There are no car brands with this name';
            populateBrandDropdown(`brand${carNumber}`, []);
        } else {
            errorDiv.textContent = '';
            populateBrandDropdown(`brand${carNumber}`, matchingBrands);
        }
    } else {
        errorDiv.textContent = '';
        populateBrandDropdown(`brand${carNumber}`, getAllBrands());
    }
    
    brandSelect.value = '';
    updateModels(carNumber);
}

function searchModel(carNumber) {
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const searchInput = document.getElementById(`modelSearch${carNumber}`);
    const modelSelect = document.getElementById(`model${carNumber}`);
    const errorDiv = document.getElementById(`modelError${carNumber}`);
    const query = searchInput.value.trim();
    
    if (!brandSelect.value) {
        errorDiv.textContent = 'Please select a brand first';
        return;
    }
    
    if (query) {
        const matchingModels = searchModels(brandSelect.value, query);
        
        if (matchingModels.length === 0) {
            errorDiv.textContent = 'There are no models in this brand by the name you entered';
            populateModelDropdown(`model${carNumber}`, []);
        } else {
            errorDiv.textContent = '';
            populateModelDropdown(`model${carNumber}`, matchingModels);
        }
    } else {
        errorDiv.textContent = '';
        const allModels = getModelsForBrand(brandSelect.value);
        populateModelDropdown(`model${carNumber}`, allModels);
    }
    
    modelSelect.value = '';
    displayCarDetails(carNumber);
}

function displayCarDetails(carNumber) {
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const modelSelect = document.getElementById(`model${carNumber}`);
    const carDisplay = document.getElementById(`carDisplay${carNumber}`);
    
    if (!brandSelect.value || !modelSelect.value) {
        carDisplay.innerHTML = '<p>Select a car to view details</p>';
        selectedCars[`car${carNumber}`] = null;
        updateComparison();
        return;
    }
    
    const carDetails = getCarDetails(brandSelect.value, modelSelect.value);
    
    if (carDetails) {
        selectedCars[`car${carNumber}`] = {
            brand: brandSelect.value,
            model: modelSelect.value,
            ...carDetails
        };
        
        const isInFavourites = isCarInFavourites(brandSelect.value, modelSelect.value);
        
        // Create image gallery with multiple views
        const imageGallery = carDetails.images.map((image, index) => 
            `<img src="${image}" alt="${brandSelect.value} ${modelSelect.value} - View ${index + 1}" 
                  class="car-gallery-image ${index === 0 ? 'active' : ''}" 
                  onclick="setActiveImage(${carNumber}, ${index})" loading="lazy">`
        ).join('');
        
        const imageThumbnails = carDetails.images.map((image, index) => 
            `<div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="setActiveImage(${carNumber}, ${index})">
                <img src="${image}" alt="Thumbnail ${index + 1}" loading="lazy">
                <span class="thumbnail-label">${getImageLabel(index)}</span>
             </div>`
        ).join('');
        
        carDisplay.innerHTML = `
            <div class="car-info">
                <div class="car-image-gallery" id="gallery${carNumber}">
                    <div class="main-image-container">
                        ${imageGallery}
                        <div class="image-counter">
                            <span id="imageCounter${carNumber}">1</span> / ${carDetails.images.length}
                        </div>
                    </div>
                    <div class="image-thumbnails">
                        ${imageThumbnails}
                    </div>
                </div>
                <h4>${brandSelect.value} ${modelSelect.value}</h4>
                <ul class="car-specs">
                    <li><strong>Mileage:</strong> ${carDetails.mileage}</li>
                    <li><strong>Engine:</strong> ${carDetails.engineCapacity}</li>
                    <li><strong>Fuel Type:</strong> ${carDetails.fuelType}</li>
                    <li><strong>Seats:</strong> ${carDetails.seats}</li>
                    <li><strong>Price:</strong> ${carDetails.price}</li>
                </ul>
                <div>
                    <strong>Features:</strong>
                    <ul class="features-list">
                        ${carDetails.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="favourite-btn ${isInFavourites ? 'added' : ''}" 
                        onclick="toggleFavourite('${brandSelect.value}', '${modelSelect.value}', this)">
                    ${isInFavourites ? '❤️ Added to Favourites' : '🤍 Add to Favourites'}
                </button>
            </div>
        `;
        
        updateComparison();
    }
}

function getImageLabel(index) {
    const labels = ['Exterior', 'Interior', 'Side View', 'Dashboard'];
    return labels[index] || `View ${index + 1}`;
}

function setActiveImage(carNumber, imageIndex) {
    const gallery = document.getElementById(`gallery${carNumber}`);
    if (!gallery) return;
    
    // Update main images
    const images = gallery.querySelectorAll('.car-gallery-image');
    const thumbnails = gallery.querySelectorAll('.thumbnail');
    
    images.forEach((img, index) => {
        img.classList.toggle('active', index === imageIndex);
    });
    
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === imageIndex);
    });
    
    // Update counter
    const counter = document.getElementById(`imageCounter${carNumber}`);
    if (counter) {
        counter.textContent = imageIndex + 1;
    }
}

function updateComparison() {
    const comparisonResult = document.getElementById('comparisonResult');
    
    if (selectedCars.car1 && selectedCars.car2) {
        comparisonResult.style.display = 'block';
        
        document.getElementById('car1Name').textContent = `${selectedCars.car1.brand} ${selectedCars.car1.model}`;
        document.getElementById('car2Name').textContent = `${selectedCars.car2.brand} ${selectedCars.car2.model}`;
        
        const tableBody = document.getElementById('comparisonTableBody');
        tableBody.innerHTML = `
            <tr>
                <td>Mileage</td>
                <td class="${compareMileage(selectedCars.car1.mileage, selectedCars.car2.mileage) > 0 ? 'better' : 'worse'}">${selectedCars.car1.mileage}</td>
                <td class="${compareMileage(selectedCars.car2.mileage, selectedCars.car1.mileage) > 0 ? 'better' : 'worse'}">${selectedCars.car2.mileage}</td>
            </tr>
            <tr>
                <td>Engine Capacity</td>
                <td>${selectedCars.car1.engineCapacity}</td>
                <td>${selectedCars.car2.engineCapacity}</td>
            </tr>
            <tr>
                <td>Fuel Type</td>
                <td>${selectedCars.car1.fuelType}</td>
                <td>${selectedCars.car2.fuelType}</td>
            </tr>
            <tr>
                <td>Seats</td>
                <td class="${selectedCars.car1.seats > selectedCars.car2.seats ? 'better' : (selectedCars.car1.seats < selectedCars.car2.seats ? 'worse' : '')}">${selectedCars.car1.seats}</td>
                <td class="${selectedCars.car2.seats > selectedCars.car1.seats ? 'better' : (selectedCars.car2.seats < selectedCars.car1.seats ? 'worse' : '')}">${selectedCars.car2.seats}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td class="${comparePrice(selectedCars.car1.price, selectedCars.car2.price) < 0 ? 'better' : 'worse'}">${selectedCars.car1.price}</td>
                <td class="${comparePrice(selectedCars.car2.price, selectedCars.car1.price) < 0 ? 'better' : 'worse'}">${selectedCars.car2.price}</td>
            </tr>
        `;
    } else {
        comparisonResult.style.display = 'none';
    }
}

function compareMileage(mileage1, mileage2) {
    // Handle both mpg and kmpl, and range for electric vehicles
    const extractNumber = (mileage) => {
        if (mileage.includes('range')) {
            return parseFloat(mileage.match(/(\d+)/)[1]) / 10; // Normalize range to comparable scale
        }
        return parseFloat(mileage.match(/(\d+)/)[1]);
    };
    
    const num1 = extractNumber(mileage1);
    const num2 = extractNumber(mileage2);
    return num1 - num2;
}

function comparePrice(price1, price2) {
    // Handle Indian currency (₹) and US currency ($)
    const extractPrice = (price) => {
        // Remove currency symbols and commas, convert to number
        return parseFloat(price.replace(/[₹$,]/g, ''));
    };
    
    const num1 = extractPrice(price1);
    const num2 = extractPrice(price2);
    return num1 - num2;
}

// Favourites functionality
function isCarInFavourites(brand, model) {
    return favourites.some(car => car.brand === brand && car.model === model);
}

function toggleFavourite(brand, model, button) {
    const carDetails = getCarDetails(brand, model);
    const carKey = `${brand}-${model}`;
    
    if (isCarInFavourites(brand, model)) {
        // Remove from favourites
        favourites = favourites.filter(car => !(car.brand === brand && car.model === model));
        button.textContent = '🤍 Add to Favourites';
        button.classList.remove('added');
    } else {
        // Add to favourites
        favourites.push({
            brand,
            model,
            ...carDetails
        });
        button.textContent = '❤️ Added to Favourites';
        button.classList.add('added');
    }
    
    localStorage.setItem('favourites', JSON.stringify(favourites));
    
    // Update favourites page if it's currently loaded
    if (window.location.pathname.includes('favourites.html')) {
        loadFavourites();
    }
}

function loadFavourites() {
    const favouritesList = document.getElementById('favouritesList');
    const noFavourites = document.getElementById('noFavourites');
    
    if (favourites.length === 0) {
        favouritesList.style.display = 'none';
        noFavourites.style.display = 'block';
    } else {
        favouritesList.style.display = 'grid';
        noFavourites.style.display = 'none';
        
        favouritesList.innerHTML = favourites.map((car, index) => {
            const imageThumbnails = car.images.slice(0, 3).map((image, imgIndex) => 
                `<div class="fav-thumbnail" onclick="setActiveFavImage(${index}, ${imgIndex})">
                    <img src="${image}" alt="${getImageLabel(imgIndex)}" loading="lazy">
                 </div>`
            ).join('');
            
            return `
            <div class="favourite-car">
                <div class="fav-image-gallery" id="favGallery${index}">
                    <div class="fav-main-image">
                        ${car.images.map((image, imgIndex) => 
                            `<img src="${image}" alt="${car.brand} ${car.model}" 
                                  class="fav-gallery-image ${imgIndex === 0 ? 'active' : ''}" loading="lazy">`
                        ).join('')}
                    </div>
                    <div class="fav-thumbnails">
                        ${imageThumbnails}
                        ${car.images.length > 3 ? `<div class="more-images">+${car.images.length - 3}</div>` : ''}
                    </div>
                </div>
                <h4>${car.brand} ${car.model}</h4>
                <ul class="car-specs">
                    <li><strong>Mileage:</strong> ${car.mileage}</li>
                    <li><strong>Engine:</strong> ${car.engineCapacity}</li>
                    <li><strong>Fuel Type:</strong> ${car.fuelType}</li>
                    <li><strong>Seats:</strong> ${car.seats}</li>
                    <li><strong>Price:</strong> ${car.price}</li>
                </ul>
                <button class="remove-btn" onclick="removeFavourite('${car.brand}', '${car.model}')">
                    Remove from Favourites
                </button>
            </div>
        `}).join('');
    }
}

function removeFavourite(brand, model) {
    favourites = favourites.filter(car => !(car.brand === brand && car.model === model));
    localStorage.setItem('favourites', JSON.stringify(favourites));
    loadFavourites();
}

function setActiveFavImage(carIndex, imageIndex) {
    const gallery = document.getElementById(`favGallery${carIndex}`);
    if (!gallery) return;
    
    const images = gallery.querySelectorAll('.fav-gallery-image');
    const thumbnails = gallery.querySelectorAll('.fav-thumbnail');
    
    images.forEach((img, index) => {
        img.classList.toggle('active', index === imageIndex);
    });
    
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === imageIndex);
    });
}

// Feedback page functionality
function initializeFeedbackPage() {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStarRating();
        });
        
        star.addEventListener('mouseover', () => {
            highlightStars(index + 1);
        });
    });
    
    document.querySelector('.star-rating').addEventListener('mouseleave', () => {
        updateStarRating();
    });
    
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', submitFeedback);
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    const ratingTexts = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];
    ratingText.textContent = ratingTexts[rating - 1] || 'No rating selected';
}

function updateStarRating() {
    highlightStars(currentRating);
}

function submitFeedback(event) {
    event.preventDefault();
    
    if (currentRating === 0) {
        alert('Please provide a rating before submitting.');
        return;
    }
    
    const formData = new FormData(event.target);
    const feedbackData = {
        name: formData.get('name'),
        email: formData.get('email'),
        useful: formData.get('useful'),
        rating: currentRating,
        comments: formData.get('comments'),
        timestamp: new Date().toISOString()
    };
    
    // Store feedback in localStorage (in a real app, you'd send this to a server)
    const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    existingFeedback.push(feedbackData);
    localStorage.setItem('feedback', JSON.stringify(existingFeedback));
    
    // Show thank you message
    document.querySelector('.feedback-container').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Reset form and refresh page after 5 seconds
    setTimeout(() => {
        location.reload();
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced search functions
const debouncedBrandSearch = debounce(searchBrand, 300);
const debouncedModelSearch = debounce(searchModel, 300);

// Update input event listeners to use debounced functions
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for search inputs
    const brandSearchInputs = document.querySelectorAll('[id^="brandSearch"]');
    const modelSearchInputs = document.querySelectorAll('[id^="modelSearch"]');
    
    brandSearchInputs.forEach(input => {
        const carNumber = input.id.replace('brandSearch', '');
        input.addEventListener('input', () => debouncedBrandSearch(carNumber));
    });
    
    modelSearchInputs.forEach(input => {
        const carNumber = input.id.replace('modelSearch', '');
        input.addEventListener('input', () => debouncedModelSearch(carNumber));
    });
});

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading when page loads
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (window.location.pathname.includes('home.html')) {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});

// Error handling for missing images
document.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG') {
        event.target.src = 'https://via.placeholder.com/300x200/cccccc/666666?text=Image+Not+Available';
    }
}, true);