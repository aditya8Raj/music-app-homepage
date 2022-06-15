import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="/app">Relevel &nbsp; Sound  &nbsp; Cloud</a>
                    </div>
                </nav>
                <hr />
            </div>
        )
    }
}
