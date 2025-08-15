import linkStore from '../../config/linkStore.js';

function setLink(key, value) {

    const prevLinks = linkStore.get('quickLink') || [];

    linkStore.set('quickLink', [
        ...prevLinks,
        { name: key, url: value },
    ]);

    console.log('Shortcut set successfully! Use `btw open <key>` to open the link.');



}

export default setLink;