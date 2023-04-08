module.exports.home = function(req,res){
    return res.render("landing",{
        title:"Benemart | Home"
    });
}