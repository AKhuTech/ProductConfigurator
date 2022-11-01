import { configurationOptions } from "../../../../constants/options";
import { TOption } from "../../../../types/options";

function makeOptionsList(options: TOption[]): TOption[][] {
    let counter: number = 0;
    const optionsList: TOption[][] = [];

    options.forEach((item, index, arr) => {
        if (index === 0) {
            optionsList[counter] = [];
            optionsList[counter].push(item);
            return;
        }
        if (item.optType !== arr[index - 1].optType && index > 0) {
            counter++;
            optionsList[counter] = [];
            optionsList[counter].push(item);
            return;
        }
        optionsList[counter].push(item);
    });

    return optionsList;

}

export const optionsList: TOption[][] = makeOptionsList(configurationOptions);
