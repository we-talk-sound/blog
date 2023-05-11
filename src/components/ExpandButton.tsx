import React from "react";
import { classnames } from "utils";
import { Arrow, Circle, DarkArrow, DarkCircle } from "./Assets";
import { LinkWrapper } from "./LinkWrapper";
import { Button } from "./Button";

export const ExpandedButton: React.FC<Props> = ({

    label,

    textClass,

    link,

    dark,

    disabled,

    onClick

}) => {

    return (

        <LinkWrapper link={link} className="button-expand">

            <>

                <div

                    onClick={() => (onClick && !disabled) && onClick()}

                    className='button-expand button-expand-shell'

                >

                    <div className="button-expand-wrapper">

                        {

                            label &&

                            <div className="button-expand-text-block">

                                <div className="button-expand-text-block-holder">

                                    <p className={classnames(textClass)}> {label} </p>

                                </div>

                                <span style={dark ? { background: "#000000" } : {}} />

                            </div>
                        }

                        <div className="button-expand-arrow-block">

                            <div className="button-expand-arrow-background" />

                            <div className="button-expand-block">

                                <div className="button-expand-circle" dangerouslySetInnerHTML={{ __html: dark ? DarkCircle : Circle }} />

                                <div

                                    className="button-expand-arrow"

                                    dangerouslySetInnerHTML={{ __html: dark ? DarkArrow : Arrow }}

                                />

                            </div>

                        </div>

                    </div>

                </div>

                <Button className="button-expand-mobile" label={label} />

            </>

        </LinkWrapper>
    )

}

interface Props {
    label?: string,
    textClass?: string,
    link?: string,
    dark?: boolean,
    disabled?: boolean,
    onClick?: () => void
}
