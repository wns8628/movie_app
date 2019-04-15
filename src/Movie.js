import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return(
            <div className='Movie'>
                <h1>극한직업</h1>
                <img src='https://t1.daumcdn.net/movie/4e00e81f2b6f4d2eb65b3387240cc3c01547608409838'/>
            </div>
        );
    }
}

export default Movie;