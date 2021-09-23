// file to store filter wrapper functions

// filterData wrapper function
// parameters:
    // (data === an array of json objects) (id === a number as a string)
// returns an array of two json objects
function filterData(data, id) {
    function filterSamples(sampleData) {
        return sampleData.id === id;
    }
    var samples = data.samples.filter(filterSamples)[0];

    function filterMeta(metadata) {
        return metadata.id === parseInt(id);
    }
    var metadata = data.metadata.filter(filterMeta)[0];

    console.log("Filtering Handled");
    return [metadata,samples];
}
