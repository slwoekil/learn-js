function dayToday(inputDay) {
    const daysOfWeek = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ];
    const userDay = inputDay.toLowerCase();
    const dateNow = new Date(Date.now());
    const today = daysOfWeek[dateNow.getDay()];
    console.log(today === userDay);
}

dayToday();