import * as React from 'react';
import { connect } from 'react-redux';

const MostPopularItem = (props) => {
    return(
        <div data-src={props.car.image} style={{...props.style}} className={`b-lazy image most-popular__item most-popular__item--${props.num}`}>
            <div className="most-popular__item__info">
                <h2 className="most-popular__item__info__name">{props.car.name}
                    <span className="most-popular__item__info__ver">{props.car.version}</span>                
                </h2>
                <ul className="list">
                    <li>{`price for a day: ${props.car.info.priceForDay}$`}</li>
                    <li>{`engine: ${props.car.info.engine}`}</li>
                    <li>{`type of engine: ${props.car.info.typeOfEngine}`}</li>
                    <li>{`trunk capacity: ${props.car.info.trunkCapacity}L`}</li>
                    <li>{`type of drive: ${props.car.info.typeOfDrive}`}</li>
                    <li>{`maximum speed: ${props.car.info.maximumSpeed} km/h`}</li>
                    <li>{`doors: ${props.car.info.doors}`}</li>
                    <li>{`persons: ${props.car.info.persons}`}</li>
                    <li>{`color: ${props.car.info.color}`}</li>
                    <li>{`year of production: ${props.car.info.yearOfProduction}`}</li>

                </ul>
                <button className="button-1 most-popular__item__info__rent" onClick={props.openModal} ><span>Rent</span></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => ({
    openModal: () => dispatch({type: 'TOGGLE_MODAL', value: true, id: props.car.id})
})

export default connect(undefined, mapDispatchToProps)(MostPopularItem);
