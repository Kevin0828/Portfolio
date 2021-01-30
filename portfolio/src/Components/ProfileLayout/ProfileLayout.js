import React from 'react';
import ProfileImage from '../../Images/Profile.jpg';
import './ProfileLayout.css';
import Resume from '../../Documents/Kevin_Fontela_Resume.pdf';
import './ViewResume.css';
 

const ProfileLayout = () => {

  const openPDF = () => {
    const pdfWindow = window.open("Kevin_Fontela_Resume.pdf");
    const title     = "Kevin_Fontela_Resume.pdf";
    const URI       = "Kevin_Fontela_Resume.pdf";
    const html      = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0 0 0 0">
           <embed width="100%" height="100%" src=${Resume} type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow.document.write(html);
    pdfWindow.document.close();
    pdfWindow.history.pushState(null, "Kevin_Fontela_Resume.pdf", URI);
  };

    return (
        <div className="fade-in-fast">
            <div className="profile-layOut">

                <img className="profile-img" src={ProfileImage} alt="Kevin Fontela's profile" />
                <div className="profile-name-div"><h1 className="profile-name">Kevin Fontela</h1></div>
                <div className="profile-name-div"><h3 className="profile-name description">Aspiring Software Engineer</h3></div>
                
                <div className="button-container">
                    <a className="resume-link" rel="noopener noreferrer" a><button onClick={openPDF} className="resume-btn">View Resume</button> </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;