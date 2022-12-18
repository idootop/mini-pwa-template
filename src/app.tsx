import './app.css';

import { useState } from 'preact/hooks';

import { printf } from '@/utils/base';

import preactLogo from './assets/preact.svg';
import { PWA } from './pwa';

export function App() {
  const [count, setCount] = useState(0);

  printf('>>> hello 111', import.meta.env);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/logo.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
        <PWA />
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more (new)
      </p>
    </>
  );
}
