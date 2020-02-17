export type CDObj = {target: Date, title: string, description: string};
export enum emailError {ok, existed, format}
export type User = {username: string, email: string, list: Array<CDObj>, defaultCd: CDObj | null}