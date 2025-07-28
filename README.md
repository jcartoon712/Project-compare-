# Auto Compare - Car Comparison Website

A comprehensive car comparison website that allows users to compare cars by mileage, engine capacity, fuel type, seats, price, and other features.

## Features

### 🔐 **Login Page**
- Professional animated login form with car-themed background
- Animated car elements moving across the screen
- Floating car-related icons and particles
- Forgotten password feature with smooth transitions
- Create new account option with enhanced UI
- Modern glassmorphism design with gradient backgrounds
- Input fields with animated icons and underlines

### 🏠 **Home Page**
- Auto-sliding background image carousel
- Website overview and features
- Navigation to all sections
- Modern, attractive UI

### 🔍 **Compare Page**
- Side-by-side car comparison
- Brand and model dropdowns with search functionality
- Real-time error handling for invalid searches
- Interactive image galleries with 4 views per car (Exterior, Interior, Side View, Dashboard)
- Thumbnail navigation with image labels
- Detailed specifications display with Indian pricing (₹)
- Add to favourites functionality
- Visual comparison highlighting better features with color coding
- Support for different fuel types and mileage units

### ❤️ **Favourites Page**
- Displays saved favourite cars with image galleries
- Interactive thumbnail navigation for each car
- Remove from favourites option
- Empty state message when no favourites
- Grid layout for easy browsing
- Smooth animations and hover effects

### 📝 **Feedback Page**
- Interactive star rating system
- Comprehensive feedback form
- "Is our website useful?" question
- Thank you message with auto-refresh

## 🚗 **Indian Car Database**

The website includes an extensive database of popular Indian car brands and models:

- **Maruti Suzuki**: Swift, Baleno, Vitara Brezza, Ertiga
- **Hyundai**: i20, Creta, Verna, Venue
- **Tata Motors**: Nexon, Altroz, Harrier, Safari
- **Mahindra**: XUV700, Scorpio-N, Thar, Bolero
- **Kia**: Seltos, Sonet, Carens, EV6
- **Honda**: City, Amaze, Elevate, City Hybrid
- **Toyota**: Innova Crysta, Fortuner, Glanza, Urban Cruiser Hyryder

Each car includes:
- Mileage (KMPL/Range for EVs)
- Engine capacity
- Fuel type (Petrol/Diesel/Hybrid/Electric)
- Number of seats
- Price in Indian Rupees (₹)
- 4 high-quality images (Exterior, Interior, Side View, Dashboard)
- Indian-specific features list

## 🛠️ **Technical Features**

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Local Storage**: Saves favourites and feedback locally
- **Image Lazy Loading**: Optimized performance
- **Debounced Search**: Efficient real-time search
- **Error Handling**: User-friendly error messages
- **Keyboard Navigation**: Arrow keys for slideshow
- **Accessibility**: ARIA labels and semantic HTML

## 📁 **File Structure**

```
Auto Compare/
├── index.html          # Entry point (redirects to login)
├── login.html         # Login page
├── home.html          # Home page with slideshow
├── compare.html       # Car comparison page
├── favourites.html    # Saved cars page
├── feedback.html      # Feedback form page
├── styles.css         # Complete styling
├── script.js          # Main JavaScript functionality
├── carData.js         # Car database and search functions
└── README.md          # This file
```

## 🚀 **How to Use**

1. **Getting Started**
   - Open `index.html` in a web browser
   - You'll be redirected to the login page

2. **Login**
   - Enter any email and password to login (demo mode)
   - Try "Forgotten Password" or "Create Account" features

3. **Home Page**
   - View the auto-sliding car images
   - Read about website features
   - Use navigation to explore other pages

4. **Compare Cars**
   - Select two different car brands and models
   - Use search boxes to find specific brands/models
   - View detailed comparison with highlighted differences
   - Add cars to favourites

5. **Favourites**
   - View all your saved cars
   - Remove cars from favourites
   - Navigate back to compare more cars

6. **Feedback**
   - Rate the website (1-5 stars)
   - Answer if the website is useful
   - Provide detailed comments
   - Submit feedback to see thank you message

## 🎨 **Design Features**

- **Color Scheme**: Orange (#FF6B35) primary, clean whites and grays
- **Typography**: Arial font family for readability
- **Effects**: Glassmorphism, smooth transitions, hover effects
- **Images**: High-quality Unsplash car images
- **Layout**: CSS Grid and Flexbox for responsive design

## 🔧 **Customization**

To add more cars:
1. Edit `carData.js`
2. Add new brands or models following the existing structure
3. Include all required fields: mileage, engineCapacity, fuelType, seats, price, images, features

To modify styling:
1. Edit `styles.css`
2. Change colors, fonts, or layouts as needed
3. The CSS is well-organized with comments

## 🌐 **Browser Compatibility**

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📱 **Mobile Features**

- Touch-friendly navigation
- Responsive grid layouts
- Optimized image sizes
- Mobile-first CSS design

## 🔮 **Future Enhancements**

Potential improvements:
- Backend integration for user accounts
- More car brands and models
- Advanced filtering options
- Car reviews and ratings
- Price comparison with dealers
- Share functionality

---

**Auto Compare** - Making car shopping decisions easier! 🚗✨