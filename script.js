// Global variables
let car1Data = null;
let car2Data = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'compare.html') {
        initializeComparePage();
    } else if (currentPage === 'favourites.html') {
        loadFavourites();
    } else if (currentPage === 'feedback.html') {
        initializeFeedbackPage();
    } else if (currentPage === 'home.html') {
        initializeSlideshow();
    }
});

// Initialize compare page
function initializeComparePage() {
    populateBrandDropdowns();
}

// Populate brand dropdowns
function populateBrandDropdowns() {
    const brands = getAllBrands();
    const brand1Select = document.getElementById('brand1');
    const brand2Select = document.getElementById('brand2');
    
    brands.forEach(brand => {
        const option1 = new Option(brand, brand);
        const option2 = new Option(brand, brand);
        brand1Select.add(option1);
        brand2Select.add(option2);
    });
}

// Update models dropdown when brand is selected
function updateModels(carNumber) {
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const modelSelect = document.getElementById(`model${carNumber}`);
    const selectedBrand = brandSelect.value;
    
    // Clear previous models
    modelSelect.innerHTML = '<option value="">Choose Model</option>';
    modelSelect.disabled = !selectedBrand;
    
    if (selectedBrand) {
        const models = getModelsForBrand(selectedBrand);
        models.forEach(model => {
            const option = new Option(model, model);
            modelSelect.add(option);
        });
    }
    
    // Clear car display if brand changes
    clearCarDisplay(carNumber);
}

