var registerBlockType = wp.blocks.registerBlockType
var createElement = wp.element.createElement

registerBlockType('blocks-course/firstblock', {
  edit: function () {
    return createElement(
      'p',
      {
        className: 'class-name',
      },
      'Edit'
    )
  },
  save: function () {
    return createElement('p', null, 'Save')
  },
})
