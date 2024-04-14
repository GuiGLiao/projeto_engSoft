<script setup>
</script>

<template>
      <div class="user-cards" data-user-cards-container></div>
      <div class="imgBox" style="text-align: left; padding-top: 15px">
        <p id="text-content"></p>
        <div class="tutorial">
          <h1>Instalação do Emulador</h1>
          <p>
            Para instalar e utilizar o Emulador duckstation, siga os seguintes
            passos:
          </p>
          <ol class="header_ol">
            <li>
              Acesse o site do emulador
              <a href="https://www.duckstation.org/windl.html">duckstation.</a>
            </li>
            <li>Selecione a opção que se adequa ao usuário.</li>
            <li>Após o download, extraia o arquivo no diretório desejado.</li>
            <li>
              Dentro da pasta do emulador, crie uma nova pasta chamada "bios".
            </li>
            <li>
              Siga as instruções do instalador e defina um lugar para armazenar
              os jogos baixados.
            </li>
            <li>
              Após a instalação, é necessário baixar a ISO do jogo, podendo ser
              obtida em
              <a href="https://vimm.net/vault/5976">https://vimm.net/vault/5976.</a
              >
            </li>
          </ol>

          <h2>BIOS PS1</h2>
          <p>
            Para jogar o Gran Turismo 1, é necessário ter a BIOS do PS1. Siga os
            seguintes passos para instalar a BIOS:
          </p>
          <ol class="header_ol">
            <li>Crie uma pasta "bios" no diretório do duckstation.</li>
            <li>
              Baixe a Bios do PS1 com esse link:
              <a href="https://ps1emulator.com/SCPH1001.BIN">BIOS</a>
            </li>
            <li>Extraia o arquivo SCPH1001.BIN dentro na pasta "bios".</li>
            <li>Prossiga com o processo de instalação.</li>
          </ol>

          <h3>Vídeo tutorial</h3>
          <p>Assista a esse ótimo vídeo tutorial como guia para a instalação:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AXZyHMKrdGw?si=KTQ7MtrubX69ZMdd" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
        </div>
      </div>
</template>


<style scoped>
ol {
  margin-left: 2rem;
}
</style>
