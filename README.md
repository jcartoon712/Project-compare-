# Auto Compare - Car Comparison Website

A comprehensive car comparison website that allows users to compare cars by mileage, engine capacity, fuel type, seats, price, and other features.

## Features

### 🔐 **Login Page**
- Clean login form with car background
- Forgotten password feature
- Create new account option
- Responsive design with glassmorphism effect

### 🏠 **Home Page**
- Auto-sliding background image carousel
- Website overview and features
- Navigation to all sections
- Modern, attractive UI

### 🔍 **Compare Page**
- Side-by-side car comparison
- Brand and model dropdowns with search functionality
- Real-time error handling for invalid searches
- Detailed specifications display
- Add to favourites functionality
- Visual comparison highlighting better features

### ❤️ **Favourites Page**
- Displays saved favourite cars
- Remove from favourites option
- Empty state message when no favourites
- Grid layout for easy browsing

### 📝 **Feedback Page**
- Interactive star rating system
- Comprehensive feedback form
- "Is our website useful?" question
- Thank you message with auto-refresh

## 🚗 **Car Database**

The website includes an extensive database of major car brands and models:

- **Toyota**: Camry, Corolla, Prius, RAV4
- **Honda**: Civic, Accord, CR-V, Pilot
- **Ford**: F-150, Mustang, Explorer, Focus
- **BMW**: 3 Series, 5 Series, X3, X5
- **Mercedes-Benz**: C-Class, E-Class, GLC, S-Class
- **Audi**: A4, A6, Q5, Q7
- **Chevrolet**: Silverado, Malibu, Equinox, Tahoe
- **Nissan**: Altima, Sentra, Rogue, Pathfinder
- **Hyundai**: Elantra, Sonata, Tucson, Santa Fe
- **Kia**: Forte, Optima, Sportage, Sorento
- **Volkswagen**: Jetta, Passat, Tiguan, Atlas
- **Subaru**: Impreza, Legacy, Outback, Forester

Each car includes:
- Mileage (MPG)
- Engine capacity
- Fuel type
- Number of seats
- Price
- High-quality images
- Key features list

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