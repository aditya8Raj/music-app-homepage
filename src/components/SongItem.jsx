import React, { Component } from 'react'

export class SongItem extends Component {
    render() {
        let { songName, artist, imgUrl, duration, likes } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "12rem", color: "black" }}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4><strong>{songName}</strong></h4>
                        <p className="card-text">by <em>{artist}</em></p>
                        <hr />
                        <p>Duration: <strong>{duration}</strong></p>
                        <hr />
                        <p>Likes: <strong>{likes}</strong></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongItem