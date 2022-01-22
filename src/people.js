import './people.css'
import View from './base/View'
import Model from './base/Model'
import $ from "jquery";

const m = new Model({
  data: {}
})

const init = (el) => {
  new View({
    data: m.data,
    el: el,
    html: `
      <div class='overall'>
        <div class='head'></div>
        <div class='body'>
          <div class='torso'></div>
          <div class='hand1'>
          </div> 
          <div class='hand2'>
            <div class="umbrella">
              <div class="canopy"></div>
              <div class="shaft"></div>
            </div>
          </div>
        </div>
        <div class='stick1'></div>
        <div class='stick2'></div>
      </div>
    `,
    render(data){
      if (this.el.children.length !== 0) {
        this.el.empty()
      }
      $(this.html).appendTo(this.el)
    }
  })
}

export default init