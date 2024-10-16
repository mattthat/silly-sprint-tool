import "./page.css"
import {List, ListItem} from "@mui/material";
import * as React from "react";
import {holidays} from "./time-math";
export function HolidayList(props) {
    return (
        <List className="margin-left-60 black-14">{
            holidays(props.start, props.end).map(item => {
                return <ListItem key={crypto.randomUUID()}>
                    {item.date.substring(0, 10)} ({item.name})
                </ListItem>
            })
        }</List>
    )
}
