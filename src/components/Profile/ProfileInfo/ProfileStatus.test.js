import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='I am profile status' />);
        const instance = component.getInstance();

        expect(instance.state.status).toBe('I am profile status');
    });

    test('after creation span should be displayed with correct status', async () => {
        const component = create(<ProfileStatus status='I am profile status' />);
        const root = component.root;
        const span = await root.findByType('span');

        expect(span.length).toBe(1);
    });

    test('after creation input should not be displayed',  () => {
        const component = create(<ProfileStatus status='I am profile status' />);
        const root = component.root;

        expect(async () => {
            const input = await root.findByType('input');
        }).toThrow();
    });

})