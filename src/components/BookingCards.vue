<template>
  <main>
    <div class="cabins">
      <div class="cardWrapper">
        <div class="card">
          <div class="picture">
            <div class="cabinImage sjostugan" aria-label="Stuga med brant lutande tak och stora glaspartier i skogen."></div>
          </div>
          <div class="infotext">
            <h3>Sjöstugan</h3>
            <p>
              Somna till sjöns stilla vågor och vakna med soluppgången. En naturnära och rofylld tillflyktsort med
              magisk utsikt.
            </p>
            <h4>Från 1 399 kr</h4>
          </div>
        </div>
      </div>

      <div class="cardWrapper">
        <div class="card">
          <div class="picture">
            <div class="cabinImage spegelboet" alt="Kvadratisk spegelbeklädd kub till stuga uppe i träden. Entré via hängbro."></div>
          </div>
          <div class="infotext">
            <h3>Spegelboet</h3>
            <p>
              Bo uppe i träden och låt dig smälta samman med naturen. Den spegelblanka fasaden skapar en unik,
              kamouflerad upplevelse mitt i skogens ro.
            </p>
            <h4>Från 1 758 kr</h4>
          </div>
        </div>
      </div>

      <div class="cardWrapper">
        <div class="card">
          <div class="picture">
            <div class="cabinImage trakojan" alt="Stuga med brant lutande tak och badtunna i skogen."></div>
          </div>
          <div class="infotext">
            <h3>Träkojan</h3>
            <p>
              Njut av total avskildhet i en mysig koja, djupt inne i skogen. Här får du ro, stillhet och en chans att
              komma nära naturen på riktigt.
            </p>
            <h4>Från 1 549 kr</h4>
          </div>
        </div>
      </div>

      <div class="cardWrapper">
        <div class="card">
          <div class="picture">
            <div class="cabinImage eldnastet" alt="Eldstad med sprakande brasa."></div>
          </div>
          <div class="infotext">
            <h3>Eldnästet</h3>
            <p>
              Samla familjen kring elden i en avskild koja och njut av lugnet i skogen. En plats för gemenskap och
              mysiga stunder.
            </p>
            <h4>Från 2 129 kr</h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cabins {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: $spacing 0;
  padding: 0;

  .cardWrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    .card {
      background-color: $greige;
      width: 320px;
      height: 530px; //Ökat från de specade 450px eftersom innehållet inte ryms då
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 5px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      margin-top: 0;
      margin-bottom: 25px;

      .picture {
        display: block;

        .cabinImage {
          width: 260px;
          height: 290px;
          background-size: cover;
          background-position: center center;
          border-radius: 5px;
        }

        .sjostugan {
          background-image: url('../assets/images/sjostugan.jpg');
        }

        .spegelboet {
          background-image: url('../assets/images/spegelboet.jpg');
        }

        .trakojan {
          background-image: url('../assets/images/Trakoja.jpg');
        }

        .eldnastet {
          background-image: url('../assets/images/Eldnästet.jpg');
        }
      }

      .infotext {
        width: 260px;
        justify-content: space-evenly;

        h3 {
          font-family: $heading-font;
          font-weight: 400;
          font-size: pxtorem(25px);
          margin-top: 0;
          text-transform: uppercase;
        }

        h4 {
          font-family: $heading-font;
          font-weight: 400;
          font-size: pxtorem(20px);
          margin-top: 0;
          text-transform: uppercase;
        }

        p {
          font-family: $body-font;
          font-size: 1rem;
          margin-top: 0;
          margin-bottom: 15px; //ej specat
        }
      }
    }
  }
}

/* MEDIA QUERY FÖR STÖRRE SKÄRMAR (>600px) */
@media (min-width: 800px) {
  .cabins {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 50px;

    .cardWrapper {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .card {
        padding: 25px;
        margin-bottom: 50px; //Minimiavstånd satt till 25px. Ökade eftersom det kändes för lite.
      }
    }
  }
}

/* MEDIA QUERY FÖR STÖRRE SKÄRMAR (>1200px) */
@media (min-width: 1500px) {
  .cabins {
    width: 100%;

    .cardWrapper {
      width: 50%;

      .card {
        background-color: $greige;
        width: 675px;
        height: 450px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 25px; //ej specat
        margin-bottom: 75px; //Minimiavstånd satt till 25px. Ökade eftersom det kändes för lite.

        .picture {
          height: 100%;
          width: 50%;

          .cabinImage {
            height: 385px;
            width: 290px;
            display: block;
            object-fit: cover;
          }
        }

        .infotext {
          height: 100%;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 15px; //ej specat

          h3 {
            font-size: pxtorem(38px);
          }

          h4 {
            font-size: pxtorem(30px);
          }

          p {
            font-size: pxtorem(25px);
          }
        }
      }
    }
  }
}
</style>
