import { render, screen } from '@testing-library/react';
import  Home from '../home';

let assignMock = jest.fn();
delete window.location;
window.location = { assign: assignMock };
describe("Home page is displayed properly", ()=>{
    it("Home component loaded", ()=>{
        render(
            <Home/>
        );
        expect(screen.getByText(/Hello from Quickly/i)).toBeTruthy();
        });
});