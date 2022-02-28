<template>
<div>
  <div class="slider">
  </div>
  <img class="top" src="https://cdn.bkmkitap.com/Data/EditorFiles/cok-satan-kitaplar-sub-banner-blok-v6.jpg" alt="Çok Satan Kitaplar">
</div>
</template>
<style scoped>
  .slider{
    width: 780px;
    height: 400px;
    margin-left: 355px;
    margin-top: 10px;
    background-image: url('https://cdn.bkmkitap.com/Data/EditorFiles/interactive/DEV-EKIM-KAMPANYASI-ADEL-BANNER.jpg');
    background-size: 100% 100%;
    animation: slider 7s infinite linear;
  }
  @keyframes slider{
    0%{background-image: url('https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-DEV-KITAP-FUARI-BANNER.jpg'); background-size: 100% 100%;}
    49%{background-image: url('https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-CAN-YAYINLARI-BANNER.jpg'); background-size: 100% 100%;}
    99%{background-image: url('https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-INDIGO-YAYINLARI-BANNER.jpg'); background-size: 100% 100%;}
  }
  .top{
    margin-left: -220px;
    margin-top: 2px;
    width: 780px;
  }
</style>
