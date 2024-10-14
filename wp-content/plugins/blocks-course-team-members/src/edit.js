import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps({ className: 'classesADMIn' })}>
			<InnerBlocks
				allowedBlocks={['core/image', 'blocks-course/team-member']}
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
