import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { heartRateData, spO2Data, temperatureData, currentVitals } from '../data/vitalsData';

// Dark glass vital card
const VitalCard = ({ title, value, unit, color }) => {
    const colorClasses = {
        heart: 'text-red-400',
        spo2: 'text-teal-400',
        temp: 'text-saffron-400',
    };

    return (
        <div className="glass-card p-4 text-center">
            <div className={`text-2xl sm:text-3xl font-bold ${colorClasses[color]}`}>
                {value}
                <span className="text-sm font-normal text-warm-500 ml-1">{unit}</span>
            </div>
            <p className="text-warm-400 text-xs uppercase tracking-wider mt-1">{title}</p>
        </div>
    );
};

// Dark glass chart container
const ChartCard = ({ title, data, dataKey, color, domain }) => {
    return (
        <div className="glass-card p-4">
            <h4 className="text-xs uppercase tracking-wider text-warm-400 mb-3 text-center">{title}</h4>
            <div className="h-28">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                        <defs>
                            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="time"
                            tick={{ fontSize: 9, fill: '#78716c' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            domain={domain}
                            tick={{ fontSize: 9, fill: '#78716c' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(30, 30, 35, 0.9)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                fontSize: '11px',
                                color: '#fff',
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey={dataKey}
                            stroke={color}
                            strokeWidth={2}
                            fill={`url(#gradient-${color})`}
                            dot={false}
                            activeDot={{ r: 3, fill: color, stroke: 'rgba(30,30,35,0.9)', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const VitalsChart = () => {
    const [animatedData, setAnimatedData] = useState({
        heartRate: heartRateData.slice(0, 1),
        spO2: spO2Data.slice(0, 1),
        temperature: temperatureData.slice(0, 1),
    });

    useEffect(() => {
        let index = 1;
        const interval = setInterval(() => {
            if (index < heartRateData.length) {
                setAnimatedData({
                    heartRate: heartRateData.slice(0, index + 1),
                    spO2: spO2Data.slice(0, index + 1),
                    temperature: temperatureData.slice(0, index + 1),
                });
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6">
            {/* Current Vitals Row */}
            <div className="grid grid-cols-3 gap-4">
                <VitalCard
                    title="Heart Rate"
                    value={currentVitals.heartRate}
                    unit="BPM"
                    color="heart"
                />
                <VitalCard
                    title="SpO₂"
                    value={currentVitals.spO2}
                    unit="%"
                    color="spo2"
                />
                <VitalCard
                    title="Temp"
                    value={currentVitals.temperature}
                    unit="°C"
                    color="temp"
                />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <ChartCard
                    title="Heart Rate"
                    data={animatedData.heartRate}
                    dataKey="value"
                    color="#f87171"
                    domain={[60, 100]}
                />
                <ChartCard
                    title="SpO₂"
                    data={animatedData.spO2}
                    dataKey="value"
                    color="#2dd4bf"
                    domain={[94, 100]}
                />
                <ChartCard
                    title="Temperature"
                    data={animatedData.temperature}
                    dataKey="value"
                    color="#fb923c"
                    domain={[36, 38]}
                />
            </div>

            {/* Status - Glass pill */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass-pill px-4 py-2 w-fit mx-auto flex items-center gap-2"
            >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-sm font-medium">All vitals normal</span>
                <span className="text-warm-500 text-xs">· {currentVitals.lastUpdated}</span>
            </motion.div>
        </div>
    );
};

export default VitalsChart;
