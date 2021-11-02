 let startTimer = () =>{
  let target_date = new Date("november 21, 2022 13:00:00").getTime();
  let days, hours, minutes, seconds;

  setInterval(() => {
    let current_date = new Date().getTime();
    let seconds_f = (target_date - current_date) / 1000;

    days = parseInt(seconds_f / 86400);
    seconds_f = seconds_f % 86400;

    hours = parseInt(seconds_f / 3600);
    seconds_f = seconds_f % 3600;

    minutes = parseInt(seconds_f / 60);
    seconds = parseInt(seconds_f % 60);

    document.getElementById('day').innerHTML = "Faltam "+days +" dias,";
    document.getElementById('hour').innerHTML = hours +" horas,";
    document.getElementById('minute').innerHTML = minutes +" minutos e";
    document.getElementById('second').innerHTML = seconds + " segundos para a próxima Copa do Mundo";

  }, 1000)

};

window.onload = () => {
  startTimer(); //Inicia a função
}