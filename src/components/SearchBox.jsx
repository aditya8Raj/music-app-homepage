import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <input className='container' type="search" placeholder='Seach songs' />
                </div>
            </div>
        )
    }
}
