function show(id){
  document.querySelectorAll('.card').forEach(c=>c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goNext(){show('menu')}
function backMenu(){show('menu')}
function openHosting(){show('hosting')}
function openDev(){show('dev')}
function openCS(){
  show('cs');
  chat.innerHTML = '<div class="msg bot">Cs Team LexDev disini ada yang bisa kami bantu</div>';
}

const chat = document.getElementById('chat');

function sendMsg(text){
  chat.innerHTML += `<div class="msg user">${text}</div>`;
  if(text === 'Halo'){
    chat.innerHTML += `<div class="msg bot">Halo, Cs Team LexDev disini ada yang bisa kami bantu</div>`;
  } else if(text === 'saya membutuhkan bantuan anda'){
    chat.innerHTML += `<div class="msg bot">
      Silakan hubungi WhatsApp resmi kami<br/>
      <a href="https://wa.me/6283177864075?text=ASSALAMUALAIKUM%20MAS%20SAYA%20MENGALAMI%20KESUSAHAN%20SAAT%20INGIN%20MEMBUTUHKAN%20LAYANAN%20LEXDEVELOPER" target="_blank">Klik Logo Rahasia</a>
    </div>`;
  } else {
    chat.innerHTML += `<div class="msg bot">CS LEXDEVELOPER TEAM SEDANG SIBUK KARENA BANYAK MEMINTA BANTUAN</div>`;
  }
}
