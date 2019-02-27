import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const MostPopularItem = (props) => {
    console.log(props.car.image)
    return(
        <div style={{...props.style, background: `url(${props.car.image}) center/cover`}} className={`most-popular__item most-popular__item--${props.num}`}>
            <div className="most-popular__item__info">
                <h2 className="most-popular__item__info__name">{props.car.name}
                    <span className="most-popular__item__info__ver">{props.car.version}</span>                
                </h2>
                <ul className="list">
                    {Object.keys(props.car.info).map(key => (
                        <li key={key}>{`${key}: ${props.car.info[key]}`}</li>
                    ))}

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
