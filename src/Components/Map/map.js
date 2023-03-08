import React from 'react';

export default function map(props) {

    return (
        <div className='map-container' id='interactive-map'>
            <h1>
                Interactive Map
            </h1>
            <iframe id='tableau' title='map' src='https://public.tableau.com/views/INFO-442-project-Wage-stats/Dashboard1?:language=en-US&:display_count=n&:origin=v:showVizHome=no&:embed=true' />
            
        </div>
    );
    
};


