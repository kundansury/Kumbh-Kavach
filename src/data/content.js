// Content data for Kumbh Kavach website

export const heroContent = {
    title: "Kumbh Kavach",
    subtitle: "A Family Connectivity Wristband for safer mass gatherings.",
    tagline: "When crowds rise, networks fail, and panic spreads, Kumbh Kavach keeps families connected and emergencies visible.",
    highlights: [
        "Real-time Vitals",
        "Fall & SOS Alerts",
        "BLE + Offline-first"
    ],
    cta: {
        primary: "Explore Features",
        secondary: "View Architecture"
    },
    mockupCaption: "A protective layer of technology for every pilgrim."
};

export const trustStripContent = {
    headline: "Built for high-density events like Kumbh Mela",
    subheadline: "Low-power wearable + real-time monitoring + emergency-first response.",
    cards: [
        { icon: "signal", text: "Works in crowded zones" },
        { icon: "heart", text: "Continuous vital tracking" },
        { icon: "alert", text: "Fast SOS response" },
        { icon: "users", text: "Designed for families" }
    ]
};

export const problemContent = {
    heading: "In a crowd of millions, separation happens in seconds.",
    body: "At large-scale events, people lose track of each other, mobile networks collapse, and medical help gets delayed. Children wander. Elderly struggle. A small emergency becomes chaos because there's no real-time visibility.",
    conclusion: "Kumbh Kavach is built to reduce panic, improve response time, and restore control."
};

export const solutionContent = {
    heading: "One wristband. One ecosystem. Real safety.",
    body: "Kumbh Kavach combines a sensor-based wearable and a companion mobile dashboard to monitor health signals, detect falls, and trigger emergency alerts instantly.",
    blocks: [
        {
            title: "Wearable Band",
            description: "Tracks vitals and motion continuously.",
            icon: "watch"
        },
        {
            title: "Mobile App Dashboard",
            description: "Shows live readings, alerts, and quick actions.",
            icon: "smartphone"
        },
        {
            title: "Emergency Layer",
            description: "SOS alerts reach family and nearby support faster.",
            icon: "shield"
        }
    ]
};

export const featuresContent = {
    heading: "Features designed for real-world chaos.",
    features: [
        {
            title: "Real-Time Heart Rate & SpO₂",
            description: "Continuous monitoring using optical sensing for early warning signals.",
            icon: "heart-pulse",
            sensor: "MAX30102"
        },
        {
            title: "Body Temperature Tracking",
            description: "Detect fever spikes and abnormal patterns in real time.",
            icon: "thermometer",
            sensor: "DS18B20"
        },
        {
            title: "Fall & Motion Detection",
            description: "Recognize sudden impact events and trigger emergency workflows.",
            icon: "activity",
            sensor: "MPU6050"
        },
        {
            title: "Instant SOS Trigger",
            description: "One press sends a high-priority alert with the latest readings.",
            icon: "bell-ring",
            sensor: "Physical Button"
        },
        {
            title: "BLE Communication",
            description: "Reliable short-range data transfer optimized for low power.",
            icon: "bluetooth",
            sensor: "ESP32 BLE"
        },
        {
            title: "Offline-first Reliability",
            description: "Data stays safe locally and syncs when connectivity returns.",
            icon: "database",
            sensor: "Room DB"
        },
        {
            title: "Energy Efficient Design",
            description: "Optimized firmware for longer runtime during long event hours.",
            icon: "battery-charging",
            sensor: "8-10 hour target"
        },
        {
            title: "Built for Family Connectivity",
            description: "A system designed around people, not just data.",
            icon: "users",
            sensor: "Family Mode"
        }
    ]
};

export const architectureContent = {
    heading: "How Kumbh Kavach works under the hood.",
    body: "Sensors capture vital signals and motion data. ESP32 processes readings, filters noise, and transmits structured packets through BLE. The mobile app visualizes insights and triggers emergency actions when needed.",
    layers: [
        { name: "Sensor Layer", tech: "MAX30102, DS18B20, MPU6050", color: "teal" },
        { name: "Processing Layer", tech: "ESP32-WROOM-32", color: "saffron" },
        { name: "Communication Layer", tech: "Bluetooth Low Energy (BLE)", color: "navy" },
        { name: "Application Layer", tech: "Android Dashboard + Alerts", color: "teal" },
        { name: "Emergency Layer", tech: "SOS → Contacts & Response", color: "saffron" }
    ],
    footer: "Designed for modular upgrades: GPS, LoRaWAN, and stronger identity systems."
};

