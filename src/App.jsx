import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './components/Background/Background';
import NightBackground from './components/NightBackground/NightBackground';
import { createBrowserRouter, RouterProvider } from 'react-router';

const AppLayOut = () => {
  return (
    <div className="app">
      <Background />
      <NightBackground />
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
