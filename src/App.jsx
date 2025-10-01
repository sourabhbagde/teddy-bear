import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import DayMode from './components/DayMode/DayMode';
import NightMode from './components/NightMode/NightMode';
import { createBrowserRouter, RouterProvider } from 'react-router';

const AppLayOut = () => {
  const [timeStatus, setTimeStatus] = useState('true');
  return (
    <div className="app">
      {/* if button clicked night mode */}
      <button
        className="time_status"
        onClick={() => setTimeStatus(!timeStatus)}
      >
        Switch to {timeStatus ? 'Night' : 'Day'} Mode
      </button>
      {timeStatus ? <DayMode /> : <NightMode />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut />,
  },
]);
const App = () => {
  return <div>Hello World</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
