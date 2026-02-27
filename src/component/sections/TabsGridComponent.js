"use client"
import React, { useState } from 'react'
import TabSection from './TabSection';
import FacultyCards from './FacultyCards';

export default function TabsGridComponent({ tabs, pageType, heading }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.category);

    // Derive unique categories from tabs
    const uniqueCategories = [...new Set(tabs.map(tab => tab.category))];

    return (
        <div className='filter_grids_section'>
            <TabSection
                uniqueCategories={uniqueCategories}
                pageType={pageType}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <FacultyCards
                tabs={tabs}
                heading={heading}
                activeTab={activeTab}
            />
        </div>
    )
}