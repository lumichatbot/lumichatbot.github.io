Vue.component("lumi-datasets", {
    template: `
    <div class="datasets">
        <div class="md-layout">
            <h1 class="md-display-3">Datasets</h1>
        </div>
        <div class="md-layout">
            <p class="md-body-2">
                Every dataset used in the Lumi project is made available, and briefly described, below:
            </p>
        </div>

        <div v-if="!showExtraction && !showConflicts && !showDeployment" class="md-layout md-alignment-center-space-around">
            <md-card @click.native="showExtraction = true" md-with-hover>
                <md-ripple>
                    <md-card-media>
                        <img src="./assets/img/filter.svg" alt="Information Extraction">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Information Extraction</div>
                        <div class="md-subhead">Alpha & Campi</div>
                    </md-card-header>
                </md-ripple>
            </md-card>

            <md-card @click.native="showConflicts = true" md-with-hover>
                <md-ripple>
                    <md-card-media>
                        <img src="./assets/img/exchange.svg" alt="Conflicts Detection">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Conflicts Detection</div>
                        <div class="md-subhead">Synthetic & Campi</div>
                    </md-card-header>
                </md-ripple>
            </md-card>

            <md-card @click.native="showDeployment = true" md-with-hover>
                <md-ripple>
                    <md-card-media>
                        <img src="./assets/img/rocket.svg" alt="Intent Deployment">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">Intent Deployment</div>
                        <div class="md-subhead">Synthetic</div>
                    </md-card-header>
                </md-ripple>
            </md-card>
        </div>

        <div v-if="showExtraction">
            <div v-if="!showCampi">
                <div class="md-layout md-alignment-center-left">
                    <md-button class="md-icon-button" @click="showExtraction = false">
                        <md-icon>arrow_back</md-icon>
                    </md-button>
                    <h2 class="md-title">Information Extraction Datasets</h2>
                </div>

                <div class="md-layout">
                    <md-card md-with-hover>
                        <md-card-header>
                            <div class="md-title">Alpha Dataset</div>
                            <div class="md-subhead">Manually crafted</div>
                        </md-card-header>

                        <md-card-content>
                            Manufactured hand-annotated dataset with 70 examples of network intents as
                            if an operator were giving commands to Lumi.
                        </md-card-content>

                        <md-card-actions md-alignment="right">
                            <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/extraction_alpha.json">
                                <md-icon md-src="./assets/img/github.svg"></md-icon>
                            </md-button>
                        </md-card-actions>
                    </md-card>

                    <md-card md-with-hover>
                        <md-card-header>
                            <div class="md-title">Campi Dataset</div>
                            <div class="md-subhead">Accessed on September 9th, 2019</div>
                        </md-card-header>

                        <md-card-content>
                            Public policies of 50 campus networks of US universities. To build the campi dataset, we crawled through the websites of the universities and manually parsed the policy documents to extract one-phrase intents. From those 50 university policies, we extracted 50 network intents. Overall, most universities have network policies related to usage quotas, rate limiting and ACL, all of which we can express in Nile.
                        </md-card-content>

                        <md-card-actions md-alignment="space-between">
                            <md-button @click="showCampi = true">Learn more</md-button>
                            <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/extraction_campi.json">
                                <md-icon md-src="./assets/img/github.svg"></md-icon>
                            </md-button>
                        </md-card-actions>
                    </md-card>
                </div>
            </div>
            <div v-if="showCampi">
                <div class="md-layout md-alignment-center-left">
                    <md-button class="md-icon-button" @click="showCampi = false">
                        <md-icon>arrow_back</md-icon>
                    </md-button>
                    <h2 class="md-title">Campi Dataset</h2>
                </div>

                <div class="md-layout md-alignment-center-left">
                    <p class="md-body-2">
                        Public policies of 50 campus networks of US universities. To build the campi dataset, we crawled through the websites of the universities and manually parsed the policy documents to extract one-phrase intents. From those 50 university policies, we extracted 50 network intents. Overall, most universities have network policies related to usage quotas, rate limiting and ACL, all of which we can express in Nile.
                    </p>
                    <blockquote class="note-block">
                        All websites linked were accessed on September 9th, 2019.
                    </blockquote>
                </div>

                <div class="md-layout md-alignment-center-space-around">
                    <template v-for="uni in universities">
                        <md-card class="university" md-with-hover>
                            <md-card-media>
                                <img class="logo" :src="uni.logoUrl" :alt="uni.name">
                            </md-card-media>

                            <md-card-header>
                                <div class="md-title">{{uni.name}}</div>
                            </md-card-header>

                            <md-card-actions md-alignment="right">
                                <md-button class="md-icon-button" :href="uni.url">
                                    <md-icon>open_in_new</md-icon>
                                </md-button>
                            </md-card-actions>
                        </md-card>
                    </template>
                </div>
            </div>
        </div>

        <div v-if="showConflicts">
            <div class="md-layout md-alignment-center-left">
                <md-button class="md-icon-button" @click="showConflicts = false">
                    <md-icon>arrow_back</md-icon>
                </md-button>
                <h2 class="md-title">Conflicts Detection Datasets</h2>
            </div>

            <div class="md-layout">
                <md-card md-with-hover>
                    <md-card-header>
                        <div class="md-title">Synthetic Datasets</div>
                        <div class="md-subhead">Automatically generated</div>
                    </md-card-header>

                    <md-card-content>
                        We considered a standard campus network topology and used known services, groups, and traffic to create random pairs of Nile intents with and without conflict. This effort resulted in five different-sized datasets (100, 1,000, 2,500, 5,000 and 10,000) of pairs of Nile intents that were "hand-annotated" as conflicts or being conflict-free.
                    </md-card-content>

                    <md-card-actions md-alignment="right">
                        <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook/tree/master/res/dataset">
                            <md-icon md-src="./assets/img/github.svg"></md-icon>
                        </md-button>
                    </md-card-actions>
                </md-card>

                <md-card md-with-hover>
                    <md-card-header>
                        <div class="md-title">Conflicts By University Dataset</div>
                        <div class="md-subhead">Intents in Campi dataset by university</div>
                    </md-card-header>

                    <md-card-content>
                        This dataset is composed of pairs of intents from the Campi dataset (expressed in Nile), to identify conflicts in the policies published by the different universities. Universities with only one intent were discarded because we require at least two intents to check for conflicts. We manually labeled each pair of intents as having a conflict or being conflict-free, and identified its conflict type.
                    </md-card-content>

                    <md-card-actions md-alignment="right">
                        <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/conflicts_campi_uni.json">
                            <md-icon md-src="./assets/img/github.svg"></md-icon>
                        </md-button>
                    </md-card-actions>
                </md-card>


                <md-card md-with-hover>
                    <md-card-header>
                        <div class="md-title">Campi Conflicts Dataset</div>
                        <div class="md-subhead">All pairs of intents in Campi dataset</div>
                    </md-card-header>

                    <md-card-content>
                        This dataset was obtained by pairing intents from the Campi dataset, but without separating intents by university. The resulting dataset consists of 1,221 unique intent pairs that we also manually labeled as having a conflict (71) or being conflict-free (1114) and categorized by type.
                    </md-card-content>

                    <md-card-actions md-alignment="right">
                        <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/conflicts_campi_all.json">
                            <md-icon md-src="./assets/img/github.svg"></md-icon>
                        </md-button>
                    </md-card-actions>
                </md-card>
            </div>
        </div>

        <div v-if="showDeployment">
            <div class="md-layout md-alignment-center-left">
                <md-button class="md-icon-button" @click="showDeployment = false">
                    <md-icon>arrow_back</md-icon>
                </md-button>
                <h2 class="md-title">Intent Deployment Datasets</h2>
            </div>

            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title">Nile Intents Dataset</div>
                    <div class="md-subhead">Increasingly complex intents</div>
                </md-card-header>

                <md-card-content>
                    This dataset is comprised of five categories of Nile intents, with an increasing level of complexity: middlebox chaining, ACL, QoS, temporal, and intents with mixed operations. The last category of intents mixes Nile operations with distinct goals, which we use to evaluate the deployment of more complex intents. This dataset contains 30 intents per category, totaling 150 different intents.
                </md-card-content>

                <md-card-actions md-alignment="right">
                    <md-button class="md-icon-button" href="https://github.com/lumichatbot/deployer/blob/master/res/results/compilation.json">
                        <md-icon md-src="./assets/img/github.svg"></md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
    `,
    data: function () {
        return {
            showExtraction: false,
            showCampi: false,
            showConflicts: false,
            showDeployment: false,
            universities: uniList
        }
    }
})




// <div class="md-layout">
//     <h2 class="md-display-2">Alpha</h2>
//     <p class="md-body-2">
//         Manufactured hand-annotated dataset with 70 examples of network intents as if an operator were giving commands to Lumi.
//         <br>Available at <a >Github</a>
//     </p>
// </div>
// <div class="md-layout">
//     <h2 class="md-display-2">Campi</h2>
//     <p class="md-body-2">
//
//     </p>
// </div>
