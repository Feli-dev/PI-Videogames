import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Route, BrowserRouter } from "react-router-dom";
import Launch from './views/Launch/Launch';

configure({ adapter: new Adapter() });

describe('<Launch />', () => {

    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = mount(<BrowserRouter><Route><Launch/></Route></BrowserRouter>);
        })
        it('Renderiza un <button>', () => {
            const butn = `<a href="/home"><button class="button" style="width: 240px; height: 72px; border-radius: 10px;"><div class="content" style="font-size: 24px; width: 240px; height: 72px;">Play</div></button></a>`
            expect(wrapper.html().includes(butn)).toBe(true)
        })
        it('Renderiza un <img>', () => {
          const image = `<img class="steamdeck" src="steamdeck.png" alt="Steam Deck">`
          expect(wrapper.html().includes(image)).toBe(true);
        })
        })})