const numbers = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
];

const getAge = (birthday) => {
    const oneDay = 1000*60*60*24;
    const dateNow = Date.now();
    const date = birthday.split('.')
    const convertedDate = Date.parse(date[2] + '/' + date[1] + '/' + date[0])
    const age = (((dateNow - convertedDate) / oneDay)/365).toFixed(1);
    const parts = age.split('.');
    const year = parts[0];
    const month = parts[1];
    
    const months = month === '1' ? `${numbers[month]} month` : month === '0' ? '' : `${numbers[month]} months`;
    const years = year === '1' ? `${numbers[year]} year` : year === '0' ? '' : `${numbers[year]} years`;

    const result = () => {
        if (year === '0' & month === '0') {
            return 'just born';
        }
        else if (year > '0' & month === '0') {
            return years;
        } else if (year === '0' & month > '0') {
            return months;
        } else {
            return years + ' & ' + months;
        }
    }

    return result();
};

export default getAge;