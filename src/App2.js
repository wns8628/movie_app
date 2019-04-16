import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {
  
    }

    componentWillMount(){
        //request API 
    }

    componentDidMount(){
        //processing response 

        setTimeout((i,j)=>{
            this.setState({
                movies:[{
                    title:'생일',
                    poster: 'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg'
                  },{
                    title:'헬보이',
                    poster: 'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg'
                  },{
                    title:'샤잠!',
                    poster: 'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg'
                  },{
                    title:'미성년',
                    poster: 'https://movie-phinf.pstatic.net/20190322_198/1553220632606va06v_JPEG/movie_image.jpg'
                  },{
                    title:'극한직업',
                    poster: 'https://t1.daumcdn.net/movie/4e00e81f2b6f4d2eb65b3387240cc3c01547608409838'
                  }]
            });
        },5000);
    }

    _render(){
        // const movies = [<Movie/>, <Movie/>,<Movie/>];
        const movies = this.state.movies.map((movie, index)=> {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>       //jsx배열 컴포넌트임 그치? 
        })

        return movies;
    }

    render() {
        return (
            <div className='App'>
                { 
                    this.state.movies == null ? <h5>loding...</h5> : this._render()
                }
            </div>
        );
    }
}

export default App;
