import { FC } from "react";
import styled from "styled-components";
import { formatter } from "../../../functions/formatter";
import { TOption } from "../../../types/options";
import { TState } from "../../../types/state";

interface IProps {
    state: TState;
    configurationArray: TOption[],
    total: number,
};

const StyledTable = styled.table`
    border-collapse: collapse;    
    th, td {
       border: 1px solid black;
       padding: 3px;
    }
    td:nth-child(3) {
        text-align: right;
    }
    tfoot {
        font-weight: 900;
        td:nth-child(2) {
            text-align: right;
        }
    }
`;

export const ResultTableComponent: FC<IProps> = (props) => {

    const { configurationArray, total } = props;

    return (
            <StyledTable>
                <thead>
                    <tr>
                        {/* <th>Part-No</th> */}
                        <th>Description</th>
                        <th>Component</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {configurationArray.map(item => {
                        return (
                            <tr key={item.optNo}>
                                {/*<td>{item.optNo}</td>*/}
                                <td>{item.optDescription}</td>
                                <td>{item.optName}</td>
                                <td>{formatter.format(item.optPrice)}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>Total</td>
                        <td>{formatter.format(total)}</td>
                    </tr>
                </tfoot>
            </StyledTable>
    );
}