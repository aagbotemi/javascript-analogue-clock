const secondHand = document.querySelector(".secs-hand");
const minutesHand = document.querySelector(".mins-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate() {
    const now = new Date();

    //set seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

    //set minutes hand
    //const minutes = now.getMinutes();
    //const minutesDegrees = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    //minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    //set minutes hand
    //const hour = now.getMinutes();
    //const hourDegrees = ((hour/12)*360) + ((minutes/60)*30) + 90;
    //hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();