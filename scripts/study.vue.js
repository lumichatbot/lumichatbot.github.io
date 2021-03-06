var study = Vue.component("Study", {
    template: `
    <div class="study page-container">
        <md-app md-waterfall md-mode="overlap">
            <md-app-toolbar class="md-primary md-large">
                <div class="md-toolbar-row">
                    <md-button class="md-icon-button" to="./">
                        <md-icon>arrow_back</md-icon>
                    </md-button>

                    <span class="md-title">
                        <img class="logo" src="./assets/img/lumi-o.svg" alt="Lumi">
                        <small>User Study</small>
                    </span>
                </div>
            </md-app-toolbar>

            <md-app-content>
                <small v-if="!finished" class="md-layout md-alignment-center-space-between">
                    <span>Questions or problems? Contact us at <b>lumi.chatbot@gmail.com</b></span>
                </small>
                <br>
                <md-steppers v-if="!finished" md-alternative :md-active-step.sync="activeStep">
                    <md-step id="one" md-label="Pre-questionnaire" :md-done.sync="steps.one">
                        <div class="md-layout md-alignment-top-center">
                            <iframe class="md-image" src="./assets/files/pre-questionnaire-results.pdf" width="640" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                        <div class="md-layout md-alignment-top-right">
                            <md-button class="md-raised md-primary" @click="next()">Next</md-button>
                        </div>
                    </md-step>
                    <md-step id="two" md-label="Task 1" :md-done.sync="steps.two">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-100">
                                <p class="md-body-2"><b>Congratulations!</b> You've just been hired as a network operator at the prestigious Fictitious University. Here's your one task!</p>
                            </div>
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2 class="md-display-2">Task 1: middlebox chaining</h2>
                                <p class="md-body-2">Consider the simplified network infrastructure depicted <b>below</b>. Students are accessing suspicius aplications in the labs. Please use <b>Lumi's</b> chatbot interface on the right to ensure that all traffic from the Internet to the labs is carefully inspected by the Deep Packet Inspection (DPI) middlebox.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Current</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-1-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Goal</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-1-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                                <div class="md-layout md-alignment-center-center">
                                    <small>Write <b>cancel</b> at any time to start over.</small>
                                </div>
                            </div>
                        </div>

                        <div class="stepper-buttons md-layout md-alignment-center-space-between">
                            <p class="md-body-2">Click on <b>Check answer</b> to see if you have completed the task.</p>
                            <md-button class="md-raised md-primary" @click="checkTask(1)">Check answer</md-button>
                        </div>
                    </md-step>

                    <md-step id="three" md-label="Task 2" :md-done.sync="steps.three">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2 class="md-display-2">Task 2: rate limiting</h2>
                                <p class="md-body-2">Once again consider the simplified network infrastructure depicted <b>below</b>. Some guest users in the University network have started using torrent applications to download movies. The torrent traffic has overflown some of the network's 10 Gbps and 1 Gbps bandwidth links. Please use <b>Lumi's</b> chatbot interface on the right to limit to 100 Mbps the bandwidth torrent traffic can consume.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Current</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-2-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Goal</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-2-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                                <div class="md-layout md-alignment-center-center">
                                    <small>Write <b>cancel</b> at any time to start over.</small>
                                </div>
                            </div>
                        </div>

                        <div class="stepper-buttons md-layout md-alignment-center-space-between">
                            <p class="md-body-2">Click on <b>Check answer</b> to see if you have completed the task.</p>
                            <md-button class="md-raised md-primary" @click="checkTask(2)">Check answer</md-button>
                        </div>
                    </md-step>

                    <md-step id="four" md-label="Task 3" :md-done.sync="steps.four">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2 class="md-display-2">Task 3: usage quotas</h2>
                                <p class="md-body-2">Consider the simplified network infrastructure depicted <b>below</b>. Some students in the dorms have been binge-watching the new season of Game of Thrones. However, apperently, all of them have 4K TVs, which is causing them to download an excessive amount of data. Please use <b>Lumi's</b> chatbot interface on the right to set a 10 GB per week download quota for students in dorms.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Current</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-3-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Goal</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-3-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                                <div class="md-layout md-alignment-center-center">
                                    <small>Write <b>cancel</b> at any time to start over.</small>
                                </div>
                            </div>
                        </div>

                        <div class="stepper-buttons md-layout md-alignment-center-space-between">
                            <p class="md-body-2">Click on <b>Check answer</b> to see if you have completed the task.</p>
                            <md-button class="md-raised md-primary" @click="checkTask(3)">Check answer</md-button>
                        </div>
                    </md-step>

                    <md-step id="five" md-label="Task 4" :md-done.sync="steps.five">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2 class="md-display-2">Task 4: firewall rules </h2>
                                <p class="md-body-2">Consider the simplified network infrastructure depicted <b>below</b>. After careful inspection of the traffic from the research labs, you have noticed that the suspicius traffic from Task 1 originated from students accessing a pirate streaming website F2movies. Please use <b>Lumi's</b> chatbot interface on the right to block F2movies traffic for students in the labs.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Current</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-4-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Goal</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-4-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                                <div class="md-layout md-alignment-center-center">
                                    <small>Write <b>cancel</b> at any time to start over.</small>
                                </div>
                            </div>
                        </div>

                        <div class="stepper-buttons md-layout md-alignment-center-space-between">
                            <p class="md-body-2">Click on <b>Check answer</b> to see if you have completed the task.</p>
                            <md-button class="md-raised md-primary" @click="checkTask(4)">Check answer</md-button>
                        </div>
                    </md-step>

                    <md-step id="six" md-label="Task 5" :md-done.sync="steps.six">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2 class="md-display-2">Task 5: temporal throttling</h2>
                                <p class="md-body-2">Consider the simplified network infrastructure depicted <b>below</b>. Lately you have received many complaints on traffic congestion during peak hours. Upon further analysis, you realize that some services hosted in the servers have been receiving too many access from 4PM to 7PM everyday. Please use <b>Lumi's</b> chatbot interface on the right to set a 5 Gbps bandwidth limit for the server racks from 4PM to 7PM.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Current</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-5-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h3 class="md-display-1">Goal</h3>
                                        <img class="md-image task-image" src="assets/img/demo/task-5-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                                <div class="md-layout md-alignment-center-center">
                                    <small>Write <b>cancel</b> at any time to start over.</small>
                                </div>
                            </div>
                        </div>

                        <div class="stepper-buttons md-layout md-alignment-center-space-between">
                            <p class="md-body-2">Click on <b>Check answer</b> to see if you have completed the task.</p>
                            <md-button class="md-raised md-primary" @click="checkTask(5)">Check answer</md-button>
                        </div>
                    </md-step>

                    <md-step id="seven" md-label="Post-questionnaire" :md-done.sync="steps.seven">
                        <div class="md-layout md-alignment-top-center">
                            <iframe class="md-image" src="./assets/files/post-questionnaire-results.pdf" width="640" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                        <div class="md-layout md-alignment-top-right">
                            <md-button class="md-raised md-primary" @click="finish()">Finish</md-button>
                        </div>
                    </md-step>
                </md-steppers>
                <div v-else class="md-layout md-alignment-center-center">
                    <md-empty-state class="md-primary" md-icon="emoji_events" md-label="You're done!" md-description="Thank you for your cooperation.">
                        <md-button to="./" class="md-primary md-raised">Go back to home</md-button>
                    </md-empty-state>
                </div>

                <md-dialog :md-active.sync="checkTaskDialog" :md-close-on-esc="false" :md-click-outside-to-close="false">
                    <template v-if="checking">
                        <md-dialog-title>Checking task...</md-dialog-title>
                        <md-dialog-content class="md-layout md-alignment-center-center">
                            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
                        </md-dialog-content>
                    </template>
                    <template v-else>
                        <template v-if="taskDone">
                            <md-dialog-content>
                                <md-empty-state class="md-primary" md-icon="emoji_emotions" md-label="Task completed!" md-description="Please click Next to continue."/>
                            </md-dialog-content>
                            <md-dialog-actions>
                                <md-button class="md-primary" @click="next()">Next</md-button>
                            </md-dialog-actions>
                        </template>
                        <template v-else>
                            <md-dialog-content class="md-layout md-alignment-center-center">
                                <md-empty-state class="md-accent" md-icon="sentiment_very_dissatisfied" md-label="Task incomplete" md-description="Apperently you haven't completed the task at hand. Please go back ang give it another try! Try rephrashing your intent!"/>
                                <p class="md-body-2"><b>Missing keywords</b>: {{ missingKeywords.join(', ') }}</p>
                            </md-dialog-content>

                            <md-dialog-actions>
                                <md-button @click="checkTaskDialog = false">Go back</md-button>
                                <md-button class="md-accent" @click="next()">Skip</md-button>
                            </md-dialog-actions>
                        </template>
                    </template>
                </md-dialog>
            </md-app-content>
        </md-app>
    </div>
    `,
    data() {
        return {
            demoUrl: '',
            uuid: '',
            activeStep: 'one',
            activeStepIdx: 0,
            steps: {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false,
                seven: false
            },
            finished: false,
            checking: false,
            taskDone: false,
            missingKeywords: [],
            checkTaskDialog: false,
            confirmPreQuest: false,
            confirmPostQuest: false
        }
    },
    created() {
        if (localStorage.getItem('session') !== null) {
            this.uuid = localStorage.getItem('session')
        } else {
            this.uuid = this.uuid4();
            localStorage.setItem('session', this.uuid)
        }

        if (localStorage.getItem('activeStepIdx') !== null) {
            this.activeStepIdx = localStorage.getItem('activeStepIdx')
            this.activeStep = Object.keys(this.steps)[this.activeStepIdx]
            for (i = 0; i < this.activeStepIdx; i++) {
                this.steps[Object.keys(this.steps)[i]] = true;
            }
        }

        this.demoUrl = `../../lib/client/index.html?uuid=${this.uuid}&live=true`
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
        checkTask: function (task) {
            this.checkTaskDialog = true;
            this.checking = true
            this.taskDone = false;
            const url = get_webhook_url()
            axios
                .get(`${url}/check/${this.uuid}/${task}`)
                .then(result => {
                    this.taskDone = result.data.done;
                    this.missingKeywords = result.data.missing || [];
                })
                .catch(error => {
                    this.taskDone = false;
                    console.log("error", error);
                }).finally(() => this.checking = false);
        },
        next: function () {
            this.checkTaskDialog = false;
            this.steps[this.activeStep] = true;
            this.activeStepIdx = Object.keys(this.steps).indexOf(this.activeStep);
            this.activeStepIdx++;
            this.activeStep = Object.keys(this.steps)[this.activeStepIdx]
        },
        finish: function () {
            this.finished = true;
            const url = get_webhook_url()
            axios
                .get(`${url}/finish/${this.uuid}`)
                .then(result => {
                    console.log("result", result.data);
                    // reset session
                    this.uuid = this.uuid4();
                    localStorage.setItem('session', this.uuid)
                })
                .catch(error => console.log("error", error));
        }
    }
});
