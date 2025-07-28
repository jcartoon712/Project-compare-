// Comprehensive Indian Car Database
const carData = {
    "Maruti Suzuki": {
        "Swift": {
            mileage: "23 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹5,85,000",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Exterior
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Interior
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Side view
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Dashboard
            ],
            features: ["SmartPlay Infotainment", "Auto AC", "ABS with EBD", "Dual Airbags", "Reverse Parking Sensors"]
        },
        "Baleno": {
            mileage: "22 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,35,000",
            images: [
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["SmartPlay Studio", "UV Cut Glass", "Height Adjustable Driver Seat", "Keyless Entry", "Push Button Start"]
        },
        "Vitara Brezza": {
            mileage: "20 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹8,35,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["ESP with Hill Hold", "Cruise Control", "Auto Headlamps", "Rain Sensing Wipers", "360° View Camera"]
        },
        "Ertiga": {
            mileage: "19 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹8,65,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["7-Seater Configuration", "SmartPlay Pro+", "Captain Seats", "Roof Rails", "Electric Power Steering"]
        }
    },
    "Hyundai": {
        "i20": {
            mileage: "20 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,04,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["10.25-inch Touchscreen", "BlueLink Connected Tech", "Wireless Phone Charging", "Air Purifier", "Ambient Lighting"]
        },
        "Creta": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹10,87,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Panoramic Sunroof", "Ventilated Front Seats", "Bose Premium Audio", "Level 2 ADAS", "Digital Cluster"]
        },
        "Verna": {
            mileage: "18 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹9,53,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Smart Sense Safety", "Wireless Android Auto", "Hands-Free Smart Trunk", "Cruise Control", "Tyre Pressure Monitor"]
        },
        "Venue": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,53,000",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["BlueLink Connectivity", "Arkamys Premium Audio", "Electric Sunroof", "Rear AC Vents", "Voice Recognition"]
        }
    },
    "Tata Motors": {
        "Nexon": {
            mileage: "17 kmpl",
            engineCapacity: "1.2L Turbo Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,80,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["5-Star Global NCAP Rating", "Harman Infotainment", "JBL Audio System", "Drive Modes", "iRA Connected Features"]
        },
        "Altroz": {
            mileage: "19 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,45,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["5-Star Global NCAP Rating", "Ambient Lighting", "Leatherette Seats", "Automatic Climate Control", "Voice Commands"]
        },
        "Harrier": {
            mileage: "16 kmpl",
            engineCapacity: "2.0L Diesel",
            fuelType: "Diesel",
            seats: 5,
            price: "₹15,50,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Land Rover Derived Engine", "Terrain Response Modes", "9-Speaker JBL Audio", "Panoramic Sunroof", "ADAS Level 1"]
        },
        "Safari": {
            mileage: "15 kmpl",
            engineCapacity: "2.0L Diesel",
            fuelType: "Diesel",
            seats: 7,
            price: "₹16,19,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["7-Seater SUV", "Captain Seats", "Oyster White Interior", "6-Way Power Driver Seat", "Electronic Parking Brake"]
        }
    },
    "Mahindra": {
        "XUV700": {
            mileage: "16 kmpl",
            engineCapacity: "2.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹13,45,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["AdrenoX Connect", "Level 2 ADAS", "Sony 3D Audio", "Sky Roof", "Alexa Built-in"]
        },
        "Scorpio-N": {
            mileage: "15 kmpl",
            engineCapacity: "2.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹13,85,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["4XPLOR Terrain Modes", "AdrenoX Connect", "Sony 3D Audio", "Largest in Segment Sunroof", "Wireless Android Auto"]
        },
        "Thar": {
            mileage: "15 kmpl",
            engineCapacity: "2.0L Turbo Petrol",
            fuelType: "Petrol",
            seats: 4,
            price: "₹10,98,000",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["4WD Capability", "Convertible Top", "Rock & Road Modes", "Adventure Statistics", "Washable Interiors"]
        },
        "Bolero": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Diesel",
            fuelType: "Diesel",
            seats: 7,
            price: "₹9,53,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Rugged Build Quality", "High Ground Clearance", "Manual AC", "Power Steering", "Central Locking"]
        }
    },
    "Kia": {
        "Seltos": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹10,90,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["UVO Connect", "10.25-inch HD Touchscreen", "Bose Premium Audio", "360° Around View Monitor", "Ventilated Seats"]
        },
        "Sonet": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹7,79,000",
            images: [
                "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["UVO Connect", "10.25-inch Smart Pure Touchscreen", "Bose Premium Audio", "Air Purifier", "Smart Pure Air Purifier"]
        },
        "Carens": {
            mileage: "16 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹9,59,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["6/7 Seater Configuration", "10.25-inch HD Touchscreen", "UVO Connect Features", "64-color Ambient Lighting", "Premium Leatherette Seats"]
        },
        "EV6": {
            mileage: "528 km range",
            engineCapacity: "Electric Motor",
            fuelType: "Electric",
            seats: 5,
            price: "₹60,95,000",
            images: [
                "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Ultra-Fast Charging", "528km Range", "AWD", "12.3-inch Curved Display", "Vehicle-to-Load Capability"]
        }
    },
    "Honda": {
        "City": {
            mileage: "17 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,56,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Honda SENSING", "8-inch Touchscreen", "Alexa Remote Capability", "Honda Connect", "Lane Watch Camera"]
        },
        "Amaze": {
            mileage: "18 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,33,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Honda SENSING", "7-inch Touchscreen", "Auto AC", "Rear Parking Camera", "Height Adjustable Driver Seat"]
        },
        "Elevate": {
            mileage: "15 kmpl",
            engineCapacity: "1.5L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹11,69,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Honda SENSING", "10.25-inch Touchscreen", "Wireless Phone Charging", "Panoramic Sunroof", "360° Camera"]
        },
        "City Hybrid": {
            mileage: "27 kmpl",
            engineCapacity: "1.5L Hybrid",
            fuelType: "Hybrid",
            seats: 5,
            price: "₹19,89,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586479767456-93e7276ae8a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["e:HEV Technology", "Hybrid Battery", "Honda SENSING", "Premium Interior", "EV Mode"]
        }
    },
    "Toyota": {
        "Innova Crysta": {
            mileage: "15 kmpl",
            engineCapacity: "2.4L Diesel",
            fuelType: "Diesel",
            seats: 8,
            price: "₹18,05,000",
            images: [
                "https://images.unsplash.com/photo-1449965045629-4c0ff93b3fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["8-Seater MPV", "Captain Seats", "Dual AC", "Touchscreen Infotainment", "Premium Interior"]
        },
        "Fortuner": {
            mileage: "14 kmpl",
            engineCapacity: "2.7L Petrol",
            fuelType: "Petrol",
            seats: 7,
            price: "₹33,43,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["4WD Capability", "Terrain Control", "JBL Audio", "Premium Leather Seats", "9 Airbags"]
        },
        "Glanza": {
            mileage: "22 kmpl",
            engineCapacity: "1.2L Petrol",
            fuelType: "Petrol",
            seats: 5,
            price: "₹6,39,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1580414187952-0c3d47d7b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["SmartPlay Pro+", "Auto AC", "Push Button Start", "Reverse Parking Camera", "Dual Airbags"]
        },
        "Urban Cruiser Hyryder": {
            mileage: "21 kmpl",
            engineCapacity: "1.5L Hybrid",
            fuelType: "Hybrid",
            seats: 5,
            price: "₹10,48,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558618666-fcde9ab21d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            features: ["Intelligent Electric Hybrid", "AWD", "9-inch Touchscreen", "Panoramic Sunroof", "Head-Up Display"]
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