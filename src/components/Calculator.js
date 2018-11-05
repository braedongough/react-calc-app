import React from 'react';
import * as math from 'mathjs'

import Button from './../func-components/Button'
import Buttons from './../func-components/Buttons'
import Display from './../func-components/Display'

class Calculator extends React.Component {
    state = { result: [] }
    handleClick = (e) => {
        const value = e.target.getAttribute('data-value')
        if(value === '=') {
            const operated = this.operate(this.state.result)
            this.setState(() => ({ result: operated }))
            return
        } else if (value === 'C') {
            this.setState(() => ({ result: [] }))
            return
        }
        const newValue = this.state.result += value

        this.setState(() => ({ result: newValue }))
    }
    operate(result) {
        return math.eval(result)
    }
    render() {
        return (
            <div>
                <Display result={this.state.result} />
                <Buttons handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator