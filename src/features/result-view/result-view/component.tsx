import { FC } from "react";
import styled from "styled-components";
import { TState } from "../../../types/state";
import { TTerms } from "../../../types/terms";
import { ResultTableContainer } from "../result-table/container";

interface IProps {
    state: TState,
    imagesArray: string[],
    termsArray: TTerms
};

const StyledResultViewTitle = styled.div`
    font-weight: 900;
    font-size: 24px;
    margin 10px 0;   
    @media (max-width: 1140px) {
        font-size: 16px;
    }
`;

const StyledResult = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    @page { size: A4; margin: 25px 50px 25px 100px !important }};
    @media (max-width: 1140px) {
        width: calc(100vw - 20px);
      }
`;

const StyledResultImage = styled.img`
    height: 200px;
    width: 400px;
    margin: 20px auto;
    @media (max-width: 1140px) {
        height: auto;
        width: 300px;
      }
`;

const StyledTerm = styled.div`
    margin: 10px 0;
`;

const StyledBoldSpan = styled.span`
      font-weight: 900;
`;

export const ResultViewComponent: FC<IProps> = (props) => {

    const { imagesArray, termsArray } = props;

    return (
        <StyledResult>
            <StyledResultViewTitle>Quote</StyledResultViewTitle>
            {imagesArray.map(image => <StyledResultImage key={image} src={image} alt="Product" />)}
            <ResultTableContainer
                {...props}
            />
            <StyledTerm>
                <StyledBoldSpan>Proposal is vaild until: </StyledBoldSpan>
                {termsArray.validity}
            </StyledTerm>
            <StyledTerm>
                <StyledBoldSpan>Payment terms: </StyledBoldSpan>
                {termsArray.payment}
            </StyledTerm>
            <StyledTerm>
                <StyledBoldSpan>Delivery terms: </StyledBoldSpan>
                {termsArray.delivery}
            </StyledTerm>
            <StyledTerm>
                <StyledBoldSpan>Warranty: </StyledBoldSpan>
                {termsArray.warranty}
            </StyledTerm>
        </StyledResult>
    );
}