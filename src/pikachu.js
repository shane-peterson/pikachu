import string from "./pikachu-css.js"
import "./pikachu.css"
import $ from "jquery"
import Model from "./base/Model"
import View from "./base/View";
import makeItRain from "./rain.js";
import init2 from "./people.js"

const m = new Model({
  data: {
    string: string,
    string2: '',
    s: '',
    n: 0,
    timeout: 0,
    id: undefined,
    eventName: 'pikachu-updated'
  },
  update(data) {
    Object.assign(this.data, data)
    this.trigger(m.data.eventName)
  }
})

const init = (el) => {
  const v = new View({
    data: m.data,
    el: el,
    html: `
      <div id="html">{{string}}</div>
      <div id="skin-wrapper">
          <div class="skin">
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="nose">
                  <div class="oval"></div>
              </div>
              <div class="face left">
              </div>
              <div class="face right">
              </div>
              <div class="mouth">
                  <div class="up">
                      <div class="lip left"></div>
                      <div class="lip right"></div>
                  </div>
                  <div class="down">
                      <div class="circle1">
                          <div class="circle2"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `,
    render: function (data) {
      const string = data.string2
      if (this.el.children.length !== 0) {
        this.el.empty()
      }
      $(this.html.replace("{{string}}", string)).appendTo(this.el)
      $("#style").html(data.string.substring(0, data.n + 1))
      $("#html").scrollTop(9999)
    },
    events: {
      "click #btn-play-or-pause": "play",
      "click #btn-slow": "slow",
      "click #btn-normal": "normal",
      "click #btn-fast": "fast"
    },
    forward() {
      if (this.data.n < this.data.string.length) {
        return setTimeout(() => {
          if (this.data.string[this.data.n] === '\n') {
            m.update({s: '<br>'})
          } else if (this.data.string[this.data.n] === ' ') {
            m.update({s: '&nbsp'})
          } else {
            m.update({s: this.data.string[this.data.n]})
          }
          m.update({string2: this.data.string2 += this.data.s})
          m.update({n: this.data.n += 1})
          if (this.data.n < this.data.string.length) {
            m.update({id: this.forward()})
          } else {
            $("body").off('click', "#btn-play-or-pause")
            setTimeout(() => {
              $("body").off('click')
              $("#animation1").empty()
              $('body').css('background', 'linear-gradient(to bottom, #202020, #111119)')
              const rain = $('#rain')
              rain.append($('<div class="rain front-row"></div>'))
              rain.append($('<div class="rain back-row"></div>'))
              makeItRain('.front-row', '.back-row')
              init2('#animation2')
            }, 5000)
          }
        }, this.data.timeout)
      }
    },
    play() {
      const pp = $('#btn-play-or-pause')
      if (pp.text().toLowerCase() === "play") {
        pp.text("Pause")
        m.update({id: v.forward()})
      } else if (pp.text().toLowerCase() === 'pause') {
        pp.text("Play")
        window.clearTimeout(m.data.id)
      }
    },
    slow() {
      m.update({timeout: 500})
    },
    normal() {
      m.update({timeout: 100})
    },
    fast() {
      m.update({timeout: 0})
    }
  })
}

export default init