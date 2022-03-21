import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='I am status' />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe('I am status');
    });

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status='I am status' />);
        const root = component.root;
        const span = root.findByType('span')

        expect(span).not.toBeNull();
    });

    test('after creation input should be displayed', () => {
        const component = create(<ProfileStatus status='I am status' />);
        const root = component.root;

        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status='I am status' />);
        const root = component.root;
        const span = root.findByType('span');

        expect(span.children[0]).toBe('I am status');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='I am status' />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');

        expect(input.props.value).toBe('I am status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='I am status' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });

})