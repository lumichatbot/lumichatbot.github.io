var demo = Vue.component("Demo", {
  template: `
  <div class="demo page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" to="./">
            <md-icon>arrow_back</md-icon>
          </md-button>

          <span class="md-title">
            <img class="logo" src="./assets/img/lumi-o.svg" alt="Lumi">
          </span>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <div class="md-layout md-alignment-top-right">
          <md-card class="chatbot">
            <iframe class="md-image" allow="microphone;" width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/lumi"></iframe>
          </md-card>
        </div>
      </md-app-content>
    </md-app>
  </div>`,
  props: [],
  data() {
    return {
      menuVisible: false
    }
  }
  // created() {
  //   this.GetDelays();
  // },
  // methods: {
  //   GetDelays() {
  //     let url =
  //       "https://cors-anywhere.herokuapp.com/https://soa.smext.faa.gov/asws/api/airport/delays";
  //     this.showProgress = true;
  //     //let resp = fetchGet("https://soa.smext.faa.gov/asws/api/airport/delays");
  //     //console.log(resp);
  //     axios
  //       .get(url)
  //       .then(result => {
  //         //console.log("result=", result);
  //         data = result.data;
  //         this.result = data;
  //         this.arriveDepart = data.ArriveDepartDelays.arriveDepart;
  //         this.groundDelay = data.GroundDelays.groundDelay;
  //         this.groundStop = data.GroundStops.groundStop;
  //         this.showProgress = false;
  //       })
  //       .catch(error => {
  //         console.log("error", error);
  //         this.showProgress = false;
  //       });
  //   }
  // }
});
