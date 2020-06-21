export type CDObj = {target: Date | null, value?: string | null | undefined, title: string, description: string};
export enum emailError {ok, existed, format}
export type User = {username: string, email: string, list: Array<CDObj>, defaultCd: CDObj | null}