import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'components';
import { classnames } from 'utils';
import { ViewFormatterIconBox } from './ViewFormatterIconBox';
import { ExpandedButton } from 'components/ExpandButton';

export const RegularViewFormatter: React.FC<Props> = ({ ...props }) => {

    const { title, extraValue, value, type = "", className = "", titleClass, valueClass, onClick, visible, extraTitle } = props;

    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapsible = type === "Collapsible";

    const collapsedClass = isCollapsed ? "collapsible collapsible-show" : "collapsible";

    const onClickItem = () => {

        if (collapsible) {
            setIsCollapsed(!isCollapsed);
            return;
        }

        onClick ? onClick() : () => null;

    };

    if (visible === false) {

        return null

    }

    return (

        <div
            className={`view-formatter ${collapsible ? collapsedClass : ""} ${className || ""}`}
            onClick={() => onClickItem()}
            role={"button"}
        >

            {extraTitle && <small className={classnames("view-formatter-extra-title", titleClass)}> {extraTitle} </small>}

            <div className="view-formatter-title-box">

                <ViewFormatterIconBox
                    svgIcon={collapsible ? (isCollapsed ? MinusIcon : PlusIcon) : undefined}
                    iconClass='collapsible-icon'
                />

                <p className={classnames(titleClass)}> {title || ""} </p>

            </div>

            <span>

                {Array.isArray(value) &&

                    value.map((item, index) =>

                        <p key={`${title}-${index}`} className={classnames(valueClass, "view-formatter-p")}>

                            {String(item) || ""}

                        </p>

                    )}

                {!props.withButton && !Array.isArray(value) &&

                    <p className={classnames(valueClass, "view-formatter-regular-value")}> {value || ""} </p>

                }

                {extraValue && <p> {extraValue || ""} </p>}

                {props.withButton && <ExpandedButton label={typeof value === "string" ? value : ""} />}

            </span>

        </div>

    )
}

interface Props {
    title?: string,
    value?: string | number | string[],
    valueClass?: string,
    type?: "settings-item" | "settings-item-flex" | "classic" | string,
    onClick?(): void,
    titleClass?: string,
    extraTitle?: string,
    className?: string,
    visible?: boolean,
    extraValue?: string,
    withButton?: boolean
}
