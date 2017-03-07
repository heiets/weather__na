import React, {  Component } from 'react'

export default class Single extends Component {
    render() {
        return <div className="desc">
            <div className="humidity">Humidity: {this.props.humidity}</div>
            <div className="pressure">Pressure: {this.props.pressure}</div>
        </div>
    }
}
