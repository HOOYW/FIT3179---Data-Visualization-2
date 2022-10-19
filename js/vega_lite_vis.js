var vg_1 = "js/GDP_geoshape.vl.json";
var vg_2 = "js/Highest_Quality_Of_Life_Index.vl.json";
var vg_3 = "js/Factor_Quality_of_Life_Index.vl.json";
var vg_4 = "js/Top_10_Happiest_Country.vl.json"

vegaEmbed("#GDP", vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#Highest_QLI", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#Factor_QLI", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#Top10_Happiest", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);