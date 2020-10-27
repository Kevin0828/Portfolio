import React from 'react';
import './FooterSection.css';


class FooterSection extends React.Component
{
    constructor()
    {
        super();

        const today = new Date();

        this.state = {
            year: today.getFullYear()
        };
    }



    render() {
        return (
            <section id="footer">
                <div id="footer-wrapper">
                    <div className = "footer-rights">
                        <span>® {this.state.year} Kevin Fontela</span>
                       <a target="_blank" href="https://www.linkedin.com/in/kevinfontela/"  rel="noopener noreferrer"> <img src = "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" alt="Linkedin" ></img>  </a>
                       <a target="_blank" href="https://github.com/Kevin0828"  rel="noopener noreferrer"> <img src = "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" alt="Github"></img> </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterSection;