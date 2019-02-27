import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux' 
import {mostPopularData} from '../data/data'
class Rent extends React.Component {
    constructor(props){
        super(props);
                 

        this.state={
            days: 1,
            price: 0,
            discount: 0,
            discountsVisible: false,
        }
    }

    setPrice(days){
        const daysNum = parseInt(days)

        if(!isNaN(days) && !days.includes('.') && ((daysNum<61 && daysNum>=1) || days==='')){
            // 1-3 4-7 8-14 15-30 31-60
            // 0%  15% 30%  45%   60%
            let discount;
            let price;
            if(days!==''){
                if(days>=31){
                    discount = 0.6
                }else if(days>=15){
                    discount = 0.45
                }else if(days>=8){
                    discount = 0.3
                }else if(days>=4){
                    discount = 0.15
                }else{
                    discount = 0
                }
                let basis = days*this.props.car.info.priceForDay;
                price = basis - basis*discount;
            }

            this.setState((state) => ({
                days,
                discount: discount ? discount : 0,
                price: price ? parseInt(price) : 0,
            }))

        }
    }

    toggleDiscounts(){
        this.setState((state) => ({
            discountsVisible: !state.discountsVisible
        }))
    }

    afterOpenModal(){
        console.log('x')

        this.setState(() => ({
            price: this.props.car.info.priceForDay
        }))
    }

    render(){
        return(
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    contentLabel="Rent car"
                    onAfterOpen={() => this.afterOpenModal()}
                    className="rent__content"
                    style={{content: {background: `url(${this.props.car.image}) center/cover`}, overlay: {zIndex: '100', background: 'rgba(0,0,0,0.7',
                    display: 'flex', justifyContent: 'center'}}}
                >
                        <div className="rent__item rent__item--left">
                            <h2 className="rent__title">{this.props.car.name}</h2>
                            <span className="rent__version">{this.props.car.version}</span>
                            <div className="rent__list-container">
                                {this.props.info.map((arr, i) =>(
                                    <ul className="list rent__list" key={i}>
                                        {arr.map(e =>
                                            Object.keys(e).map(key => <li key={key}>{`${key}: ${e[key]}`}</li>)
                                        )}
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <div className="rent__item rent__item--right">
                            <div className="rent__price">
                                <span>{`Price is: ${this.state.price}$`}</span>
                                <label><span>How much days of renting</span>
                                    <input className="input" type="text" value={this.state.days} onChange={(e) => this.setPrice(e.target.value)}/>
                                </label>
                                <div className="rent__price__discount">
                                    {`Your discount: ${this.state.discount*100}%`}
                                    <button onClick={() => this.toggleDiscounts()}>discounts</button>
                                </div>
                                {this.state.discountsVisible && (
                                    <div className="rent__discounts">
                                    <ul className="list rent__list rent__list--small">
                                        <li>1-6 days: 0%</li>
                                        <li>14-29 days: 30%</li>
                                    </ul>
                                    <ul className="list rent__list rent__list--small">
                                        <li>7-13 days: 15%</li>
                                        <li>30-60 days: 45%</li>                                
                                    </ul>
                                </div>
                                )}
                            </div>
                            <form className="rent__form">
                                <label>
                                    <span>Name</span>
                                    <input className="input" type="text" /></label>
                                <label>
                                    <span>Surname</span>
                                    <input className="input" type="text" /></label>
                                <label>
                                    <span>Country</span>
                                    <input className="input" type="text" /></label>
                                <label>
                                    <span>City</span>
                                    <input className="input" type="text" /></label>
                                <label>
                                    <span>Telephone</span>
                                    <input className="input" type="text" /></label>
                                <button className="button-1 button-1--dark rent__form__btn">Rent</button>
                            </form>
                        </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const car = mostPopularData.find(e => e.id === state.id);

    const infoArr = Object.keys(car.info).map(key => ({[key]: car.info[key]}));
    const half = Math.ceil(infoArr.length/2);

    return{
        modalIsOpen: state.modalIsOpen,
        car,
        info: [infoArr.slice(0, half), infoArr.slice(half)],
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({type: 'TOGGLE_MODAL', value: false})
})

export default connect(mapStateToProps, mapDispatchToProps)(Rent);