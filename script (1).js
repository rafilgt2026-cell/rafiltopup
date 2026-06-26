function order(){
let uid=document.getElementById('uid').value;
let game=document.getElementById('game').value;
let nominal=document.getElementById('nominal').value;

let msg=`PESANAN RAFIL TOPUP%0AGame: ${game}%0AUser ID: ${uid}%0ANominal: ${nominal}%0ADANA: 081238973830`;
window.open(`https://wa.me/?text=${msg}`);
}
