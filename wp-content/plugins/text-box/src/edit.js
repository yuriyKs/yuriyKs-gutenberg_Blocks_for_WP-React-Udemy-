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
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input labelqqq"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<TextareaControl
						label="Input Text qqq"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<ToggleControl
						label="Togggle Controll"
						checked={true}
						onChange={(v) => console.log(v)}
					/>
					<AnglePickerControl />
					<ColorPicker
						color={'F03'}
						onChange={(v) => console.log(v)}
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						]}
						onChange={(v) => console.log(v)}
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
