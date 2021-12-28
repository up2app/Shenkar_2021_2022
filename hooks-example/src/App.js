
import List from './Components/List/List';
import HobbiesContextProvider from './Context/HobbiesContext';

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      {/* the hobbies provider grant access to all the data and functions to the List component and it's children */}
     <HobbiesContextProvider>
       <List />
     </HobbiesContextProvider>
    </div>
  );
}

export default App;
