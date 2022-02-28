<template>
  <body>
    <div>
        <div id="divUp">
            <img src="https://cdn.bkmkitap.com/Data/EditorFiles/KategoriYeni/edebiyat-kitaplari.jpg">
            <h2>Edebiyat</h2>
            <p>Edebiyat kitapları özel fiyatlar, hızlı kargo ve kolay ödeme avantajlarıyla BKM Kitap’ta! Edebiyat kitaplarını satın almak için tıklayın. BKM Kitap.</p>
        </div>
        <div id="divMid">
            <ul>
                <li id="liSelect"><select id="select" name="sort">
                    <option selected>Varsayılan Sıralama</option>
                    <option>Alfabetik A-Z</option>
                    <option>Alfabetik Z-A</option>
                    <option>Eskiden Yeniye</option>
                    <option>Fiyat Azalan</option>
                    <option>Fiyat Artan</option>
                </select></li>
                <li id="liCheckbox"><input type="checkbox"></li>
                <li id="li3">Görünüm:</li>
                <li><a><img id="img1" src="https://cdn-icons-png.flaticon.com/512/137/137093.png"></a></li>
                <li><a><img id="img2" src="https://cdn-icons-png.flaticon.com/512/137/137093.png"></a></li>
                <li><a><img id="img3" src="https://cdn-icons-png.flaticon.com/512/137/137093.png"></a></li>
            </ul>
        </div>
    </div>
  </body>
</template>
<style>
ul{
    list-style-type: none;
    font-size: 20px;
    position: relative;
    top: -10px;
    font-stretch: semi-expanded;
}
#li-search{
    width: 45%;
}
#input-search{
    width: 92%;
}
ul li{
    float: left;
    margin-left: 1%;
}
p{
    text-indent: 10px;
    text-align: center;
}

#divUp img{
    margin-left: 20%;
    margin-bottom: 10%;
}
#divUp h2{
    text-align: center;
    margin-top: -5%;
}
#divMid{
    margin-left: 20%;
    margin-right: 20%;
}
#liSelect, #liCheckbox{
    border: solid;
    border-width: 1px;
    width: 170px;
    height: 30px;
}
#select{
    border: none;
    padding-left: 5px;
}
#li3{
    margin-left: 25%;
}
#img1{
    margin-left: 35%;
    width: 35px;
    height: 22px;
}
#img2{
    margin-left: 35%;
    width: 50px;
    height: 24px;
}
#img3{
    margin-left: 35%;
    width: 60px;
    height: 24px;
}
</style>
