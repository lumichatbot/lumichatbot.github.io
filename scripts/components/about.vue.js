Vue.component('lumi-about', {
    template: `
    <div class="about">
        <div class="md-layout">
            <h1 class="md-display-3">About</h1>
        </div>
        <div class="md-layout">
            <p class="md-body-2">
                In this work, we ask: what would it take for, say, a campus network operator to tell the network, using natural language, to "Inspect traffic for the dorm"? How could the network instantly and correctly translate the request into low-level configuration commands and deploy them in the network to accomplish the job it was "asked" to do?
                <br/>
                <br/>
                We answer these questions by presenting the design and implementation of Lumi, a new system that (i) allows operators to express intents in natural language, (ii) uses machine learning and operator feedback to ensure that the translated intents conform with the operator's goals and also is not ambiguous with currently deployed intents, and (iii) compiles and deploys them correctly in the network. At the core of Lumi's design is our proposed Network Intent Language (Nile) that serves as an abstraction layer between natural language intents and network configuration commands. We evaluate Lumi using synthetic and real campus network policies and show that Lumi extracts entities with high precision and compiles intents in a few milliseconds. We also report on a user study where 88.5% of participants state they would rather use Lumi exclusively or in conjunction with configuration commands.
            </p>
        </div>
        <div class="md-layout md-gutter md-alignment-top-space-between">
            <div class="md-layout-item md-size-60 md-small-size-100">
                <h1 class="md-display-1">Demo*</h1>
                <p class="md-body-2">Feel free to play around with Lumi's prototype <b>on the right</b>. Some example intents below:</p>
                <blockquote class="note-block">
                    <p>"Hey Lumi, please block traffic for all students."</p>
                    <p>"Please make traffic coming from the Internet pass through a firewall."</p>
                    <p>"Limit bandwidth usage to 50 mbps for professors."</p>
                    <p>"Students can download up to 10 GB per week of data."</p>
                </blockquote>

                <small>* First attempts may fail due to inactivity in the Heroku free-tier dyno. If so, please refresh the page and try again.</small>
            </div>
            <div class="md-layout-item md-size-40 md-small-size-100">
                <md-card md-with-hover class="chatbot">
                    <iframe class="md-image" allow="microphone;" width="350" height="530" src="../../lib/client/index.html"></iframe>
                </md-card>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {};
    },
});
