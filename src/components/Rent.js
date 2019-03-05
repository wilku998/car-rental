import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux' 
import {mostPopularData} from '../data/data'
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import isMobilePhone from 'validator/lib/isMobilePhone';
const defaultState = {
    days: 0,
    price: 0,
    discount: 0,
    discountsVisible: false,
    endDate: moment().add(1, 'days'),
    startDate: moment(),
    limitStart: moment(),
    limitEnd: moment().add(60, 'days'),
    submited: false,
    invalidInfo: '',
    form: {
        name: {
            value: '',
            valid: false
        },
        surname: {
            value: '',
            valid: false
        },
        country: {
            value: '',
            valid: false
        },
        city: {
            value: '',
            valid: false
        },
        telephone: {
            value: '',
            valid: false
        },
    }
}
class Rent extends React.Component {
    constructor(props){
        super(props);
                 

        this.state={
            ...defaultState
        }

        this.closeModal=this.closeModal.bind(this);
    }

    setPrice(days){
        // 1-3 4-7 8-14 15-30 31-60
        // 0%  15% 30%  45%   60%
        let discount;
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
        let price = basis - basis*discount;

        this.setState((state) => ({
            discount,
            price: parseInt(price),
        }))

    }

    toggleDiscounts(){
        this.setState((state) => ({
            discountsVisible: !state.discountsVisible
        }))
    }

    setDates(startDate, endDate){
        this.setState({startDate, endDate})
        
        if((startDate && endDate)){
            let duration = moment.duration(endDate.diff(startDate));
            this.setPrice(parseInt(duration.asDays()));
        }else{
            this.setState((state) => ({
                discount: 0,
                price: 0,
            }))
        }
    }

    isOutsideRange(day){
        if (this.state.focusedInput === 'endDate') {
            return moment.max(day, this.state.limitEnd).format()===day.format() || moment.min(day, this.state.limitStart).format()===day.format()
        }else{
            return moment.max(day, this.state.limitEnd).format()===day.format() || moment.min(day, this.state.limitStart).format()===day.format()

        }
    }

    closeModal(){
        if(!this.state.focusedInput){
            this.props.closeModal()
        }
    }

    onAfterOpen(){
        document.querySelector('.rent').addEventListener('click', (e) => {
            if(Array.from(e.target.classList).indexOf('rent')>-1){
                this.closeModal()
            }
        })

        this.setState(() => ({
            ...defaultState,
            price: this.props.car.info.priceForDay,
        }))

    }

    setProperty(property, value){
        this.setState((state) => ({
            form: {
                ...state.form,
                [property]: {
                    value,
                    valid: property==='telephone' ? isMobilePhone(value) : value.length<=20 && value.length>=3
                }
            }})
        )
    }

    onSubmit(event){
        event.preventDefault();
        let invalidInfo = '';
        if(!this.state.submited){
            let validation=true;
            Object.keys(this.state.form).forEach(key => {
                if(!this.state.form[key].valid){
                    validation=false;
                }
                if(this.state.form[key].value===''){
                    invalidInfo = `${key} is required`
                }
            })
            
            if(this.state.price<1){
                invalidInfo = 'Set correctly range of days!';
                validation = false
            }

            this.setState(() => ({
                submited: validation,
                invalidInfo
             }))
        }
    }


    render(){
        return(
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Rent car"
                    className="rent"
                    onAfterOpen={() => this.onAfterOpen()}
                    style={{overlay: {overflowY: 'scroll', zIndex: 1000, background: 'rgba(0,0,0,0.6)'}}}
                    ref='modal'
                >

                <div className="rent__content" style={{background: `url(${this.props.car.image}) center/cover`}}>
                    <i className="icon-cancel rent__cancel" onClick={() => this.closeModal()}/>
                    <div className="rent__item rent__item--left">
                        <h2 className="rent__title">{this.props.car.name}</h2>
                        <span className="rent__version">{this.props.car.version}</span>
                        <div className="rent__list-container">
                            <ul className="list rent__list">
                                <li>{`price for a day: ${this.props.car.info.priceForDay}$`}</li>
                                <li>{`engine: ${this.props.car.info.engine}`}</li>
                                <li>{`type of engine: ${this.props.car.info.typeOfEngine}`}</li>
                                <li>{`trunk capacity: ${this.props.car.info.trunkCapacity}L`}</li>
                                <li>{`type of drive: ${this.props.car.info.typeOfDrive}`}</li>
                            </ul>
                            <ul className="list rent__list">
                                <li>{`maximum speed: ${this.props.car.info.maximumSpeed} km/h`}</li>
                                <li>{`doors: ${this.props.car.info.doors}`}</li>
                                <li>{`persons: ${this.props.car.info.persons}`}</li>
                                <li>{`color: ${this.props.car.info.color}`}</li>
                                <li>{`year of production: ${this.props.car.info.yearOfProduction}`}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rent__item rent__item--right">
                        <div className="rent__price">
                            <span className="rent__price__header"> {`Price is: ${this.state.price}$`}</span>
                            <label className="rent__price__label"><span>Set range of days</span>
                            <DateRangePicker 
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDatesChange={({startDate, endDate}) => this.setDates(startDate, endDate)}
                                onFocusChange={focusedInput => this.setState({focusedInput})}
                                focusedInput={this.state.focusedInput}
                                isOutsideRange={(day) => this.isOutsideRange(day)}
                                endDateId='3123'
                                startDateId='3623'
                                small={true}
                                numberOfMonths={1
                                }
                                //orientation='vertical'
                            />
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
                        <form className="rent__form" onSubmit={e => this.onSubmit(e)}>
                            {Object.keys(this.state.form).map(key => (
                                <label key={key}>
                                    <span>{key}</span>
                                    <input className={`input ${this.state.form[key].value !== '' ? this.state.form[key].valid ? 'input--valid' : 'input--invalid' : ''}`}
                                        value={this.state.form[key].value} 
                                        onChange={(e) => this.setProperty(key, e.target.value)} type="text" 
                                    />
                                </label>
                            ))}
                            
                            <div className="rent__footer">
                                {
                                    !this.state.submited ?
                                    <button className="button-1 button-1--small button-1--dark rent__form__btn">Rent</button>
                                        :                                        
                                    <span className="rent__info rent__info--submited">
                                        Form sent. Our consultant will contact you within 24 hours.
                                    </span>
                                }
                                {this.state.invalidInfo!=='' && <span className="rent__info rent__info--invalid">{this.state.invalidInfo}</span>}
                            </div>
                        </form>
                    </div>
                </div>
                
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const car = mostPopularData.find(e => e.id === state.id);

    return{
        modalIsOpen: state.modalIsOpen,
        car,
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({type: 'TOGGLE_MODAL', value: false})
})

export default connect(mapStateToProps, mapDispatchToProps)(Rent);