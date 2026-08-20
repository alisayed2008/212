export type DesktopScreen = 'splash' | 'auth' | 'home' | 'create-project';

export interface DesktopRuntimeState {
  screen: DesktopScreen;
  reducedMotion: boolean;
}
