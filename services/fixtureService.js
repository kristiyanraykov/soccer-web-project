import request from './requestService.js'
// import {getUserData} from './authService.js'

const fixturesUrl = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2833/last/10';

// const urlBuilder = (resource) => {
    
//     return `${baseUrl}/${resource}.json?auth=${getUserData().idToken}`
// }

// export default {
//     // async create(article) {
//     //     let res = request.post(urlBuilder('articles'), article);

//     //     return res;
//     // },
//     async getFixtures (){
//         let fixtures = await request.get(fixturesUrl)
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => console.log(error));
//         console.log('here');
//         // return Object.keys(articles).map(key => ({_id: key, ...articles[key]}));
    
//     }
// }
export const getFixtures = async () => {
    let fixtures = await request.get(fixturesUrl)
    return fixtures;
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(err => console.log(error));
    // console.log('here');
    // return Object.keys(articles).map(key => ({_id: key, ...articles[key]}));

}