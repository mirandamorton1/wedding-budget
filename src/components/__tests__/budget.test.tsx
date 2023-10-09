import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom';

import Budget from '../Budget';

test('should render Budget component', () => {
    render(<Budget />);
    const budgetElement=screen.getByTestId('budget-1')
    expect(budgetElement).toBeInTheDocument();
})