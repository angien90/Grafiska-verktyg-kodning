<template>
  <div>


    <h1>HOLA!</h1>

    <span>
      <h3>Följ stigen till lugnet - Gläntan väntar!</h3>
      <p>Djupt inne i den svenska skogen, vid en spegelblank sjö, ligger Gläntan – en plats för stillhet, återhämtning och upplevelser i naturens rytm. Här bor du i trädkojor svävande bland grenarna, vattengömslen vid sjöns kant eller glashus där natthimlen blir din utsikt.</p>
      <p>Låt vinden viska genom trädkronorna medan du slappnar av på din privata terrass. Vakna till ljudet av fågelsång och känn doften av nyskog. Här finns inga distraktioner, ingen stress – bara du, naturen och lugnet.</p>
    </span>

   <!-- <img :src="imagePath" alt="Modernt hus ute i skogen" width="500" height="500"> -->

    <span>
      <h3>Prenumerera på vårt nyhetsbrev</h3>
      <form>
        <label for="epost">Mailadress</label><br>
        <input type="email" id="epost" name="epost">
        <input type="checkbox" id="newsletter" name="newsletter" value="yes">
        <label for="newsletter"> Ja tack! Jag vill få nyhetsbrev från Gläntan med unika erbjudanden och inspiration om naturupplevelser.</label>
      </form>
    </span>
  </div>
  </template>

  <style scoped>
nav {
  display: flex;
  gap: 15px;
  font-size: 18px;
}

h1 {
  color: #4caf50;
}

span {
  display: block;
  margin: 20px 0;
}
</style>