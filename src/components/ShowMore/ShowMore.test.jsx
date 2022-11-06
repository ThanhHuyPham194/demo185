import { cleanup, screen, render } from "@testing-library/react";
import ReactDom from "react-dom";
import ShowMore from "../../components/ShowMore/ShowMore";
afterEach(() => {
    cleanup();
});

test("should render showmore component", () => {
    render(<ShowMore />);
    let showMoreElement = screen.getByTestId("ShowMoreElem");
    expect(showMoreElement).toBeInTheDocument();
})



