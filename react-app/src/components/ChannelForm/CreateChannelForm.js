import './CreateChannelForm.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createChannel } from '../../store/channels';

const CreateChannelForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [error, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const createName = (e) => setName(e.target.value);
  const createType = (e) => setType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      type: 3,
    };

    const data = await dispatch(createChannel(payload));
    if (data) setErrors(data.errors);

    console.log("CHANNELS DATA", data);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return sessionUser.id ? (
    <>
      <div>
        <button className="ExpandChannelsBtn" onClick={toggleModal}>
          {showModal ? 'Close' : 'Create a New Channel'}
        </button>
        {showModal && (
          <div className="Channelmodal">
            <button className="closeButton" onClick={toggleModal}>
              X
            </button>
            <form className="createChannel" onSubmit={handleSubmit}>
              <div className="CreateChannelError">
                {error &&
                  error.map((error, i) => {
                    return <div key={i}>{error}</div>;
                  })}
              </div>
              <input
                className="createChannelName"
                type="text"
                placeholder="Channel Name"
                value={name}
                onChange={createName}
              />
              <button className="CreateChannelBttn" type="submit">
                Create New Channel
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  ) : null;
};

export default CreateChannelForm;
