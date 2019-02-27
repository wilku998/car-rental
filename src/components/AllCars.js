import React from 'react'
import {allCarsData} from '../data/data';

class AllCars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allVisible: false,
            hideAnimation: false
        }
    }

    toggleAllVisble(allVisible){

        if(allVisible){
            this.setState(() => ({
                allVisible,
            }), () => {
                    document.querySelector('.all-cars__item__button').scrollIntoView();
            })
        }else{
            this.setState(() => ({
                hideAnimation: true            
            }))
            document.getElementById('all-cars__title').scrollIntoView();

            setTimeout(() => {
                this.setState(() => ({
                    allVisible,
                    hideAnimation: false
                }))
            }, 1000);
        }

    }

    renderItems(arr, seeMore, hideAnimation){
        return (
            <div className={`all-cars__content ${seeMore ? `all-cars__content--more ${hideAnimation ? 'all-cars__content--more--hide' : ''}` : ''}`}>
                {arr.map((e, i) => (
                    <div key={i} className="all-cars__item">
                        <div className="all-cars__item__top" style={{background: `url(${e.image}) center/cover`}}>
                        </div>
                        <h3 className="all-cars__item__title">{e.name}</h3>
                        <ul className="all-cars__item__list">
                        <li>Engine: {e.engine}</li>
                        <li>Year of production: {e.yearOfProduction}</li>
                        <li>Maxiumum speed: {e.maximumSpeed}</li>
                        <li>Type of drive: {e.typeOfDrive}</li>
                    </ul>

                    <button className="button-1 button-1--dark all-cars__item__button">more info</button>
                    </div>
                ))}
            </div>
        )
    }

    render(){
        return (
            <div className="all-cars row">
                <h1 id="all-cars__title" className="title">All cars</h1>
                {this.renderItems(allCarsData.slice(0, 3))}

                {this.state.allVisible && this.renderItems(allCarsData.slice(3), true, this.state.hideAnimation)}

                {!this.state.hideAnimation && <button className="all-cars__button button-1 button-1--dark" onClick={() => this.toggleAllVisble(!this.state.allVisible)}>
                    {this.state.allVisible ? 'hide' : 'see more'}
                </button>}
            </div>
        )
    }
}

export default AllCars