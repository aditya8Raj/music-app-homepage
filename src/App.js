import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar"
import MusicPlayer from "./components/MusicPlayer"
import Song from './components/Song';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Song />
        <MusicPlayer />
      </>
    )
  }
}
