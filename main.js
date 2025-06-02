document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Simula envio
    form.reset();
    mensagemSucesso.style.display = 'block';
    setTimeout(() => {
      mensagemSucesso.style.display = 'none';
    }, 4000);
  });
});

