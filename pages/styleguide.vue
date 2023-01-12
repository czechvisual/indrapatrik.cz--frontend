<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <AppSidebar />
      </div>

      <div class="col-9 mt-3">
        <div>
          <h1 id="getting-started">Get started with Bootstrap</h1>
          <h4>Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.</h4>
          <h2 id="introduction" class="mt-4">Install</h2>

          <p>Pro pohodlné spuštění frameworku si můžete stáhnout obsah <a href="">repozitáře</a> na GitHubu a následně nainstalovat</p>

          <div class="code">
            # install dependencies <br>
            $ npm install<br>
            <br>
            # serve with hot reload at localhost:3000<br>
            $ npm run dev<br>
            <br>
            # generate static project<br>
            $ npm run generate<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.code
  padding: 1rem
  font-family: $fontMonospace
  background: map-get($grays, "100")
</style>
