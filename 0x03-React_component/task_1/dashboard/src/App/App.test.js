/* REACT TESTING LIBRARY TESTS */
import { render, screen, fireEvent } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "./App"

describe('App', () => {
  it("app renders without crashing", () => {
    render(<App/>)
    const headerElem = screen.getByRole("heading", {name: "School dashboard"})
    expect(headerElem).toBeInTheDocument()
  })

  it('app does not render CourseList by default(isLoggedIn is false)', () => {
    render(<App />)
    expect(screen.queryByTestId('CourseList')).not.toBeInTheDocument()
  })
  
  it('app renders CourseList when isLoggedIn is true', async () => {
    render(<App />)
    const btn = screen.getByText('OK')
    expect(btn).toBeInTheDocument()
    await fireEvent.mouseDown(btn)

  })

  it('calls logOut and displays alert when Ctrl+H is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert');

    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  })
})
