import React from 'react';
import { classnames } from 'utils';

export const ProjectItemIndicator: React.FC<Props> = ({ numberOfItems, active }) => {

    return (

        <div className='project-item-mobile-indicator'>

            {[...Array(numberOfItems)].map((item, index) =>

                <span

                    key={`project-item-indicator-${index}`}

                    className={classnames(

                        'project-item-mobile-indicator-dot',

                        active === index && "active"

                    )}

                />

            )}

        </div>

    );
}

interface Props {

    numberOfItems: number,

    active: number

}
