let lang = prompt('Выберете язык:');

switch (lang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Привет!');
        break;
}
