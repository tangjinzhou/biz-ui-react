//import * as attachFastClick from 'fastclick';
//attachFastClick['attach'](document.body);
import * as React from 'react';
import {
    Button,
    Icon,
    colors
} from '../src/index'

export default class App extends React.Component {

    commonFunc = (...args) => {
        console.log(args);
    }

    render() {

        return (
            <div>
                <Button onClick={this.commonFunc}>OK</Button>
                <Button onClick={this.commonFunc} style={{background: '#8bc34a'}}>
                    <Icon type="search"/>Search
                </Button>
                <Button onClick={this.commonFunc} disabled>disabled</Button>
                <Icon type="add"/>
                <Icon type="perm_identity" size="lg"/>
                <Icon type="perm_identity"/>
                <Icon type="perm_identity" size="2x"/>
                <Icon type="perm_identity" size="3x"/>
                <Icon type="perm_identity" size="4x"/>
                <Icon type="perm_identity" size="5x" color={colors.blue_500}/>
                <Icon type="cached" size="5x" spin color={colors.red_500}/>
            </div>
        );
    }
}

