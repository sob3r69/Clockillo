import './Time.css';
import { useEffect, useState } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="timer">
      <h1 className="timer-time">{date.toLocaleTimeString()}</h1>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};
export default Time;
