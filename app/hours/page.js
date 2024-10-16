"use client";
import "./page.css";
import { HolidayList } from "./holiday-list";
import { HourHelperTextField as TextField } from "./hourhelper-textfield";
import { ShownText } from "./shown-text";
import { LocalizationProvider as Locale } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from "@mui/material";
import * as React from 'react';
import dayjs from 'dayjs';

export default function Hours(props) {
    const
        [start, setStart] = React.useState(dayjs(new Date().toDateString())),
        [end, setEnd] = React.useState(dayjs(new Date().toDateString())),
        [capacity, setCapacity] = React.useState(54),
        [hours, setHours] = React.useState(6);
    return (
        <Container className="hour-helper-container">
            <TextField value={capacity} setValue={setCapacity} label="Capacity Hour Count" />
            <TextField value={hours} setValue={setHours} label="Productive Daily Hour Count" />
            <Locale dateAdapter={AdapterDayjs}>
                <DatePicker value={start} onChange={setStart} className="padding-20"
                            label="Sprint Start" />
                <DatePicker value={end} onChange={setEnd} className="padding-20"
                            label="Sprint End" />
            </Locale>
            <ShownText start={start} end={end} hours={hours} capacity={capacity} />
            <HolidayList start={start} end={end} />
        </Container>
    );
};
