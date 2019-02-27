import React from 'react';
import MostPopularItem from './MostPopularItem';
import {mostPopularData} from '../data/data'
/*
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    //progress = (document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight ) ) * 100;
  
    console.log(window.pageYOffset);
  });
});
*/
class MostPopular extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      compHeight: 0,
      pos: 2,
    }
  }

  
  changePage(sign){
    const pos = this.state.pos + sign
    console.log(pos)
    pos <=3 && pos>=1 &&
    this.setState(() => ({
      pos  
    }))
  }

  componentDidMount(){
    this.setState(() => ({
      compHeight: this.refs.component.scrollHeight/3
    }))
  }

  render(){
    return (
      <section className="most-popular-container">
        <h1 className="title most-popular__title">Most popular cars</h1>
        <div className="most-popular" ref='component' onScroll={(e) => this.scrollEvent(e)}>
          <div className="most-popular__pos">
            <div className={`most-popular__pos__item ${this.state.pos===1 ? 'most-popular__pos__item--visible' : ''}`}></div>
            <div className={`most-popular__pos__item ${this.state.pos===2 ? 'most-popular__pos__item--visible' : ''}`}></div>
            <div className={`most-popular__pos__item ${this.state.pos===3 ? 'most-popular__pos__item--visible' : ''}`}></div>      
          </div>
          <div className="most-popular__move-btn-container">
            <div className="most-popular__move-btn" onClick={() => this.changePage(-1)}><i className='icon-up-open-big' /></div>
            <div className="most-popular__move-btn" onClick={() => this.changePage(1)}><i className='icon-down-open-big' /></div>
          </div>

          {mostPopularData.map((e, i) => (
            <MostPopularItem key={i} car={e} num={i+1}
            style={{transform: `${this.state.pos===i+1 ? `translateY(-${i*100}%)` : `translateY(-${(this.state.pos-1)*100}%)`}`}} />
          ))}
        </div>
      </section>
    )
  }
}

export default MostPopular;
