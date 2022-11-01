import { FC } from "react";
import { description } from "../../../constants/description";
import { TDescriptionArray } from "../../../types/description";
import { DescriptionComponent } from "./component";

interface IProps {
    isOpen: boolean,
    toggle: () => void
}

export const DescriptionContainer: FC<IProps> = (props) => {

    const {isOpen, toggle} = props;

    const descriptionArray: TDescriptionArray = {
        name: description.name,
        description: description.description,
        variants: description.variants
    };

    return (
        <DescriptionComponent
            isOpen={isOpen}
            toggle={toggle}
            descriptionArray={descriptionArray}
        />);
}