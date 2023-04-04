import React from 'react';
import { classnames } from 'utils';

export const PartnerItem: React.FC<Props> = ({

    image,

    text,

    hidden

}) => {


    return (

        <div

            className={classnames('partner-item-box', hidden && "partner-item-box-hidden")}>

            <div className='partner-item-box-image'>

                <img

                    src={image}

                    alt={text}

                />

            </div>

            <p> {text} </p>

        </div>


    );
}

interface Props {

    image: string,

    text: string,

    hidden?: boolean

}
