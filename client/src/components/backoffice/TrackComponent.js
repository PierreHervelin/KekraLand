import React from 'react';

const Trackcomponent = (props) => {
    console.log(props);
    return (
        <div className='track'>
            <input
                type='text'
                id='num'
                placeholder='Num'
                required
                onChange={(e)=>{}}
                value={props.item.num}
            />
            <input
                type='text'
                placeholder='Titre'
                required
                onChange={(e)=>{
                    props.update.updateTitle(e.target.value,props.i)
                }}
                value={props.item.title}
            />
            <input
                type='time'
                placeholder='time'
                required
                onChange={(e)=>{
                    props.update.updateTime(e.target.value,props.i)
                }}
                value={props.item.time}
            />
            <button 
                onClick={(e)=>{
                    e.preventDefault()
                    props.update.delField(props.i)
                }}
            >-</button>
        </div>
    );
};

export default Trackcomponent;