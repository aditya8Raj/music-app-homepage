import React, { Component } from 'react'
import Loading from './Loading';
import SongItem from './SongItem'

export class Song extends Component {
    playlist = [
        {
            "id": "1",
            "name": "All we Know",
            "artist": "The Chainsmokers, Phoebe Ryan",
            "image": "https://i.postimg.cc/6pW1dRy7/all-we-Know.jpg",
            "duration": "3:14",
            "likes": "524,541,822"
        },
        {
            "id": "2",
            "name": "Night Changes",
            "artist": "One Direction",
            "image": "https://i.postimg.cc/KvMmd6N7/night-changes.jpg",
            "duration": "3:46",
            "likes": "667,216,813"
        },
        {
            "id": "3",
            "name": "What Makes You Beautiful",
            "artist": "One Direction",
            "image": "https://i.postimg.cc/xC36J1nG/what-makes-you-beautiful.jpg",
            "duration": "3:19",
            "likes": "713,160,999"
        },
        {
            "id": "4",
            "name": "Heat Waves",
            "artist": "Glass Animals",
            "image": "https://i.postimg.cc/hvqhwKdY/heat-waves.jpg",
            "duration": "3:58",
            "likes": "1,691,370,548"
        },
        {
            "id": "5",
            "name": "Cradles",
            "artist": "Sub Urban",
            "image": "https://i.postimg.cc/bJ0qZkZ6/cradles.jpg",
            "duration": "3:29",
            "likes": "516,497,074"
        },
        {
            "id": "6",
            "name": "As It Was",
            "artist": "Harry Styles",
            "image": "https://i.postimg.cc/2j2fgzhB/as-it-was.jpg",
            "duration": "2:47",
            "likes": "699,069,930"
        },
        {
            "id": "7",
            "name": "Stereo Hearts",
            "artist": "Gym Class Heroes, Adam Levine",
            "image": "https://i.postimg.cc/ZKBDjZcm/stereo-hearts.jpg",
            "duration": "3:30",
            "likes": "1,196,863,231"
        },
        {
            "id": "8",
            "name": "Unstoppable",
            "artist": "Sia",
            "image": "https://i.postimg.cc/YC7ZSZ6w/unstoppable.jpg",
            "duration": "3:37",
            "likes": "486,933,369"
        }
    ]
    constructor() {
        super();
        this.state = {
            playlist: this.playlist,
            loading: false
        }
    }
    render() {
        return (
            <>
                <div className='container my-4'>
                    <div className="row">
                        {this.state.loading && <Loading />}
                        {this.state.playlist.map(function (element) {
                            return (
                                <div className="col-md-3" key={element.id}>
                                    <SongItem
                                        imgUrl={element.image}
                                        songName={element.name}
                                        artist={element.artist}
                                        duration={element.duration}
                                        likes={element.likes}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Song


