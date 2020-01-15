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
            <small>Demo</small>
          </span>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <div class="md-layout">
          <h2>Welcome to Lumi's demo experiment!</h2>
          <p>Thank you very much for helpng us improve our research. The purpose of this experiment is to evaluate the <b>usability</b> of <b>Lumi</b>, the chatbot we built to help network operators manage their networks, allowing them to express their general intents for the network using natural language. We intend to release a summary of the aggregate results to the research community and use them as part of a scientific article.</p>
        </div>
        <div class="md-layout md-gutter md-alignment-center-space-between">
          <div class="md-layout-item md-size-60 md-small-size-100">
            <h2>Outline</h2>
            <p>The evaluation takes no more than <b>20 minutes</b>, and is composed of 3 steps:</p>
            <ul>
              <li><b>Pre-questionnaire</b>: some questions to help us sort the collected data.</li>
              <li><b>Experiment</b>: you will be asked to complete some quick network mangement tasks using Lumi.</li>
              <li><b>Post-questionnaire</b>: let us know your thoughts on the experiment and your experience using Lumi.</li>
            </ul>
            <p>Before we start, feel free to play around with Lumi <b>on the right</b>. Intents declared here will take no effect in the experiment. Some example intents below:</p>
            <blockquote>
              <p>"Hey Lumi, please block traffic for all students."</p>
              <p>"Please make traffic coming from the Internet pass through a firewall."</p>
              <p>"Limit bandwidth usage to 50 mbps for professors."</p>
              <p>"Students can download up to 10 GB per week of data."</p>
            </blockquote>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100">
            <md-card class="chatbot">
              <iframe class="md-image" allow="microphone;" width="350" height="530" src="../../lib/client/index.html"></iframe>
            </md-card>
          </div>
        </div>
        <div class="md-layout md-alignment-top-center">
          <md-button class="md-raised md-primary" v-on:click="start()">Start evaluation</md-button>
        </div>
      </md-app-content>
    </md-app>
  </div>`,
    methods: {
        start: function (event) {
            this.$router.push('evaluation');

            // setup experiment


            // let url = "https://cors-anywhere.herokuapp.com/https://soa.smext.faa.gov/asws/api/airport/delays";
            //let resp = fetchGet("https://soa.smext.faa.gov/asws/api/airport/delays");
            //console.log(resp);
            // axios
            //   .get(url)
            //   .then(result => {
            //     //console.log("result=", result);
            //     data = result.data;
            //     this.result = data;
            //     this.arriveDepart = data.ArriveDepartDelays.arriveDepart;
            //     this.groundDelay = data.GroundDelays.groundDelay;
            //     this.groundStop = data.GroundStops.groundStop;
            //     this.showProgress = false;
            //   })
            //   .catch(error => {
            //     console.log("error", error);
            //     this.showProgress = false;
            //   });
        },
    }
});
