<template>
  <div class='cabins'>
      <div class='cardWrapper'>
      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/sjostugan.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h3>Sjöstugan</h3>
          <p>Somna till sjöns stilla vågor och vakna med soluppgången. En naturnära och rofylld tillflyktsort med magisk utsikt.</p>
          <h4>Från 1 399 kr</h4>
        </div>
      </div>
      </div>

      <div class='cardWrapper'>
      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/spegelboet.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h3>Spegelboet</h3>
          <p>Bo uppe i träden och låt dig smälta samman med naturen. Den spegelblanka fasaden skapar en unik, kamouflerad upplevelse mitt i skogens ro.</p>
          <h4>Från 1 758 kr</h4>
        </div>
      </div>
    </div>

<div class='cardWrapper'>
      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/Trakoja.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h3>Träkojan</h3>
          <p>Njut av total avskildhet i en mysig koja, djupt inne i skogen. Här får du ro, stillhet och en chans att komma nära naturen på riktigt.</p>
          <h4>Från 1 549 kr</h4>
        </div>
      </div>
    </div>

<div class='cardWrapper'>
      <div class='card'>
        <div class='picture'>
          <img src='../assets/images/Eldnästet.jpg' alt='Modernt hus ute i skogen'>
        </div>
        <div class='infotext'>
          <h3>Eldnästet</h3>
          <p>Samla familjen kring elden i en avskild koja och njut av lugnet i skogen. En plats för gemenskap och mysiga stunder.</p>
          <h4>Från 2 129 kr</h4>
        </div>
      </div>
      </div>
      </div>

  </template>


<style lang="scss" scoped>


main {
  margin-top: 40px; /* Justera avståndet mellan headern och main-innehållet */
}


.cabins{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;

  .cardWrapper{
  width: 100%;
  height: 530px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  .card{
    background-color: $greige;
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    margin-top: 0;
    margin-bottom: 25px;


    .picture{
      display: block;
      margin-top: 0;
      margin-top: 25px;

      img{
        width: 290px;  
        height: 260px;
        display: block;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  

  .infotext{
    width: 290px;
    margin-bottom: 25px;

    h3{
      font-family: 'Lilita One', sans-serif;
      font-weight: 400;
      font-size: 25px;
      margin-top: 0;
      text-transform: uppercase;
    }

    h4{
      font-family: 'Lilita One', sans-serif;
      font-weight: 400;
      font-size: 20px;
      margin-top: 0;
      text-transform: uppercase;
    }

    p{
      font-family: 'Assistant', sans-serif;
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 25px;
              
    }
  }
}
}
}

/* MEDIA QUERY FÖR STÖRRE SKÄRMAR (>600px) */
@media (min-width: 800px) {

  .cabins{
    width: 100%;
    display: flex;

  .cardWrapper{
    width: 48%;
    flex-wrap: nowrap;
    flex-direction: row;
  }
}
}

/* MEDIA QUERY FÖR STÖRRE SKÄRMAR (>1200px) */
@media (min-width: 1000px) {

  .cabins{
    border: solid black 3px;
    width: 100%;
    display: flex;

  }
  .cardWrapper{
    border: solid orange 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 675px;
  }

    .card {
      border: solid blue 3px;
      display: flex;
      flex-direction: row;
      width: 675px;

  .picture{
    border: solid yellow 3px;
      width: 50%;
    
      img{
        object-fit: cover;
      }
  }

  .infotext{
    border: solid gray 3px;
    width: 50%;
    p{
      font-size: 25px;
    }
  }
}


}
</style>