import React from 'react';

const MainVisual = () => {
    return (
        <section className="relative">
            {/* Main visual background */}
            <img src="/path/to/city-skyline.jpg" alt="City Skyline" className="w-full h-96 object-cover" />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-4">
                <h1 className="text-2xl font-bold">AIRBEAR가 제공하는 실무 배틀 스토리의 핵심의 길</h1>
            </div>
        </section>
    );
};

export default MainVisual;
