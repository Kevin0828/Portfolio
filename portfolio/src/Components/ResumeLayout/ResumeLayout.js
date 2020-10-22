import React from 'react';
import './ResumeLayout.css';
import ViewResume from '../ViewResume/ViewResume'


const ResumeLayout = () =>
{
    return(
        <div className = "fade-in-slow">
           <ViewResume />
        </div>
    );
}

export default ResumeLayout;