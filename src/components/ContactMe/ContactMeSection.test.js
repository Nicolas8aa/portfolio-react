import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  renderHook,
} from "../../test-utils";
import Alert from "../Alert";
import ContactMe from "./ContactMeSection";
import useSubmit from "../../hooks/useSubmit";

describe("ContactMe Form", () => {
  let nameInput;
  let emailInput;
  let messageInput;
  let submitButton;
  beforeEach(() => {
    render(
      <main>
        <ContactMe />
        <Alert />
      </main>
    );
    nameInput = screen.getByLabelText("Name");
    emailInput = screen.getByLabelText("Email Address");
    messageInput = screen.getByLabelText("Your message");
    submitButton = screen.getByRole("button", { name: "Submit" });
  });
  it("should render the form", () => {
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  it("should display an error message if the name field is empty", async () => {
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.blur(nameInput);
    const errorMessage = await screen.findByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display an error message if the email field is empty", async () => {
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.blur(emailInput);
    const errorMessage = await screen.findByText("Email is required");
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display an error message if the email field is invalid", async () => {
    fireEvent.change(emailInput, { target: { value: "invalid" } });
    fireEvent.blur(emailInput);
    const errorMessage = await screen.findByText("Invalid email address");
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display an error message if the message field is empty", async () => {
    fireEvent.change(messageInput, { target: { value: "" } });
    fireEvent.blur(messageInput);
    const errorMessage = await screen.findByText("Message is required");
    expect(errorMessage).toBeInTheDocument();
  });
  it("should display an alert if the form is submitted successfully", async () => {
    // ignore useSubmit mock and use the real implementation

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "some@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello World" } });
    fireEvent.click(submitButton);

    await waitFor(
      () => {
        expect(screen.getByRole("alert")).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });
});
