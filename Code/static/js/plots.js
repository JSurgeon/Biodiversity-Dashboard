// file to store plots function

function plotData(subjectData) {


    // plotData expects an array of 2 json objects
    var sampleData = subjectData[1];
    var metadata = subjectData[0];

    // map all of sample data to variables
    var otus = sampleData.otu_ids.map(id => id);
    var string_otus = otus.map(id => `OTU ${id}`);
    var values = sampleData.sample_values.map(value => value);
    var labels = sampleData.otu_labels.map(label => label);

    //////////////////////////////////////////////////////////////////////
    // create horizontal bar chart for top 10 OTUs found in individual //
    ////////////////////////////////////////////////////////////////////
    
    // slice top ten 
    var top_ten_otus = string_otus.slice(0,10);
    top_ten_otus = top_ten_otus.reverse();

    var top_ten_values = values.slice(0,10);
    top_ten_values = top_ten_values.reverse();

    var top_ten_labels = labels.slice(0,10);
    top_ten_labels = top_ten_labels.reverse();

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


    /////////////////////////
    // create guage chart //
    ///////////////////////

    var washFreq = metadata.wfreq;

    var trace3 = {
        domain: { x: [0, 1], y: [0, 1] },
        value: washFreq,
        title: { text: "Wash Frequency: scrubs per week" },
        type: "indicator",
        mode: "gauge+number"
    };

    var data = [trace3];

    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout);


    console.log("Plotting Handled");
}
