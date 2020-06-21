export interface AddWindowState {
    isOn: boolean
}

export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';

interface OpenAddWindow {
    type: typeof OPEN_WINDOW
}

interface CloseAddWindow {
    type: typeof CLOSE_WINDOW
}

export type AddWindowActionTypes = OpenAddWindow | CloseAddWindow