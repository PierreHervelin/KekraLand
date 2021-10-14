import React, { useState } from 'react';
import { TrackListContent } from '../data/data'; 


const Tracklist = (props) => {
    const [tracklists]=useState(TrackListContent);
    const tracklist=tracklists[props.album];
    console.log(tracklists);
    const list=tracklist.map(
        (item,i)=>
            <li key={i} className='track' id={props.album+i}>
                <span>
                    <span>{item.id+'.'}</span>
                    <span className='trackname'>{item.track}</span>
                </span>
                <span>{item.temps}</span>
            </li>
        
    );
    return list;
};

export default Tracklist;