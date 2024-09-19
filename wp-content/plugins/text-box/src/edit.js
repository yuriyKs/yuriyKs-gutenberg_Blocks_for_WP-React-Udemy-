import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
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
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						]}
						value={backgroundColor}
						onChange={onBackgroundColorChange}
					/>
				</PanelBody>
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
