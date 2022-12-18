import { useRegisterSW } from 'virtual:pwa-register/preact';

export const PWA = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div>
      {(offlineReady || needRefresh) && (
        <div>
          <div>
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {needRefresh && (
            <button onClick={() => updateServiceWorker(true)}>Reload</button>
          )}
          <button onClick={() => close()}>Close</button>
        </div>
      )}
    </div>
  );
};
