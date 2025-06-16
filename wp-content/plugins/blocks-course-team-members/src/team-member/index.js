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
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			default: [
				{ link: 'https://facebook.com', icon: 'facebook' },
				{ link: 'https://instagram.com', icon: 'instagram' },
			],
			source: 'query',
			selector: '.wp-block-blocks-course-team-member-social-links ul li',
			query: {
				icon: {
					source: 'attribute',
					attribute: 'data-icon',
				},
				link: {
					selector: 'a',
					source: 'attribute',
					attribute: 'href',
				},
			},
		},
	},
	edit: Edit,
	save: Save,
});
