// var registerBlockType = wp.blocks.registerBlockType
import { registerBlockType } from '@wordpress/blocks'

registerBlockType('blocks-course/firstblock', {
  edit: function () {
    return <p className="src-test-class">Edit 123</p>
  },
  save: function () {
    return <p className="src-test-class">Save</p>
  },
})
