import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDragon,
  faTrash,
  faPencilRuler,
  faPlus,
  faSignOutAlt,
  faReplyAll,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faDragon,
  faTrash,
  faPencilRuler,
  faPlus,
  faSignOutAlt,
  faReplyAll,
  faEye,
  faEyeSlash
);

Vue.filter("formatDate", function(data) {
  let date = moment(
    new Date(data),
    ["MM DD YYYY HH:mm:ss Z+HHmm"],
    "pt-br",
    true
  );

  return `${date.format("DD/MM/YYYY")} - ${moment(date).fromNow()}`;
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
