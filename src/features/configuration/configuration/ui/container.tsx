import { FC } from "react";
import { TState } from "../../../../types/state";
import { optionsList } from "../module/make-options-list";
import { ConfigurationComponent } from "./component";

interface IProps {
    state: TState,
    setConfigurationState: (newState: TState) => void
}

export const ConfigurationContainer: FC<IProps> = (props) => {

    const { state, setConfigurationState } = props;

    return <ConfigurationComponent
        optionsList={optionsList}
        state={state}
        setState={setConfigurationState}
    />;
}