import { FC } from "react";
import styled, { css } from "styled-components";
import { TDescriptionArray } from "../../../types/description";
import { ConfModal } from "../../ui-kit/modal/ui/component";

interface IProps {
    isOpen: boolean;
    toggle: () => void;
    descriptionArray: TDescriptionArray;
}

const StyledModalTitle = styled.div`
    font-weight: 900;
    font-size: 24px;
    margin 10px 0; 
    @media (max-width: 1140px) {
        font-size: 16px;
    }
`;

interface IStyledModalDivProps {
    readonly flexDirection?: string,
};

const StyledModalDiv = styled.div<IStyledModalDivProps>`
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    ${props => props.flexDirection && css`
        flex-direction: ${props.flexDirection};
        max-width: 300px;
        margin: 0;
        @media (max-width: 1140px) {
            flex-direction: column;
        }
    `}

    ul {
        margin: 0;
        padding-left: 30px;
        li {
            padding: 0;
        }
    }
`;

const StyledSpan = styled.span`
    font-weight: 900;
`;

const StyledImage = styled.img`
    width: 300px;
    @media (max-width: 1140px) {
        width: 250px;
    }
`;

export const DescriptionComponent: FC<IProps> = (props) => {

    const { isOpen, toggle, descriptionArray } = props;

    return (
        <ConfModal isOpen={isOpen} toggle={toggle}>
            <StyledModalTitle>
                Description
            </StyledModalTitle>
            <StyledModalDiv>
                To close the modal window, click outside the modal window.
            </StyledModalDiv>
            <StyledModalDiv>
                <StyledSpan>Product Name:</StyledSpan>
                <StyledModalDiv>
                    {descriptionArray.name}
                </StyledModalDiv>
            </StyledModalDiv>
            <StyledModalDiv>
                <StyledSpan>Overview</StyledSpan>
                {descriptionArray.description.map(item => (
                    <StyledModalDiv key={item}>{item}</StyledModalDiv>
                ))}
            </StyledModalDiv>
            {/* MOVE TO SEPARATE CARD */}
            <StyledModalDiv>
                <StyledModalDiv>
                    <StyledSpan>
                        Variants
                    </StyledSpan>
                </StyledModalDiv>
                <StyledModalDiv flexDirection="row">
                    {descriptionArray.variants.map(item => (
                        <StyledModalDiv key={item.name}>
                            <StyledModalDiv>
                                <StyledSpan>
                                    {item.name}
                                </StyledSpan>
                            </StyledModalDiv>
                            <StyledModalDiv>
                                <StyledImage src={item.image} alt={item.name} />
                            </StyledModalDiv>
                            <StyledModalDiv>
                                <ul>
                                    {item.description.map(item => (
                                        <li key="item">{item}</li>
                                    ))}
                                </ul>
                            </StyledModalDiv>
                        </StyledModalDiv>
                    ))}
                </StyledModalDiv>
            </StyledModalDiv>
        </ConfModal>
    );
}