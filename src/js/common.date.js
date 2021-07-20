getDate = (_year = 0) => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - _year);

    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();
    let day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();
    return year + month + day;
}