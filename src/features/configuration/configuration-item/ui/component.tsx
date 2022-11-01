import { FC } from "react";
import styled from "styled-components";
import { TOption } from "../../../../types/options";
import { TState } from "../../../../types/state";
import { ConfButton } from "../../../ui-kit/button/ui/component";

interface IProps {
    itemOptions: TOption[],
    clickHandler: (optType: string, optVal: number) => void,
    state: TState,
}

const StyledConfigurationItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledConfigurationItemTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    @media (max-width: 1140px) {
        font-size: 14px;
        margin: 5px auto;
    }
`;

export const ConfigurationItemComponent: FC<IProps> = (props) => {

    const { itemOptions, clickHandler, state } = props;

    return (
        <StyledConfigurationItem>
            <StyledConfigurationItemTitle>{itemOptions[0].optDescription}</StyledConfigurationItemTitle>
            {itemOptions.map((item: any) => {

                //Render inactive buttons
                if (item.optInactive) {
                    return (
                        <ConfButton
                            key={item.optNo}
                            inactive
                        >
                            {item?.optName}
                        </ConfButton>
                    )
                }

                return item.optVal === state[item.optType] ? (<ConfButton
                    key={item.optNo}
                    onClick={() => clickHandler(item.optType, item.optVal)}
                    active
                >
                    {item?.optName}
                </ConfButton>) : (<ConfButton
                    key={item.optNo}
                    onClick={() => clickHandler(item.optType, item.optVal)}
                >
                    {item?.optName}
                </ConfButton>)
            })}
        </StyledConfigurationItem>
    );
}