export interface CdObj extends TempCdObj {
    id: string;
}

export interface TempCdObj {
    target: Date;
    title: string;
    description: string;
}
