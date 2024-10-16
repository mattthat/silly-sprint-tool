import {dayLeft, holidays, spent, sprintLeft} from "./time-math";
import {Container, Typography as Show} from "@mui/material";
import * as React from "react";
export function ShownText(props) {
    return (
        <Container>
            <Show className="margin-left-50 black-14">Today Hours left: {dayLeft()}</Show>
            <Show className="margin-left-50 black-14">
                Sprint Hours left: {sprintLeft(props.end, props.hours, props.capacity)}</Show>
            <Show className="margin-left-50 black-14">Hours Spent: {spent(props.start, props.hours)}</Show>
            <Show className="margin-left-50 black-14">
                Holiday Hours: {holidays(props.start, props.end).length * props.hours}</Show>
        </Container>
    )
}
