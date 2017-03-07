import React, {  Component } from 'react'

import Single from '../components/Single'

export default class Page extends Component {
    showDesc(e) {
        e.target.parentNode.parentNode.querySelector('.desc').classList.toggle('showDesc');
        e.target.parentNode.parentNode.querySelector('.item').classList.toggle('active');
    }
    render() {
        console.log('result', this.props.list.result);
        console.log('storageData', this.props.list.storageData);
        const listToShow = this.props.list.result.map((v,i) => (
            <li key={i}>
                <div className="item" onClick={::this.showDesc}>
                    <div className="item__info">
                        <div className="item__temp">{(v.main.temp - 273).toFixed(2)} °C</div>
                        <div className="item__name">{v.name}</div>
                    </div>
                    <button >Remove</button>
                </div>
                <Single humidity={v.main.humidity} pressure={v.main.pressure} />
            </li>
        ));
        console.log('this.props.list.result', this.props.list.result);
        console.log('listToShow', listToShow);
        return <div className="list">
            <ul>
                {listToShow}
            </ul>
        </div>
    }
}