// Clear car display
function clearCarDisplay(carNumber) {
    const carDisplay = document.getElementById(`carDisplay${carNumber}`);
    carDisplay.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">🚗</div>
            <p>Select a car to view detailed specifications</p>
        </div>
    `;
    
    // Clear car data
    if (carNumber === 1) car1Data = null;
    else car2Data = null;
    
    // Hide comparison if both cars are cleared
    if (!car1Data || !car2Data) {
        document.getElementById('comparisonResult').style.display = 'none';
    }
}

// Display car details
function displayCarDetails(carNumber) {
    const brandSelect = document.getElementById(`brand${carNumber}`);
    const modelSelect = document.getElementById(`model${carNumber}`);
    const carDisplay = document.getElementById(`carDisplay${carNumber}`);
    
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
    
    if (!selectedBrand || !selectedModel) return;
    
    const carDetails = getCarDetails(selectedBrand, selectedModel);
    if (!carDetails) return;
    
    // Store car data
    const carData = {
        brand: selectedBrand,
        model: selectedModel,
        ...carDetails
    };
    
    if (carNumber === 1) car1Data = carData;
    else car2Data = carData;
    
    // Check if car is in favourites
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const isInFavourites = favourites.some(fav => 
        fav.brand === selectedBrand && fav.model === selectedModel
    );
    
    // Generate image gallery HTML
    const imageGallery = carDetails.images.map((image, index) => `
        <img src="${image}" 
             alt="${getImageLabel(index)}" 
             class="car-gallery-image ${index === 0 ? 'active' : ''}" 
             onclick="setActiveImage(${carNumber}, ${index})"
             loading="lazy">
    `).join('');
    
    const imageThumbnails = carDetails.images.map((image, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="setActiveImage(${carNumber}, ${index})">
            <img src="${image}" alt="${getImageLabel(index)}" loading="lazy">
            <span class="thumbnail-label">${getImageLabel(index)}</span>
        </div>
    `).join('');
    
    // Generate features list
    const featuresList = carDetails.features.map(feature => `
        <li><span class="feature-check">✓</span>${feature}</li>
    `).join('');
    
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
            <div class="car-header">
                <h4>${selectedBrand} ${selectedModel}</h4>
                <div class="car-price">${carDetails.price}</div>
            </div>
            <div class="car-specs-container">
                <div class="specs-grid">
                    <div class="spec-item">
                        <span class="spec-icon">⛽</span>
                        <div class="spec-content">
                            <span class="spec-label">Mileage</span>
                            <span class="spec-value">${carDetails.mileage}</span>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">🔧</span>
                        <div class="spec-content">
                            <span class="spec-label">Engine</span>
                            <span class="spec-value">${carDetails.engineCapacity}</span>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">⚡</span>
                        <div class="spec-content">
                            <span class="spec-label">Fuel Type</span>
                            <span class="spec-value">${carDetails.fuelType}</span>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">👥</span>
                        <div class="spec-content">
                            <span class="spec-label">Seats</span>
                            <span class="spec-value">${carDetails.seats}</span>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">⭐</span>
                        <div class="spec-content">
                            <span class="spec-label">Safety Rating</span>
                            <span class="spec-value">${carDetails.safetyRating}</span>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">⚙️</span>
                        <div class="spec-content">
                            <span class="spec-label">Transmission</span>
                            <span class="spec-value">${carDetails.transmission}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="features-section">
                <h5><span class="section-icon">✨</span>Key Features</h5>
                <ul class="features-list">
                    ${featuresList}
                </ul>
            </div>
            <button class="favourite-btn ${isInFavourites ? 'added' : ''}" 
                    onclick="toggleFavourite('${selectedBrand}', '${selectedModel}', this)">
                <span class="fav-icon">${isInFavourites ? '❤️' : '🤍'}</span>
                ${isInFavourites ? 'Added to Favourites' : 'Add to Favourites'}
            </button>
        </div>
    `;
    
    // Show comparison if both cars are selected
    if (car1Data && car2Data) {
        showComparison();
    }
}

// Set active image in gallery
function setActiveImage(carNumber, imageIndex) {
    const gallery = document.getElementById(`gallery${carNumber}`);
    const images = gallery.querySelectorAll('.car-gallery-image');
    const thumbnails = gallery.querySelectorAll('.thumbnail');
    const counter = document.getElementById(`imageCounter${carNumber}`);
    
    // Remove active class from all images and thumbnails
    images.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to selected image and thumbnail
    images[imageIndex].classList.add('active');
    thumbnails[imageIndex].classList.add('active');
    
    // Update counter
    counter.textContent = imageIndex + 1;
}

// Get image label based on index
function getImageLabel(index) {
    const labels = ['Exterior', 'Interior', 'Side View', 'Dashboard'];
    return labels[index] || `View ${index + 1}`;
}

// Show comprehensive comparison
function showComparison() {
    const comparisonResult = document.getElementById('comparisonResult');
    const car1Name = document.getElementById('car1Name');
    const car2Name = document.getElementById('car2Name');
    const tableBody = document.getElementById('comparisonTableBody');
    const winnerCard = document.getElementById('winnerCard');
    const winnerText = document.getElementById('winnerText');
    
    car1Name.textContent = `${car1Data.brand} ${car1Data.model}`;
    car2Name.textContent = `${car2Data.brand} ${car2Data.model}`;
    
    // Comprehensive comparison features
    const comparisonFeatures = [
        { 
            name: 'Price', 
            key: 'price', 
            type: 'price',
            icon: '💰'
        },
        { 
            name: 'Mileage', 
            key: 'mileage', 
            type: 'mileage',
            icon: '⛽'
        },
        { 
            name: 'Engine Capacity', 
            key: 'engineCapacity', 
            type: 'text',
            icon: '🔧'
        },
        { 
            name: 'Fuel Type', 
            key: 'fuelType', 
            type: 'text',
            icon: '⚡'
        },
        { 
            name: 'Seats', 
            key: 'seats', 
            type: 'number',
            icon: '👥'
        },
        { 
            name: 'Safety Rating', 
            key: 'safetyRating', 
            type: 'rating',
            icon: '⭐'
        },
        { 
            name: 'Transmission', 
            key: 'transmission', 
            type: 'text',
            icon: '⚙️'
        },
        { 
            name: 'Ground Clearance', 
            key: 'groundClearance', 
            type: 'measurement',
            icon: '📏'
        },
        { 
            name: 'Boot Space', 
            key: 'bootSpace', 
            type: 'measurement',
            icon: '🧳'
        },
        { 
            name: 'Fuel Tank Capacity', 
            key: 'fuelTankCapacity', 
            type: 'text',
            icon: '⛽'
        },
        { 
            name: 'Power Steering', 
            key: 'powerSteering', 
            type: 'boolean',
            icon: '🎯'
        },
        { 
            name: 'Power Windows', 
            key: 'powerWindows', 
            type: 'boolean',
            icon: '🪟'
        },
        { 
            name: 'Air Conditioning', 
            key: 'airConditioning', 
            type: 'text',
            icon: '❄️'
        },
        { 
            name: 'Music System', 
            key: 'musicSystem', 
            type: 'boolean',
            icon: '🎵'
        }
    ];
    
    let car1Score = 0;
    let car2Score = 0;
    
    tableBody.innerHTML = comparisonFeatures.map(feature => {
        const car1Value = car1Data[feature.key];
        const car2Value = car2Data[feature.key];
        
        let car1Class = '';
        let car2Class = '';
        let comparison = 0;
        
        // Compare based on feature type
        switch (feature.type) {
            case 'price':
                comparison = comparePrice(car1Value, car2Value);
                if (comparison < 0) {
                    car1Class = 'better';
                    car1Score++;
                } else if (comparison > 0) {
                    car2Class = 'better';
                    car2Score++;
                }
                break;
            case 'mileage':
                comparison = compareMileage(car1Value, car2Value);
                if (comparison > 0) {
                    car1Class = 'better';
                    car1Score++;
                } else if (comparison < 0) {
                    car2Class = 'better';
                    car2Score++;
                }
                break;
            case 'number':
                if (parseInt(car1Value) > parseInt(car2Value)) {
                    car1Class = 'better';
                    car1Score++;
                } else if (parseInt(car1Value) < parseInt(car2Value)) {
                    car2Class = 'better';
                    car2Score++;
                }
                break;
            case 'rating':
                const rating1 = parseInt(car1Value);
                const rating2 = parseInt(car2Value);
                if (rating1 > rating2) {
                    car1Class = 'better';
                    car1Score++;
                } else if (rating1 < rating2) {
                    car2Class = 'better';
                    car2Score++;
                }
                break;
            case 'measurement':
                const num1 = parseFloat(car1Value);
                const num2 = parseFloat(car2Value);
                if (feature.name === 'Ground Clearance' || feature.name === 'Boot Space') {
                    if (num1 > num2) {
                        car1Class = 'better';
                        car1Score++;
                    } else if (num1 < num2) {
                        car2Class = 'better';
                        car2Score++;
                    }
                }
                break;
            case 'boolean':
                if (car1Value === 'Yes' && car2Value === 'No') {
                    car1Class = 'better';
                    car1Score++;
                } else if (car1Value === 'No' && car2Value === 'Yes') {
                    car2Class = 'better';
                    car2Score++;
                }
                break;
        }
        
        return `
            <tr>
                <td class="feature-column">
                    <span class="feature-icon">${feature.icon}</span>
                    ${feature.name}
                </td>
                <td class="${car1Class}">${car1Value || 'N/A'}</td>
                <td class="${car2Class}">${car2Value || 'N/A'}</td>
            </tr>
        `;
    }).join('');
    
    // Show winner
    if (car1Score > car2Score) {
        winnerText.textContent = `${car1Data.brand} ${car1Data.model} wins with ${car1Score} better features!`;
        winnerCard.style.display = 'block';
    } else if (car2Score > car1Score) {
        winnerText.textContent = `${car2Data.brand} ${car2Data.model} wins with ${car2Score} better features!`;
        winnerCard.style.display = 'block';
    } else {
        winnerText.textContent = "It's a tie! Both cars have equal scores.";
        winnerCard.style.display = 'block';
    }
    
    comparisonResult.style.display = 'block';
    comparisonResult.scrollIntoView({ behavior: 'smooth' });
}

// Compare mileage function (enhanced for all fuel types)
function compareMileage(mileage1, mileage2) {
    const extractNumber = (mileage) => {
        if (mileage.includes('range')) {
            return parseFloat(mileage.match(/(\d+)/)[1]) / 10; // Normalize range for comparison
        } else if (mileage.includes('km/kg')) {
            return parseFloat(mileage.match(/(\d+)/)[1]) * 1.5; // CNG adjustment
        }
        return parseFloat(mileage.match(/(\d+)/)[1]);
    };
    
    const num1 = extractNumber(mileage1);
    const num2 = extractNumber(mileage2);
    return num1 - num2;
}

// Compare price function
function comparePrice(price1, price2) {
    const extractPrice = (price) => {
        return parseFloat(price.replace(/[₹$,]/g, ''));
    };
    
    const num1 = extractPrice(price1);
    const num2 = extractPrice(price2);
    return num1 - num2;
}

// Toggle favourite function
function toggleFavourite(brand, model, button) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const carIndex = favourites.findIndex(car => car.brand === brand && car.model === model);
    
    if (carIndex === -1) {
        // Add to favourites
        const carDetails = getCarDetails(brand, model);
        favourites.push({
            brand: brand,
            model: model,
            ...carDetails
        });
        
        button.classList.add('added');
        button.innerHTML = `
            <span class="fav-icon">❤️</span>
            Added to Favourites
        `;
        
        // Show success animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
    } else {
        // Remove from favourites
        favourites.splice(carIndex, 1);
        
        button.classList.remove('added');
        button.innerHTML = `
            <span class="fav-icon">🤍</span>
            Add to Favourites
        `;
    }
    
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

// Login functions
function login() {
    // Simple validation - in real app, use proper authentication
    window.location.href = 'home.html';
    return false; // Prevent form submission
}

function loginWithGoogle() {
    // Google OAuth integration would go here
    // For demo purposes, simulate Google login
    console.log('Google login initiated...');
    
    // Show loading state
    const googleBtn = document.querySelector('.google-login-btn');
    const originalContent = googleBtn.innerHTML;
    googleBtn.innerHTML = '<div class="login-spinner"></div><span>Signing in...</span>';
    googleBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 2000);
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

// Initialize slideshow for home page
function initializeSlideshow() {
    const images = [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];
    
    let currentIndex = 0;
    const slideshowElement = document.querySelector('.slideshow');
    
    if (slideshowElement) {
        function changeBackground() {
            slideshowElement.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        
        changeBackground(); // Set initial image
        setInterval(changeBackground, 5000); // Change every 5 seconds
    }
}

// Load favourites page
function loadFavourites() {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const favouritesList = document.getElementById('favouritesList');
    
    if (favourites.length === 0) {
        favouritesList.innerHTML = `
            <div class="empty-favourites">
                <div class="empty-icon">💔</div>
                <h3>No Favourites Yet</h3>
                <p>Start exploring cars and add your favorites to see them here!</p>
                <a href="compare.html" class="explore-btn">
                    <span>🚗</span>Explore Cars
                </a>
            </div>
        `;
        return;
    }
    
    favouritesList.innerHTML = favourites.map((car, index) => {
        const featuresHtml = car.features.slice(0, 3).map(feature => `
            <span class="feature-tag">✓ ${feature}</span>
        `).join('');
        
        const imageGallery = car.images.slice(0, 3).map((image, imgIndex) => `
            <img src="${image}" 
                 alt="${getImageLabel(imgIndex)}" 
                 class="fav-gallery-image ${imgIndex === 0 ? 'active' : ''}" 
                 onclick="setActiveFavImage(${index}, ${imgIndex})"
                 loading="lazy">
        `).join('');
        
        const imageThumbnails = car.images.slice(0, 3).map((image, imgIndex) => `
            <div class="fav-thumbnail ${imgIndex === 0 ? 'active' : ''}" 
                 onclick="setActiveFavImage(${index}, ${imgIndex})">
                <img src="${image}" alt="${getImageLabel(imgIndex)}" loading="lazy">
            </div>
        `).join('');
        
        return `
            <div class="favourite-car">
                <div class="fav-image-gallery" id="favGallery${index}">
                    <div class="fav-main-image">
                        ${imageGallery}
                    </div>
                    <div class="fav-thumbnails">
                        ${imageThumbnails}
                        ${car.images.length > 3 ? `<div class="more-images">+${car.images.length - 3}</div>` : ''}
                    </div>
                </div>
                <div class="car-details">
                    <div class="car-header">
                        <h4>${car.brand} ${car.model}</h4>
                        <div class="car-price">${car.price}</div>
                    </div>
                    <div class="car-specs-grid">
                        <div class="spec-item">
                            <span class="spec-icon">⛽</span>
                            <span class="spec-text">${car.mileage}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">🔧</span>
                            <span class="spec-text">${car.engineCapacity}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">⚡</span>
                            <span class="spec-text">${car.fuelType}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-icon">👥</span>
                            <span class="spec-text">${car.seats} Seats</span>
                        </div>
                    </div>
                    <div class="features-preview">
                        ${featuresHtml}
                        ${car.features.length > 3 ? `<span class="more-features">+${car.features.length - 3} more</span>` : ''}
                    </div>
                    <div class="car-actions">
                        <button class="compare-btn" onclick="window.location.href='compare.html'">
                            <span class="btn-icon">⚖️</span>Compare
                        </button>
                        <button class="remove-btn" onclick="removeFavourite('${car.brand}', '${car.model}')">
                            <span class="btn-icon">🗑️</span>Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Set active favourite image
