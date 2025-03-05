<template>
      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/sjostugan.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h2>Sjöstugan</h2>
          <p>Somna till sjöns stilla vågor och vakna med soluppgången. En naturnära och rofylld tillflyktsort med magisk utsikt.</p>
          <p>Från 1399 kr</p>
        </div>
      </div>

      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/spegelboet.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h2>Spegelboet</h2>
          <p>Bo uppe i träden och låt dig smälta samman med naturen. Den spegelblanka fasaden skapar en unik, kamouflerad upplevelse mitt i skogens ro.</p>
          <p>Från 1758 kr</p>
        </div>
      </div>

      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/Trakoja.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h2>Träkojan</h2>
          <p>Njut av total avskildhet i en mysig koja, djupt inne i skogen. Här får du ro, stillhet och en chans att komma nära naturen på riktigt.</p>
          <p>Från 1549 kr</p>
        </div>
      </div>

      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/Eldnästet.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h2>Eldnästet</h2>
          <p>Samla familjen kring elden i en avskild koja och njut av lugnet i skogen. En plats för gemenskap och mysiga stunder.</p>
          <p>Från 2129 kr</p>
        </div>
      </div>
  </template>


<style lang="scss" scoped>
main{
width: 320px;
}

.card{
  border: solid black 4px;
  background-color: $greige;
  width: 320px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-radius: 5px;
  margin-bottom: 25px;
}

.picture{
  width: 290px;
  height: 260px;
  display: block;

img{
  width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}

.infotext{
  width: 290px;
}
</style>