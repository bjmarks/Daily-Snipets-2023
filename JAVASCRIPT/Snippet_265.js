const date = new Date();
const month = () => {return (date.getMonth() < 10) ? `0${date.getMonth() + 1}`:date.getMonth() + 1};
const time = () => {
    let hour = (date.getHours() < 10) ? `0${date.getHours()}`:date.getHours();
    let mins = (date.getMinutes() <= 30) ? "00":"30";
    if(date.getMinutes() > 30) {
        hour = (date.getHours() < 10) ? `0${date.getHours() + 1}` : date.getHours() + 1;
        mins = "00";
    }
    return `${hour}:${mins}`;
};
let today = `${date.getFullYear()}-${month()}-${date.getDate()}T${time()}`
let maxDate = `${date.getFullYear() + 10}-${month()}-${date.getDate()}T00:00`