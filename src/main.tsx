import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
const App = lazy(() => import('./App.tsx'));
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';

// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') {
//     return;
//   }
//
//   const { worker } = await import('./mocks/worker.ts');
//
//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start();
// }

// enableMocking().then(() => {
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
// });
