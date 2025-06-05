import { render, screen } from '@testing-library/react';
import GenerateButton from '@/components/GenerateButton';

describe('GenerateButton', () => {
  it('renders default label', () => {
    render(<GenerateButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Générer un avis IA');
  });
});
