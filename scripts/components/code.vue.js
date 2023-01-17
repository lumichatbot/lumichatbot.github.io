Vue.component('lumi-code', {
    template: `
    <div class="code">
        <div class="md-layout">
            <h1 class="md-display-3">Code</h1>
        </div>
        <div class="md-layout">
            <p class="md-body-2">
                The source code for Lumi is available on the following repositories:
            </p>
        </div>

        <div class="md-layout">
            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title">Dialogflow Web Client</div>
                    <div class="md-subhead">No correspoding module</div>
                </md-card-header>

                <md-card-content>
                    Repository containing code for a Dialogflow web client, as seen in the demo.
                    This repository is not considered part of the Information Extraction module, as it is just an example plaftorm for using Lumi.
                </md-card-content>

                <md-card-actions md-alignment="right">
                    <md-button class="md-icon-button" href="https://github.com/lumichatbot/chatbot">
                        <md-icon md-src="./assets/img/github.svg"></md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>
            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title">Lumi Chatbot</div>
                    <div class="md-subhead">Information Extraction</div>
                </md-card-header>

                <md-card-content>
                    Exported Dialogflow Lumi chatbot interface as JSON files.
                    This repository contains the code for the Information Extraction module.
                </md-card-content>

                <md-card-actions md-alignment="right">
                    <md-button class="md-icon-button" href="https://github.com/lumichatbot/chatbot">
                        <md-icon md-src="./assets/img/github.svg"></md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>

            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title">Lumi Webhook</div>
                    <div class="md-subhead">Assembly, Confirmation & Ambiguities</div>
                </md-card-header>

                <md-card-content>
                    Webhook RestAPI actions for the Lumi chatbot interface.
                    This repository contains the code for the Intent Assembly, Intent Confirmation and Ambiguities Detection module.
                </md-card-content>

                <md-card-actions md-alignment="right">
                    <md-button class="md-icon-button" href="https://github.com/lumichatbot/webhook">
                        <md-icon md-src="./assets/img/github.svg"></md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>

            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title">Lumi Deployer</div>
                    <div class="md-subhead">Deployment</div>
                </md-card-header>

                <md-card-content>
                    Nile intent compiler and deployer for the Lumi chatbot.
                    This repository contains the code for the Intent Deployment module.
                </md-card-content>

                <md-card-actions md-alignment="right">
                    <md-button class="md-icon-button" href="https://github.com/lumichatbot/deployer">
                        <md-icon md-src="./assets/img/github.svg"></md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>
        </div>


    </div>
    `,
    data: function () {
        return {};
    },
});
