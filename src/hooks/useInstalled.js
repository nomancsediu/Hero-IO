import { useState, useEffect } from 'react';

export function useInstalled() {
  const [installed, setInstalled] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('installedApps')) || [];
    } catch {
      return [];
    }
  });

  const install = (app) => {
    setInstalled(prev => {
      if (prev.find(a => a.id === app.id)) return prev;
      const updated = [...prev, app];
      localStorage.setItem('installedApps', JSON.stringify(updated));
      return updated;
    });
  };

  const uninstall = (id) => {
    setInstalled(prev => {
      const updated = prev.filter(a => a.id !== id);
      localStorage.setItem('installedApps', JSON.stringify(updated));
      return updated;
    });
  };

  const isInstalled = (id) => installed.some(a => a.id === id);

  return { installed, install, uninstall, isInstalled };
}
