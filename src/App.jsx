import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Background from './components/Background/Background';
import NightBackground from './components/NightBackground/NightBackground';
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
      {timeStatus ? <Background /> : <NightBackground />}
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
