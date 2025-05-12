import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  jest.useFakeTimers();

  it('renders input and calls onSearch after debounce', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText('숙소 검색');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onSearch).not.toBeCalled();
    jest.advanceTimersByTime(300);
    expect(onSearch).toBeCalledWith('test');
  });
}); 