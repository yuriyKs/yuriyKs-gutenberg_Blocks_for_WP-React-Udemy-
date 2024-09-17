import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	ToolbarGroup,
	ToolbarButton,
	DropdownMenu,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	console.log(attributes);
	const { text } = attributes;
	const [activeButton, setActiveButton] = useState(null);
	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			{text && (
				<BlockControls
					group="other"
					controls={[
						{
							title: 'Button 1',
							icon: 'admin-generic',
							isActive: activeButton === 'button1',
							onClick: () => {
								setActiveButton(
									activeButton === 'button1'
										? null
										: 'button1'
								);
							},
						},
						{
							title: 'Button 2',
							icon: 'admin-collapse',
							isActive: activeButton === 'button2',
							onClick: () => {
								setActiveButton(
									activeButton === 'button2'
										? null
										: 'button2'
								);
							},
						},
					]}
				>
					<p>Other</p>
					<ToolbarGroup>
						<ToolbarButton
							title="Align Left"
							icon="editor-alignleft"
							onClick={() => console.log('Align left')}
						/>
						<ToolbarButton
							title="Align Center"
							icon="editor-aligncenter"
							onClick={() => console.log('Align Center')}
						/>
						<ToolbarButton
							title="Align Right"
							icon="editor-alignright"
							onClick={() => console.log('Align Right')}
						/>
						<DropdownMenu
							icon="arrow-down-alt2"
							label={__('More AlignMenTS', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
								},
							]}
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__('More AlignMenTS', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
								},
							]}
						/>
					</ToolbarGroup>
					<ToolbarGroup>
						<p>Next Icon Group</p>
					</ToolbarGroup>
				</BlockControls>
			)}
			<RichText
				{...useBlockProps()}
				onChange={(val) => {
					setAttributes({ text: val });
				}}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
