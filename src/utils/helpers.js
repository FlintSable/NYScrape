import axios from 'axios';

const APIKey = 'e6d3cf3d4ff441ad9401aeed0416f899'

const helpers = {
    runQuery: function(term, start, end){
        var formattedTerm = term.trim();
        var formattedStart = start.trim() + '0101';
        var formattedEnd = end.trim() + '1231';

        console.log('Query run');

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key':APIKey,
                'q': formattedTerm,
                'begin_date': formattedStart,
                'end_date': formattedEnd
            }
        })
        .then(function(results){
            console.log('Axios Results', results.data.response);
            return results.data.responce;
        })
    },
    getSaved: function(){
        return axios.get('/api/saved')
        .then(function(results){
            console.log('axios results');
            return results;
        })
    },
    postSaved: function(title, date, url){
        var newArticle = { title: title, date: date, url: url };
        return axios.post('/api/saved', newArticle)
        .then(function(responce){
            console.log('axios results', responcse.data._id);
            return responce.data._id;
        });
    },
    deleteSaved: function(title, data, url){
        return axios.delete('/api/saved', {
            params: {
                'title': title, 
                'date': date,
                'url': url
            }
        })
        .then(function(results){
            console.log('axios results', results);
            return results;
        });
    }
};

module.exports = helpers;
