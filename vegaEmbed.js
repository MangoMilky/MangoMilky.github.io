// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
async function render() {
    // load data
    const data = await d3.csv("dataset/videogames_long.csv");
  
    // create a bar chart
    const vlSpec1 = vl
     .data(data)
     .facet( vl.fieldN("genre") )
      .spec(
        vl.markBar() 
          .encode(
            vl.x().fieldN("platform").title("platform"),
            vl.y().fieldQ("global_sales").aggregate("sum"),
            vl.color().fieldN("platform")
        )
        .height(300)
     )
     .columns(2)
      .toSpec();
      await vegaEmbed("#view", vlSpec1);
//    const view1 = await vegaEmbed("#view", vlSpec1);
//    view1.view.run();
    
    // create chart2
    const vlSpec2 = vl
     .markPoint()
     .data(data)
     .encode(
         vl.x().fieldN("year").title("year"),
         vl.y().fieldN("platform").aggregate("Platform"),
         vl.color().fieldN('genre').title('genre'),
         vl.size().fieldQ('global_sales').title('Sales Size')
     )
     .width("container")
     .height(500)
     .toSpec();
    await vegaEmbed("#view2", vlSpec2);

    // create chart3
    const vlSpec3 = vl
     .data(data)
     .facet( vl.fieldN("sales_region") )
      .spec(
        vl.markBar() 
          .encode(
          vl.x().fieldN("platform").title("platform"),
          vl.y().fieldQ("global_sales").aggregate("sum"),
          vl.color().fieldN("platform").title("platform")
        )
     )
     .columns(2)
     .toSpec();
    await vegaEmbed("#view3", vlSpec3);

    // create chart4
    const vlSpec4 = vl
    .data(data)
    .facet( vl.fieldN("sales_region") )
    .spec(
      vl.markBar() 
        .encode(
          vl.x().fieldN("genre").title("Genre"),
          vl.y().fieldQ("sales_amount").aggregate("sum").title("Total Sales"),
          vl.color().fieldN("genre").title("Genre") 
        )
    )
    .toSpec();
    await vegaEmbed("#view4", vlSpec4);
   }
  
  render();