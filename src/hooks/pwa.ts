import { useRegisterSW } from 'virtual:pwa-register/preact';

export const usePWA = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  return {
    offlineReady,
    needUpdate: needRefresh,
    update() {
      updateServiceWorker(true);
    },
    cancel() {
      setOfflineReady(false);
      setNeedRefresh(false);
    },
  };
};
