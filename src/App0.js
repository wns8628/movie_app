import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   '생일',
//   '헬보이',
//   '샤잠!',
//   '미성년',
//   '극한직업'
// ];

const movies = [{
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

//
//Life Circle
//

// render: componentWillMount() -> render() -> componentDidMount()
// update: componentWillReceiveProps() -> componentShouldUpdate() -> componentWillUpdate? 
                                        //return (old props != new props)


class App extends Component {


  componentWillMount(){
    //request api 호출
    console.log('componentWillMount call!')
  }

  componentDidMount(){
    //after request API
    // request done 즉 요청결과 데이터가온다음에 
    console.log('componentDidMount call!')
  }

  render() {
    console.log('render() call!');
    return (
      <div className='App'>
        { 
          movies.map((movie, index)=>
          <Movie title={movie.title} poster={movie.poster} key={index}/>        
          )
        }
       </div>
    );
  }
}

export default App;
