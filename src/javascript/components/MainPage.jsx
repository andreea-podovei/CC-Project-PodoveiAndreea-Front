import React from 'react';

function MainPage(props) {
    const {title} = props;
    console.log(title);
    return ( 
    <div id="MainPage">
        <h1 className='mt-10 text-blue-600 font-3x1'>Welcome to Erasmus Office center</h1>
    </div>
    );
}

export default MainPage;