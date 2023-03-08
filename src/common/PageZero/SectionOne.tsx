import React from 'react';
import { ExpandedButton } from 'components/ExpandButton';

export const DotAndNavSwitcher: React.FC<Props> = ({

    controls

}) => {

    return (

        <div className='page-zero-switcher-holder'>

            {controls?.navSwitcher &&

                <div className='page-zero-navigation'>

                    <ExpandedButton />

                    <ExpandedButton />

                </div>

            }

            {controls?.dotSwitcher &&

                <div className='page-zero-progression'>

                    <span />

                    <span className='page-zero-progression-active' />

                    <span />

                    <span />

                </div>
            }

        </div>


    );
}

interface Props {
    controls?: {

        navSwitcher?: boolean,

        dotSwitcher?: boolean,

        button?: {

            display: boolean

            title: string

        },

    }
}
