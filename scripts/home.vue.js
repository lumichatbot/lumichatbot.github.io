var home = Vue.component("Home", {
    template: `
    <div class="home page-container">
        <md-app md-waterfall md-mode="overlap">
            <md-app-toolbar class="md-primary md-large">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button" href="https://github.com/lumichatbot">
                            <md-icon md-src="./assets/img/github.svg"></md-icon>
                        </md-button>
                    </div>
                </div>
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-center">
                        <span class="md-title">
                            <img class="logo" src="./assets/img/lumi-o.svg" alt="Lumi">
                        </span>
                    </div>
                </div>
                <div class="md-toolbar-row"></div>
            </md-app-toolbar>

            <md-app-content>
                <div class="md-toolbar-row">
                    <md-tabs class="md-transparent" md-alignment="fixed">
                        <md-tab id="tab-about" md-label="About"><lumi-about></lumi-about></md-tab>
                        <md-tab id="tab-modules" md-label="Modules"><lumi-modules></lumi-modules></md-tab>
                        <md-tab id="tab-datasets" md-label="Datasets"><lumi-datasets></lumi-datasets></md-tab>
                        <md-tab id="tab-code" md-label="Code"><lumi-code></lumi-code></md-tab>
                        <md-tab id="tab-study" md-label="User Study"><lumi-study></lumi-study></md-tab>
                        <md-tab id="tab-appendix" md-label="Appendix"><lumi-appendix></lumi-appendix></md-tab>
                    </md-tabs>
                </div>
            </md-app-content>
        </md-app>
    </div>
    `,
    props: [],
    data() {
        return {};
    }
});
