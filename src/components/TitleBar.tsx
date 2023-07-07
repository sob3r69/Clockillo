import './TitleBar.css';

import { useRef } from 'react';
import { appWindow } from '@tauri-apps/api/window';

const TitleBar = () => {
  const minimizeRef = useRef<HTMLDivElement>(null);
  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-title">Clockilo</div>
      <div className="titlebar-buttons">
        <div
          className="titlebar-button"
          id="titlebar-minimize"
          ref={minimizeRef}
          onClick={() => appWindow.minimize()}
        >
          <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
        </div>
        <div
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={() => appWindow.toggleMaximize()}
        >
          <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
        </div>
        <div className="titlebar-button" id="titlebar-close" onClick={() => appWindow.close()}>
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
