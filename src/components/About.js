import React from 'react';

const About = (props) => (
    <section className="about row">
        <div className="about__content">
            <div className="about__item">
                <h2>We rent car over whole Europe</h2>
                <p>Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Curabitur velit magna, rhoncus quis arcu quis, laoreet dictum lorem. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>
                <h2>Wide range off offerts</h2>
                <p>Duis non magna imperdiet urna molestie scelerisque. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>
                <div className="about__item__photo" style={{background: 'url(./images/chevroletcamaro2013.jpg) center/cover'}}></div>
            </div>
            <div className="about__tall-photo" style={{background: 'url(./images/porshe-tall.jpeg) center/cover'}}>

            </div>
            <div className="about__title-container">
                <h2 className="about__title">About</h2>
            </div>
        </div>
    </section>
)

export default About;