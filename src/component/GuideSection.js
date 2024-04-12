import React from 'react';

const GuideSection = ({ icon, title, description }) => {
    return (
        <div className="flex space-x-4 mb-8">
            <img src={icon} alt={title} className="h-12 w-12" />
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GuideSection;
