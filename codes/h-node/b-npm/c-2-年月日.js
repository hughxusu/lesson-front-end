import dayjs from 'dayjs';

let dtStr = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log(dtStr);

dtStr = dayjs().format('YYYY-MM-DD HH-mm-ss');
console.log(dtStr);
