import { render, screen } from '@testing-library/react';
import  Login from '../login';

describe("Login page is displayed properly", ()=>{
    it("Login component loaded", ()=>{
        render(
            <Login/>
        );
        expect(screen.getByLabelText(/Email/i)).toBeTruthy();
        });
});