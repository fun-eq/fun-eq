/** @jsx createElement */
import { createElement } from 'typed-html'
import * as shuffle from 'shuffle-array'
import * as math from 'mathjs'

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


    const content = document.getElementById('content') as HTMLElement

    const template = [
        [1, 1, 1],
        [0, 1, 1],
        [0, 0, 1],
    ]

    function eq(template: number[][]) {
        const n = template.length
        const rnd = math.randomInt([n, n], 1, 6)
        const sol = math.randomInt([n], 1, 8)
        const ls = math.dotMultiply(rnd, template) as number[][]
        const rs = math.multiply(ls, sol) as any as (number | string)[]
        ls.push(Array(n).fill(1))
        rs.push('?')
        return { ls, rs, sol }
    }



    function eqHtml() {
        const { ls, rs, sol } = eq(template)
        const n = ls[0].length

        function icon(i: number) {
            return <i class={`fas fa-${icons[i]}`}></i>
        }

        function row(ls: number[], rs: number | string) {
            return <tr>
                {
                    ls.map((v, i) =>
                        <td>{Array(v).fill(icon(i))}</td>
                        + <td>{v > 0 && i < n - 1 ? '+' : ''}</td>
                    )
                }
                <td>=</td>
                <td>{rs}</td>
            </tr>

        }

        return <div class='eq'>
            <table>{ls.map((r, i) => row(r, rs[i]))}</table>
            <div class='sol'>
                {
                    Array(3).fill(1).map((v, i) =>
                        <div class={`part part-${i}`}>
                            {
                                sol.map((v, j) =>
                                    <div>{icon(j)}</div>
                                    + <div> = </div>
                                    + <div>{v}</div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    }


    content.innerHTML = eqHtml() + eqHtml()
})