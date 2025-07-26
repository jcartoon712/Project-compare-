// Comprehensive Car Database
const carData = {
    "Toyota": {
        "Camry": {
            mileage: "28 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$25,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Safety Sense 2.0", "Apple CarPlay", "LED Headlights", "Adaptive Cruise Control"]
        },
        "Corolla": {
            mileage: "32 mpg",
            engineCapacity: "1.8L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$22,000",
            images: [
                "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Toyota Safety Sense", "Automatic Climate Control", "Backup Camera", "Bluetooth"]
        },
        "Prius": {
            mileage: "58 mpg",
            engineCapacity: "1.8L Hybrid",
            fuelType: "Hybrid",
            seats: 5,
            price: "$27,000",
            images: [
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Hybrid Synergy Drive", "Eco Mode", "Advanced Safety Package", "Smart Key System"]
        },
        "RAV4": {
            mileage: "27 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$28,000",
            images: [
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["All-Wheel Drive", "Roof Rails", "Power Liftgate", "Entune 3.0"]
        }
    },
    "Honda": {
        "Civic": {
            mileage: "32 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$23,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Honda Sensing", "Apple CarPlay", "Android Auto", "Multi-Angle Rearview Camera"]
        },
        "Accord": {
            mileage: "30 mpg",
            engineCapacity: "1.5L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$26,000",
            images: [
                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Turbo Engine", "Honda Sensing Suite", "Wireless Charging", "Heated Seats"]
        },
        "CR-V": {
            mileage: "28 mpg",
            engineCapacity: "1.5L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$27,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Real-Time AWD", "Power Tailgate", "Remote Engine Start", "Cargo Management System"]
        },
        "Pilot": {
            mileage: "22 mpg",
            engineCapacity: "3.5L V6",
            fuelType: "Gasoline",
            seats: 8,
            price: "$35,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["8-Seater", "All-Wheel Drive", "CabinWatch", "CabinTalk"]
        }
    },
    "Ford": {
        "F-150": {
            mileage: "20 mpg",
            engineCapacity: "3.3L V6",
            fuelType: "Gasoline",
            seats: 6,
            price: "$30,000",
            images: [
                "https://images.unsplash.com/photo-1568605117036-cfb79e42b171?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Pro Trailer Backup Assist", "SYNC 4", "4WD", "Towing Package"]
        },
        "Mustang": {
            mileage: "21 mpg",
            engineCapacity: "5.0L V8",
            fuelType: "Gasoline",
            seats: 4,
            price: "$32,000",
            images: [
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["V8 Engine", "Sport Mode", "Premium Audio", "Performance Package"]
        },
        "Explorer": {
            mileage: "24 mpg",
            engineCapacity: "2.3L Turbo",
            fuelType: "Gasoline",
            seats: 7,
            price: "$34,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Terrain Management System", "FordPass Connect", "Co-Pilot360", "7-Seater"]
        },
        "Focus": {
            mileage: "30 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$20,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["SYNC 3", "Rearview Camera", "Pre-Collision Assist", "Auto Start-Stop"]
        }
    },
    "BMW": {
        "3 Series": {
            mileage: "26 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$35,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["iDrive 7.0", "Active Driving Assistant", "BMW ConnectedDrive", "Sport Package"]
        },
        "5 Series": {
            mileage: "23 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$55,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Gesture Control", "Luxury Seating", "Driving Assistant Professional", "Harman Kardon Audio"]
        },
        "X3": {
            mileage: "25 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$45,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["xDrive AWD", "Panoramic Moonroof", "BMW Live Cockpit", "Power Liftgate"]
        },
        "X5": {
            mileage: "21 mpg",
            engineCapacity: "3.0L Turbo",
            fuelType: "Gasoline",
            seats: 7,
            price: "$60,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["7-Seater", "Air Suspension", "Bowers & Wilkins Audio", "Night Vision"]
        }
    },
    "Mercedes-Benz": {
        "C-Class": {
            mileage: "25 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$42,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["MBUX Infotainment", "Active Brake Assist", "Blind Spot Assist", "Mercedes me connect"]
        },
        "E-Class": {
            mileage: "23 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$56,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Air Body Control", "Burmester Audio", "Driver Assistance Package", "Luxury Interior"]
        },
        "GLC": {
            mileage: "24 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$44,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["4MATIC AWD", "Power Liftgate", "LED Headlamps", "Smartphone Integration"]
        },
        "S-Class": {
            mileage: "20 mpg",
            engineCapacity: "3.0L V6 Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$95,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Executive Rear Seating", "Magic Body Control", "Ultra-Luxury Interior", "Chauffeur Package"]
        }
    },
    "Audi": {
        "A4": {
            mileage: "27 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$38,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Quattro AWD", "Virtual Cockpit", "MMI Navigation", "Audi Pre Sense"]
        },
        "A6": {
            mileage: "24 mpg",
            engineCapacity: "3.0L V6 Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$55,000",
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Mild Hybrid Technology", "Matrix LED Headlights", "Bang & Olufsen Audio", "Advanced Driver Assistance"]
        },
        "Q5": {
            mileage: "25 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$44,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Quattro Ultra AWD", "Virtual Cockpit Plus", "Power Liftgate", "Panoramic Sunroof"]
        },
        "Q7": {
            mileage: "20 mpg",
            engineCapacity: "3.0L V6 Turbo",
            fuelType: "Gasoline",
            seats: 7,
            price: "$56,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["7-Seater", "Air Suspension", "Audi Side Assist", "Premium Audio Package"]
        }
    },
    "Chevrolet": {
        "Silverado": {
            mileage: "20 mpg",
            engineCapacity: "5.3L V8",
            fuelType: "Gasoline",
            seats: 6,
            price: "$32,000",
            images: [
                "https://images.unsplash.com/photo-1568605117036-cfb79e42b171?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Trailering Package", "4WD", "Chevy Safety Assist", "MyLink Infotainment"]
        },
        "Malibu": {
            mileage: "29 mpg",
            engineCapacity: "1.5L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$24,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Teen Driver Technology", "4G LTE Wi-Fi", "Apple CarPlay", "Safety Assist"]
        },
        "Equinox": {
            mileage: "26 mpg",
            engineCapacity: "1.5L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$26,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Hands-Free Power Liftgate", "Surround Vision", "Teen Driver", "WiFi Hotspot"]
        },
        "Tahoe": {
            mileage: "16 mpg",
            engineCapacity: "5.3L V8",
            fuelType: "Gasoline",
            seats: 8,
            price: "$52,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["8-Seater", "4WD", "Magnetic Ride Control", "Towing Package"]
        }
    },
    "Nissan": {
        "Altima": {
            mileage: "28 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$25,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["ProPILOT Assist", "NissanConnect", "Intelligent AWD", "Safety Shield 360"]
        },
        "Sentra": {
            mileage: "33 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$20,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Nissan Safety Shield", "Apple CarPlay", "Android Auto", "Remote Engine Start"]
        },
        "Rogue": {
            mileage: "27 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 7,
            price: "$28,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["3rd Row Seating", "ProPILOT Assist", "Motion Activated Liftgate", "Divide-N-Hide Cargo"]
        },
        "Pathfinder": {
            mileage: "24 mpg",
            engineCapacity: "3.5L V6",
            fuelType: "Gasoline",
            seats: 8,
            price: "$35,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["8-Seater", "Intelligent 4WD", "Tri-Zone Climate", "EZ Flex Seating"]
        }
    },
    "Hyundai": {
        "Elantra": {
            mileage: "33 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$21,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["SmartSense Safety", "Wireless Phone Charging", "BlueLink", "Digital Key"]
        },
        "Sonata": {
            mileage: "28 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$25,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Highway Driving Assist", "Remote Smart Parking", "12.3-inch Display", "Bose Audio"]
        },
        "Tucson": {
            mileage: "26 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$26,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["HTRAC AWD", "Hands-Free Liftgate", "Wireless Device Charging", "Safe Exit Warning"]
        },
        "Santa Fe": {
            mileage: "22 mpg",
            engineCapacity: "2.5L Turbo",
            fuelType: "Gasoline",
            seats: 7,
            price: "$34,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["7-Seater", "Calligraphy Trim", "Surround View Monitor", "Highway Driving Assist 2"]
        }
    },
    "Kia": {
        "Forte": {
            mileage: "31 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$20,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Drive Wise Safety", "UVO eServices", "Wireless Phone Charging", "Smart Trunk"]
        },
        "Optima": {
            mileage: "27 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$24,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Highway Driving Assist", "Smart Cruise Control", "Harman Kardon Audio", "Ventilated Seats"]
        },
        "Sportage": {
            mileage: "25 mpg",
            engineCapacity: "2.4L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$25,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Intelligent AWD", "Smart Power Liftgate", "Blind-Spot Monitoring", "UVO Link"]
        },
        "Sorento": {
            mileage: "24 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 7,
            price: "$30,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["7-Seater", "Intelligent AWD", "Highway Driving Assist", "Bose Premium Audio"]
        }
    },
    "Volkswagen": {
        "Jetta": {
            mileage: "30 mpg",
            engineCapacity: "1.4L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$21,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["IQ.DRIVE Safety", "Car-Net", "App-Connect", "Blind Spot Monitor"]
        },
        "Passat": {
            mileage: "25 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 5,
            price: "$24,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Digital Cockpit", "Adaptive Cruise Control", "Fender Audio", "Emergency Assist"]
        },
        "Tiguan": {
            mileage: "23 mpg",
            engineCapacity: "2.0L Turbo",
            fuelType: "Gasoline",
            seats: 7,
            price: "$27,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["3rd Row Seating", "4MOTION AWD", "Easy Open Liftgate", "Area View Camera"]
        },
        "Atlas": {
            mileage: "21 mpg",
            engineCapacity: "3.6L V6",
            fuelType: "Gasoline",
            seats: 8,
            price: "$33,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["8-Seater", "4MOTION AWD", "Captain's Chairs", "Digital Cockpit Pro"]
        }
    },
    "Subaru": {
        "Impreza": {
            mileage: "28 mpg",
            engineCapacity: "2.0L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$19,000",
            images: [
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Symmetrical AWD", "EyeSight Safety", "STARLINK Multimedia", "X-Mode"]
        },
        "Legacy": {
            mileage: "27 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$23,000",
            images: [
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Standard AWD", "DriverFocus", "Harman Kardon Audio", "Reverse Automatic Braking"]
        },
        "Outback": {
            mileage: "26 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$28,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Ground Clearance 8.7in", "X-Mode", "Roof Rails", "Power Rear Gate"]
        },
        "Forester": {
            mileage: "26 mpg",
            engineCapacity: "2.5L 4-cylinder",
            fuelType: "Gasoline",
            seats: 5,
            price: "$26,000",
            images: [
                "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ],
            features: ["Best-in-Class Safety", "Ground Clearance 8.7in", "EyeSight Driver Assist", "X-Mode"]
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