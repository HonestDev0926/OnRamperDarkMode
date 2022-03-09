import { StateType, DataStateType, ErrorObjectType } from './initialState';
import { CollectedStateType, ItemType } from '.';
export declare enum CollectedActionsType {
    AddField = "ADD_FIELD",
    AddFile = "ADD_FILE",
    DeleteFile = "DELETE_FILE",
    AddError = "ADD_ERROR",
    ResetCollected = "RESET_COLLECTED"
}
export declare enum DataActionsType {
    AddData = "ADD_DATA",
    Init = "INIT",
    AddCollected = "ADD_COLLECTED"
}
export declare type DataActions = {
    type: CollectedActionsType.AddField;
    payload: {
        name: string;
        value: number | string | boolean | ItemType | any;
    };
} | {
    type: CollectedActionsType.AddFile;
    payload: {
        name: string;
        value: File[];
    };
} | {
    type: CollectedActionsType.DeleteFile;
    payload: {
        name: string;
        value: string;
    };
} | {
    type: DataActionsType.AddData;
    payload: {
        value: DataStateType;
    };
} | {
    type: CollectedActionsType.AddError;
    payload: {
        value: ErrorObjectType | undefined;
    };
} | {
    type: CollectedActionsType.ResetCollected;
    payload: {
        value: CollectedStateType;
    };
};
export declare const mainReducer: (state: StateType, action: DataActions) => {
    collected: CollectedStateType;
    data: DataStateType;
    inputInterface: import("./initialState").InputInterfaceType;
    apiInterface: import("./initialState").ApiInterfaceType;
};
export declare const collectedReducer: (state: StateType, action: DataActions) => CollectedStateType;
export declare const dataReducer: (state: StateType, action: DataActions) => DataStateType;
