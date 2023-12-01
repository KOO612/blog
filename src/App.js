import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동', '파이썬']);
  let [date, setDate] = useState('2월 17일 발행');
  let [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);

  [1, 2, 3].map((e) => {
    console.log(e);
  });

  const onClick = () => {
    setNum(num + 1);
  };

  const onChange = () => {
    title[0] === '여자코트' ? (title[0] = '남자 코트 추천') : (title[0] = '여자코트');
    setTitle([...title]);
  };

  const onSort = () => {
    const cp = [...title];
    setTitle(cp.sort());
  };

  const onModal = () => {
    modal === true ? setModal(false) : setModal(true);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={onChange}>버튼</button>
      <button onClick={onSort}>정렬</button>
      <div>
        {title.map((e) => {
          return (
            <div className="list">
              <h4 onClick={onModal}>{e}</h4>
              <p>{date}</p>
            </div>
          );
        })}
      </div>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

export default App;
