import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeText = (nextText) => {
		setAttributes({ text: nextText });
	};
	const onChangeAlignment = (nextAlignment) => {
		setAttributes({ alignment: nextAlignment });
	};

	const onBackgroundColorChange = (newBackgroundcolor) => {
		setAttributes({ backgroundColor: newBackgroundcolor });
	};

	const onTextColorChange = (newTextcolor) => {
		setAttributes({ textColor: newTextcolor });
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
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
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
						backgroundColor,
						color: textColor,
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
