// file to store plots function

function plotData(filtered) {
    // plotData expects a json object

    // map filtered data to variables
    var otus = filtered.otu_ids.map(id => `OTU ${id}`);
    var values = filtered.sample_values.map(value => value);
    var labels = filtered.otu_labels.map(label => label);

    //////////////////////////////////////////////////////////////////////
    // create horizontal bar chart for top 10 OTUs found in individual //
    ////////////////////////////////////////////////////////////////////
    
    // slice top ten 
    var top_ten_otus = otus.slice(0,10);
    var top_ten_values = values.slice(0,10);
    var top_ten_labels = labels.slice(0,10);

    // console.log(values);
    // console.log(otus);
    // console.log(labels);


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

    // CODE HERE ***



    ///////////////////////////////
    // create demographic chart //
    /////////////////////////////

    // CODE HERE ***

        


}