export const dashboardContent = {
    heading: "Vitals become visible, not guesswork.",
    body: "Track heart rate, SpO₂, and temperature trends in real time. Get clear alerts when values cross safety thresholds. Every second matters, especially in a crowd.",
    callout: "Alert-ready UI for fast decisions."
};

export const useCasesContent = {
    heading: "Built for the people who need it most.",
    cases: [
        {
            title: "Families at Kumbh Mela",
            description: "Stay connected even when networks get unreliable.",
            icon: "👨‍👩‍👧‍👦"
        },
        {
            title: "Elderly Safety Monitoring",
            description: "Passive tracking that detects risk early.",
            icon: "❤️"
        },
        {
            title: "Child Safety Support",
            description: "Reduce panic by improving visibility and response.",
            icon: "👶"
        },
        {
            title: "Event Crowd Assistance",
            description: "A future-ready base for smarter crowd safety.",
            icon: "👥"
        },
        {
            title: "Emergency-first Scenarios",
            description: "SOS workflows designed to act immediately.",
            icon: "⚠️"
        }
    ]
};

export const techStackContent = {
    heading: "Technology that stays practical.",
    body: "Kumbh Kavach is engineered for low cost, high reliability, and real deployment conditions.",
    stack: [
        { name: "ESP32-WROOM-32", description: "Low-power microcontroller for wearable intelligence.", category: "hardware" },
        { name: "MAX30102", description: "Heart rate and SpO₂ sensing.", category: "sensor" },
        { name: "DS18B20", description: "Accurate temperature tracking.", category: "sensor" },
        { name: "MPU6050", description: "Motion + fall detection.", category: "sensor" },
        { name: "BLE Communication", description: "Fast local connectivity with minimal power usage.", category: "connectivity" },
        { name: "Android (Kotlin)", description: "Real-time dashboard + alerts.", category: "software" },
        { name: "Offline Data Caching", description: "Designed to survive connectivity gaps.", category: "software" },
        { name: "Security Focus", description: "Encrypted data flow and controlled access.", category: "security" }
    ]
};

export const timelineContent = {
    heading: "From idea to working prototype.",
    note: "Built with iterative testing and real-world constraints in mind.",
    phases: [
        { name: "Planning & Requirements", status: "complete" },
        { name: "Research & Tech Selection", status: "complete" },
        { name: "Prototype Development", status: "complete" },
        { name: "Testing & Validation", status: "complete" },
        { name: "Final Implementation", status: "complete" },
        { name: "Documentation & Reporting", status: "current" }
    ]
};

export const aboutContent = {
    heading: "About Kumbh Kavach",
    body: "Kumbh Kavach is a wearable health and safety system designed for large gatherings where connectivity, visibility, and response time become critical. It integrates vital monitoring, motion detection, and emergency alerts into a single, low-cost ecosystem.",
    blocks: [
        {
            title: "Problem Statement",
            content: "Mass events face real-time tracking and emergency communication challenges due to infrastructure limits and network overload."
        },
        {
            title: "Outcome",
            content: "A functional prototype capable of continuous monitoring, fast alerting, and reliable short-range communication."
        },
        {
            title: "Future Scope",
            content: "GPS integration, long-range communication, stronger identity systems, and expanded health sensing."
        }
    ]
};

export const contactContent = {
    heading: "Let's collaborate or test it in the field.",
    body: "If you're an event organizer, researcher, or development partner, we'd love to explore how Kumbh Kavach can evolve into a real deployment-ready safety system.",
    reasons: [
        "Demo Request",
        "Collaboration",
        "Research Interest",
        "Feedback"
    ]
};

export const footerContent = {
    tagline: "Kumbh Kavach: Safety that stays with you.",
    description: "Designed for large gatherings. Built for families. Engineered for reliability.",
    links: [
        { name: "Documentation", href: "/about" },
        { name: "GitHub", href: "#" },
        { name: "Contact", href: "/contact" }
    ]
};

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Architecture", href: "/architecture" },
    { name: "Mobile App", href: "/mobile-app" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
];

export const shortTaglines = [
    "A digital kavach for real-world crowds.",
    "Stay connected when networks don't.",
    "From vitals to SOS, in seconds.",
    "Built for faith. Powered by engineering.",
    "Less panic. Faster response."
];
