import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동', '파이썬']);
  let [date, setDate] = useState('2월 17일 발행');
  let [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]} <span onClick={onClick}>👍</span> {num}
        </h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
