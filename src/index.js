import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './context/index';

const App = React.lazy(() => import('./App'));

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {

      setLoading(false);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader"></div>; 
  }

  return (
    <Suspense fallback={<div className="loader"></div>}>
      <App />
    </Suspense>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
