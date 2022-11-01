import { FC } from "react";
import { configurationOptions } from "../../../../constants/options";
import { TOption } from "../../../../types/options";
import { TState } from "../../../../types/state";
import { ConfigurationItemComponent } from "./component";

interface IProps {
    itemOptions: TOption[];
    state: TState;
    setState: React.Dispatch<TState>;
}

export const ConfigurationItemContainer: FC<IProps> = (props) => {

    const { state, setState, itemOptions } = props;

    const modifiedItemOptions: TOption[] = itemOptions.map((item: TOption) => {
        if (item.optRequired) {
            const requirement = item.optRequired.split("=");
            const optNumber = +(requirement[1]);
            if (state[requirement[0]] !== optNumber) {
                return { ...item, optInactive: true };
            }
        }
        return item;
    });

    const clickHandler = (optType: string, optVal: number): void => {
        const copyState = { ...state };
        copyState[optType] = optVal;

        //Check disabled options

        //Search all requirements
        configurationOptions.forEach(item => {
            if (item.optRequired) {
                //If found split needed optType & optValue
                const requirement = item.optRequired.split("=");

                //Make number from string
                const optNumber = +(requirement[1]);

                //If option is not available for new configuration => set default option = 0 
                if (copyState[requirement[0]] !== optNumber && requirement[0] === optType) {
                    copyState[item.optType] = 0;
                }
            }
        });

        setState({ ...copyState });

    };

    return (
        <ConfigurationItemComponent
            {...props}
            itemOptions={modifiedItemOptions}
            state={state}
            clickHandler={clickHandler}
        />
    );
}