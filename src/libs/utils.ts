const isToday = (weekday: string) => {
    const weekdays = ["sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"]
    const today = new Date();
    return weekday === weekdays[today.getDay()]
}

const getFormatedTime = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours} ${ampm}`;
}

export {isToday, getFormatedTime}