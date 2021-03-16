import {html, render, nothing} from 'https://unpkg.com/lit-html?module';
// import {getUserData} from '../services/authServices.js'

const template = (ctx) => html`   
  <div id="maincolumn">
    <h1>Welcome! (h1)</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum sapien enim, cursus in, aliquam sit amet, convallis eget, metus. Duis dui mi, varius at, lacinia eget, ullamcorper et, tortor. </p>
    <div class="news"><strong>Latest News</strong>
      <p> <a href="#">Nunc commodo metus et lorem. Phasellus vel libero.</a></p>
      <p> <a href="#">Vestibulum eu enim. Mauris pharetra. Vestibulum ligula libero, vestibulum quis, commodo non, sagittis eget, elit.</a></p>
      <p> <a href="#">Ut nec tellus. Nunc ligula quam, vulputate ut, imperdiet nec, luctus at, magna. Nunc posuere nulla ac tortor.</a></p>
    </div>
    <h2>Headline! (h2, h3)</h2>
    <p>Quisque vulputate. Aliquam condimentum, odio vel ultrices sodales, augue lorem vehicula mi, vel nonummy nisl eros et tortor.</p>
    <p> <a href="#">This is a link</a></p>
    <h4>Headline (h4, h5, h6)</h4>
    <p>Aenean dapibus, leo vitae eleifend porta, sem ipsum nonummy est, eu fermentum arcu lectus in lacus. Vestibulum tristique metus eu lorem. Pellentesque sed erat. Morbi pharetra condimentum massa. Vestibulum vel nulla at eros porta tempus. F</p>
    <div class="clear"></div>
  </div>
`;



class Home extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render(){
        render(template(this), this), { eventContext: this};
    }
}

export default Home;