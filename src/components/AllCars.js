import React from 'react'
import {allCarsData} from '../data/data';
import {connect} from 'react-redux'
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

    renderItems(arr, more, hideAnimation){
        return (
            <div className={`all-cars__content ${more ? `all-cars__content--more ${hideAnimation ? 'all-cars__content--more--hide' : ''}` : ''}`}>
                {arr.map((e, i) => (
                    <div key={i} className="all-cars__item" data-aos={`${!more ? 'zoom-in' : ''}`}>
                        <div className="all-cars__item__top" style={{background: `url(${e.image}) center/cover`}}>
                        </div>
                        <h3 className="all-cars__item__title">{e.name}</h3>
                        <ul className="all-cars__item__list">
                            <li>Price for a day: {e.info.priceForDay}$</li>
                            <li>Engine: {e.info.engine}</li>
                            <li>Year of production: {e.info.yearOfProduction}</li>
                            <li>Maxiumum speed: {e.info.maximumSpeed} km/h</li>
                            <li>Type of drive: {e.info.typeOfDrive}</li>
                    </ul>

                    <button className="button-1 button-1--dark all-cars__item__button" onClick={() => this.props.openModal(e.id)}>Rent</button>
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

                {!this.state.hideAnimation && <button className="all-cars__button button-2" onClick={() => this.toggleAllVisble(!this.state.allVisible)}>
                    {this.state.allVisible ? 'Hide' : 'See more'}
                </button>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    openModal: (id) => dispatch({type: 'TOGGLE_MODAL', value: true, id})
})

export default connect(undefined, mapDispatchToProps)(AllCars)