
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://harshavardhan:zZymg6LyH8KLgKEw@cluster0.outsu.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db;


module.exports =

{
    connecttoserver : function(callback){
    mongoclient.connect(function(err,client){
        db = client.db("mentoring");
         return callback(err);
        });
    },

    getdb:function(){
        return db;
    }
}; 
