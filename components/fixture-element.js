import {html, render, nothing} from 'https://unpkg.com/lit-html?module';
import {getFixtures} from "../services/fixtureService.js";


const template = (ctx) => html`
    <h3>Season 2006-07</h3>
    <p> <strong>Some Day</strong> <br />
    <ul>
        ${ctx.fixtures?.map(fixture => html`<li .data=${fixture}></li>`)}

    </ul>
`

class Fixtures extends HTMLElement {
    connectedCallback(){
        getFixtures()
        .then(data => {
            this.fixtures = data.api.fixtures;
            console.log(data.api.fixtures);
            
            // this.homeTeam = data.fixtures.homeTeam['team-name'];
            // this.awayTeam = data.fixtures.awayTeam['team-name'];
            // this.result = data.fixtures.score.fulltime;
            this.render();
            
        })
        this.render();

    }

    render(){
        render(template(this), this), { eventContext: this};
    }
}
export default Fixtures;