import linkStore from '../../config/linkStore.js';

export default function showLink () {
    console.log(linkStore.get('quickLink'));
}