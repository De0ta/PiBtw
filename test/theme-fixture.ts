// Test-only access to Pi's live proxy; production receives Theme from the host.
import { theme as currentTheme } from "../node_modules/@earendil-works/pi-coding-agent/dist/modes/interactive/theme/theme.js";
export { currentTheme };

/** Keep layout snapshots ANSI-free while providing real resolved theme colors. */
export const layoutTheme: any = {
  fg: (_name: string, text: string) => text,
  getFgAnsi: () => "",
  get colors() { return currentTheme.colors; },
  get appearance() { return currentTheme.appearance; },
  getColorMode: () => currentTheme.getColorMode(),
};
