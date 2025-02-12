document.addEventListener("DOMContentLoaded", function () {
    const items = [
        { text: "Diagnóstico estratégico", url: "http://wa.me/5531982570295", img: "./img/logos/Logo_icon.png", subitems: [] },
        { text: "Página de Incrição", url: "https://jornadaarqueoambiental.com.br/inscricao", img: "./img/logos/pointer.png", subitems: [] },
        {
            text: "Redes Sociais",
            url: "#",
            img: "./img/logos/arroba.png",
            subitems: [
                { text: "Youtube", url: "https://youtube.com/@arqueoambiental?si=74BeBRhrky6Fz0GZ", img: "./img/logos/Yt.png" },
                { text: "Instagram", url: "https://www.instagram.com/arqueoambiental/profilecard/?igsh=MXAwM3huZzI2dnFmYQ==", img: "./img/logos/instagram.png" },
                { text: "Facebook", url: "https://www.facebook.com/arqueoambiental/", img: "./img/logos/facebook.png" },
                { text: "Threads", url: "https://www.threads.net/@arqueoambiental", img: "./img/logos/Threads.png" },
            ]
        },
        {
            text: "Ebooks Grátis",
            url: "#",
            img: "./img/logos/Ebook.png",
            subitems: [
                { text: "Carros de boi", url: "https://download1589.mediafire.com/lmy4efxfnolgYxwHEKjw0U_UDrmsMCQ0LhDVhiGmK54do4cxmEONWTHprcRY82GZK3yd_zEq3MQgyzw3YrKIy4PCKkC_xGWyBAU2mtlNl0G43WcDfwUFKevzQVkg2L-dM1UynWorFI_79yG86hKgVsZ1KCHl73FVPbROKr8HkM6D/tiedrpyh1r9cle8/manual_modo_de_fazer_carros_de_bois_goias-1.pdf", img: "./img/logos/Ebook.png" },
                { text: "Capoeira", url: "https://download847.mediafire.com/wh5ubt0w8ywgch9qpjKl8xxAa25KXSsEn9isOSa41seYkUQW1jnSxqJojwxt1IBVMBMDajHGbvvurRHWn9ktYyZOgOvhkrKcVHfrnaH2qzq0FTrjFIowZ8F18vP5Axcz6nT5Hs15IDqQNdJ4TVmDxtDR-J1Ih-0u6RdVGlcbS6a8/zcdwxs2m4i22urw/mapeamento_genealogia_capoeira_goiania.pdf", img: "./img/logos/Ebook.png" },
            ]
        },        
    ];

    console.log(`Feito por: -----------    -------------------
        █▀▀ ▄▀█ █▄▄ █▀█ █ █▀▀ █░░ █▄▀ █▀█ █▀ ▀█▀ ▄▀█
        █▄█ █▀█ █▄█ █▀▄ █ ██▄ █▄▄ █░█ █▄█ ▄█ ░█░ █▀█ `)

    const Buttons = document.getElementById('Buttons');

    // Função para criar botões com links e subitens
    function CriarBotao() {
        items.forEach(function (item) {
            // Criar um novo botão como link
            const NovoBotao = document.createElement('a');
            NovoBotao.className = 'dynamic-button';
            NovoBotao.href = item.url;
            NovoBotao.target = '_blank';

            // Adicionar a imagem do botão, se existir
            if (item.img) {
                const imageLogo = document.createElement('img');
                imageLogo.className = 'LogoPNG';
                imageLogo.src = item.img;
                imageLogo.alt = item.text;
                NovoBotao.appendChild(imageLogo);
            }

            const buttonText = document.createElement('span');
            buttonText.className = 'button-text';
            buttonText.textContent = item.text;

            // Adicionar o texto ao botão
            NovoBotao.appendChild(buttonText);

            // Adicionar os dots ao botão
            /*
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'dots-container';
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dotsContainer.appendChild(dot);
            }
            NovoBotao.appendChild(dotsContainer);
            */

            // Adicionar o botão ao contêiner
            Buttons.appendChild(NovoBotao);

            // Criar e adicionar o contêiner para subitens
            if (item.subitems.length > 0) {
                NovoBotao.addEventListener('click', function (e) {
                    e.preventDefault();
                    const subitemsContainer = this.nextElementSibling;
                    if (subitemsContainer.style.display === 'none' || subitemsContainer.style.display === '') {
                        subitemsContainer.style.display = 'block';
                    } else {
                        subitemsContainer.style.display = 'none';
                    }
                });

                const subitemsContainer = document.createElement('div');
                subitemsContainer.style.display = 'none';
                subitemsContainer.className = 'subitems-container';

                item.subitems.forEach(function (subitem) {
                    const subitemButton = document.createElement('a');
                    subitemButton.className = 'dynamic-button subitem';
                
                    // Verifique se o subitem é um PDF e defina o atributo 'download'
                    if (subitem.url.endsWith(".pdf")) {
                        subitemButton.href = subitem.url;  // O caminho completo para o PDF
                        subitemButton.download = subitem.url.split('/').pop();  // Nome do arquivo, sem o caminho
                    } else {
                        subitemButton.href = subitem.url;
                        subitemButton.target = '_blank';
                    }
                
                    const subitemText = document.createElement('span');
                    subitemText.className = 'button-text';
                    subitemText.textContent = subitem.text;
                
                    const subitemImageLogo = document.createElement('img');
                    subitemImageLogo.className = 'LogoPNG';
                    subitemImageLogo.src = subitem.img;
                
                    // Adicionar o texto e a imagem do subitem
                    subitemButton.appendChild(subitemText);
                    if (subitem.img) {
                        subitemButton.appendChild(subitemImageLogo);
                    }
                
                    subitemsContainer.appendChild(subitemButton);
                });
                
                Buttons.appendChild(subitemsContainer);
            }
        });
    }

    // Chamar a função para criar botões
    CriarBotao();
});
