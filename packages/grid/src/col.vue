<template>
  <div class="col" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'us-col',
  props: {
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    offset: [Number, String],
    span: [Number, String],
    order: [Number, String]
  },
  computed: {
    classes () {
      let classList = [
        {
          [`col-${this.span}`]: this.span,
          [`order-${this.order}`]: this.order,
          [`offset-${this.offset}`]: this.offset 
        }
      ]
      const sizes = ['sm', 'md', 'lg', 'xl']
      sizes.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span' ? `${prop}-${size}-${props[prop]}` : `col-${size}-${props[prop]}`
            )
          })
        }
      })
      return classList
    }
  }
}
</script>
