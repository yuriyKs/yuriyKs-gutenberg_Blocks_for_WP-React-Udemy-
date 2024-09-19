import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-alignment-${alignment}`,
				style: { backgroundColor, color: textColor },
			})}
			tagName="h4"
			value={text}
		/>
	);
}
