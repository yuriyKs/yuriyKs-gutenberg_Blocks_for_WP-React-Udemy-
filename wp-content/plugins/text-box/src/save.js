import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save()}
			tagName="h4"
			onChange={(val) => {
				setAttributes({ text: val });
			}}
			value={text}
		/>
	);
}
