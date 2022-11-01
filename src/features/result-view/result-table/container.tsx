import { FC } from "react";
import { configurationOptions } from "../../../constants/options";
import { TOption } from "../../../types/options";
import { TState } from "../../../types/state";
import { ResultTableComponent } from "./component";

interface IProps {
    state: TState;
};

export const ResultTableContainer: FC<IProps> = (props) => {

    const { state } = props;

    let total: number = 0;

    const configurationArray: TOption[] = [];

    configurationOptions.forEach(item => {
        if(item.optVal === state[item.optType]){
            configurationArray.push(item);
            total += item.optPrice;
        }
    });

    return <ResultTableComponent
        {...props}
        configurationArray={configurationArray}
        total={total}
    />;
}