// Jonathan Surgeon 6/30/21

// use d3 to read in samples.json located in data directory
d3.json("../../data/samples.json").then((incomingData) => {
    
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
    
    //////////////////////////////////////////////////
    // initialize page with data from first ID No. //
    ////////////////////////////////////////////////
    var filtered = filterData(data, data.names[0]);
    plotData(filtered);

    var metadata = d3.select("#sample-metadata");
    Object.entries(data.metadata[0]).forEach(([key, entry]) => {
        //console.log(`${key}: ${entry}`);
        metadata.append("div").append("strong").text(`${key.toUpperCase()}: ${entry}`);
    })
    
    ///////////////////////////////////////////
    // handle event- ID No. changing //
    /////////////////////////////////////////
    d3.selectAll("#selDataset").on("change", onChange);
    function onChange() {
        // reference select tag
        var select = d3.select("#selDataset");
        // reference select tag's value (will be number as a string)
        var selected_id = select.property("value");

                // FIX THIS FILTER OF METADATA--->
                                    // filter metadata based on selected value
                                    // var meta = data.metadata.filter(meta => {
                                    //     meta.id === selected_id;
                                    // })
                                    
                                    
                                    // function filterMeta(meta) {
                                    //     return meta.id === selected_id;
                                    // }
                                    // var meta = data.metadata.filter(filterMeta);
                                    // console.log(meta);
                                    
        // filter sample data based on selected value
        var filtered = filterData(data, selected_id);
        // log filtered data *DEBUG*
        console.log(`filtered data: `);
        console.log(filtered);

        // plot data
        plotData(filtered);

    }

})
