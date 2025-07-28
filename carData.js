// Comprehensive Indian Car Database - All Fuel Types
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
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹10,90,000",
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
            features: ["UVO Connect", "10.25-inch HD Touchscreen", "Bose Premium Audio", "360° Around View Monitor", "Ventilated Seats", "Sunroof", "Wireless Charging"]
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
            mileage: "528 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹60,95,000",
            safetyRating: "5 Star",
            transmission: "Automatic",
            groundClearance: "178mm",
            bootSpace: "520L",
            fuelTankCapacity: "77.4 kWh Battery",
            powerSteering: "Yes",
            powerWindows: "Yes",
            airConditioning: "Dual Zone",
            musicSystem: "Yes",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Ultra-Fast Charging", "528km Range", "AWD", "12.3-inch Curved Display", "Vehicle-to-Load Capability", "Highway Driving Assist 2", "Relaxation Seats"]
        }
    },
    "Honda": {
        "City": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,56,000",
            safetyRating: "5 Star",
            transmission: "Manual/CVT",
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
            features: ["Honda SENSING", "8-inch Touchscreen", "Alexa Remote Capability", "Honda Connect", "Lane Watch Camera", "Sunroof", "Wireless Charging"]
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
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,33,000",
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
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Honda SENSING", "7-inch Touchscreen", "Auto AC", "Rear Parking Camera", "Height Adjustable Driver Seat", "Dual Airbags"]
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
            mileage: "14 kmpl",
            engineCapacity: "1.5L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹15,13,000",
            safetyRating: "5 Star",
            transmission: "Manual/CVT",
            groundClearance: "192mm",
            bootSpace: "587L",
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
            features: ["AI Assistant", "Panoramic Sunroof", "360° Camera", "Wireless Charging", "6 Airbags", "iSMART Connected Features", "Premium Audio"]
        },
        "ZS EV": {
            mileage: "419 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹21,99,000",
            safetyRating: "5 Star",
            transmission: "Automatic",
            groundClearance: "161mm",
            bootSpace: "448L",
            fuelTankCapacity: "44.5 kWh Battery",
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
            features: ["419km Range", "Fast Charging", "Connected Features", "Panoramic Sunroof", "6 Airbags", "PM2.5 Filter", "Wireless Charging"]
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