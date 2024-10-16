import "./page.css"
import {TextField as MaterialTextField} from "@mui/material";
import * as React from "react";
export function HourHelperTextField(props) {
    return (
        <MaterialTextField variant="outlined" value={props.value}
                   label={props.label} className="padding-20"
                   onChange={(event) => props.setValue(event?.target?.value)}/>
    )
}
