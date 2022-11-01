import React, { FC } from "react";
import { description } from "../../../constants/description";
import { configurationOptions } from "../../../constants/options";
import { TState } from "../../../types/state";
import { TTerms } from "../../../types/terms";
import { ResultViewComponent } from "./component";

interface IProps {
    printRef: React.MutableRefObject<null | HTMLDivElement>,
    state: TState,
    setState?: React.Dispatch<React.SetStateAction<TState>>,
}

export const ResultViewContainer: FC<IProps> = (props) => {

    const { state, printRef } = props;    

    const imagesArray: string[] = [];

    configurationOptions.forEach(item => {
        if (item.optVal === state[item.optType] && item.optImage) {
            imagesArray.push(item.optImage);
        }
    });

    const termsArray: TTerms = {
        validity: description.validity,
        payment: description.payment,
        delivery: description.delivery,
        warranty: description.warranty
    };

    return (
        <div ref={printRef}>
            <ResultViewComponent
                state={state}
                imagesArray={imagesArray}
                termsArray={termsArray}
            />
        </div>
    );
}