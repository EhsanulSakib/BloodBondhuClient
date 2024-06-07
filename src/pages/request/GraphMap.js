const graph = {
    gulshan: ["banani", "badda","gulshan"],
    banani: ["gulshan", "tejgaon","banani"],
    uttara: ["mirpur","uttara"],
    mirpur: ["mirpur","uttara", "tejgaon"],
    badda: ["gulshan", "rampura","badda"],
    rampura: ["badda","rampura", "malibagh", "demra"],
    malibagh: ["rampura","malibagh", "khilgaon", "moghbazar"],
    khilgaon: ["malibagh", "motijheel","khilgaon"],
    farmgate: ["farmgate","tejgaon", "shahbagh", "dhanmondi"],
    motijheel: ["khilgaon", "shahbagh", "old_dhaka","motijheel"],
    dhanmondi: ["farmgate", "mohammadpur","dhanmondi"],
    moghbazar: ["malibagh","moghbazar"],
    old_dhaka: ["motijheel","old_dhaka"],
    tejgaon: ["banani", "mirpur", "farmgate","tejgaon"],
    demra: ["rampura", "demra"],
    mohammadpur: ["dhanmondi","mohammadpur"],
    shahbagh: ["motijheel", "farmgate","shahbagh"]
  };
  
  function GraphMap(city) {
    // city = city.toLowerCase();
    return graph[city] || [];
  } 
  export default GraphMap;
  