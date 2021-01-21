import React from 'react';
import PropTypes from 'prop-types'

function Food({ name, image, rating }) { 
  return <div>
    <h2>I like {name}</h2>
    <h4> rating {rating}/5.0</h4>
    <img src={image} alt={name}/>
  </div>
}

// isRequired 없으면, 지정한 타입 또는 undefined
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// 이미지 출처 김가네
const foodILike = [
  {
    id: 1,
    name: "Kimbap",
    image: "http://gimgane.co.kr/upload/menu_01/2019_10_07/hero_dnA3c_2019_10_07_19_21_49.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "OmeltetRice",
    image: "http://gimgane.co.kr/upload/menu_01/2018_09_21/hero_sUMOk_2018_09_21_04_12_30.jpg",
    rating: 4.6
  },
  {
    id: 3,
    name: "KimchiStew",
    image: "http://gimgane.co.kr/upload/menu_01/2018_09_21/hero_1s9Qk_2018_09_21_03_59_13.jpg",
    rating: 3.2
  },
  {
    id: 4,
    name: "Ramen",
    image: "http://gimgane.co.kr/upload/menu_01/2018_09_21/hero_Kxrd8_2018_09_21_12_52_20.jpg",
    rating: 4.1
  },
  {
    id: 5,
    name: "Dumpling",
    image: "http://gimgane.co.kr/upload/menu_01/2018_09_21/hero_y19Hp_2018_09_21_03_52_34.jpg",
    rating: 2.8
  }
]

function renderFood(dish) {
  console.log(dish);
  return <Food name={dish.name} image={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
            
      {/* map 사용하기 1 */}
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>)}
      
      {/* map 사용하기 2 */}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
