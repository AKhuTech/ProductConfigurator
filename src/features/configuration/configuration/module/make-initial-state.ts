import { TOption } from "../../../../types/options";
import { TState } from "../../../../types/state";
import { optionsList } from "./make-options-list";

function makeInitialState(options: TOption[][]): TState {
    let obj: TState = {};
    options.forEach(item => {
        obj[item[0].optType] = item[0].optVal;
    });

    return obj;
}

export const initialState: TState = makeInitialState(optionsList);