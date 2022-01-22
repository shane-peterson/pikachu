import './rain.css'
import $ from 'jquery'
import Model from "./base/Model"
import View from "./base/View"

const m = new Model({
  data: {
    increment: 0,
    rainfall: 100,
    eventName: "rain-updated"
  },
  update(data) {
    Object.assign(this.data, data)
    if (this.data.increment < this.data.rainfall) {
      this.trigger(m.data.eventName)
    }
  }
})

const init = (el, el2) => {
  new View({
    data: m.data,
    el: el,
    el2: el2,
    html1(increment, a, b) {
      return `
      <div class="drop" style="left: ${increment}%; bottom: ${(b + b - 1 + 100)}%; animation-delay: 0.${a}s; animation-duration: ${500 + a}ms;">
        <div class="stem" style="animation-delay: 0.${a}s; animation-duration: ${500 + a}ms;"></div>
        <div class="splat" style="animation-delay: 0.${a} s; animation-duration: ${500 + a}ms;"></div>
      </div>
    `
    },
    html2(increment, a, b) {
      return `
     <div class="drop" style="right: ${increment}%; bottom: ${(b + b - 1 + 100)}%; animation-delay: 0.${a}s; animation-duration: ${500 + a}ms;">
        <div class="stem" style="animation-delay: 0.${a}s; animation-duration: ${500 + a}ms;"></div>
        <div class="splat" style="animation-delay: 0.${a}s; animation-duration: ${500 + a}ms;"></div>
      </div>
    `
    },
    render: function (data) {
      let increment = data.increment
      const a = (Math.floor(Math.random() * 98 + 1));
      const b = (Math.floor(Math.random() * 4 + 2));
      increment += b

      $(this.html1(increment, a, b)).appendTo(this.el)
      $(this.html2(increment, a, b)).appendTo(this.el2)
      m.update({increment: increment})
    },
    events: {
      "click #btn-play-or-pause": "big",
      "click #btn-slow": "small",
      "click #btn-normal": "splat",
      "click #btn-fast": "end",
    },
    big() {
      m.update({increment: 0, rainfall: 100})
      $('.splat').addClass('active')
      $('#btn-normal').html('noSplat')
    },
    small() {
      $('.rain').empty()
      m.update({increment: 0, rainfall: 50})
      $('.splat').addClass('active')
      $('#btn-normal').html('noSplat')
    },
    splat() {
      const splat = $('.splat')
      if (splat.hasClass('active')) {
        splat.removeClass('active')
        $('#btn-normal').html('Splat')
      } else {
        splat.addClass('active')
        $('#btn-normal').html('noSplat')

      }
    },
    end() {
      const drop = $('.drop')
      const stem = $('.stem')
      const splat = $('.splat')
      drop.removeClass('drop')
      stem.removeClass('stem')
      splat.removeClass('splat')
    },
  })
}


export default init