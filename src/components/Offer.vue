<template>
  <div id="slider-wrapper">
    <div class="slider">
        <a class="img-bir">
            <img src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-INDIGO-YAYINLARI-BANNER.jpg">
         </a>
        <a class="img-iki">
                <img src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/DEV-EKIM-KAMPANYASI-ADEL-BANNER.jpg">
        </a>
        <a class="img-uc">
            <img src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-DEV-KITAP-FUARI-BANNER.jpg">
        </a>
        <a class="img-dort">
            <img src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-CAN-YAYINLARI-BANNER.jpg">
        </a>
        <a class="img-bes">
            <img src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/EFSANE-KASIM-KAMPANYASI-INDIGO-YAYINLARI-BANNER.jpg">
        </a>
     </div>
     <div>
        <img class="top" src="https://cdn.bkmkitap.com/Data/EditorFiles/cok-satan-kitaplar-sub-banner-blok-v6.jpg" alt="Çok Satan Kitaplar">
      </div>
  </div>
</template>
<style>
.top{
    margin-left: 0px;
    margin-top: 410px;
    width: 800px;
}
#slider-wrapper{
  position: relative;
  width:800px;
  height:600;
  overflow: hidden;
  top: 10px;
  left: 360px;
}
.img-bir, .img-iki, .img-uc, .img-dort,.img-bes{
  position: absolute;
  width:1150px;
  height:600px;
}

.img-bir{left: 0px;}
.img-iki{left: 800px;}
.img-uc{left: 1600px;}
.img-dort{left: 2400px;}
.img-bes{left: 3200px;}

#slider-wrapper > .slider{
  position: absolute;
  left:0px;
  width: 2800px;
  height: 400px;
  -webkit-animation-name: sliders;
  -webkit-animation-iteration-count:infinite;
  -moz-animation-duration: 30s;
  -moz-animation-name: sliders;
  -moz-animation-iteration-count:infinite;
  -ms-animation-duration: .0s;
  animation-name: sliders;
  -ms-animation-iteration-count:infinite;
  animation-duration: 25s;
  animation-iteration-count:infinite;
 
}
#slider-wrapper > .slider:hover{
animation-play-state:paused;
}


@-webkit-keyframes sliders{
  0% {left:0px;}
  10% {left:0px;}
  20% {left:-8000px;}
  30% {left:-8000px;}
  40% {left:-1600px;}
  50% {left:-1600px;}
  60% {left:-2400px;}
  70% {left:-2400px;}
  80% {left:-3200px;}
  90% {left:-3200px;}
}
@-moz-keyframes sliders{
  0% {left:0px;}
  10% {left:0px;}
  20% {left:-800px;}
  30% {left:-800px;}
  40% {left:-1600px;}
  50% {left:-1600px;}
  60% {left:-2400px;}
  70% {left:-2400px;}
  80% {left:-3200px;}
  90% {left:-3200px;}
}
@-ms-keyframes sliders {
 0% {left:0px;}
  10% {left:0px;}
  20% {left:-800px;}
  30% {left:-800px;}
  40% {left:-1600px;}
  50% {left:-1600px;}
  60% {left:-2400px;}
  70% {left:-2400px;}
  80% {left:-3200px;}
  90% {left:-3200px;}
}
@keyframes sliders{
 0% {left:0px;}
  10% {left:0px;}
  20% {left:-800px;}
  30% {left:-800px;}
  40% {left:-1600px;}
  50% {left:-1600px;}
  60% {left:-2400px;}
  70% {left:-2400px;}
  80% {left:-3200px;}
  90% {left:-3200px;}
}
</style>