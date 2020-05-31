/** @jsx createElement */
import { createElement } from 'typed-html'
import * as shuffle from 'shuffle-array'
import * as math from 'mathjs'

document.addEventListener('DOMContentLoaded', () => {
    const icons = shuffle([
        'apple-alt'
        , 'beer'
        , 'carrot'
        , 'egg'
        , 'fish'
        , 'hamburger'
        , 'ice-cream'
        , 'lemon'
        , 'wine-bottle'
    ])

    const tbody = document.getElementById('tbody') as HTMLElement

    function randLower(size: number, min = 1, max = 5) {
        const mat: number[][] = math.randomInt([size, size], min, max) as number[][]
        for (let i = 0; i < size - 1; i++) {
            for (let j = i + 1; j < size; j++) {
                mat[i][j] = 0
            }
        }
        return mat
    }

    function randUpper(size: number, min = 1, max = 5) {
        const mat: number[][] = math.randomInt([size, size], min, max) as number[][]
        for (let i = 1; i < size; i++) {
            for (let j = 0; j < i; j++) {
                mat[i][j] = 0
            }
        }
        return mat
    }

    function randomEqSet(size: number) {
        const prices = math.randomInt([1, size], 20)
        const lower = randLower(3)
        const upper = randUpper(3)
        const eq = math.multiply(lower, upper)
        console.log(lower)
        console.log(upper)
        console.log(eq)
    }


    function drawProblem(equations: number[][], prices: number[]) {
        function td(v: number, i: number) {
            return <td>{i > 0 && v > 0 ? '+' : ''}</td> + <td>
                {Array(v).fill(<i class={`fas fa-${icons[i]}`}></i>)}
            </td>
        }

        function tr(eq: number[], val: number | string) {
            return <tr>
                {eq.map((v, i) => td(v, i))}
                <td>=</td>
                <td>{val}</td>
            </tr>
        }

        const total = math.multiply(equations, prices)
        const table = <table>{tr([1, 2, 3], 5)}</table>

        tbody.innerHTML = table
    }

    randomEqSet(3)
    drawProblem([[1, 2], [2, 1]], [1, 3])
})