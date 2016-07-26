app.factory('listFactory', function($http){

  var factory = {};

  var list = [];

  factory.addList = function(data, callback){
    console.log('made it to the listFactory addItem function');
    $http.post('/list', data).then(function(data){
      console.log('made it back from backend to make new list', data);
      list.push(data.data);
      callback(list);
    })
  }

  factory.getLists = function(callback){
    console.log('made it to the items factory to get all list');
    $http.get('/lists').then(function(lists){
      console.log('made it back from the backend this all list`s', lists);
      list = lists.data;
      callback(list);
    })
  }

  factory.getList = function(listID, callback){
    $http.get('/list/' + listID).then(function(list){
      console.log('made it back with just one list', list);
      callback(list);
    })
  }

  return factory;
})
