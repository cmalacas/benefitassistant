import './App.css';
import Warning from './components/Warning';
import Agent from './components/Agent';
import Conversation from './components/Conversation';

function App() {

  const agent = "Martha";

  return (
    <div className="App p-4">
      <div className="max-w-4xl mx-auto text-gray-600 text-center">
        <Warning />
      </div>

      <div className="text-center">

        <Agent agent={ agent } />

      </div>

      <div className="mb-[10px] max-w-lg mx-auto bg-white">
        
        <Conversation agent={ agent } />        

      </div>
      
    </div>
  );
}

export default App;
