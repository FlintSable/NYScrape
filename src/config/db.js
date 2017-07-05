import mongoose from 'mongoose';
import nyc_db from 'mongodb://localhost/nyc_db';

mongoose.connect(nyc_db);

const db = mongoose.connection;

db.once('open', function() {
    console.log('connected to ' + nyc_db);
});

db.on('error', function(err){
    consolelog('Database Error: ', err);
});