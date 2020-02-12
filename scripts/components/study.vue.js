Vue.component("lumi-study", {
    template: `
    <div class="study">
        <h1 class="md-display-3">User Study</h1>
        <p class="md-body-2">
            To assess the perceived value of Lumi as a means for operators "to talk to the network", we carried out a small-scale user study. Set up as an online exercise, users were able to participate in a completely anonymous fashion. Being completely anonymous, our user study did not require formal IRB approval from our university and did not raise any ethical issues.
        </p>
        <h2 class="md-display-2">Outline</h2>
        <p class="md-body-2">The user study was composed of 3 steps:</p>
        <ul class="md-body-2">
            <li><b>Pre-questionnaire</b>: some questions to help us sort the collected data.</li>
            <li><b>Evaluation</b>: participants were asked to complete some quick network mangement tasks using Lumi, in the role of a campus network operator.</li>
            <li><b>Post-questionnaire</b>: subjects thoughts on the experiment and your experience using Lumi.</li>
        </ul>
        <div class="md-layout">
            <p class="md-body-2">The questionnaire results and given tasks can be seen by clicking the button below.</p>
        </div>
        <div class="md-layout md-alignment-top-center">
            <md-button class="md-raised md-primary" to="/study">See user study</md-button>
        </div>
    </div>
    `,
    data: function () {
        return {}
    },
})
