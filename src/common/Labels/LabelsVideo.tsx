import React, { useState } from 'react';
import { ComponentHolder, Modal } from 'components';
import { StudioContentItem } from 'common/Studio/StudioContentItem';

export const LabelsVideo: React.FC = ({ }) => {

    const [playVideo, setPlayVideo] = useState<{ video?: string, visibility: boolean }>({

        video: undefined,

        visibility: false

    });

    return (

        <ComponentHolder

            bodyClass='no-border page-labels-video'

            className='page-labels-video-wrapper'>

            <Modal

                noObviousExit={true}

                visibility={playVideo.visibility}

                toggleOut={() => setPlayVideo({ video: undefined, visibility: false })}

            >

                <iframe src={playVideo.video} width={"100%"} height={"100%"} />

            </Modal>

            <div className='page-labels-video-body'>

                <h2 className='page-labels-video-header'> Camp Nova </h2>

                <p className='page-labels-video-subheader'>

                    Camp Nova is our creative bootcamp where we foster collaborations and support emerging artists.

                </p>

                <div className='page-labels-video-content'>

                    <StudioContentItem

                        image={"assets/background/studio-hero.png"}

                        title='Camp Nova - 2021'

                        onClick={() => setPlayVideo(({

                            video: "https://www.youtube.com/embed/V8Z1d9ddNIg?autoplay=1&mute=1",

                            visibility: true

                        }))}

                    />

                </div>

            </div>

        </ComponentHolder >

    );
}

