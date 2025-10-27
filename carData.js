// Comprehensive Indian Car Database - All Fuel Types with Specific Car Images
const carData = {
    "Maruti Suzuki": {
        "Swift": {
            mileage: "23 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹5,85,000",
            safetyRating: "4 Star",
            transmission: "Manual/AMT",
            groundClearance: "163mm",
            bootSpace: "268L",
            fuelTankCapacity: "37L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/swift-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/swift-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/swift-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/swift-interior-dashboard-2.jpeg"
            ],
            features: ["SmartPlay Infotainment", "Auto AC", "ABS with EBD", "Dual Airbags", "Reverse Parking Sensors", "Central Locking", "Power Steering"]
        },
        "Baleno": {
            mileage: "22 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,35,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "170mm",
            bootSpace: "339L",
            fuelTankCapacity: "37L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/baleno-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/baleno-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/baleno-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/baleno-interior-dashboard-2.jpeg"
            ],
            features: ["SmartPlay Studio", "UV Cut Glass", "Height Adjustable Driver Seat", "Keyless Entry", "Push Button Start", "LED Headlamps", "Cruise Control"]
        },
        "Vitara Brezza": {
            mileage: "20 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹8,35,000",
            safetyRating: "4 Star",
            transmission: "Manual/AT",
            groundClearance: "198mm",
            bootSpace: "328L",
            fuelTankCapacity: "48L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/vitara-brezza-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/vitara-brezza-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/vitara-brezza-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/vitara-brezza-interior-dashboard-2.jpeg"
            ],
            features: ["ESP with Hill Hold", "Cruise Control", "Auto Headlamps", "Rain Sensing Wipers", "360° View Camera", "Sunroof", "Wireless Charging"]
        },
        "Alto K10": {
            mileage: "24 kmpl",
            engineCapacity: "1.0L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹3,99,000",
            safetyRating: "3 Star",
            transmission: "Manual/AMT",
            groundClearance: "160mm",
            bootSpace: "214L",
            fuelTankCapacity: "35L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Dual Airbags", "ABS", "Central Locking", "Power Steering", "SmartPlay Studio", "Rear Parking Sensors"]
        },
        "Wagon R CNG": {
            mileage: "32 km/kg",
            engineCapacity: "1.0L CNG",
            fuelType: "CNG",
            seats: 5,
            price: "₹5,69,000",
            safetyRating: "3 Star",
            transmission: "Manual",
            groundClearance: "165mm",
            bootSpace: "341L",
            fuelTankCapacity: "32L + CNG Kit",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Factory Fitted CNG", "Dual Airbags", "ABS with EBD", "Central Locking", "Power Steering", "SmartPlay Audio"]
        }
    },
    "Tata Motors": {
        "Nexon": {
            mileage: "17 kmpl",
            engineCapacity: "1.2L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,80,000",
            safetyRating: "5 Star",
            transmission: "Manual/AMT",
            groundClearance: "209mm",
            bootSpace: "350L",
            fuelTankCapacity: "44L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["5-Star Global NCAP Rating", "Harman Infotainment", "JBL Audio System", "Drive Modes", "iRA Connected Features", "Sunroof", "360° Camera"]
        },
        "Nexon EV": {
            mileage: "312 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹14,99,000",
            safetyRating: "5 Star",
            transmission: "Automatic",
            groundClearance: "209mm",
            bootSpace: "350L",
            fuelTankCapacity: "30.2 kWh Battery",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["312km Range", "Fast Charging", "Zaptec Technology", "iRA EV Connect", "35 Connected Features", "Dual Zone AC", "Wireless Charging"]
        },
        "Harrier": {
            mileage: "16 kmpl",
            engineCapacity: "2.0L Diesel",
            fuelType: "Diesel",
            seats: 5,
            price: "₹15,50,000",
            safetyRating: "5 Star",
            transmission: "Manual/AT",
            groundClearance: "205mm",
            bootSpace: "425L",
            fuelTankCapacity: "50L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Land Rover Derived Engine", "Terrain Response Modes", "9-Speaker JBL Audio", "Panoramic Sunroof", "ADAS Level 1", "Ventilated Seats", "Wireless Charging"]
        },
        "Tigor EV": {
            mileage: "306 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹12,49,000",
            safetyRating: "4 Star",
            transmission: "Automatic",
            groundClearance: "165mm",
            bootSpace: "316L",
            fuelTankCapacity: "26 kWh Battery",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["306km Range", "Fast Charging", "Zaptec Technology", "Connected Car Features", "Dual Airbags", "ABS with EBD"]
        }
    },
    "Hyundai": {
        "i20": {
            mileage: "20 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,04,000",
            safetyRating: "3 Star",
            transmission: "Manual/CVT",
            groundClearance: "170mm",
            bootSpace: "311L",
            fuelTankCapacity: "37L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["10.25-inch Touchscreen", "BlueLink Connected Tech", "Wireless Phone Charging", "Air Purifier", "Ambient Lighting", "Sunroof", "Cruise Control"]
        },
        "Creta": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹10,87,000",
            safetyRating: "3 Star",
            transmission: "Manual/CVT/DCT",
            groundClearance: "190mm",
            bootSpace: "433L",
            fuelTankCapacity: "50L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Panoramic Sunroof", "Ventilated Front Seats", "Bose Premium Audio", "Level 2 ADAS", "Digital Cluster", "360° Camera", "Wireless Charging"]
        },
        "Venue": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,53,000",
            safetyRating: "3 Star",
            transmission: "Manual/AMT",
            groundClearance: "195mm",
            bootSpace: "350L",
            fuelTankCapacity: "45L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["BlueLink Connectivity", "Arkamys Premium Audio", "Electric Sunroof", "Rear AC Vents", "Voice Recognition", "Wireless Charging"]
        },
        "Kona Electric": {
            mileage: "452 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹23,84,000",
            safetyRating: "5 Star",
            transmission: "Automatic",
            groundClearance: "170mm",
            bootSpace: "332L",
            fuelTankCapacity: "39.2 kWh Battery",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["452km Range", "DC Fast Charging", "BlueLink EV Services", "Wireless Charging", "Ventilated Seats", "Head-Up Display", "ADAS"]
        }
    },
    "Mahindra": {
        "XUV700": {
            mileage: "16 kmpl",
            engineCapacity: "2.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹13,45,000",
            safetyRating: "5 Star",
            transmission: "Manual/AT",
            groundClearance: "200mm",
            bootSpace: "408L",
            fuelTankCapacity: "60L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Dual Zone",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["AdrenoX Connect", "Level 2 ADAS", "Sony 3D Audio", "Sky Roof", "Alexa Built-in", "360° Camera", "Wireless Charging"]
        },
        "Thar": {
            mileage: "15 kmpl",
            engineCapacity: "2.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 4,
            price: "₹10,98,000",
            safetyRating: "4 Star",
            transmission: "Manual/AT",
            groundClearance: "226mm",
            bootSpace: "NA",
            fuelTankCapacity: "57L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["4WD Capability", "Convertible Top", "Rock & Road Modes", "Adventure Statistics", "Washable Interiors", "Roll Cage", "Dual Airbags"]
        },
        "XUV300": {
            mileage: "17 kmpl",
            engineCapacity: "1.2L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹8,41,000",
            safetyRating: "5 Star",
            transmission: "Manual/AMT",
            groundClearance: "180mm",
            bootSpace: "257L",
            fuelTankCapacity: "42L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Sunroof", "7 Airbags", "Dual Zone AC", "Heated ORVMs", "Auto Headlamps", "Rain Sensing Wipers", "Reverse Camera"]
        },
        "eXUV300": {
            mileage: "375 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹15,99,000",
            safetyRating: "5 Star",
            transmission: "Automatic",
            groundClearance: "180mm",
            bootSpace: "257L",
            fuelTankCapacity: "34.5 kWh Battery",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["375km Range", "Fast Charging", "Connected Features", "Sunroof", "7 Airbags", "Dual Zone AC", "Wireless Charging"]
        }
    },
    "Kia": {
        "Seltos": {
            mileage: "16 kmpl",
            engineCapacity: "1.5L Petrol/1.5L Diesel",
            fuelType: "Petrol/Diesel",
            seats: 5,
            price: "₹10,89,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT/AT",
            groundClearance: "190mm",
            bootSpace: "433L",
            fuelTankCapacity: "50L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/seltos-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/seltos-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/seltos-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/seltos-interior-dashboard-2.jpeg"
            ],
            features: ["UVO Connected Car", "Bose Premium Sound", "Ventilated Seats", "Panoramic Sunroof", "360° Camera", "Wireless Charging", "Smart Pure Air Purifier"]
        },
        "Sonet": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,79,000",
            safetyRating: "3 Star",
            transmission: "Manual/AMT/DCT",
            groundClearance: "205mm",
            bootSpace: "392L",
            fuelTankCapacity: "45L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["UVO Connect", "10.25-inch Smart Pure Touchscreen", "Bose Premium Audio", "Air Purifier", "Smart Pure Air Purifier", "Sunroof"]
        },
        "EV6": {
            mileage: "708 km/charge",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹60,95,000",
            safetyRating: "5 Star",
            transmission: "Single Speed",
            groundClearance: "160mm",
            bootSpace: "480L",
            fuelTankCapacity: "77.4 kWh",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ev6-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ev6-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ev6-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ev6-interior-dashboard-2.jpeg"
            ],
            features: ["V2L (Vehicle to Load)", "800V Fast Charging", "Regenerative Braking", "Connected Car Tech", "Over-the-air Updates", "Eco Mode", "Smart Cruise Control"]
        }
    },
    "Honda": {
        "City": {
            mileage: "18 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,49,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "165mm",
            bootSpace: "506L",
            fuelTankCapacity: "40L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/city-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/city-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/city-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/city-interior-dashboard-2.jpeg"
            ],
            features: ["Honda Connect", "LaneWatch Camera", "Eco Assist System", "Ventilated Seats", "Wireless Charging", "Connected Car Tech", "Voice Commands"]
        },
        "City Hybrid": {
            mileage: "27 kmpl",
            engineCapacity: "1.5L Hybrid",
            fuelType: "Hybrid",
            seats: 5,
            price: "₹19,89,000",
            safetyRating: "5 Star",
            transmission: "e-CVT",
            groundClearance: "165mm",
            bootSpace: "506L",
            fuelTankCapacity: "40L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["e:HEV Technology", "Hybrid Battery", "Honda SENSING", "Premium Interior", "EV Mode", "Paddle Shifters", "Premium Audio"]
        },
        "Amaze": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol/1.5L Diesel",
            fuelType: "Petrol/Diesel",
            seats: 5,
            price: "₹6,32,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "165mm",
            bootSpace: "420L",
            fuelTankCapacity: "35L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/amaze-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/amaze-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/amaze-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/amaze-interior-dashboard-2.jpeg"
            ],
            features: ["Dual Airbags", "ABS with EBD", "ISOFIX Child Seat Anchors", "Central Locking", "Power Steering", "Music System", "Air Conditioning"]
        },
        "Jazz": {
            mileage: "17 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,99,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "165mm",
            bootSpace: "298L",
            fuelTankCapacity: "40L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Honda SENSING", "Sunroof", "Touchscreen Infotainment", "Push Button Start", "Keyless Entry", "Reverse Camera"]
        }
    },
    "MG Motor": {
        "Hector": {
            mileage: "16 kmpl",
            engineCapacity: "1.5L Petrol/2.0L Diesel",
            fuelType: "Petrol/Diesel",
            seats: 7,
            price: "₹13,95,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "192mm",
            bootSpace: "587L",
            fuelTankCapacity: "60L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/hector-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/hector-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/hector-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/hector-interior-dashboard-2.jpeg"
            ],
            features: ["i-SMART Connected Car", "Panoramic Sunroof", "360° Camera", "Wireless Charging", "Voice Commands", "Over-the-air Updates", "Smart Pure Air Purifier"]
        },
        "ZS EV": {
            mileage: "461 km/charge",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹21,99,000",
            safetyRating: "4 Star",
            transmission: "Single Speed",
            groundClearance: "150mm",
            bootSpace: "470L",
            fuelTankCapacity: "50.3 kWh",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/zs-ev-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/zs-ev-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/zs-ev-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/zs-ev-interior-dashboard-2.jpeg"
            ],
            features: ["i-SMART EV", "Fast Charging", "Regenerative Braking", "Connected Car Tech", "Voice Commands", "Over-the-air Updates", "Eco Mode"]
        },
        "Astor": {
            mileage: "16 kmpl",
            engineCapacity: "1.5L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹9,98,000",
            safetyRating: "5 Star",
            transmission: "Manual/CVT",
            groundClearance: "180mm",
            bootSpace: "448L",
            fuelTankCapacity: "45L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["AI Assistant", "ADAS Level 2", "Panoramic Sunroof", "360° Camera", "6 Airbags", "Connected Features", "Wireless Charging"]
        }
    },
    "Skoda": {
        "Kushaq": {
            mileage: "18 kmpl",
            engineCapacity: "1.0L TSI",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,89,000",
            safetyRating: "5 Star",
            transmission: "Manual/AT",
            groundClearance: "188mm",
            bootSpace: "385L",
            fuelTankCapacity: "50L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["TSI Engine", "Virtual Cockpit", "Sunroof", "6 Airbags", "Connected Features", "Wireless Charging", "Premium Audio"]
        },
        "Slavia": {
            mileage: "19 kmpl",
            engineCapacity: "1.0L TSI",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,69,000",
            safetyRating: "5 Star",
            transmission: "Manual/AT",
            groundClearance: "179mm",
            bootSpace: "521L",
            fuelTankCapacity: "45L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["TSI Engine", "Virtual Cockpit", "Sunroof", "6 Airbags", "MySkoda Connect", "Wireless Charging", "Ventilated Seats"]
        }
    },
    "Toyota": {
        "Innova Crysta": {
            mileage: "15 kmpl",
            engineCapacity: "2.4L Diesel/2.7L Petrol",
            fuelType: "Petrol/Diesel",
            seats: 7,
            price: "₹18,55,000",
            safetyRating: "4 Star",
            transmission: "Manual/AT",
            groundClearance: "176mm",
            bootSpace: "300L",
            fuelTankCapacity: "55L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/innova-crysta-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/innova-crysta-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/innova-crysta-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/innova-crysta-interior-dashboard-2.jpeg"
            ],
            features: ["Toyota Safety Sense", "360° Camera", "Cruise Control", "Auto Headlamps", "Rain Sensing Wipers", "Connected Car Tech", "Voice Commands"]
        },
        "Fortuner": {
            mileage: "10 kmpl",
            engineCapacity: "2.8L Diesel/4.0L Petrol",
            fuelType: "Petrol/Diesel",
            seats: 7,
            price: "₹32,40,000",
            safetyRating: "5 Star",
            transmission: "Manual/AT",
            groundClearance: 220,
            bootSpace: "296L",
            fuelTankCapacity: "80L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/fortuner-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/fortuner-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/fortuner-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/fortuner-interior-dashboard-2.jpeg"
            ],
            features: ["Toyota Safety Sense", "4x4", "Differential Lock", "Hill Descent Control", "360° Camera", "Connected Car Tech", "Voice Commands"]
        }
    },
    "Ford": {
        "EcoSport": {
            mileage: "16 kmpl",
            engineCapacity: "1.5L Petrol/1.5L Diesel",
            fuelType: "Petrol/Diesel",
            seats: 5,
            price: "₹8,19,000",
            safetyRating: "4 Star",
            transmission: "Manual/AT",
            groundClearance: "200mm",
            bootSpace: "352L",
            fuelTankCapacity: "52L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ecosport-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ecosport-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ecosport-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/ecosport-interior-dashboard-2.jpeg"
            ],
            features: ["FordPass Connect", "SYNC 3 Infotainment", "Voice Commands", "Connected Car Tech", "Over-the-air Updates", "Eco Mode", "Cruise Control"]
        }
    },
    "Nissan": {
        "Magnite": {
            mileage: "18 kmpl",
            engineCapacity: "1.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹5,99,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "205mm",
            bootSpace: "336L",
            fuelTankCapacity: "40L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/magnite-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/magnite-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/magnite-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/magnite-interior-dashboard-2.jpeg"
            ],
            features: ["NissanConnect", "360° Camera", "Wireless Charging", "Connected Car Tech", "Voice Commands", "Over-the-air Updates", "Eco Mode"]
        }
    },
    "Volvo": {
        "XC60": {
            mileage: "12 kmpl",
            engineCapacity: "2.0L Petrol/Diesel",
            fuelType: "Petrol/Diesel",
            seats: 5,
            price: "₹65,90,000",
            safetyRating: "5 Star",
            transmission: "AT",
            groundClearance: "216mm",
            bootSpace: "505L",
            fuelTankCapacity: "71L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/xc60-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/xc60-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/xc60-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/xc60-interior-dashboard-2.jpeg"
            ],
            features: ["Pilot Assist", "City Safety", "360° Camera", "Bowers & Wilkins Sound", "Connected Car Tech", "Over-the-air Updates", "Eco Mode"]
        }
    },
    "Renault": {
        "Kiger": {
            mileage: "18 kmpl",
            engineCapacity: "1.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹5,99,000",
            safetyRating: "4 Star",
            transmission: "Manual/CVT",
            groundClearance: "205mm",
            bootSpace: "405L",
            fuelTankCapacity: "40L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Manual",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/kiger-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/kiger-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/kiger-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/kiger-interior-dashboard-2.jpeg"
            ],
            features: ["Renault Connect", "360° Camera", "Wireless Charging", "Connected Car Tech", "Voice Commands", "Over-the-air Updates", "Eco Mode"]
        }
    },
    "Rolls Royce": {
        "Phantom": {
            mileage: "8 kmpl",
            engineCapacity: "6.75L V12",
            fuelType: "Petrol",
            seats: 4,
            price: "₹9,50,00,000",
            safetyRating: "5 Star",
            transmission: "AT",
            groundClearance: "150mm",
            bootSpace: "460L",
            fuelTankCapacity: "100L",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Automatic",
            musicSystem: "Yes",
            images: [
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/phantom-exterior-right-front-three-quarter-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/phantom-exterior-left-side-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/phantom-exterior-rear-view-2.jpeg",
                "https://imgd.aeplcdn.com/664x374/n/cw/ec/102125/phantom-interior-dashboard-2.jpeg"
            ],
            features: ["Bespoke Audio", "Starlight Headliner", "Champagne Cooler", "Connected Car Tech", "Voice Commands", "Over-the-air Updates", "Luxury Mode"]
        }
    }
};

// Get all brands
function getAllBrands() {
    return Object.keys(carData);
}

// Get models for a specific brand
function getModelsForBrand(brand) {
    if (carData[brand]) {
        return Object.keys(carData[brand]);
    }
    return [];
}

// Get car details
function getCarDetails(brand, model) {
    if (carData[brand] && carData[brand][model]) {
        return carData[brand][model];
    }
    return null;
}

// Search brands by name
function searchBrands(query) {
    if (!query) return getAllBrands();
    
    return getAllBrands().filter(brand => 
        brand.toLowerCase().includes(query.toLowerCase())
    );
}

// Search models by name within a brand
function searchModels(brand, query) {
    const models = getModelsForBrand(brand);
    if (!query) return models;
    
    return models.filter(model => 
        model.toLowerCase().includes(query.toLowerCase())
    );
}