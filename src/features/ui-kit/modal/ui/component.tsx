import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const StyledOverlay = styled.div`
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1140px) {
        width: 100vw;
    }
`;

const StyledModalBox = styled.div`
    display: block;
    background: white;
    width: 940px;
    height: 70vh;
    padding: 1rem;
    overflow-y: scroll;
    @media (max-width: 1140px) {
        width: 85vw;
    }
`;


export const ConfModal: FC<IProps> = (props) => {
    return (
        <>
            {props.isOpen && (
                <StyledOverlay onClick={props.toggle}>
                    <StyledModalBox onClick={(e) => e.stopPropagation()}>
                        {props.children}
                    </StyledModalBox>
                </StyledOverlay>
            )}
        </>
    );
}