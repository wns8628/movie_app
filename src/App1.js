import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {
        greeting:'Good Morning',
        movies: [{
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
    }

    componentWillMount(){
        console.log('componentWillMount call!')
    }

    componentDidMount(){
        console.log('componentDidMount call!')

        setTimeout((i,j)=>{
            this.setState({
                greeting : 'Good Afternoon',
                // movies: this.state.movies.concat([{
                //     title:'덤보',
                //     poster:'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'
                // }])
                movies:[...this.state.movies, {
                    title:'덤보',
                    poster:'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'
                }]

            });
        },5000);
    }

    render() {
        console.log('render() call!');
        return (
            <div className='App'>
                <h1>{this.state.greeting}</h1>
                { 
                    this.state.movies.map((movie, index)=> {
                        return <Movie title={movie.title} poster={movie.poster} key={index}/>        
                    })
                }
            </div>
        );
    }
}

export default App;
