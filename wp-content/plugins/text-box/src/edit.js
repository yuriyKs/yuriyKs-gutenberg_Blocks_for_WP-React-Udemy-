import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
	withColors,
} from '@wordpress/block-editor';
import './editor.scss';

function Edit(props) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
	} = props; // setTextColor & setBackgroundColor получаем из того что export default withColors({ backgroundColor: 'backgroundColor', textColor: 'color', })(Edit); в консоли видно как добавляется аттрибуты к пропсу
	const { text, alignment } = attributes;

	const onChangeText = (nextText) => {
		setAttributes({ text: nextText });
	};
	const onChangeAlignment = (nextAlignment) => {
		setAttributes({ alignment: nextAlignment });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor.color}
						backgroundColor={backgroundColor.color}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls group="inline">
				<AlignmentToolbar
					value={alignment}
					onChange={(val) => onChangeAlignment(val)}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-alignment-${alignment}`,
					style: {
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					},
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

export default withColors({
	backgroundColor: 'backgroundColor',
	textColor: 'color',
})(Edit);
