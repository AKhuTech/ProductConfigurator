import { FC } from "react";
import { ConfButton } from "../../ui-kit/button/ui/component";
import ReactToPrint from "react-to-print";
import styled from "styled-components";

interface IProps {
    printRef: React.MutableRefObject<null | HTMLDivElement>,
    descriptionHandler: () => void,
}

const StyledHeader = styled.div`
    margin: 20px 20px 0 20px;
    font-weight: 900;
    font-size: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    div{
        margin: auto 5px;
        :last-child {
            text-align: center;
        }
    }

    @media (max-width: 1140px) {
        font-size: 18px;
    }
`;

export const Header: FC<IProps> = (props) => {

    const { printRef, descriptionHandler } = props;

    return (
        <StyledHeader>
            <div>
                <span>AKhuTech Configurator - HDS&nbsp;De&nbsp;Tr1</span>
            </div>
            <div>
                <span>
                    <ConfButton
                        autoSize
                        onClick={descriptionHandler}>
                        Product Info
                    </ConfButton>
                    <ReactToPrint
                        trigger={() => <ConfButton autoSize>Print result</ConfButton>}
                        content={() => printRef.current}
                    />
                </span>
            </div>
        </StyledHeader>
    );

};