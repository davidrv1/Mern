import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <h1>Records Dot Com</h1>
            <Link to={'/CreateAlbum/form'}>Post an album</Link>
            <br/>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default Nav;