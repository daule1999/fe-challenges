import './App.css';
import Accordian1 from './components/Accordian/Accordian1';
import Accordian2 from './components/Accordian/Accordian2';
import questions from './Data/questions';
function App() {
  
  return (
    <div className="App">
      {/* <Counter1/>
      <Counter2 />
      <Counter3 /> */}
      <Accordian2 questions={questions}/>
    </div>
  );
}

export default App;
