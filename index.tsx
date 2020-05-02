/** @jsx createElement */
import { createElement } from 'typed-html'
import shuffle from 'shuffle-array'

document.addEventListener('DOMContentLoaded', () => {
    const icons = shuffle([
        'dog'
        , 'cat'
        , 'ambulance'
        , 'apple-alt'
        , 'baby'
        , 'baby-carriage'
        , 'band-aid'
        , 'battery-full'
        , 'bed'
        , 'beer'
        , 'bell'
        , 'bicycle'
        , 'birthday-cake'
        , 'bolt'
        , 'bomb'
        , 'bone'
        , 'book'
        , 'box-open'
        , 'bread-slice'
        , 'briefcase'
        , 'bug'
        , 'building'
        , 'bus'
        , 'camera'
        , 'campground'
        , 'car'
        , 'carrot'
        , 'chair'
        , 'child'
        , 'clock'
        , 'coffee'
        , 'couch'
        , 'crow'
        , 'crown'
        , 'cut'
        , 'dice-six'
        , 'egg'
        , 'eye'
        , 'faucet'
        , 'fighter-jet'
        , 'fish'
        , 'flag'
        , 'frog'
        , 'futbol'
        , 'gem'
        , 'guitar'
        , 'hamburger'
        , 'heart'
        , 'helicopter'
        , 'hippo'
        , 'home'
        , 'horse'
        , 'ice-cream'
        , 'igloo'
        , 'kiwi-bird'
        , 'leaf'
        , 'lemon'
        , 'lock'
        , 'mask'
        , 'medal'
        , 'menorah'
        , 'microphone'
        , 'microscope'
        , 'mitten'
        , 'mobile-alt'
        , 'money-bill-alt'
        , 'moon'
        , 'motorcycle'
        , 'mouse'
        , 'paint-brush'
        , 'paper-plane'
        , 'paperclip'
        , 'pen'
        , 'pencil-alt'
        , 'pepper-hot'
        , 'phone'
        , 'plug'
        , 'poo'
        , 'rainbow'
        , 'rocket'
        , 'screwdriver'
        , 'shield-alt'
        , 'ship'
        , 'shoe-prints'
        , 'shopping-cart'
        , 'skiing'
        , 'skull'
        , 'snowflake'
        , 'snowman'
        , 'socks'
        , 'spider'
        , 'splotch'
        , 'stamp'
        , 'star-of-david'
        , 'subway'
        , 'tractor'
        , 'tram'
        , 'truck'
        , 'truck-monster'
        , 'tshirt'
        , 'wine-bottle'
    ])

    const tbody = document.getElementById('tbody') as HTMLElement

    for (const icon of icons.slice(0, 10)) {
        tbody.innerHTML += <tr>
            <td><i class={`fas fa-${icon}`}></i></td>
            <td></td>
        </tr>
    }
})