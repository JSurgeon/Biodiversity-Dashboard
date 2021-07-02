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


    //////////////////////////////////////////////////
    // initialize page with data from first ID No. //
    ////////////////////////////////////////////////

    // filter data with first 'samples' object from json 
    var filteredData = filterData(data, data.names[0]);
    // plot filtered results
    
    // plotData is acting strange! ***************
    plotData(filteredData);
    
    // use d3 to select html tag and append metadata via Object.entries loop
    var metadata_html = d3.select("#sample-metadata");
    Object.entries(data.metadata[0]).forEach(([key, entry]) => {
        // create div, then strong element via d3. Append key and entry as text
        metadata_html.append("div").append("strong").text(`${key.toUpperCase()}: ${entry}`);
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

        // filter metadata based on selected value
        function filterMeta(meta) {
            return meta.id === parseInt(selected_id);
        }
        var meta_obj = data.metadata.filter(filterMeta)[0];

        // add metadata info to page via Object.entries loop
        Object.entries(meta_obj).forEach(([key, entry]) => {
            
            // if entry === null, use filler text
            if (!entry) {entry = "Not Specified";}

            // remove data already existing in the demographic info box
            d3.select("#sample-metadata>div").remove();
            
            // create div and strong elements to append key and entry as text
            metadata_html.append("div").append("strong").text(`${key.toUpperCase()}: ${entry}`);
        })                    

        // filter sample data based on selected value
        var filteredData = filterData(data, selected_id);

        // plot filtered data 
        plotData(filteredData);

        // log change made
        console.log("Change Event Handled")
    }

})
