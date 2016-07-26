var mongoose = require('mongoose');

var listsDb = mongoose.model('collection_name');

function TemplateController(){

  getLists: function(req, res){
    listsDb.find({}, function(err, lists){
      if(err){
        console.log('error in the getItems server controller', err);
      }else {
        res.json(lists);
      }
    })
  },

  createWishlist: function(req, res){
    lists = new listsDb(req.body);
    lists.save(function(err, result){
      if(err){
        console.log('this is an error in the createWishlist backend');
      }else {
        console.log('this is are new createWishlist, made it back from backend', result);
        res.json(result);
      }
    })
  },

  getList: function(req, res){
    listsDb.find({_id: req.params.id}, function(err, result){
      if(err){
        console.log('this is an error in getting a single list in backend controller');
      }else {
        console.log('this is getting one list made in backend', result);
        res.json(result);
      }
    })
  }




}
module.exports = new TemplateController();
