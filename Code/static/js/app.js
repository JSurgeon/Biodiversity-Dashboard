// Jonathan Surgeon 6/30/21

// use d3 to read in samples.json located in data directory

d3.json("../../data/samples.json").then((incomingData) => {
    console.log(incomingData);
})
