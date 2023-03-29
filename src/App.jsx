import {useState, useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {useStateTracked} from './hooks';
import {ReactDOM} from 'react';

window.CLIENTID = 'Template';
window.REDIRECT_URI = 'http://localhost:3000/';
window.SCOPE = 'openid profile offline_access roles Template';
window.AUTHORITY = 'https://localhost:7072'; ////
window.REFRESHTIME = 70;

export const getAuthConfig = config => {
  config ??= window;
  return {
    authority: config.AUTHORITY, //'https://localhost:7072'
    client_id: config.CLIENTID,
    redirect_uri: config.REDIRECT_URI,
    scope: config.SCOPE,
  };
};

function Nested() {
  useEffect(() => {
    if (!!window.RenderApp) {
      const config = window.RenderApp.getAuthConfig();
      window.RenderApp.RenderApp(document.getElementById('app'));
    }
  }, []);
  return (
    <div id="root">
      <div id="app"></div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      <div>
        <HelmetProvider>
          <Helmet>
            <script defer={true} type="module" src="/bundle.js" />
          </Helmet>
        </HelmetProvider>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <input value={text} onChange={e => setText(e.target.value)} />
        <Nested />
      </div>
    </>
  );
}

export default App;
