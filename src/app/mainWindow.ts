import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export class MainWindow extends BrowserWindow {
  constructor(loadUrl: string) {
    const mainWindowConfig: BrowserWindowConstructorOptions = {
      height: 600,
      width: 800,
      icon: path.join(__dirname, '../../assets/icon.png'),
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      },
    };
    super(mainWindowConfig);

    this.loadURL(loadUrl);
  }
}
