// file to store plots function

function plotData(filtered) {
    // plotData expects a json object

    // map all of filtered data to variables
    var otus = filtered.otu_ids.map(id => id);
    var string_otus = otus.map(id => `OTU ${id}`);
    var values = filtered.sample_values.map(value => value);
    var labels = filtered.otu_labels.map(label => label);
    
    //////////////////////////////////////////////////////////////////////
    // create horizontal bar chart for top 10 OTUs found in individual //
    ////////////////////////////////////////////////////////////////////
    
    
    // slice top ten 
    var top_ten_otus = string_otus.slice(0,10);
    var top_ten_values = values.slice(0,10);
    var top_ten_labels = labels.slice(0,10);

    trace1 = {
        x : top_ten_values,
        y : top_ten_otus,
        type: 'bar',
        orientation: 'h',
        text : top_ten_labels
    };

    var data = [trace1];

    layout = {
        title : `Top 10 Bacteria Cultures Found`
    };
    Plotly.newPlot("bar",data,layout);

    //////////////////////////
    // create bubble chart //
    ////////////////////////

    
    var trace2 = {
        x : otus,
        y : values,
        mode : 'markers',
        marker: {
            color: otus,
            size: values
        },
        text : labels
    };
    var bubble_data = [trace2];
    var layout = {
        title : "Bacteria Cultures Per Sample",
        height: 600,
        width: 1200,
        showlegend: false,
        xaxis : {title: "OTU ID"}
    };
    Plotly.newPlot("bubble", bubble_data, layout);

    // NOTE: NEED TO MESS WITH SIZE OF BUBBLE MARKERS. TOO BIG AND TOO SMALL 
        // maybe ifs: if too big, cap at x_size; if too small, cap at z_size


    ///////////////////////////////
    // create guage chart //
    /////////////////////////////

    // CODE HERE ***

        


}
