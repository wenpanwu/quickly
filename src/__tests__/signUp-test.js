import { render, screen } from '@testing-library/react';
import  SignUp from '../signUp';

describe("SignUp page is displayed properly", ()=>{
    it("SignUp component loaded", ()=>{
        render(
            <SignUp/>
        );
        expect(screen.getByLabelText(/^Email:$/i)).toBeTruthy();
        });
});