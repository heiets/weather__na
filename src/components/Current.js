import React, {  Component } from 'react'

export default class Current extends Component {
    render() {
        return <div className="current">
            <div className="current__temp">{(this.props.current.main.temp - 273).toFixed(2)} °C</div>
            <div className="current__name">{this.props.current.name}</div>
        </div>
    }
}
