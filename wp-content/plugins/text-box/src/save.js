import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment } = attributes;
	console.log('alignment', alignment);
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-alignment-${alignment}`,
			})}
			tagName="h4"
			value={text}
		/>
	);
}
