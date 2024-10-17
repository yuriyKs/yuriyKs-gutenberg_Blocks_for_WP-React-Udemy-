import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const onChangeColumns = (newColumns) => {
		setAttributes({ columns: newColumns });
	};

	return (
		<div
			{...useBlockProps({
				className: ['classesADMIn', `has-${columns}-columns`],
			})}
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Columns', 'team-members')}
						min={1}
						max={6}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={['core/image', 'blocks-course/team-member']}
				orientation="horizontal"
				template={[
					// [
					// 	'blocks-course/team-member',
					// 	{ name: 'namE 1', bio: 'bIo 1' }, // second argument is for default value for name&bio attributes
					// ],
					// [
					// 	'blocks-course/team-member',
					// 	{ name: 'namE 2', bio: 'bIo 2' },
					// ],
					['blocks-course/team-member'],
					['blocks-course/team-member'],
					['blocks-course/team-member'],
				]}
				// templateLock="all"
				// templateLock="insert"
			/>
		</div>
	);
}
