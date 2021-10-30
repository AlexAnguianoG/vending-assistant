import Vue from "vue";
import App from "./App.vue";
import alanBtn from "@alan-ai/alan-sdk-web";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

alanBtn({
  key: "535dc514cb600f9ca6cc3ba795c62cce2e956eca572e1d8b807a3e2338fdd0dc/stage",
  left: "47%",
  bottom: "20%",
  onCommand: (commandData) => {
    if (commandData.command === "go:back") {
      // Call the client code that will react to the received command
    }
  },
});
