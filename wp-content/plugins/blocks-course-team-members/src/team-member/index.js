import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
// import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/team-member', {
	title: __('Team MeMber', 'team-members'),
	description: __('A Team MEMber item', 'team-members'),
	icon: 'admin-users',
	parent: ['blocks-course/team-members'],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit,
	save: Save,
});
