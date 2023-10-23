import React, { PropsWithChildren, ReactElement } from 'react';
import { ComponentHeader } from 'components';
import { classnames } from 'utils';

export const ComponentHolder: React.FC<Props> = ({ visibility, id, childId, ...props }) => {

    return (
        <>
            {(visibility === false ? visibility : true) &&

                <div

                    {...(id ? { "id": id || "" } : {})}

                    {...(props.Ref ? { ref: props.Ref } : {})}

                    className={classnames(`component-holder`, props.className)}

                    style={ props.style ? { ...props.style } : {} }

                >

                    {(props.title || props.customHeader || props.control) &&

                        <>
                            {!props.customHeader ?

                                < ComponentHeader {...props} className={props.headerClass || ""} />

                                :

                                <props.customHeader />
                            }

                        </>
                    }

                    <div

                        className={classnames("component-holder-body", props.bodyClass, props.align && "component-holder-align")}

                        {...(childId ? { "id": childId || "" } : {})}

                    >
                        {props.children && props.children}
                    </div>
                </div>
            }
        </>
    );
}

interface Props extends PropsWithChildren {
    control?: ReactElement<any, any>,
    visibility?: boolean,
    title?: string,
    subtitle?: string,
    customHeader?: React.FC,
    className?: string,
    bodyClass?: string,
    headerClass?: string,
    onScrollStart?: (e: any) => void
    align?: boolean,
    id?: string,
    childId?: string,
    Ref?: any,
    style?: React.CSSProperties
}
