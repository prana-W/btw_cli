import open from 'open';
import linkStore from '../../config/linkStore.js';

export default function openLink(name) {
    const quickLinks = linkStore.get('quickLink') || [];

    const requiredLink = (quickLinks &&
        quickLinks.filter((link) => link.name === name))[0]?.url;

    if (!requiredLink) {
        console.error('Not Found!');
        return;
    }

    open(requiredLink)
        .then(() => {
            console.log(`Opened ${name} successfully!`);
        })
        .catch((error) => {
            console.error('Error opening link:', error);
        });
}
