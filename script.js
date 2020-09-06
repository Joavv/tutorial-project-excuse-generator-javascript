const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const excuse = () => {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let newText = who[randomNumber(who.length)] + ' ' + action[randomNumber(action.length)] + ' ' + what[randomNumber(what.length)] + ' ' + when[randomNumber(when.length)];

    document.getElementById("excuse").innerHTML = newText;
}
