// file to store filterData wrapper function

// parameters:
    // (data === an array of json objects) (id === a number as a string)
// returns a single json object
function filterData(data, id) {
    function filterSamples(sample) {
        return sample.id === id;
    }
    return data.samples.filter(filterSamples)[0];
}