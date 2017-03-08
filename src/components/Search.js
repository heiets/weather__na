import React, { Component } from 'react'

export default class Description extends Component {
    add() {
        let storageData = [...this.props.list.storageData];
        if (localStorage.getItem('storageData') !== null) {
            storageData = localStorage.getItem('storageData').split(',');
        }
        const formValue  = document.querySelector('#formInput').value;
        document.querySelector('#formInput').value = '';
        storageData.push(formValue);
        localStorage.setItem('storageData', storageData);
        this.props.add(storageData);
        this.props.refresh();
    }
    render() {
        return <div className="searchform">
            <input id="formInput" type="text" /><button onClick={ ::this.add } >Add</button>
        </div>
    }
}