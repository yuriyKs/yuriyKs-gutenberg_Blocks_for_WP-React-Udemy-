import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner, withNotices } from '@wordpress/components';

function Edit({
	attributes,
	setAttributes,
	noticeOperations,
	noticeUI,
	...props
}) {
	console.log(props);

	const { name, bio, url, alt } = attributes;
	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};
	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	const onSelectImageURL = (newUrl) => {
		setAttributes({ url: newUrl, id: undefined, alt: undefined });
	};

	const onUploadError = (message) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(message);
	};

	return (
		<div {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-blocks-course-team-member-img${
						isBlobURL(url) ? ' is-loading' : ''
					}`}
				>
					<img src={url} alt={alt} />
					{isBlobURL(url) && <Spinner />}
				</div>
			)}

			<MediaPlaceholder
				icon="admin-users"
				onSelect={onSelectImage}
				onSelectURL={onSelectImageURL}
				onError={onUploadError}
				accept="image/*"
				allowedTypes={['image']}
				disableMediaButtons={url}
				notices={noticeUI}
			/>
			<RichText
				placeholder={__('MeMbeR NAME', 'team-member')}
				tagName="h4"
				onChange={onChangeName}
				value={name}
			/>
			<RichText
				placeholder={__('MeMbeR Bio', 'team-member')}
				tagName="p"
				onChange={onChangeBio}
				value={bio}
			/>
		</div>
	);
}

export default withNotices(Edit);
