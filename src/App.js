import './App.css';
import React,{useState} from 'react';
import List from './List';

function App() {
  const [tickets,settickets]=useState([
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
    {
      title:"AMET MINIM MOLLIT NON DESERUNT ULLAMCO EST SIT ALIQUA DOLOR DO AMET SINT. VELIT OFFICIA CONSEQUAT DUIS ENIM VELIT MOLLIT. EXERCITATION VENIAM CONSEQUAT SUNT NOSTRUD AMET.",
      Poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    },
  ]);
  return (
   <div>
    <header className='App-header'>
      <div>
        <h2 className='App-Title'>Title</h2>
      </div>
      <div>
      <hr className='line'/>
      </div>
      <div className='desc'>
        <h2 className='small'>
        (Intro) Chúng mình tin rằng,
        Rồi sau cùng của cuộc đời, chúng ta cũng chỉ mong có thể gói gém mấy chục năm khôn lớn lại thành một câu chuyện đáng để nghe. Và trong một khoảnh khắc định mệnh nào đó, câu chuyện ấy chính là cảm hứng cho người khác viết nên những diệu kỳ.
        </h2>
      </div>
      <div>
            <List tickets={tickets}/>
      </div>
      </header>
   </div>
  )
}

export default App;
