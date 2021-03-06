import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}
