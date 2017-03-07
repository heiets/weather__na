import React, { Component } from 'react'

export default class Description extends Component {
    add() {
        let storageData = [...this.props.list.storageData];
        const formValue  = document.querySelector('#formInput').value;
        // const key  = '4efd74e8c12b7480a6406e5c5bf34271';
        // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formValue}&appid=${key}`)
        //     .then(function(r) {
        //         return r.json();
        //     })
        //     .then(function() {
        //         storageData.push(formValue);
        //     });
        storageData.push(formValue);
        this.props.add(storageData);
    }
    refresh() {
        let storageData = [...this.props.list.storageData];
        let result = [];
        const key  = '6eebea3469a9df838c9f3994ae87de47';
        storageData.forEach(function(v) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${v}&appid=${key}`)
                .then(function(r) {
                    return r.json();
                })
                .then(function(r) {
                    result.push(r);
                });
        });
        console.log(result);
        this.props.refresh(result);
    }
    render() {
        return <div className="searchform">
            <input id="formInput" type="text" /><button onClick={ ::this.add } >Add</button>
            <button onClick={ ::this.refresh } >refresh</button>
        </div>
    }
}