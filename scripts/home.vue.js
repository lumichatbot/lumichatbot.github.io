$(document).ready(function () {
    $(document).on("scroll", onScroll);

    let refinement_steps = ['#extraction', '#assembly', '#confirmation', '#contradiction-detection', '#deployment'];

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {

        let href = $(this).attr('href');

        if (refinement_steps.includes(href)) {
            refinement_steps.forEach(function (elem) {
                $(elem).css('display', 'none');
            });
            $(href).css('display', 'inline');
        }

        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 65
        }, 500, 'swing', function () {
            window.location.position = $target.offset().top - 65;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
            $('div#menu-center').css('margin-top', '-65px');
            $('div#img-lumi').css('text-align', 'left');
            $('div#img-lumi').css('margin-top', '-55px');
            $('#img-lumi img').css('height', '65px');
        } else {
            if (scrollPos == 0) {
                $('div#menu-center').css('margin-top', '0');
                $('div#img-lumi').css('text-align', 'center');
                $('div#img-lumi').css('margin-top', '0');
                $('#img-lumi img').css('height', '150px');

            }
            currLink.removeClass("active");
        }
    });
}


var home = Vue.component("Home", {
    template: `
    <div class="page-container">
        <!-- HEADER -->
        <div id="header_wrap" class="outer">
            <header class="inner">
                <a id="forkme_banner" href="https://github.com/lumichatbot">View on GitHub</a>

                <div class="menu">
                    <div id="img-lumi">
                        <img src="./assets/img/lumi-o.svg" height="150px">
                    </div>
                    <div id="menu-center">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#refinement">Intent Refinement</a></li>
                            <li><a href="#datasets">Datasets</a>
                            <li><a href="#code">Code</a></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>

        <!-- MAIN CONTENT -->
        <div id="main_content_wrap" class="outer">
            <section id="main_content" class="inner">
                <div id="about">
                    <h2>About</h2>
                    <p align="justify">
                        Intent-Based Networking (IBN) promises to improve network management by letting operators specify network
                        policies in high-level languages, including a natural language. Because the translation from natural language
                        to
                        device configurations presents many challenges, IBN with natural language is not yet a reality. The myriad
                        devices and configuration commands result in a large search space for information extraction from the input
                        text, making the problem intractable. Also, incremental policy deployment often leads to multiple conflicts
                        and
                        contradictions that might result in policy violations.

                        In this paper, we present Lumi, a novel intent refinement and deployment system that allows operators to
                        express
                        intents in natural language. The key insight of Lumi is the use of an intermediate representation
                        (<em>Nile</em>) that resembles a natural language. The reduced grammar and the small number of entities of
                        <em>Nile</em> limit the search scope for information extraction and simplify contradiction detection. Lumi
                        consists of five stages: information extraction, intent assembly, intent confirmation, contradiction
                        detection,
                        and intent deployment. We evaluate each of these stages using synthetic and real campus network policies and
                        show that Lumi is precise, scalable, and able to deploy a wide range of network policies.
                    </p>
                </div><!-- about -->

                <div id="refinement">

                    <h2>Intent Refinement</h2>

                    <div id="refinement-image">
                        <img src="assets/img/refinement/refinement_top.svg" width="65%"> <br>
                        <a href="#extraction"><img src="assets/img/refinement/refinement_1.svg" width="17%"></a>
                        <a href="#assembly"><img src="assets/img/refinement/refinement_2.svg" width="17%"></a>
                        <a href="#confirmation"><img src="assets/img/refinement/refinement_3.svg" width="17%"></a>
                        <a href="#contradiction-detection"><img src="assets/img/refinement/refinement_4.svg" width="17%"></a>
                        <a href="#deployment"><img src="assets/img/refinement/refinement_5.svg" width="17%"></a>
                    </div>

                    <div id="process">

                        <div id="extraction" class="refinement">
                            <h4>Information Extraction</h4>

                            <p>
                                We rely on Named Entity Recognition (NER), which leverages machine learning to extract and label entities
                                from
                                the operator utterances, such as
                                endpoints, middleboxes, and temporal conigurations for the
                                policy. We implement this stage using a chatbot-like conversational interface with multi-platform support,
                                allowing the
                                deployment of Lumi not only for traditional network operators but also for home users. For example, home
                                users
                                could
                                use Lumi to prioritize streaming traic in their networks during speciic hours of the day
                            </p>
                        </div>

                        <div id="assembly" class="refinement">
                            <h4>Intent assembly</h4>

                            <p>
                                We use the extracted entities to compose a network program in our new Network Intent LanguagE
                                (<em>Nile</em>),
                                which closely resembles natural language.
                                We leverage the <em>Nile</em> grammar to make sure the operator
                                has provided enough context and information to build a
                                syntactically-correct <em>Nile</em> intent. If the grammar enforcement
                                fails to assert the correctness of the assembled intent due to
                                the lack of extracted information, the system prompts the
                                operator to get the missing information.
                            </p>
                        </div>

                        <div id="confirmation" class="refinement">
                            <h4>Intent confirmation</h4>

                            <p>
                                The <em>Nile</em> program is then presented
                                to the network operator for confirmation. By relying on
                                named entity recognition for information extraction, we can
                                collect negative feedback from the operators and incorporate into our information extraction process,
                                improving the
                                accuracy of information labeling over time and reducing the
                                need for an exponential number of training sentences. For
                                home users with no technical knowledge, the conirmation
                                can come from a voice assistant or a graphical interface.
                            </p>
                        </div>

                        <div id="contradiction-detection" class="refinement">
                            <h4>Contradiction detection</h4>

                            <p>
                                After a successful conirmation of the extracted entities, we analyze the <em>Nile</em> intent for
                                contradictions arising from incremental intent deployment. We assume a <em>conflict</em> occurs when the
                                conigurations of distinct policies on a device act on the same traic (<em>e.g.</em>, one policy allowing
                                and other dropping packets on a irewall); and
                                a <em>contradiction</em> occurs when the high-level behavior description contradicts previously deployed
                                intents,
                                but the resulting conigurations do not necessarily conlict (<em>e.g.</em>, an intent
                                to drop speciic packets on a irewall <em>vs</em> an intent to reroute
                                the same packets so that they do not go through the firewall).
                                As we use the <em>Nile</em> representation for contradiction analysis,
                                its reduced grammar and small number of entities limit the
                                scope of possible contradictions and simplify the contradiction detection. From the <em>Nile</em> intents,
                                we
                                extract 15 features
                                and correlate them, using a Random Forest Classifier, to produce a single indicator of contradiction. When
                                a contradiction is detected, we inform the user through the Lumi user
                                interface.
                            </p>
                        </div>

                        <div id="deployment" class="refinement">

                            <h4>Intent deployment</h4>

                            <p>
                                We translate the <em>Nile</em> intent (free of
                                contradictions) to a network policy expressed in <em>Merlin</em>.
                                By relying on Merlin, we take advantage of its dynamic
                                bandwidth allocation and conlict detection at the networkconiguration level. Because Merlin does not
                                support all the
                                features in <em>Nile</em>, we incorporate intent management support
                                for deployment of temporal policies and bandwidth quotas.
                                If any coniguration conlicts arise in this stage, we warn the
                                operator through the Lumi user interface and request the
                                process to be restarted.
                            </p>
                        </div>

                    </div><!-- process -->

                    <!--h3>Information Extraction</h3-->

                </div><!-- refinement -->

                <div id="datasets">
                    <h2>Datasets</h2>
                    <h3>Alpha</h3>
                    <p align="justify">Manufactured hand-annotated dataset with 70 examples of network intents as if an operator were giving
                        commands to Lumi. <br>Available at <a href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/extraction_alpha.json">Github</a></p>

                    <h3>Campi</h3>
                    <p align="justify">
                        Public policies of 50 campus networks of US universities. To build the campi dataset, we crawled through the
                        websites of the universities and manually parsed the policy documents to extract one-phrase intents. From
                        those 50 university policies, we extracted 50 network intents. Overall, most universities have network
                        policies related to usage quotas, rate limiting and ACL, all of which we can express in <em>Nile</em>. <br>Available
                        at <a href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/extraction_campi.json">Github</a>.<br>
                        Accessed on <em>September 9th, 2019</em>.
                    </p>
                    <div class="cardbox">
                        <div class="card">
                            <img src="assets/img/universities/Illinois_Urbana_Champaign.png" alt="University of Illinois - Urbana Champaign">
                            <div class="container">
                                <h4><b><a href="http://housing.illinois.edu/resources/technology/help/policies">University of Illinois -
                                            Urbana Champaign</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Illinois_Chicago.png" alt="University of Illinois - Chicago">
                            <div class="container">
                                <h4><b><a href="http://http://accc.uic.edu/policy/wireless">University of Illinois - Chicago</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Carnegie_Mellon.png" alt="Carnegie Mellon University">
                            <div class="container">
                                <h4><b><a href="https://www.cmu.edu/computing/services/endpoint/network-access/guidelines/bandwidth.html">Carnegie
                                            Mellon University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Connecticut.png" alt="University of Connecticut">
                            <div class="container">
                                <h4><b><a href="https://policy.uconn.edu/information-technology">University of Connecticut</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Maryland.png" alt="University of Maryland - College Park">
                            <div class="container">
                                <h4><b><a href="https://it.umd.edu/governance/IT-Policies">University of Maryland - College Park</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Duke.png" alt="Duke University">
                            <div class="container">
                                <h4><b><a href="http://security.duke.edu">Duke University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Cornell.png" alt="Cornell University">
                            <div class="container">
                                <h4><b><a href="https://it.cornell.edu/">Cornell University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Texas_Austin.png" alt="University of Texas - Austin">
                            <div class="container">
                                <h4><b><a href="https://ut.service-now.com/utss/KAhome.do?number=KB0011692">University of Texas -
                                            Austin</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Ucsc.png" alt="University of California - Santa Cruz">
                            <div class="container">
                                <h4><b><a href="http://its.ucsc.edu/security/bandwidth.html">University of California - Santa Cruz</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/ndsu.png" alt="North Dakota State University">
                            <div class="container">
                                <h4><b><a href="https://www.ndsu.edu/its/internet">North Dakota State University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Columbia.png" alt="Columbia University">
                            <div class="container">
                                <h4><b><a href="https://policylibrary.columbia.edu/network-protection-policy">Columbia University</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Stanford.png" alt="Stanford University">
                            <div class="container">
                                <h4><b><a href="http://acomp.stanford.edu/about/policy/aup">Stanford University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Purdue.png" alt="Purdue University ">
                            <div class="container">
                                <h4><b><a href="https://www.housing.purdue.edu/ResidentialLife/yourcomputer.html">Purdue University
                                        </a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UC_Berkeley.png" alt="University of California - Berkeley ">
                            <div class="container">
                                <h4><b><a href="https://studenttech.berkeley.edu/campus-network-policies">University of California -
                                            Berkeley </a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/rutgers.png" alt="Rutgers University ">
                            <div class="container">
                                <h4><b><a href="https://ruwireless.rutgers.edu/ruwireless-policies?page=bandwidth">Rutgers University
                                        </a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Rose_Hulman.png" alt="Rose-Hulman Institute of Technology ">
                            <div class="container">
                                <h4><b><a href="https://servicedesk.rose-hulman.edu/search/">Rose-Hulman Institute of Technology </a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Missouri.png" alt="Missouri State University ">
                            <div class="container">
                                <h4><b><a href="http://resnet.missouristate.edu/#/bandWidth">Missouri State University </a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/WPI.png" alt="Worcester Polytechnic Institute ">
                            <div class="container">
                                <h4><b><a href="https://www.wpi.edu/about/policies/network-security">Worcester Polytechnic Institute
                                        </a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Liberty.png" alt="Liberty University">
                            <div class="container">
                                <h4><b><a href="http://www.liberty.edu/informationservices/development/index.cfm?PID=26076">Liberty
                                            University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/NIU.png" alt="Northern Illinois University">
                            <div class="container">
                                <h4><b><a href="https://doit.niu.edu/doit/policies/au.shtml">Northern Illinois University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/North_Carolina_Chapel_Hill.png" alt="University of North Carolina - Chapel Hill">
                            <div class="container">
                                <h4><b><a href="https://its.unc.edu/about-us/how-we-operate/">University of North Carolina - Chapel
                                            Hill</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/MIT.png" alt="Massachusetts Institute of Technology">
                            <div class="container">
                                <h4><b><a href="https://ist.mit.edu/about/it-policies">Massachusetts Institute of Technology</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Washington.png" alt="University of Washington">
                            <div class="container">
                                <h4><b><a href="https://itconnect.uw.edu/connect/uw-networks/">University of Washington</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Princeton.png" alt="Princeton University">
                            <div class="container">
                                <h4><b><a href="https://oit.princeton.edu/policies">Princeton University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/California_Institute_of_Technology.png" alt="California Institute of Technology">
                            <div class="container">
                                <h4><b><a href="https://www.imss.caltech.edu/node/142">California Institute of Technology</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Michigan.png" alt="University of Michigan--Ann Arbor">
                            <div class="container">
                                <h4><b><a href="https://its.umich.edu/enterprise/wifi-networks/network-security">University of Michigan -
                                            Ann Arbor</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UCLA.png" alt="University of California-Los Angeles">
                            <div class="container">
                                <h4><b><a href="http://www.policies.ucla.edu/Home/InformationTechnology">University of California - Los
                                            Angeles</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UW-Madison.png" alt="University of Wisconsin - Madison">
                            <div class="container">
                                <h4><b><a href="https://kb.wisc.edu/itpolicy/cio-policies">University of Wisconsin - Madison</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Harvard.png" alt="Harvard University">
                            <div class="container">
                                <h4><b><a href="https://huit.harvard.edu/information-technology-policies">Harvard University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UC_San_Diego.png" alt="University of California - San Diego">
                            <div class="container">
                                <h4><b><a href="https://blink.ucsd.edu/technology/security/services/network.html">University of California
                                            - San Diego</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UPenn.png" alt="University of Pennsylvania">
                            <div class="container">
                                <h4><b><a href="https://www.upenn.edu/computing/policy/">University of Pennsylvania</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Rice.png" alt="Rice University">
                            <div class="container">
                                <h4><b><a href="https://oit.rice.edu/services/networks-wireless">Rice University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/University_of_Massachusetts_Amherst.png" alt="University of Massachusetts - Amherst">
                            <div class="container">
                                <h4><b><a href="https://www.umass.edu/it/policies">University of Massachusetts - Amherst</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/University_of_Southern_California.png" alt="University of Southern California">
                            <div class="container">
                                <h4><b><a href="https://policy.usc.edu/network-infrastructure/">University of Southern California</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Yale.png" alt="Yale University">
                            <div class="container">
                                <h4><b><a href="https://your.yale.edu/policies-procedures/procedures/1610-pr01-systems-and-network-security">Yale
                                            University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Brown.png" alt="Brown University">
                            <div class="container">
                                <h4><b><a href="https://it.brown.edu/computing-policies">Brown University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/JHU.png" alt="Johns Hopkins University">
                            <div class="container">
                                <h4><b><a href="https://it.johnshopkins.edu/policies/">Johns Hopkins University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Minnesota.png" alt="University of Minnesota">
                            <div class="container">
                                <h4><b><a href="https://it.umn.edu/explore/connect-internet-networks">University of Minnesota</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/NYU.png" alt="New York University">
                            <div class="container">
                                <h4><b><a href="https://www.nyu.edu/about/policies-guidelines-compliance/policies-and-guidelines/information-technology.html">New
                                            York University</a></b></h4>
                            </div>
                        </div>


                        <div class="card">
                            <img src="assets/img/universities/nu-vertical.gif" alt="Northwestern University">
                            <div class="container">
                                <h4><b><a href="https://www.it.northwestern.edu/policies/wireless.html">Northwestern University</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Ohio.png" alt="Ohio State University">
                            <div class="container">
                                <h4><b><a href="https://it.osu.edu/policies-and-standards">Ohio State University</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/PSU.png" alt="Pennsylvania State University - University Park">
                            <div class="container">
                                <h4><b><a href="https://rescom.psu.edu/network-connection-agreement">Pennsylvania State University -
                                            University Park</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UC_Irvine.png" alt="University of California - Irvine">
                            <div class="container">
                                <h4><b><a href="https://www.oit.uci.edu/policy/">University of California - Irvine</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Chicago.gif" alt="University of Chicago">
                            <div class="container">
                                <h4><b><a href="https://dataguide.uchicago.edu/uchicago-secureeduroam-wifi">University of Chicago</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Virginia.png" alt="University of Virginia">
                            <div class="container">
                                <h4><b><a href="https://virginia.service-now.com/its?id=itsweb_kb_article&sys_id=c3808413db7ac744f032f1f51d96198a">University
                                            of Virginia</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UC_Davis.png" alt="University of California - Davis">
                            <div class="container">
                                <h4><b><a href="https://housing.ucdavis.edu/computer-support/computer-policies/">University of California
                                            - Davis</a></b></h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/UC_Santa_Barbara.png" alt="University of California - Santa Barbara">
                            <div class="container">
                                <h4><b><a href="https://www.policy.ucsb.edu/terms-of-use">University of California - Santa Barbara</a></b>
                                </h4>
                            </div>
                        </div>

                        <div class="card">
                            <img src="assets/img/universities/Stony-Brook.jpg" alt="Stony Brook University - SUNY">
                            <div class="container">
                                <h4><b><a href="https://it.stonybrook.edu/policies/d102">Stony Brook University - SUNY</a></b></h4>
                            </div>
                        </div>

                    </div><!-- cardbox-->


                    <h3 id="contradiction">Contradiction detection</h3>
                    <p align="justify">
                        This dataset contains natural language sentences annotated with contradictions and entailments. We used a
                        standard campus network topology and known services, groups, and traffic to create random pairs of Nile
                        intents "hand-annotated" as contradictions or not.

                        The following numbers represent the number of policies on the dataset:
                    </p>
                    <ul>
                        <li><a href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/contradictions_100.json">100</a>
                        </li>
                        <li><a href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/contradictions_1000.json">1000</a>
                        </li>
                        <li><a href="https://github.com/lumichatbot/webhook/blob/master/res/dataset/contradictions_5000.json">5000</a>
                        </li>
                    </ul>

                </div><!-- datasets -->

                <div id="code">
                    <h2>Code</h2>
                    <p>Our source code is available on the following repositories:</p>
                    <ul>
                        <li><a href="https://github.com/lumichatbot/chatbot">Chatbot</a> (Dialogflow Lumi chatbot interface exported
                            as
                            JSON files)</li>
                        <li><a href="https://github.com/lumichatbot/webhook">Webhook</a> (Webhook actions for the Lumi chatbot
                            interface)</li>
                        <li><a href="https://github.com/lumichatbot/deployer">Deployer</a> (Nile intent compiler and deployer for the
                            Lumi chatbot)</li>
                    </ul>

                </div><!-- code-->

            </section>
        </div>

        <!-- FOOTER  -->
        <div id="footer_wrap" class="outer">
            <footer class="inner">

                <p class="copyright">Lumi Chatbot maintained by <a href="https://github.com/lumichatbot">lumichatbot</a></p>

                <p>Published with <a href="https://pages.github.com/">GitHub Pages</a></p>
            </footer>
        </div>
    </div>
    `,
    props: [],
    data() {
        return {};
    }
});
