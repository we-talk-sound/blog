import React from 'react';
import { ComponentHolder, Table } from 'components';

export const SectionThree: React.FC = () => {

    const MarQueeTexts = () => (
        <>
            Services <span /> Services <span /> Services <span /> Services <span /> Services <span /> Services <span /> Services <span />
        </>
    );

    const data = [

        [
            "01",
            "Who we are",
            {
                type: "repeated-data",
                value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet urna at ridiculus libero, dictumst consequat ipsum, auctor vel. 
                    In viverra volutpat vel ullamcorper ridiculus aenean quam arcu. Nunc, enim cras fermentum mauris 
                    nunc libero libero lobortis suspendisse. Ultricies morbi tortor, amet id nibh.`

            }
        ]

    ];

    return (

        <ComponentHolder bodyClass='no-border page-zero-section-two page-zero-section-three'>

            {/* @ts-expect-error */}
            <marquee scrollAmount={20}  >

                <div>

                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />
                    <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts /> <MarQueeTexts />

                </div>

            {/* @ts-expect-error */}
            </marquee>

            <div className='page-zero-section-two-body page-zero-section-three-body'>

                <Table
                    heading={["", "", ""]}
                    data={data}
                />

            </div>

        </ComponentHolder >

    );
}
