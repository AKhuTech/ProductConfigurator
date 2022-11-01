import { useState } from "react";
import { TState } from "../../types/state";
import { initialState } from "../configuration/configuration/module/make-initial-state";

interface IHook {
    state: TState;
    setConfigurationState: (newState: TState) => void;
} 

export const useConfigurationState = (): IHook => {

    const [state, setState] = useState<TState>(initialState);

    const setConfigurationState = (newState: TState): void => {
        setState(state => ({...newState}));
    }

    return {state, setConfigurationState};
}