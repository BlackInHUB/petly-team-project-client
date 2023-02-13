const getTime = (isoString) => {
    const time = new Date(isoString).toLocaleTimeString('en', {timeStyle: 'short', hour12: false, timeZone: 'UTC'});
    const date = isoString.split('T')[0].split('-').reverse().join('-');

    return time + ', ' + date;
};

export default getTime;