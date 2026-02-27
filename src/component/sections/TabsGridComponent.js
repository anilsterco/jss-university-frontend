import React from 'react'
import TabSection from './TabSection';
import FacultyCards from './FacultyCards';

export default function TabsGridComponent({ tabs, pageType, heading }) {

    return (
        <div className='filter_grids_section'>
            <TabSection tabs={tabs} pageType={pageType} />
            <FacultyCards tabs={tabs} heading={heading} />
        </div>
    )
}