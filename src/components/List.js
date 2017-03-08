import React, {  Component } from 'react'

import Single from '../components/Single'

export default class Page extends Component {
    showDesc(e) {
        e.target.parentNode.parentNode.querySelector('.desc').classList.toggle('showDesc');
        e.target.parentNode.parentNode.querySelector('.item').classList.toggle('active');
    }
    remove(e) {
        let storageData = [...this.props.list.storageData];
        if (localStorage.getItem('storageData') !== null) {
            storageData = localStorage.getItem('storageData').split(',');
        }
        let newArr = storageData.filter(v => v !== e.target.dataset.name);
        localStorage.setItem('storageData', newArr);
        this.props.remove(newArr);
        this.props.refresh();
    }
    render() {
        const listToShow = this.props.list.result.map((v,i) => (
            <li key={i}>
                <div className="item" onClick={::this.showDesc}>
                    <div className="item__info">
                        <div className="item__temp">{(v.main.temp - 273).toFixed(2)} °C</div>
                        <div className="item__name">{v.name}</div>
                    </div>
                    <button data-name={v.name} onClick={::this.remove}>Remove</button>
                </div>
                <Single humidity={v.main.humidity} pressure={v.main.pressure} />
            </li>
        ));
        return <div className="list">
            <ul>
                {listToShow.length != 0 ? listToShow: <div className="loading"><i className="fa fa-refresh fa-spin" aria-hidden="true"></i></div>}
            </ul>
        </div>
    }
}
