import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
  }
  render() {
    const { year, photos } = this.props
    return <div>
        <div >
            <button type="button" class="btn btn-secondary" onClick={this.onYearBtnClick.bind(this)}>2018</button>
            <button type="button" class="btn btn-secondary" onClick={this.onYearBtnClick.bind(this)}>2017</button>
            <button type="button" class="btn btn-secondary" onClick={this.onYearBtnClick.bind(this)}>2016</button>
       </div>
      <h3>{year} год</h3>
      <p>У тебя {photos.length} фото.</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}