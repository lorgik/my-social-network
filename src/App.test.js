import { render, screen } from '@testing-library/react';
import MainApp from "./App";
import ReactDOM from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div)
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
