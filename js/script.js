document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('ano').textContent = new Date().getFullYear();

  const form=document.getElementById('contact-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    document.getElementById('form-feedback').textContent="Mensagem enviada!";
    form.reset();
  });
});
