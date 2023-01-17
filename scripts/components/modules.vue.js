Vue.component('lumi-modules', {
    template: `
    <div class="modules">
        <div class="md-layout">
            <h1 class="md-display-3">Modules</h1>
        </div>
        <div class="md-layout">
            <p class="md-body-2">
                Lumi's overall objective is to enable a network operator to express intents in natural language, instantly and correctly translate these intents into network configuration commands, and deploy them in the network to realize the operator's intents. The Figure below illustrates the high-level goal of Lumi with the intent example <i>"Hey, Lumi! Inspect traffic for the dorm"</i> and shows the breakdown of the workflow by which Lumi accomplishes the stated objective. Below, we provide a brief overview of the five key components or modules that define this workflow (<i>i.e.,</i> the Lumi pipeline) and refer to the subsequent sections for a more in-depth description of each of these modules.
            </p>
        </div>
        <div class="md-layout">
            <h1 class="md-display-1">Lumi in a Nutshell</h1>

            <md-steppers class="md-small-hide" md-alternative>
                <md-step id="first" md-label="Information Extraction">
                    <div class="md-image-wrapper">
                        <div class="md-image-wrapper">
                            <img class="md-image" src="./assets/img/modules/step-1.png" alt="Information Extraction">
                        </div>
                    </div>
                    <p class="md-body-2 note-block">
                        The main building blocks for Lumi's Information Extraction module are a chatbot interface as entry point into our system and the use of Named Entity Recognition (NER) to extract and label entities from the operators' natural language intents. Given the popularity of personal assistants such as Google Assistant, Amazon's Alexa or Apple's Siri, our goal in providing a natural language interface for Lumi goes beyond facilitating the lives of traditional network operators and seeks to also empower users with little-to-no knowledge of how to control their networks (<i>e.g.,</i> home users).
                    </p>
                </md-step>

                <md-step id="second" md-label="Intent Assembly">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-2.png" alt="Intent Assembly">
                    </div>
                    <p class="md-body-2 note-block">
                        Clearly, the output of Lumi's Information Extraction module does not translate immediately to network configuration commands. Assembling the extracted entities into a structured and well-defined intent requires an abstraction layer between natural language intents and network configurations, so it can be interpreted and checked for correctness by the operator before deployment. Such an abstraction layer has to satisfy three key requirements. First, the operations supported by the abstraction layer's grammar have to specify what entities to extract from natural language intents (high expressiveness). Second, it has to allow for easy confirmation of the extracted intents by the operators (high legibility); and third, it is also required to allow different network backends as targets and support the incorporation of other low-level configuration commands and abstractions into the intent assembly process (high portability). To satisfy these requirements, in this work, we use our Network Intent Language (Nile) as an abstraction layer language.
                    </p>
                </md-step>

                <md-step id="third" md-label="Intent Confirmation">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-3.png" alt="Intent Confirmation">
                    </div>
                    <p class="md-body-2 note-block">
                        Despite recent advances, natural language processing is prone to producing false positives or false negatives, resulting (in our case) in wrong entity tagging, which in turn leads to deploying incorrect network configuration commands. Our solution to dealing with the ambiguity that is inherent in using natural language to express network intents relies in the chatbot interface implemented as part of our first module. In particular, in designing our Intent Confirmation module, we require the output of the Intent Assembly module (<i>i.e.,</i> syntactically-correct Nile intents) to be confirmed by the operator. When presented with assembled intents that, according to the operator, result in false positives or negatives, Lumi asks for feedback that we subsequently use to augment the original training dataset with new labeled data and re-train our NER learning model in the Information Extraction module.
                    </p>
                </md-step>

                <md-step id="fourth" md-label="Ambiguity Detection">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-4.png" alt="Ambiguity Detection">
                    </div>
                    <p class="md-body-2 note-block">
                        Our goal for Lumi is to prevent ambiguous device configurations that result from its use of Nile as higher-level abstraction language. Therefore, designing the Ambiguity Detection module for Lumi requires identifying the type of ambiguities that can arise from the operations supported by Nile. To this end, we opted for a design of Lumi's Ambiguity Detection module uses a pre-trained learning model, in the form of the well-known Random Forest Classifier, to label pairs of intents as ambiguities or being amibiguity-free.
                    </p>
                </md-step>

                <md-step id="fifth" md-label="Intent Deployment">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-5.png" alt="Intent Deployment">
                    </div>
                    <p class="md-body-2 note-block">
                        The fifth and last stage of Lumi compiles the operator-confirmed and contradiction-free Nile intents into code that can be deployed on the appropriate network devices and executes the original network intent expressed by the operator in natural language. Fortunately, the abstraction layer provided by Nile enables compilations to a number of different existing network configurations, including other policy abstractions languages such as Merlin, OpenConfig, Janus, PGA, and Kinetic. For our design of Lumi's Intent Deployment module, we chose to compile structured Nile intents into Merlin programs. We picked Merlin over other alternative frameworks because of its good fit with Nile, the network features it supports, its performance, and the availability of source code.
                    </p>
                </md-step>
            </md-steppers>
            <md-steppers class="md-small-show" md-vertical>
                <md-step id="first" md-label="Information Extraction">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-1.png" alt="Information Extraction">
                    </div>
                    <p class="md-body-2 note-block ">
                        The main building blocks for Lumi's Information Extraction module are a chatbot interface as entry point into our system and the use of Named Entity Recognition (NER) to extract and label entities from the operators' natural language intents. Given the popularity of personal assistants such as Google Assistant, Amazon's Alexa or Apple's Siri, our goal in providing a natural language interface for Lumi goes beyond facilitating the lives of traditional network operators and seeks to also empower users with little-to-no knowledge of how to control their networks (<i>e.g.,</i> home users).
                    </p>
                </md-step>

                <md-step id="second" md-label="Intent Assembly">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-2.png" alt="Intent Assembly">
                    </div>
                    <p class="md-body-2 note-block">
                        Clearly, the output of Lumi's Information Extraction module does not translate immediately to network configuration commands. Assembling the extracted entities into a structured and well-defined intent requires an abstraction layer between natural language intents and network configurations, so it can be interpreted and checked for correctness by the operator before deployment. Such an abstraction layer has to satisfy three key requirements. First, the operations supported by the abstraction layer's grammar have to specify what entities to extract from natural language intents (high expressiveness). Second, it has to allow for easy confirmation of the extracted intents by the operators (high legibility); and third, it is also required to allow different network backends as targets and support the incorporation of other low-level configuration commands and abstractions into the intent assembly process (high portability). To satisfy these requirements, in this work, we use our Network Intent Language (Nile) as an abstraction layer language.
                    </p>
                </md-step>

                <md-step id="third" md-label="Intent Confirmation">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-3.png" alt="Intent Confirmation">
                    </div>
                    <p class="md-body-2 note-block">
                        Despite recent advances, natural language processing is prone to producing false positives or false negatives, resulting (in our case) in wrong entity tagging, which in turn leads to deploying incorrect network configuration commands. Our solution to dealing with the ambiguity that is inherent in using natural language to express network intents relies in the chatbot interface implemented as part of our first module. In particular, in designing our Intent Confirmation module, we require the output of the Intent Assembly module (<i>i.e.,</i> syntactically-correct Nile intents) to be confirmed by the operator. When presented with assembled intents that, according to the operator, result in false positives or negatives, Lumi asks for feedback that we subsequently use to augment the original training dataset with new labeled data and re-train our NER learning model in the Information Extraction module.
                    </p>
                </md-step>

                <md-step id="fourth" md-label="Ambiguity Detection">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-4.png" alt="Ambiguity Detection">
                    </div>
                    <p class="md-body-2 note-block">
                        Our goal for Lumi is to prevent amibiguitying device configurations that result from its use of Nile as higher-level abstraction language. Therefore, designing the Ambiguity Detection module for Lumi requires identifying the type of ambiguities that can arise from the operations supported by Nile. To this end, we opted for a design of Lumi's Ambiguity Detection module uses a pre-trained learning model, in the form of the well-known Random Forest Classifier, to label pairs of intents as ambiguities or being amibiguity-free.
                    </p>
                </md-step>

                <md-step id="fifth" md-label="Intent Deployment">
                    <div class="md-image-wrapper">
                        <img class="md-image" src="./assets/img/modules/step-5.png" alt="Intent Deployment">
                    </div>
                    <p class="md-body-2 note-block">
                        The fifth and last stage of Lumi compiles the operator-confirmed and contradiction-free Nile intents into code that can be deployed on the appropriate network devices and executes the original network intent expressed by the operator in natural language. Fortunately, the abstraction layer provided by Nile enables compilations to a number of different existing network configurations, including other policy abstractions languages such as Merlin, OpenConfig, Janus, PGA, and Kinetic. For our design of Lumi's Intent Deployment module, we chose to compile structured Nile intents into Merlin programs. We picked Merlin over other alternative frameworks because of its good fit with Nile, the network features it supports, its performance, and the availability of source code.
                    </p>
                </md-step>
            </md-steppers>
        </div>
    </div>
    `,
    data: function () {
        return {};
    },
});
