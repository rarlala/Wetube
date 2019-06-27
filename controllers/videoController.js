export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
    //console.log(req.query.term);
    //예전방식 const searchingBy = req.query.term; 
    const { query : {term:searchingBy}} = req; 
    //예전방식 res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
    res.render("search", { pageTitle: "Search", searchingBy });
}

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });