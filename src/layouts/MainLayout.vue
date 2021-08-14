<template>
  <q-layout view="lHh Lpr fff" class="bg-darkl0 text-white exo">
    <q-header elevated class="bg-darkl2" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          shrink
          class="row items-center no-wrap"
        >
          <div class="q-gutter-sm row items-center no-wrap">
            <q-btn round flat>
              <q-avatar size="35px">
                <img :src="toolbar.url" />
              </q-avatar>
              <q-tooltip
                class="bg-amber text-black shadow-4"
                anchor="center left"
                self="center right"
                transition-show="rotate"
                transition-hide="rotate"
                :offset="[10, 10]"
                v-text="toolbar.title"
              ></q-tooltip>
            </q-btn>
          </div>
          <span
            class="q-ml-sm text-amber-7 text-weight-bold"
            v-text="toolbar.title"
          ></span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <div class="column items-end" style="height: 3rem">
            <div class="col">
              <span
                class="q-ml-sm text-yellow-6 text-weight-light"
                style="font-size: 1rem"
                v-text="day"
              ></span>
            </div>
            <div class="col">
              <span
                class="q-ml-sm text-yellow-2 text-weight-light"
                style="font-size: 1rem"
                v-text="hora"
              ></span>
            </div>
          </div>
          <q-btn round flat>
            <q-avatar size="26px">
              <q-icon size="26px" name="schedule" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="GPL__page-container">
      <router-view />

      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-xl q-px-sm column">
          <q-btn
            round
            flat
            :color="item.color"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            v-for="(item, index) in menu"
            :key="index"
            :to="item.to"
          >
            <q-icon size="22px" :name="item.icon" />
            <div class="GPL__side-btn__label">{{ item.text }}</div>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-page-container>

    <q-dialog v-model="card">
      <q-card dark bordered class="bg-dark10 my-card">
        <q-img src="https://tms-outsource.com/blog/wp-content/uploads/2019/05/secure-fintech-app-write-secure-code.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute bg-dark10"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Cafe Basilico</div>
            <div
              class="
                col-auto
                text-grey text-caption
                q-pt-md
                row
                no-wrap
                items-center
              ">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$・Italian, Cafe</div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer bordered class="bg-darkl0">
      <div
        class="
          row
          q-col-gutter-x-xs q-col-gutter-y-lg
          justify-evenly
          items-center
          full-width
        "
      >
        <div class="col-xs-12 col-sm-4 col-md-4" spread>
          <q-btn
            v-for="(item, index) in sociales.redes"
            flat
            type="a"
            size="10px"
            :href="item.url"
            target="_blank"
            round
            :color="item.color"
            :key="index"
            :icon="item.icon"
            ><q-tooltip
              class="bg-light-green-10"
              transition-show="rotate"
              transition-hide="rotate"
              >{{ item.name }}</q-tooltip
            >
          </q-btn>
          <q-btn
            flat
            size="10px"
            @click="card = true"
            round
            :color="item.color"
            v-for="(item, index) in sociales.home"
            :key="index"
            :icon="item.icon"
            ><q-tooltip class="bg-light-green-10" transition-show="rotate" transition-hide="rotate">{{
              item.name
            }}</q-tooltip>
          </q-btn>
        </div>
        <!-- MiniPrinter_DEV -->
        <div class="col-xs-12 col-sm-6 col-md-6 text-grey text-justify">
          <span>
            Powered by Grupo Techmex &copy; | 2021 - 2022
          </span>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  data() {
    const $q = useQuasar();
    return {
      toolbar: {
        title: "Super Market Bros",
        icon: "storefront",
        url: "https://image.flaticon.com/icons/png/128/2230/2230515.png",
      },
      name: "SuperMarketBros",
      hora: "",
      day: "",
      card: false,
      $q,
      menu: [
        {
          icon: "home",
          text: "Home",
          color: "yellow-10",
          to: "/",
        },
        {
          icon: "local_grocery_store",
          text: "Ventas",
          color: "yellow-9",
          to: "/ventas",
        },
        {
          icon: "post_add",
          text: "Inventario",
          color: "yellow-8",
          to: "/inventario",
        },
        {
          icon: "data_exploration",
          text: "Ingresos",
          color: "yellow-7",
          to: "/ingresos",
        },
        {
          icon: "checklist",
          text: "Stock",
          color: "yellow-6",
          to: "/stock",
        },
        {
          icon: "history",
          text: "Historial",
          color: "yellow-5",
          to: "/historial",
        },
      ],
      sociales: {
        redes: [
          {
            name: "Facebook",
            icon: "fab fa-facebook",
            color: "lime-13",
            url: "https://www.facebook.com/amenaza.alderete",
          },
          {
            name: "LinkedIn",
            icon: "fab fa-linkedin-in",
            color: "lime-13",
            url: "https://mx.linkedin.com/in/geovanni-alderete-ruano",
          },
          {
            name: "Twitter",
            icon: "fab fa-twitter",
            color: "lime-13",
            url: "https://twitter.com/amenazaalderete",
          },
        ],
        home: [
          {
            name: "Grupo TechMex",
            icon: "fas fa-laptop-code",
            color: "lime-13",
            url: "card = true",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    getHora() {
      let myDate = new Date();
      let hours = myDate.getHours();
      let minutes = myDate.getMinutes();
      let seconds = myDate.getSeconds();
      if (hours < 10) hours = 0 + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      let meridiano = hours >= 12 ? "PM" : "AM";
      this.hora = hours + ":" + minutes + ":" + seconds + " " + meridiano;
    },
    getDay() {
      let myDate = new Date();
    
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      this.day = "Hoy estamos a " + myDate.toLocaleDateString("es-MX", options);
    },
  },
  mounted() {
    setInterval(this.getHora, 1000);
    this.getDay();
  },
};
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>