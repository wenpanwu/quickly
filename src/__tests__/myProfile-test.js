import { render, screen } from '@testing-library/react';
import  MyProfile from '../myProfile';

let assignMock = jest.fn();
delete window.location;
window.location = { assign: assignMock };

describe("SignUp page is displayed properly", ()=>{
    it("SignUp component loaded", ()=>{
        render(
            <MyProfile/>
        );
        expect(screen.getByText(/Company:/i)).toBeTruthy();
        });
});