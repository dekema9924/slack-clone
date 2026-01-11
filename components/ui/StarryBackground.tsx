import React from 'react';

export default function StarryBackground({ children }: { children: React.ReactNode }) {
    const stars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <>
            {/* Stars container */}
            <div className="absolute inset-0 ">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute z-30 rounded-full bg-white animate-pulse"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, 0.3)`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`
                        }}
                    />
                ))}
            </div>
            {children}
        </>
    );
}