import { Component } from 'react'

export default class DestinationData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
                <div className="dest-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="sigiriya" />
                    <img src={this.props.img2} alt="sigiriya" />
                </div>
            </div>
      </div>
    )
  }
}
