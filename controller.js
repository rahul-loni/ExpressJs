//  const userNameController = (req, res) => {
//     const username = req.params.username;
//     res.send(`Welcome to ${username}`);
// };

//  const searchController = (req, res) => {
//     const keyword = req.query.keyword;
//     res.send(`Searching for ${keyword}`);
// };

// module.exports={
//     userNameController,
//     searchController
// }


const userController=(req,res)=>{
    const username=req.params.username;
    res.send(`welcome to ${username}`)
}
const SearchController=(req,res)=>{
    const keyword=req.query.keyword;
    res.send(`Serching for ${keyword}`)
}

module.exports={
    userController,
    SearchController
}
