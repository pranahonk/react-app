import React from 'react';
import {render} from "@testing-library/react";
import Button from "./index";
import {Link} from "react-router-dom";

test("Should not allowed click button if isDisabled is present", ()=>{
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("Should render loading/spinner", ()=>{
    const {container, getByText} = render(<Button isDisabled></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
});

test("Should render tag a", ()=>{
    const {container} = render(<Button type='link' isExternal></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("Should render link component", ()=>{
    const {container} = render(<Button type='link'></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});
