let lang = prompt('Выберете язык:');

switch (lang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
    case 'de':
        console.log('Gutten tag!');
    default:
        console.log('Привет!');
}
