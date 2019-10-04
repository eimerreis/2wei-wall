import React from "react";

import { TableResponse } from "./Table.types";
import data from "../test-data/table.json";


export const TableComponent = (props: TableResponse) => {
    const { ranking } = props.rankings;
    return (
        <div>
        {ranking.map((rank) => {
            rank.team.name
        })}
        </div>
    )
}

export const TablePage = () => {
    const tableResponse = data as TableResponse;
    return (
        <TableComponent {...tableResponse} />
    )
}