import * as React from 'react';

const About = (props) => (
    <section className="about row">
        <h1 className="title about__title-2">About</h1>
        <div className="about__content">
            <div className="about__item">
                <h2 data-aos="fade-right">We rent car over whole Europe</h2>
                <p data-aos="fade-right">Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Curabitur velit magna, rhoncus quis arcu quis, laoreet dictum lorem. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>
                <h2 data-aos="fade-right">Wide range off offerts</h2>
                <p data-aos="fade-right">Duis non magna imperdiet urna molestie scelerisque. Etiam nunc massa, eleifend sed posuere vitae, rutrum vitae erat. Duis non magna imperdiet urna molestie scelerisque.</p>
                <div className="about__item__photo b-lazy image" data-src='./images/chevroletcamaro2013.jpg'></div>
            </div>
            <div className="about__tall-photo b-lazy image" data-src='./images/porshe-tall.jpeg'>

            </div>
            <div data-aos="fade-left" className="about__title-container">
                <h2 className="about__title">About</h2>
            </div>
        </div>
    </section>
)

export default About;