import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const fakeArticle = {
    createdOn: 'today',
    image: 'https://images.unsplash.com/photo-1559962219-f52ccd86944e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
    headline: 'Big Waves',
    author: 'Jess',
    summary: 'this is a summary',
    body: 'The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.'
}

test('renders component without errors', ()=> {
    render(<Article article={fakeArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={fakeArticle}/>);

    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    const fakeArticle2 = {
        createdOn: 'today',
        image: 'https://images.unsplash.com/photo-1559962219-f52ccd86944e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
        headline: 'Big Waves',
        author: null,
        summary: 'this is a summary',
        body: 'The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either.'
    }

    render(<Article article={fakeArticle2}/>)

    const press = screen.queryByText(/associated press/i);

    expect(press).toBeInTheDocument();
    expect(press).toBeTruthy();
});

test('executes handleDelete when the delete button is pressed', ()=> {
const handleDelete = jest.fn();
    render(<Article article={fakeArticle} handleDelete={handleDelete}/>)

    const deleteButton = screen.queryByTestId('deleteButton');
    userEvent.click(deleteButton);

    expect(handleDelete).toBeCalled();

});
