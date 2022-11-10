import React from 'react';
import { classnames } from 'utils';

export const BillPlaceHolder: React.FC<{ length?: number }> = ({ length }) => {
    return (
        <div className="strickFadeIn">

            {[...Array(length || 3)].map((...args) =>
                <React.Fragment key={`placeholder-item-${args[1]}`}>
                    <div className="content-loader title" />
                    <div className="content-loader mt-0 mb-0" />
                </React.Fragment>
            )}

        </div>
    )
}

export const SettingsItemPlaceHolder: React.FC<{ length?: number }> = ({ length }) => {
    return (
        <div className="strickFadeIn">

            {[...Array(length || 3)].map((...args) =>
                <React.Fragment key={`placeholder-item-${args[1]}`}>

                    <div className="content-loader-v" >

                        <div className="content-loader-v-item" />

                        <div className="content-loader-v-item" />

                    </div>
                </React.Fragment>
            )}

        </div>
    )
}

export const StoryLoaderItem: React.FC<Props> = ({ imageBox, extraTitle }) => {

    return (

        <div

            className={classnames(`content-loader-stories-block`)}

        >

            {imageBox && <div className="content-loader-image" />}

            <div className='content-loader-texts'>



                <div className="content-loader-v pt-0 mt-0" >

                    <div className='content-loader-stories-block-title'>

                        <div className="content-loader-v-item" />
                        <div className="content-loader-v-item" />

                    </div>

                    <div className="content-loader-v-item" />

                </div>


                <div className="content-loader title" />

                <div className="content-loader title" />

                {extraTitle && <div className="content-loader title" />}

            </div>

        </div>

    )

}

export const StoriesItemPlaceHolder: React.FC<Props> = ({ length, imageBox, holderClass, extraTitle }) => {
    
    return (

        <div className={classnames("strickFadeIn content-loader-holder content-loader-stories", holderClass)}>

            {[...Array(length || 3)].map((...args) =>

                <StoryLoaderItem

                    key={`placeholder-item-${args[1]}`}

                    extraTitle={extraTitle}

                    imageBox={imageBox}

                />

            )}

        </div>

    )
}

interface Props {

    length?: number,

    imageBox?: boolean,

    holderClass?: string,

    extraTitle?: boolean

}