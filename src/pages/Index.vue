<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-sm full-width column items-center no-wrap">
      <div class="col-12">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="col-12">
        <h3>Hola Mundo</h3>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
