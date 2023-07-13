import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './components/Calendar.css';
import './App.css';
import Time from './components/Time';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div className="app">
      <TitleBar />
      <div className="widgets-field">
        <Time />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
