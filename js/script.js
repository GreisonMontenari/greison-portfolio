// script.js - Smooth Scroll, Validação de Formulário e Menu Mobile

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll para links de âncora (ROLAGEM DO SITE)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start'
                });
            }
             // Fecha o menu mobile após o clique (se estiver aberto)
            const navList = document.querySelector('.menu');
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
        });
    });

    // 2. Funcionalidade do Menu Mobile (ABRIR E FECHAR O MENU EM TELAS PEQUENAS)
    const navToggle = document.querySelector('.nav-toggle'); // Botão ☰
    const navList = document.querySelector('.menu'); // Lista <ul>
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }

    // 3. Simulação de Validação do Formulário (Obrigatório pela disciplina)
    const form = document.querySelector('section#contato form');
    form && form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        form.querySelectorAll('input[required], textarea[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Mensagem enviada com sucesso! (Simulação sem backend)');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});
