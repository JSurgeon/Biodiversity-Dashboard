// Jonathan Surgeon 6/30/21

// use d3 to read in samples.json located in data directory
d3.json("../../data/samples.json").then((incomingData) => {
  //  console.log(incomingData.samples);
    
    // save json read by d3 in variable 
    var data = incomingData;

    /////////////////////////////////////////////////////
    // dynamically generate list of ID options via d3 //    
    ///////////////////////////////////////////////////

    // create reference to select tag
    var sel = d3.select("#selDataset");

    // loop through IDs 
    data.names.forEach(name => {
        // create new option tag and save it to a variable
        var option = sel.append("option");
        option.attr("value", name);
        option.text(name);
    })

    // log select node *DEBUG*
    console.log(d3.select("#selDataset").node());

    
    ///////////////////////////////////////////
    // handle event- Subject ID no changing //
    /////////////////////////////////////////
    d3.select("#selDataset").on("change", onChange);
    function onChange() {
        // reference select tag
        var select = d3.select("#selDataset");
        // reference select tag's value (will be number as a string)
        var selected_id = select.property("value");

        // log value *DEBUG*
        console.log(selected_id);

        // filter data based on value
        var id = selected_id;
        function filterSamples(sample) {
            return sample.id === id;
        }

        var filtered = data.samples.filter(filterSamples)[0];
        console.log(filtered);
        plotData(filtered);

    }

})
