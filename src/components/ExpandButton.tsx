import React from "react";
import { classnames } from "utils";
import { Arrow } from "./Assets";

export const ExpandedButton: React.FC<Props> = ({

    label,

    textClass

}) => {

    return (
        <div className='button-expand'>

            <div className="button-expand-wrapper">

                {

                    label &&

                    <div className="button-expand-text-block">

                        <div className="button-expand-text-block-holder">

                            <p className={classnames(textClass)}> {label} </p>

                        </div>

                        <span />

                    </div>
                }

                <div className="button-expand-arrow-block">

                    <div className="button-expand-arrow-background" />

                    <div

                        className="button-expand-arrow"

                        dangerouslySetInnerHTML={{ __html: Arrow }}

                    />

                </div>

            </div>

        </div>
    )

}

interface Props {
    label?: string,
    textClass?: string
}
