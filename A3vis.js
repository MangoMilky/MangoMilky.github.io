async function render() {
    // load data
    const data = await d3.csv("videogames_long.csv");
  
    // create a bar chart
    const vlSpec = vl
      .markBar()
      .data(data)
      .encode(
        vl.y().fieldN("platform").sort("-x"),
        vl.x().fieldQ("global_sales").aggregate("sum"),
        vl.color().fieldN("genre")
      )
      .width("container")
      .height(500)
      .toSpec();
  
    const view = await vegaEmbed("#view", vlSpec).view;
    view.run();
  }
  
  render();