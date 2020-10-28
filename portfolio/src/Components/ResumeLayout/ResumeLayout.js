import React from 'react';
import './ResumeLayout.css';
import ViewResume from '../ViewResume/ViewResume'


const ResumeLayout = () =>
{
    return(
        <div className = "fade-in-slow view-resume-wrapper">
           <ViewResume />
        </div>
    );
}

export default ResumeLayout;