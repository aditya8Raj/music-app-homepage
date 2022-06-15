import React from 'react';
import previous from '../icons/previous.svg';
import pause from '../icons/pause.svg';
import next from '../icons/next.svg';


function MusicPlayer() {
    return (
        <>
            <div className='player'>
                <div className="progress" style={{ height: "3px" }}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "62%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='time-and-ctrl-buttons'>
                    <p className='time-lapse'>2:42 / 3:14
                        &nbsp;&nbsp;<img src={previous} alt="previous-icon" />
                        &nbsp;<img src={pause} alt="pause-icon" />
                        &nbsp;<img src={next} alt="next-icon" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer;