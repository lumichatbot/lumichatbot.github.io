Vue.component("lumi-appendix", {
    template: `
    <div class="appendix">
      <div class="md-layout">
        <h1 class="md-display-3">Appendix</h1>
      </div>
      <div class="md-layout">
        <p class="md-body-2">
          This section contains appendix information for the Lumi project, which could not be included in the paper because of the page limit,
          including the Conditional Random Fields (CRFs) formulation for the Named Entity Recognition (NER) piece of Lumi, as well as the Nile language grammar and some interesting examples of user inputs taken from the User Study results.
        </p>
      </div>
      <div class="md-layout md-gutter md-alignment-top-space-between">
        <div class="md-layout-item md-size-50">
          <h1 class="md-display-1">CRF Formulation</h1>
          <p>A well-known approach for tagging or labeling data uses the encoded vectors of words as features for a probabilistic graphical model known as Conditional Random Field (CRF). In our case, the encoded vectors of words are the
            concatenated output of a Bi-LSTM (left-to-right, right-to-left), and our CRF model aims to find the conditional distribution of an input sequence (words in a sentence) over different classes (NER
            tags). More specifically, given an input sentence <span class="math inline">X = x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>n</sub></span> and an output set of NER tags <span class="math inline">Y = y<sub>1</sub>, y<sub>2</sub>, ..., y<sub>m</sub></span>, we model this conditional
            distribution as:</p>
          <p><span class="math display">y&#772  = argmax<sub>y &#8712; Y</sub> P(Y|X).</span></p>
          <p>To account for previous contexts when predicting the likelihood of each mapping between word and tag, a CRF model uses a feature map <span
              class="math inline">&phi;(X, Y) &#8712; ℝ<sup>d</sup></span>, tailored to the specific domain, to correlate every possible input (<span class="math inline">X</span>) with every possible output (<span class="math inline">Y</span>). In
            our formulation of CRF, the conditional probability function for assigning a tag <span class="math inline">y</span> to a word <span class="math inline">x</span> follows a log-linear model, parameterized by a set of weights <span
              class="math inline">&lambda; &#8712; ℝ<sup>d</sup></span>, given by:</p>
          <p><span> <span class="math display">P(y|x;&lambda;) = <sup>exp(&lambda; &times; &phi;(x, y))</sup>&frasl;<sub>&sum;<sub>i=0...m</sub> exp(&lambda; &times; &phi;(x, i))</sub>,</span></p>

          <p>where <span class="math inline">m = |Y|</span>. </span> The key insight to incorporate a CRF layer into a Bi-LSTM model lies in adapting the feature map <span class="math inline">&phi;(X, Y)</span> to use the output encoded vectors,
            with forward and backward contexts of each word embedded, to produce a more accurate probability for each tag. Thus, considering that <span class="math inline">&lambda; &times; &phi;(X, Y)</span> expresses the likelihood that a given word maps to a specific NER tag, we
            can replace this expression by a score function that uses the context-full output of the Bi-LSTM network to estimate it. The score function is given by:
          <p><span class="math display">s(x, y) = &sum;<sub>i=1...n</sub> (A<sub>y<sub>i-1</sub>, y<sub>i</sub></sub> + LSTM(x)<sub>i</sub>),</span></p>
          <p>where <span class="math inline">A<sub>y<sub>i-1</sub>, y<sub>i</sub></sub></span> denotes the transition score from NER tag <span class="math inline">i-1</span> to <span class="math inline">i</span>, the likelihood of one
            entity tag being succeeded by another, and <span class="math inline">LSTM(x)</span> corresponds to the output encoded vector of the Bi-LSTM network for a word <span class="math inline">x</span>. The transition scores in matrix
            <span class="math inline">A</span> can be initialized randomly, as they will be updated during the training of the model. Finally, the most likely tag for each word is the one with the highest probability among all tags.</p>
        </div>

        <div class="md-layout-item md-size-50">
          <h1 class="md-display-1">Nile Grammar</h1>
          <p>
            <blockquote class="note-block">
              <p>&ltintent&gt ::= 'define intent' &ltterm&gt':' &ltoperations&gt </p>
              <p>&ltoperations&gt ::= &ltpath&gt &ltoperation&gt { ' ' &ltoperation&gt }</p>
              <p>&ltpath&gt   ::= [&ltfrom_to&gt | &lttargets&gt]</p>
              <p>&ltfrom_to&gt ::= 'from' &ltendpoint&gt 'to' &ltendpoint&gt</p>
              <p>&ltoperation&gt ::= (&ltmboxes&gt | &ltqos&gt | &ltrules&gt)+ [ &ltinterval&gt ]</p>
              <p>&ltmboxes&gt ::= ['add' | 'remove'] &ltmiddlebox&gt { (',' | ',\\n') &ltmiddlebox&gt } </p>
              <p>&ltmiddlebox&gt ::= 'middlebox('&ltterm&gt')'</p>
              <p>&ltqos&gt ::=  ['set' | 'unset'] &ltmetrics&gt</p>
              <p>&ltmetrics&gt ::= &ltmetric&gt { (',' | ', \\n') &ltmetric&gt}</p>
              <p>&ltmetric&gt ::= [ &ltbandwidth&gt | &ltquota&gt ]</p>
              <p>&ltrules&gt ::= ['allow' | 'block'] &ltmatches&gt [ &ltmatches&gt ]</p>
              <p>&lttargets&gt ::= 'for' &lttarget&gt { (',' | ', \\n') &lttarget&gt }</p>
              <p>&lttarget&gt ::= [ &ltgroup&gt | &ltservice&gt | &ltendpoint&gt | &lttraffic&gt ]</p>
              <p>&ltmatches&gt ::= [ &ltservice&gt | &lttraffic&gt | &ltprotocol&gt ]</p>
              <p>&ltendpoint&gt ::= 'endpoint('&ltterm&gt')'</p>
              <p>&ltgroup&gt ::= 'group('&ltterm&gt')'</p>
              <p>&ltservice&gt ::= 'service('&ltterm&gt')'</p>
              <p>&lttraffic&gt ::= 'traffic('&ltterm&gt')'</p>
              <p>&ltprotocol&gt ::= 'bandwidth('&ltterm&gt')'</p>
              <p>&ltbandwidth&gt ::= 'bandwidth('['max' | 'min' ]', '&ltterm&gt', &ltbw_unit&gt)'</p>
              <p>&ltbw_unit&gt ::=  [ 'bps' | 'kbps' | 'mbps' | 'gbps' ]</p>
              <p>&ltquota&gt ::= 'quota('['download' | 'upload' | 'any' ]', '&ltterm&gt', &ltq_unit&gt)'</p>
              <p>&ltq_unit&gt ::=  [ 'mb/d' | 'mb/wk' | 'gb/d' | 'gb/wk' | 'gb/mth' ]</p>
              <p>&ltinterval&gt ::= 'start' &ltdatetime&gt 'end' &ltdatetime&gt</p>
              <p>&ltdatetime&gt ::= 'datetime('&ltterm&gt')' | 'date('&ltterm&gt')' | 'hour('&ltterm&gt')'</p>
              <p>&ltterm&gt ::= [a-z0-9]+</p>
            </blockquote>
          </p>
        </div>

        <div class="md-layout-item md-size-100">
          <h1 class="md-display-1">User Study: Examples</h1>
          <p>In the Table below we present some of the different intents that users expressed to fulfill the tasks in the Lumi user study. All intents were copied <i>ipsis litteris</i> from the user's input, including misspellings and grammatical
            mistakes.</p>

          <md-table md-card>
            <md-table-row>
              <md-table-head md-numeric>Task</md-table-head>
              <md-table-head>User intents</md-table-head>
            </md-table-row>

            <md-table-row>
              <md-table-cell md-numeric rowspan="5">1</md-table-cell>
              <md-table-cell>''please lumi, forward all internet traffic to the DPI then to labs''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Hey Lumi, drive the studants traffic to DPI and then to Labs''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Hey Lumi, please add a DPI to ensure students from the labs are not accessing suspicious applications''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''send user traffic to labs through dpi''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Redirect all traffic from labs, going trhogh DPI''</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell md-numeric rowspan="5">2</md-table-cell>
              <md-table-cell>''hey Lumi, limit to 100 Mbps the torrent traffic to Guest''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Limit guests to 100 mbps bandwidth for torrent traffice''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''limit guest torrent traffic to 100 Mbps''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''please limit the torrent bandwith of guests to 100mbps''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Please limit the torrent traffic from gateway to guest to 100Mbps''</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell md-numeric rowspan="5">3</md-table-cell>
              <md-table-cell>''please lumi, define quota 100 gb per week to dorms''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Set 10 GB per week as download quota for the dorms''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''hi lumi, please set a maximum download quota of 10 GB per week for students in dorms''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''traffic from dorms are allowed to download 10 gb per week''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''update network quota for dorms to 10GB/wk''</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell md-numeric rowspan="5">4</md-table-cell>
              <md-table-cell>''Between internet and labs block traffic from students to f2movies''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Lumi's, add a firewall and block F2movies traffic from students in labs''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''block all f2movies traffic on labs from students''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''block students in the labs from accessing F2movies''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''block traffic from f2movies going to students in the labs''</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell md-numeric rowspan="5">5</md-table-cell>
              <md-table-cell>''please limit bandwidth to 5 Gigabits per second for the server racks everyday from 4 PM to 7 PM''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''Hey Lumi, please limit the bandwith from gateway to servers to 5Gbps from 4PM to 7PM''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''limit bandwidth for server racks to 5Gbps from 4pm to 7pm''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''limit traffic to 5Gbps Between internet and servers from 16:00 to 19:00''</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>''please lumi, limit bandwidth to 5 gbps from 4pm to 7pm from internet to servers''</md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
    </div>
    `,
    data: function () {
        return {}
    },
})
