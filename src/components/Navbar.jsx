import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="/app">Music&nbsp; App</a>
                    </div>
                </nav>
                <hr />
            </div>
        )
    }
}
