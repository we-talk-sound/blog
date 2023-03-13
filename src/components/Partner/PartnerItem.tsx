import React from 'react';

export const PartnerItem: React.FC<Props> = ({

    image,

    text

}) => {


    return (

        <div

            className='partner-item-box'>

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

    text: string

}
