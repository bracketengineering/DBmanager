import SubPropertyForm from './SubPropertyForm';

export default function LinkForm({ edge, updateProperty }) {
    //can put custom stuff for getting source node and other shit for sending api request etc
    return (
        <SubPropertyForm object={edge} updateProperty={updateProperty} />
      );
}