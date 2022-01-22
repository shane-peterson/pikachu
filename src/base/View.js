import $ from 'jquery'
import EventBus from "../EventBus";

class View extends EventBus {
  constructor(options){
    super();
    Object.assign(this, options)
    this.el = $(this.el)
    this.el2 = $(this.el2)
    this.on(this.data.eventName, () => {
      this.render(this.data)
    })
    this.render(this.data)
    this.autoBindEvents()
  }
  autoBindEvents(){
    for (let key in this.events){
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      const value = this[this.events[key]]
      $(part2).html(this.events[key])
      $('body').on(part1, part2, value)
    }
  }
}

export default View