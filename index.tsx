/** @jsx createElement */
import { createElement } from 'typed-html'
import shuffle from 'shuffle-array'

document.addEventListener('DOMContentLoaded', () => {
    const icons = [
        'apple-alt'
        , 'beer'
        , 'carrot'
        , 'egg'
        , 'fish'
        , 'hamburger'
        , 'ice-cream'
        , 'lemon'
        , 'wine-bottle'
    ]

    const tbody = document.getElementById('tbody') as HTMLElement

    for (const icon of icons) {
        tbody.innerHTML += <tr>
            <td><i class={`fas fa-${icon}`}></i></td>
            <td></td>
        </tr>
    }
})