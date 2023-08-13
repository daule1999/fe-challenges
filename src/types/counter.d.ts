export type STATE = {
    count: number;
    value: number;
};

// An interface for our actions
export interface CountAction {
    type: CountActionType;
    payload: number;
}