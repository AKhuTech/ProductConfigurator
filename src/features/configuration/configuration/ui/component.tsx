import { FC } from "react"
import styled from "styled-components";
import { TOption } from "../../../../types/options";
import { TState } from "../../../../types/state";
import { ConfigurationItemContainer } from "../../configuration-item/ui/container";

interface IProps {
    optionsList: TOption[][],
    state: TState,
    setState: React.Dispatch<TState>,
}

const StyledConfiguration = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
`;

const StyledConfigurationTitle = styled.div`
    font-weight: 900;
    font-size: 24px;
    margin: 10px;
    @media (max-width: 1140px) {
        font-size: 16px;
    }
`;

export const ConfigurationComponent: FC<IProps> = (props) => {

    const { optionsList } = props;

    return (<StyledConfiguration>
        <StyledConfigurationTitle>Configuration</StyledConfigurationTitle>
        {optionsList.map((item: any) => (
            <ConfigurationItemContainer
                {...props}
                key={item[0].optNo}
                itemOptions={item}
            />
        ))}
    </StyledConfiguration>
    );
}