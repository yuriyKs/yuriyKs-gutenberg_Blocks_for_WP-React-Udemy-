import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import v1 from './v1';

registerBlockType('blocks-course/text-box', {
	edit: Edit,
	save,
	deprecated: [v1],
});