function setActiveFavImage(carIndex, imageIndex) {
    const gallery = document.getElementById(`favGallery${carIndex}`);
    const images = gallery.querySelectorAll('.fav-gallery-image');
    const thumbnails = gallery.querySelectorAll('.fav-thumbnail');
    
    images.forEach(img => img.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    images[imageIndex].classList.add('active');
    thumbnails[imageIndex].classList.add('active');
}

// Remove favourite
function removeFavourite(brand, model) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    favourites = favourites.filter(car => !(car.brand === brand && car.model === model));
    localStorage.setItem('favourites', JSON.stringify(favourites));
    loadFavourites(); // Refresh the list
}

// Initialize feedback page
function initializeFeedbackPage() {
    initializeStarRating();
}

// Star rating system
function initializeStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingInput.value = rating;
            updateStarDisplay(rating);
        });
        
        star.addEventListener('mouseover', () => {
            updateStarDisplay(index + 1);
        });
    });
    
    document.querySelector('.star-rating').addEventListener('mouseleave', () => {
        updateStarDisplay(parseInt(ratingInput.value) || 0);
    });
}

function updateStarDisplay(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Submit feedback
function submitFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
    
    if (!name || !email || !rating || !feedback) {
        alert('Please fill in all fields');
        return false;
    }
    
    // Store feedback (in real app, send to server)
    const feedbackData = {
        name: name,
        email: email,
        rating: rating,
        feedback: feedback,
        date: new Date().toISOString()
    };
    
    let allFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    allFeedback.push(feedbackData);
    localStorage.setItem('feedback', JSON.stringify(allFeedback));
    
    // Show success message
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Auto refresh after 3 seconds
    setTimeout(() => {
        location.reload();
    }, 3000);
    
    return false;
}