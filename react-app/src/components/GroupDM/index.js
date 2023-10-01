import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlusSquare, faMessage } from '@fortawesome/free-solid-svg-icons'
import './GroupDM.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoom } from '../../store/channel';
import { toggleGroupDM, getAllGroups } from '../../store/modals';
import defaultIcon from '../../assets/defaultIcon.png';
function GroupDM() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [myGroups, setMyGroups] = useState([]);
    const [intervalTime, setIntervalTime] = useState('');
    const user = useSelector(state => state.session.user);
    useEffect(() => {
        if (user === null) return;
        dispatch(getAllGroups()).then((res) => {
            setMyGroups(res);
        })
        setIntervalTime(setInterval(() => {
            dispatch(getAllGroups()).then((res) => {
                setMyGroups(res);
            })
        }, 2000))
        return () => {
            clearInterval(intervalTime);
        }
    }, [user])

    const trimName = (name) => {
        if (name.length > 20) {
            return name.slice(0, 20) + '...';
        }
        return name;
    }

    const removeOurName = (name) => {
        let newName = name.split(' ');
        let joiner = " ";
        if (newName.length === 1) {
            joiner = ",";
            newName = name.split(',');
        }
        newName = newName.filter((name) => name !== user.username);
        return newName.join(joiner);
    }
    const getNumber = (name) => {
        let count = name.split(',');

        return count.length - 1;
    }



    const getStatusColor = (user) => {
        let status = user.status;
        if (status == null) status = user.status;
        const statusType = status ? status.split(']')[0].slice(1) : 'Active';
        let userStatus = status ? status.split(']')[1] : user.status;
        if (userStatus === '') userStatus = statusType;
        let statusColor = '';
        if (statusType === 'Active') statusColor = ' status-green';
        if (statusType === 'Do not disturb') statusColor = ' status-red';
        if (statusType === 'Be right back') statusColor = ' status-yellow';
        if (statusType === 'Away') statusColor = ' status-dim-green';
        if (statusType === 'Offline') statusColor = ' status-gray';
        return statusColor;
    }
    const generateIcon = (user) => {
        const icon = defaultIcon;
        const statusColor = getStatusColor(user);
        function convertToTint(name) {
            if (icon !== defaultIcon) return;
            let firstLetter = name[0].toUpperCase();
            let tint = 'A';
            if (firstLetter >= 'F' && firstLetter <= 'J') {
                tint = 'B';
            }
            if (firstLetter >= 'K' && firstLetter <= 'O') {
                tint = 'C';
            }
            if (firstLetter >= 'P' && firstLetter <= 'T') {
                tint = 'D';
            }
            if (firstLetter >= 'U' && firstLetter <= 'Z') {
                tint = 'E';
            }
            return `chat-logo-tint-${tint}`;

        }
        return (
            <div className='search-modal-results-icon'>
                <img src={icon} alt="profile icon" className={convertToTint(user.firstname) + " main-window-header-user-icon"} />
                <div className={"main-window-header-user-status" + statusColor}></div>
            </div>
        )
    }
    const toggleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className='group-DM-container-outer'>
            <div className='group-DM-container'>
                <FontAwesomeIcon onClick={toggleOpen} icon={faPlay} className={open ? 'group-DM-triangle triangle-open' : 'group-DM-triangle'} />
                <span className='DirectMessageText'>Direct Messages</span>
                <FontAwesomeIcon icon={faPlusSquare} className='group-DM-plus' onClick={() => {
                    dispatch(toggleGroupDM())
                }
                }
                />
            </div>
            {open && myGroups.length > 0 &&
                <div className='group-DM-list'>
                    {myGroups.map((group) => {
                        return (

                            <div className='group-DM-list-item' key={group.id} onClick={() => dispatch(changeRoom(group))}>
                                {/* <FontAwesomeIcon icon={faMessage} className='group-DM-list-item-icon' /> */}

                                {group.type === 1 &&
                                    <>{generateIcon(group.user)}
                                        <div className='group-DM-list-item-name'>{trimName(removeOurName(group.name))}</div>
                                    </>
                                }
                                {group.type === 2 &&
                                    <>
                                    {/* <img src={defaultIcon} className='group-DM-list-item-icon' /> */}
                                        {/* <div className='group-DM-number'>{getNumber(group.name)}</div> */}
                                        <div className='group-DM-list-item-name left-10'>{trimName(removeOurName(group.name))}</div>
                                    </>
                                }

                            </div>
                        )
                    }
                    )}
                </div>}
        </div>
    )

}
export default GroupDM;
