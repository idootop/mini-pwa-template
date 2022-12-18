import { usePWA } from './hooks/pwa';

export const PWA = () => {
  const pwa = usePWA();

  return (
    <div>
      {(pwa.offlineReady || pwa.needUpdate) && (
        <div>
          <div>
            {pwa.offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {pwa.needUpdate && <button onClick={pwa.update}>Reload</button>}
          <button onClick={pwa.cancel}>Close</button>
        </div>
      )}
    </div>
  );
};
