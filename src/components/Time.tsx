import './Time.css';
import { useEffect, useState } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());
  const currTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/');

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  // const rawHours = date.getHours().toLocaleString();
  // const rawMinutes = date.getMinutes().toLocaleString();
  // const rawSeconds = date.getSeconds().toLocaleString();

  // const hours = rawHours.length === 1 ? 0 + rawHours : rawHours;
  // const minutes = rawMinutes.length === 1 ? 0 + rawMinutes : rawMinutes;
  // const seconds = rawSeconds.length === 1 ? 0 + rawSeconds : rawSeconds;

  return (
    <div className="timer">
      <h1 className="timer-time">{date.toLocaleTimeString()}</h1>
      {/* <div className="time-container">
    //   <h1 className="timer-time">{hours}</h1>
    //   <div style={{ width: '4px' }}></div>
    //   <h1 className="timer-time">{minutes}</h1>:<h1 className="timer-time">{seconds}</h1>
    // </div> */}
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};
export default Time;
