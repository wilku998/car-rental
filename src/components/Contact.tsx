import * as React from 'react';

class Contact extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
         <section className="contact-container row">
            <div className="contact">
                <h1 className="title">Contact</h1>
                <div className="contact__content">
                    <div data-aos="fade-right" className="contact__content__item">
                        <h3 className="contact__title">Do you have a question?</h3>
                        <p className="contact__p">Duis non magna imperdiet urna molestie scelerisque. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>

                        <h3 className="contact__title">Rental for more than 60 days</h3>
                        <p className="contact__p">Duis non magna imperdiet urna molestie scelerisque. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>                    
                        
                        <h3 className="contact__title">Company's data</h3>
                        <ul className="list contact__list">
                            <li>Adres of main headquaters: Poland, Leszno 64-100, Yellow St. 1</li>
                            <li>Telephone number: +48 176132123</li>
                            <li>Work hours: 7 a.m. - 18 p.m.</li>
                        </ul>
                    </div>
                    <div data-aos="fade-left" className="contact__content__item">
                        <h3 className="contact__title">Main headquarters of company</h3>
                        <div className="contact__map"></div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Contact;
