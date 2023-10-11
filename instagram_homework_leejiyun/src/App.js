import Topmenu from'./pages/Topmenu.js';
import Mypage from './pages/Mypage.js';
import Middlemenu from './pages/Middlemenu.js';
import Posts from './pages/Posts.js';
import './App.css';


function App() {
  return (
    
      <div className='font_fam'>
        <div className='donotscroll'>
          <Topmenu></Topmenu>        
          <Mypage></Mypage>
          <Middlemenu></Middlemenu>
          <Posts></Posts>
        </div>
      </div>
    
    
  );
}

export default App;
