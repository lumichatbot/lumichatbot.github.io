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
                <small class="md-layout md-alignment-center-right">Session UUID: {{ uuid }}</small>
                <md-steppers v-if="!finished" md-alternative md-linear md-dynamic-height :md-active-step.sync="activeStep">
                    <md-step id="first" md-label="Pre-questionnaire" :md-done.sync="first" :md-editable="false">
                        <div class="md-layout md-alignment-top-center">
                            <iframe class="md-image" :src="preQuestUrl" width="640" height="620" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                        <div class="md-layout md-alignment-top-right">
                            <md-button class="md-raised md-primary" @click="confirmPreQuest = true">Next</md-button>
                        </div>

                        <md-dialog-confirm :md-active.sync="confirmPreQuest" md-title="Are you sure?" md-content="You cannot come back to this step once you have completed it. <br> Please make sure you clicked <b>'Submit'</b> on the embedded Google Form." md-confirm-text="Next" md-cancel-text="Cancel" @md-cancel="confirmPreQuest = false" @md-confirm="next('first', 'second')" />
                    </md-step>

                    <md-step id="second" md-label="Task 1" :md-done.sync="second" :md-editable="false">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-100">
                                <p><b>Congratulations!</b> You've just been hired as a network operator at the prestigious Fictitious University. Here's your first task!</p>
                            </div>
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2>Task 1: middlebox chaining</h2>
                                <p>Consider the simplified network infrastructure depicted <b>below</b>. Students are accessing suspicius aplications in the labs. Please use <b>Lumi's</b> chatbot interface on the right to ensure that all traffic from the Internet to the labs is carefully inspected by the Deep Packet Inspection (DPI) middlebox, as depicted below.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Current</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-1-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Goal</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-1-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                            </div>
                        </div>

                        <div class="md-layout md-alignment-center-right">
                            <md-button class="md-raised md-primary" @click="next('second', 'third')">Next</md-button>
                        </div>
                    </md-step>

                    <md-step id="third" md-label="Task 2" :md-done.sync="third" :md-editable="false">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2>Task 2: rate limiting</h2>
                                <p>Once again consider the simplified network infrastructure depicted <b>below</b>. Some guest users in the University network have started using torrent applications to download movies. The torrent traffic has overflown some of the network's 10 Gbps and 1 Gbps bandwidth links. Please use <b>Lumi's</b> chatbot interface on the right to <b>limit to 100 Mbps</b> the bandwidth torrent traffic can consume.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Current</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-2-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Goal</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-2-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                            </div>
                        </div>

                        <div class="md-layout md-alignment-center-right">
                            <md-button class="md-raised md-primary" @click="next('third', 'fourth')">Next</md-button>
                        </div>
                    </md-step>

                    <md-step id="fourth" md-label="Task 3" :md-done.sync="fourth" :md-editable="false">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2>Task 3: usage quotas</h2>
                                <p>Consider the simplified network infrastructure depicted <b>below</b>. Some students in the dorms have been bing-watching the new season of Game of Thrones. However, apperently, all of them have 4K TVs, which is causing them to download an excessive amount of data. Please use <b>Lumi's</b> chatbot interface on the right to <b>set a 10 GB per week download quota</b> for students in dorms.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Current</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-3-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Goal</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-3-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                            </div>
                        </div>

                        <div class="md-layout md-alignment-center-right">
                            <md-button class="md-raised md-primary" @click="next('fourth', 'fifth')">Next</md-button>
                        </div>
                    </md-step>

                    <md-step id="fifth" md-label="Task 4" :md-done.sync="fifth" :md-editable="false">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2>Task 4: firewall rules </h2>
                                <p>Consider the simplified network infrastructure depicted <b>below</b>. After careful inspection of the traffic from the research labs, you have noticed that the suspicius traffic from Task 1 originated from students accessing a pirate streaming website F2movies. Please use <b>Lumi's</b> chatbot interface on the right to <b>block F2movies traffic</b> for students in the labs.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Current</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-4-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Goal</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-4-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                            </div>
                        </div>

                        <div class="md-layout md-alignment-center-right">
                            <md-button class="md-raised md-primary" @click="next('fifth', 'sixth')">Next</md-button>
                        </div>
                    </md-step>

                    <md-step id="sixth" md-label="Task 5" :md-done.sync="sixth" :md-editable="false">
                        <div class="md-layout md-gutter md-alignment-bottom-space-between">
                            <div class="md-layout-item md-size-60 md-small-size-100">
                                <h2>Task 5: temporal throttling</h2>
                                <p>Consider the simplified network infrastructure depicted <b>below</b>. Lately you have received many complaints on traffic congestion during peak hours. Upon further analysis, you realize that some services hosted in the servers have been receiving too many access from 4PM to 7PM everyday. Please use <b>Lumi's</b> chatbot interface on the right <b> to set a 5 Gbps bandwidth limit</b> for the server racks <b> from 4PM to 7PM</b>.</p>

                                <div class="md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Current</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-5-before.png">
                                    </div>
                                    <div class="md-layout-item md-size-50 md-small-size-100 task-image-container">
                                        <h2>Goal</h2>
                                        <img class="md-image task-image" src="assets/img/demo/task-5-after.png">
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-40 md-small-size-100">
                                <md-card class="chatbot">
                                    <iframe class="md-image" allow="microphone;" width="350" height="530" :src="demoUrl"></iframe>
                                </md-card>
                            </div>
                        </div>

                        <div class="md-layout md-alignment-center-right">
                            <md-button class="md-raised md-primary" @click="next('sixth', 'seventh')">Next</md-button>
                        </div>
                    </md-step>

                    <md-step id="seventh" md-label="Post-questionnaire" :md-done.sync="seventh" :md-editable="false">
                        <div class="md-layout md-alignment-top-center">
                            <iframe class="md-image" :src="postQuestUrl" width="640" height="427" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                        <div class="md-layout md-alignment-top-right">
                            <md-button class="md-raised md-primary" @click="confirmPostQuest = true">Finish</md-button>
                        </div>

                        <md-dialog-confirm :md-active.sync="confirmPostQuest" md-title="Are you sure?" md-content="You cannot come back to this step once you have completed it. <br> Please make sure you clicked <b>'Submit'</b> on the embedded Google Form." md-confirm-text="Finish" md-cancel-text="Cancel" @md-cancel="confirmPostQuest = false" @md-confirm="finish()" />
                    </md-step>
                </md-steppers>
                <div v-else class="md-layout md-alignment-center-center">
                    <md-empty-state class="md-primary" md-icon="done" md-label="You're done!" md-description="Thank you for your cooperation.">
                        <md-button to="./" class="md-primary md-raised">Go back to home</md-button>
                    </md-empty-state>
                </div>
            </md-app-content>
        </md-app>
    </div>
    `,
    data() {
        return {
            activeStep: 'first',
            preQuestUrl: '',
            postQuestUrl: '',
            demoUrl: '',
            uuid: '',
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false,
            seventh: false,
            finished: false,
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

        this.preQuestUrl = `https://docs.google.com/forms/d/e/1FAIpQLSckTXo2rsS5ee0iqEAg60RPUVrRxFT1zxKzSTbnhgOfUUX5JA/viewform?usp=pp_url&entry.1490889930=${this.uuid}&embedded=true`;

        this.postQuestUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfMVkfGkzjJ7Q_AXaMI_kKqRsxPyuKx-egx_j3YLhGI8c_LIQ/viewform?usp=pp_url&entry.156296896=${this.uuid}&embedded=true`;

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
