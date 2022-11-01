import { FC, useRef } from "react";
import styled from "styled-components";
import { ConfigurationContainer } from "../../features/configuration/configuration/ui/container";
import { DescriptionContainer } from "../../features/description/ui/container";
import { Header } from "../../features/header/ui/component";
import { useConfigurationState } from "../../features/hooks/useConfigurationState";
import { ResultViewContainer } from "../../features/result-view/result-view/container";
import { useModal } from "../../features/ui-kit/modal/hooks/useModal";
import { TState } from "../../types/state";

interface IState {
    state: TState,
    setConfigurationState: (newState: TState) => void,
}

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const MainLayout: FC = () => {

    const { state, setConfigurationState }: IState = useConfigurationState();

    const printRef = useRef<null | HTMLDivElement>(null);

    const { isOpen, toggle } = useModal();

    const descriptionHandler = () => {
        toggle();
    };

    return (
        <>
            <DescriptionContainer
                isOpen={isOpen}
                toggle={toggle}
            />
            <Header
                printRef={printRef}
                descriptionHandler={descriptionHandler}
            />
            <StyledMainLayout>
                <ConfigurationContainer state={state} setConfigurationState={setConfigurationState} />
                <ResultViewContainer
                    printRef={printRef}
                    state={state}
                />
            </StyledMainLayout>
        </>
    );
}