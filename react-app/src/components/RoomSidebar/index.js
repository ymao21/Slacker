import { useDispatch } from "react-redux";
import { joinDefaultRoom } from "../../store/channel";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./RoomSidebar.css";
import ChannelBrowser from "../ChannelList/ChannelList";
import CreateChannelForm from "../ChannelForm/CreateChannelForm";
import { getChannel } from "../../store/channels";
import GroupDM from "../GroupDM";


function RoomSidebar() {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.channel.room);
  useEffect(() => {
    dispatch(getChannel());
    if (!currentChannel) dispatch(joinDefaultRoom());
  }, []);
  const channels = useSelector((state) => state.channels)

  const dms = useSelector((state) => state.dms)
  return (
    <div className="room-sidebar">
      <div className="room-sidebar-header">
        <h2 className="DirectMessageText">My Channels:</h2>
        {(channels) &&
          <div>
            <CreateChannelForm />
          </div>
        }
        <ChannelBrowser />
        <GroupDM />


      </div>
    </div>
  );
}
export default RoomSidebar;
