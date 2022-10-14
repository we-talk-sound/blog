import React, { useEffect, useState } from 'react';
import { FormField } from 'components/FormField';

const TableData: React.FC<TableDataProp> = ({ item }) => {

    if ( typeof item === "object") {

        if (item?.["status"]) {
            const statusItem = String(item?.status || "").replace(" ", "-");
            return (
                <div className={`status-full-${statusItem}`}>
                    {item?.value || ""}
                </div>
            )
        }

        if (item?.type === "repeated-data") {

                return (
                    <div className='table-repeated-data'>

                        <p className='table-place-data'> {item.value} </p>
                        <p className='table-show-data'> {item.value} </p>

                    </div>
                )

        }

    }

    if (typeof item === "string" || typeof item === "number") {
        return (<p> {item} </p>)
    }

    return (
        <p>
            {item || ""}
        </p>

    )
}

export const Table: React.FC<TableProps> = (
    { from, heading, setMarkedTracker, OptionComponent,
        data, selectable, selectField, page, pages,
        uniqueKey, ...props
    }) => {

    const [selected, setSelected] = useState<Array<string>>([]);
    const selectARow = (e: string) => {

        selected.includes(e)
            ? setSelected([...selected].filter((val) => val !== e))
            : setSelected([...selected, e]);

    };

    useEffect(() => {
        if (typeof setMarkedTracker === 'function') {
            setMarkedTracker(selected);
        }
        // eslint-disable-next-line
    }, [selected]);

    const Pagination = () => <React.Fragment />

    return (
        <div className="table-component">
            <table>
                <thead>
                    <tr>
                        {selectable && <th />}
                        {(heading || []).map((head, index) => (
                            <React.Fragment key={`table-${uniqueKey}-head-${head}-${index}`}>
                                {!props.customThRenderer ?
                                    <th > {head} </th>
                                    :
                                    <props.customThRenderer item={head} />
                                }
                            </React.Fragment>

                        ))}
                        {OptionComponent && <th />}
                    </tr>
                </thead>
                <tbody>
                    {(data || []).map((data_, index) => {
                        const propsValue: any =
                            data_.find((option : any) => typeof option === 'object' && option?.["render"] === false) || {};
                        const click = () => selectARow(propsValue[selectField || "value"]);
                        return (
                            <tr
                                className="slideUpIn"
                                key={`table-${uniqueKey}-body-row-${from}-${index}`}
                            >
                                {selectable &&
                                    <td>
                                        <FormField
                                            type="checkbox"
                                            value={(selected || []).includes(propsValue[selectField || ""])}
                                            onChange={() => click()}
                                        />
                                    </td>
                                }

                                {data_.map(
                                    (item : TableDateObjType | any , index_ : number ) => {
                                        if (typeof item === 'number' || typeof item === 'string') {
                                            return (
                                                <td key={`table-${uniqueKey}-col-${from}-${index}-${index_}`} >
                                                    <TableData item={item} />
                                                </td>
                                            );

                                        }
                                        if (typeof item === 'object' && ((item?.["status"] && item?.render === undefined) || item?.type)) {
                                            return (
                                                <td key={`table-${uniqueKey}-col-${from}-${index}-${index_}`} >
                                                    <TableData item={item} />
                                                </td>
                                            );
                                        }
                                        if (typeof item === "function") {
                                            return (
                                                <td key={`table-${uniqueKey}-col-${from}-${index}-${index_}`} >
                                                    {item()}
                                                </td>
                                            );
                                        }

                                        return null;
                                    })
                                }

                                {
                                    OptionComponent &&
                                    <td>
                                        <OptionComponent {...propsValue} />
                                    </td>
                                }

                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {page && pages && <Pagination />}
        </div>
    );
};

interface TableProps {
    data?: Array<any>,
    heading?: Array<{} | string>,
    setMarkedTracker?(selected: any): void,
    OptionComponent?: React.FC,
    selectable?: boolean,
    selectField?: string,
    page?: number,
    pages?: number,
    uniqueKey?: string,
    from?: string,
    customTdRenderer?: React.ReactElement,
    customThRenderer?: React.FC<{ item: any }>,
};

interface TableDataProp {
    item?: string | TableDateObjType | number | any
}

interface TableDateObjType { status?: string, value?: string , render? : boolean | string }