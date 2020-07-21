import React from 'react';

const Job = ({ job }) => {
    const { 
        id, 
        title, 
        company_logo, 
        company, 
        company_url, 
        created_at, 
        description, 
        how_to_apply, 
        location, 
        type, 
        url } = job
        
    return (
        <div>
            {title}
        </div>
    );
}

export default Job;
