import dayjs from "dayjs";
import Holidays from "date-holidays";

const dateDifference = (start, end) => {
    const s = new Date(+start);
    const e = new Date(+end);
    s.setHours(12,0,0,0);
    e.setHours(12,0,0,0);
    const totalDays = Math.round((e - s) / 8.64e7);
    const wholeWeeks = totalDays / 7 | 0;
    let days = wholeWeeks * 5;
    if (totalDays % 7) {
        s.setDate(s.getDate() + wholeWeeks * 7);

        while (s < e) {
            s.setDate(s.getDate() + 1);

            if (s.getDay() !== 0 && s.getDay() !== 6) {
                ++days;
            }
        }
    }
    return days;
};

const dayLeft = () => {
    const todayEnd = new Date()
    todayEnd.setHours(17, 0, 0, 0);
    const calc = Math.floor((todayEnd.getTime() - new Date().getTime()) / 1000 / 60 / 60);
    if (calc > 0) {
        return calc;
    } else {
        return 0;
    }
};

const holidays = (start, end) => {
    const holidayApi = new Holidays('US');
    const sprintHolidaysList = [];
    let current_date = start;

    while (current_date.toDate().getTime() < end.toDate().getTime()) {
        const holiday = holidayApi.isHoliday(
            current_date.toDate().toDateString());
        if (holiday) {
            sprintHolidaysList.push(holiday[0]);
        }
        current_date = current_date.add(1, 'day');
    }
    return sprintHolidaysList;
};

const sprintLeft = (end, dayAmount, basis) =>  {
    if (!dayAmount) {
        dayAmount = 6;
    }
    if (!basis) {
        basis = 54;
    }
    let calc = dateDifference(dayjs(new Date().toDateString()), end) * dayAmount;
    if (calc > 59) {
        calc = `~ ${basis}`;
    }
    return calc;
};

const spent = (start, dayAmount) => {
    if (!dayAmount) {
        dayAmount = 6;
    }
    let calc = dateDifference(start, dayjs(new Date().toDateString())) * dayAmount;
    if (calc < 0) {
        calc = 0;
    }
    return calc;
};

export {
    dateDifference, dayLeft, holidays, spent, sprintLeft
}
