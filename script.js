// Modal Welcome + Pilihan Menu
document.addEventListener('DOMContentLoaded', function() {
  // Modal
  const modal = document.createElement('div');
  modal.id = 'welcomeModal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Selamat Datang di Lex Developer Premium SA-MP</h2>
      <p>Pilih kebutuhanmu untuk mulai:</p>
      <button id="btnLanjut">Lanjutkan</button>
    </div>`;
  document.body.appendChild(modal);

  const btnLanjut = document.getElementById('btnLanjut');
  btnLanjut.addEventListener('click', function() {
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Pilih Menu</h2>
        <button id="chooseHosting">Hosting</button>
        <button id="chooseJasa">Jasa Developer</button>
      </div>
    `;

    document.getElementById('chooseHosting').addEventListener('click', function() {
      document.getElementById('hosting').scrollIntoView({behavior: 'smooth'});
      modal.style.display = 'none';
    });
    document.getElementById('chooseJasa').addEventListener('click', function() {
      document.getElementById('jasa').scrollIntoView({behavior: 'smooth'});
      modal.style.display = 'none';
    });
  });
});