import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props; // setTextColor & setBackgroundColor получаем из того что export default withColors({ backgroundColor: 'backgroundColor', textColor: 'color', })(Edit); в консоли видно как добавляется аттрибуты к пропсу
	const { text, alignment } = attributes;

	const onChangeText = (nextText) => {
		setAttributes({ text: nextText });
	};
	const onChangeAlignment = (nextAlignment) => {
		setAttributes({ alignment: nextAlignment });
	};

	return (
		<>
			<BlockControls group="inline">
				<AlignmentToolbar
					value={alignment}
					onChange={(val) => onChangeAlignment(val)}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
