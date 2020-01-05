var evaluation = Vue.component("Evaluation", {
    template: `
  <div class="evaluation page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" to="/demo">
            <md-icon>arrow_back</md-icon>
          </md-button>

          <span class="md-title">
            <img class="logo" src="./assets/img/lumi-o.svg" alt="Lumi">
            <small>Evaluation</small>
          </span>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <md-steppers v-if="!finished" md-alternative md-linear md-dynamic-height :md-active-step.sync="activeStep">
          <md-step id="first" md-label="Pre-questionnaire" :md-done.sync="first" :md-editable="false">
            <div class="md-layout md-alignment-top-center">


              <iframe class="md-image" :src="prequestionnaireUrl" width="640" height="620" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div class="md-layout md-alignment-top-right">
              <md-button class="md-raised md-primary" @click="confirmStepOne = true">Next</md-button>
            </div>

            <md-dialog-confirm
              :md-active.sync="confirmStepOne"
              md-title="Are you sure?"
              md-content="You cannot come back to this step once you have completed it. <br>
              Please make sure you clicked <b>'Submit'</b> on the embedded Google Form."
              md-confirm-text="Next"
              md-cancel-text="Cancel"
              @md-cancel="confirmStepOne = false"
              @md-confirm="next('first', 'second')" />
          </md-step>

          <md-step id="second" md-label="Experiment" :md-done.sync="second" :md-editable="false">
            <div class="md-layout md-gutter md-alignment-center-space-between">
              <div class="md-layout-item md-size-60 md-small-size-100">
                <h2>Experiment 1</h2>
                <blockquote>
                  <p>"Hey Lumi, please block traffic for all students."</p>
                  <p>"Please make traffic coming from the Internet pass through a firewall."</p>
                  <p>"Limit bandwidth usage to 50 mbps for professors."</p>
                  <p>"Students can download up to 10 GB per week of data."</p>
                </blockquote>
              </div>
              <div class="md-layout-item md-size-40 md-small-size-100">
                <md-card class="chatbot">
                  <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                </md-card>
              </div>
            </div>
            <div class="md-layout md-alignment-top-right">
              <md-button class="md-raised md-primary" @click="confirmStepTwo = true">Next</md-button>
            </div>

            <md-dialog-confirm
              :md-active.sync="confirmStepTwo"
              md-title="Are you sure?"
              md-content="You cannot come back to this step once you have completed it. <br>
              Please make sure you completed all tasks asked of you."
              md-confirm-text="Next"
              md-cancel-text="Cancel"
              @md-cancel="confirmStepTwo = false"
              @md-confirm="next('second', 'third')" />
          </md-step>

          <md-step id="third" md-label="Post-questionnaire" :md-done.sync="third" :md-editable="false">
            <div class="md-layout md-alignment-top-center">
              <iframe class="md-image" :src="postquestionnaireUrl" width="640" height="427" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <div class="md-layout md-alignment-top-right">
              <md-button class="md-raised md-primary" @click="confirmStepThree = true">Finish</md-button>
            </div>

            <md-dialog-confirm
              :md-active.sync="confirmStepThree"
              md-title="Are you sure?"
              md-content="You cannot come back to this step once you have completed it. <br>
              Please make sure you clicked <b>'Submit'</b> on the embedded Google Form."
              md-confirm-text="Finish"
              md-cancel-text="Cancel"
              @md-cancel="confirmStepThree = false"
              @md-confirm="finish()" />
          </md-step>
        </md-steppers>
        <div v-else class="md-layout md-alignment-center-center">
          <md-empty-state
            class="md-primary"
            md-icon="done"
            md-label="You're done!"
            md-description="Thank you for your cooperation.">
            <md-button to="./" class="md-primary md-raised">Go back to home</md-button>
          </md-empty-state>
        </div>
      </md-app-content>
    </md-app>
  </div>`,
    data() {
        return {
            activeStep: 'first',
            prequestionnaireUrl: '',
            postquestionnaireUrl: '',
            demoUrl: '',
            first: false,
            second: false,
            third: false,
            finished: false,
            confirmStepOne: false,
            confirmStepTwo: false,
            confirmStepThree: false
        }
    },
    created() {
        const uuid = this.uuid4();

        this.prequestionnaireUrl = `https://docs.google.com/forms/d/e/1FAIpQLSckTXo2rsS5ee0iqEAg60RPUVrRxFT1zxKzSTbnhgOfUUX5JA/viewform?usp=pp_url&entry.1490889930=${uuid}&embedded=true`;

        this.postquestionnaireUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfMVkfGkzjJ7Q_AXaMI_kKqRsxPyuKx-egx_j3YLhGI8c_LIQ/viewform?usp=pp_url&entry.156296896=${uuid}&embedded=true`;

        this.demoUrl = `../../lib/client/index.html?uuid=${uuid}`
    },
    methods: {
        uuid4: function () {
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        },
        next: function (id, index) {
            this[id] = true;

            if (index) {
                this.activeStep = index;
            }
        },
        finish: function () {
            this.finished = true;
            console.log('finish him');
        }
    }
});
