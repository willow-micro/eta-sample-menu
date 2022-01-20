// System
// User
import './App.css';
import MainView from './components/views/MainView';
import { CheckedProvider } from './CheckedContext';

function App() {
    return (
        <CheckedProvider>
          <MainView/>
        </CheckedProvider>
  );
}

export default App;
