// Mock vitals data for dashboard charts

// Generate realistic heart rate data (60-100 BPM with some variation)
export const generateHeartRateData = () => {
    const data = [];
    const baseHR = 72;
    for (let i = 0; i < 30; i++) {
        const variation = Math.sin(i * 0.3) * 8 + (Math.random() - 0.5) * 10;
        data.push({
            time: `${i}s`,
            value: Math.round(baseHR + variation),
        });
    }
    return data;
};

// Generate realistic SpO2 data (94-100%)
export const generateSpO2Data = () => {
    const data = [];
    const baseSpo2 = 97;
    for (let i = 0; i < 30; i++) {
        const variation = Math.sin(i * 0.2) * 1.5 + (Math.random() - 0.5) * 2;
        data.push({
            time: `${i}s`,
            value: Math.min(100, Math.max(94, Math.round((baseSpo2 + variation) * 10) / 10)),
        });
    }
    return data;
};

// Generate realistic temperature data (36.5-37.5°C)
export const generateTemperatureData = () => {
    const data = [];
    const baseTemp = 36.8;
    for (let i = 0; i < 30; i++) {
        const variation = Math.sin(i * 0.15) * 0.3 + (Math.random() - 0.5) * 0.2;
        data.push({
            time: `${i}s`,
            value: Math.round((baseTemp + variation) * 10) / 10,
        });
    }
    return data;
};

// Static sample data for initial render
export const heartRateData = [
    { time: '0s', value: 72 },
    { time: '2s', value: 75 },
    { time: '4s', value: 78 },
    { time: '6s', value: 80 },
    { time: '8s', value: 77 },
    { time: '10s', value: 74 },
    { time: '12s', value: 71 },
    { time: '14s', value: 73 },
    { time: '16s', value: 76 },
    { time: '18s', value: 79 },
    { time: '20s', value: 82 },
    { time: '22s', value: 78 },
    { time: '24s', value: 75 },
    { time: '26s', value: 73 },
    { time: '28s', value: 74 },
    { time: '30s', value: 76 },
];

export const spO2Data = [
    { time: '0s', value: 98 },
    { time: '2s', value: 97 },
    { time: '4s', value: 98 },
    { time: '6s', value: 99 },
    { time: '8s', value: 98 },
    { time: '10s', value: 97 },
    { time: '12s', value: 98 },
    { time: '14s', value: 98 },
    { time: '16s', value: 99 },
    { time: '18s', value: 98 },
    { time: '20s', value: 97 },
    { time: '22s', value: 98 },
    { time: '24s', value: 99 },
    { time: '26s', value: 98 },
    { time: '28s', value: 98 },
    { time: '30s', value: 97 },
];

export const temperatureData = [
    { time: '0s', value: 36.8 },
    { time: '2s', value: 36.7 },
    { time: '4s', value: 36.9 },
    { time: '6s', value: 36.8 },
    { time: '8s', value: 37.0 },
    { time: '10s', value: 36.9 },
    { time: '12s', value: 36.8 },
    { time: '14s', value: 36.7 },
    { time: '16s', value: 36.8 },
    { time: '18s', value: 36.9 },
    { time: '20s', value: 37.0 },
    { time: '22s', value: 36.9 },
    { time: '24s', value: 36.8 },
    { time: '26s', value: 36.7 },
    { time: '28s', value: 36.8 },
    { time: '30s', value: 36.9 },
];

// Alert thresholds
export const thresholds = {
    heartRate: { min: 60, max: 100, critical: 120 },
    spO2: { min: 95, critical: 90 },
    temperature: { min: 36.0, max: 37.5, critical: 38.5 }
};

// Current readings for display cards
export const currentVitals = {
    heartRate: 76,
    spO2: 98,
    temperature: 36.8,
    fallDetected: false,
    lastUpdated: "2 seconds ago"
};
