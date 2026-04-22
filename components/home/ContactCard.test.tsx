import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactCard from './ContactCard';
import { EmailJSResponseStatus } from '@emailjs/browser';

// --- Mocks ---

// Mock @heroui/toast
const mockAddToast = jest.fn();
jest.mock('@heroui/toast', () => ({
  // We only need to mock the addToast function used in the component
  addToast: (args: unknown) => mockAddToast(args),
}));

// Mock @emailjs/browser
const mockEmailJsSend = jest.fn();
jest.mock('@emailjs/browser', () => ({
  __esModule: true, // This is important for modules with default exports
  default: {
    send: (...args: unknown[]) => mockEmailJsSend(...args),
  },
  EmailJSResponseStatus: class EmailJSResponseStatus extends Error {},
}));

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Return the key itself for easy testing
  }),
}));

// --- Test Suite ---

describe('ContactCard', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset mocks and environment variables before each test
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'test_service_id',
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'test_template_id',
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: 'test_user_id',
    };
  });

  afterAll(() => {
    // Restore original environment variables
    process.env = originalEnv;
  });

  const fillForm = async () => {
    const user = userEvent.setup();
    await user.type(screen.getByLabelText('Input Label Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Input Label Name'), 'John Doe');
    await user.type(screen.getByLabelText('Input Label Subject'), 'Test Subject');
    await user.type(screen.getByLabelText('Input Label Message'), 'This is a test message.');
  };

  it('renders all form fields and the submit button', () => {
    render(<ContactCard />);

    expect(screen.getByRole('heading', { name: 'Contact Title' })).toBeInTheDocument();
    expect(screen.getByLabelText('Input Label Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Input Label Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Input Label Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Input Label Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Button' })).toBeInTheDocument();
  });

  it('shows a configuration error toast if EmailJS environment variables are missing', async () => {
    // Unset one of the required env vars
    delete process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const user = userEvent.setup();
    render(<ContactCard />);

    await fillForm();
    await user.click(screen.getByRole('button', { name: 'Submit Button' }));

    await waitFor(() => {
      expect(mockAddToast).toHaveBeenCalledWith({
        title: 'Email Title Error',
        description: 'Configuration error. Please try again later.',
        color: 'danger',
      });
    });

    // Ensure emailjs.send was not called
    expect(mockEmailJsSend).not.toHaveBeenCalled();
  });

  it('successfully sends an email, shows a success toast, and resets the form', async () => {
    mockEmailJsSend.mockResolvedValue({ status: 200, text: 'OK' });
    const user = userEvent.setup();
    render(<ContactCard />);

    const emailInput = screen.getByLabelText('Input Label Email');
    const nameInput = screen.getByLabelText('Input Label Name');
    const subjectInput = screen.getByLabelText('Input Label Subject');
    const messageInput = screen.getByLabelText('Input Label Message');

    await user.type(emailInput, 'test@example.com');
    await user.type(nameInput, 'Jane Doe');
    await user.type(subjectInput, 'Success Test');
    await user.type(messageInput, 'This is a success test message.');

    await user.click(screen.getByRole('button', { name: 'Submit Button' }));

    await waitFor(() => {
      expect(mockEmailJsSend).toHaveBeenCalledWith(
        'test_service_id',
        'test_template_id',
        {
          email: 'test@example.com',
          name: 'Jane Doe',
          subject: 'Success Test',
          message: 'This is a success test message.',
        },
        'test_user_id'
      );
    });

    await waitFor(() => {
      expect(mockAddToast).toHaveBeenCalledWith({
        title: 'Email Title Success',
        description: 'Email Description Success',
        color: 'success',
      });
    });

    // Check if form is reset
    await waitFor(() => {
      expect(emailInput).toHaveValue('');
      expect(nameInput).toHaveValue('');
      expect(subjectInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  it('shows a warning toast on email sending failure and does not reset the form', async () => {
    const error = new EmailJSResponseStatus(500, 'Internal Server Error');
    mockEmailJsSend.mockRejectedValue(error);
    const user = userEvent.setup();
    render(<ContactCard />);

    const emailInput = screen.getByLabelText('Input Label Email');
    await fillForm();

    await user.click(screen.getByRole('button', { name: 'Submit Button' }));

    await waitFor(() => {
      expect(mockEmailJsSend).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(mockAddToast).toHaveBeenCalledWith({
        title: 'Email Title Error',

        description: 'Email Description Error',
        color: 'warning',
      });
    });

    // Ensure form is not reset
    expect(emailInput).toHaveValue('test@example.com');
  });
});