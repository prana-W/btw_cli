import linkStore from '../../config/linkStore.js';

function setLink(key, value) {
    const prevLinks = linkStore.get('quickLink') || [];

    const isNameTaken = !!(
        prevLinks && prevLinks.filter((link) => link.name === key).length
    );

    if (isNameTaken) {
        console.error(
            'This key is already taken. Please choose a different key/name.',
        );
        return;
    }

    linkStore.set('quickLink', [...prevLinks, { name: key, url: value }]);

    console.log(
        'Shortcut set successfully! Use `btw open <key>` to open the link.',
    );
}

export default setLink;
