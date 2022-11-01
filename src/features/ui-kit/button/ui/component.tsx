import { FC } from "react";
import styled, {css} from "styled-components";

interface StyledButtonProps {
    readonly active?: boolean;
    readonly inactive?: boolean;
    readonly autoSize?: boolean;
  }

const StyledButton = styled.button<StyledButtonProps>`
    min-height: 30px;
    min-width: 100px;
    width: 400px;
    background: black;
    border: 0;
    font-size: 14px;
    margin: 5px auto;
    padding: 0 5px;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    @media (max-width: 1140px) {
        font-size: 12px;
    }
    ${props => props.active && 
        css`
            background-color: yellow;
            color: black;
        `
    }
    ${props => props.inactive && 
        css`
            background-color: gray;
            color: black;
            cursor: auto;
        `
    }
    ${props => props.autoSize && 
        css`
            width: auto;
            margin: 5px 5px;
        `
    }
    @media (max-width: 1140px) {
        width: 300px;
        ${props => props.autoSize && 
            css`
                width: auto;
                margin: 5px 5px;
            `
        }
    }
`;

type props = {
    active?: boolean,
    inactive?: boolean,
    autoSize?: boolean,
    children?: JSX.Element | string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ConfButton: FC<props> = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}