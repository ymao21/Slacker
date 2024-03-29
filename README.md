
Slacker is a full-stack project using Python for its back end and React for its front end.  It is meant to emulate the core functionality of the popular messaging app Slack. Slacker allows users to create channels and start group chats related to specific topics such as work, hobbies, networking groups, study groups, etc. Users can send messages to all other members on the platform and customize their messages with different styles and emojis. Users can either directly message one other member or create a group chat with more than one member. 

### Technologies Used
* React
* Redux
* JavaScript
* HTML/CSS
* Python
* PostgreSQL
* Flask
* Socket.io
* Render

### Building The Application

    pip install -r requirements.txt    
    pip install psycopg2  

    flask db upgrade
    flask seed all 
    npm install --prefix react-app 
    npm run build --prefix react-app

After a successful build, the application can then be run using Gunicorn

    gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:5000 app:app

If you choose to use a virtual environment, enter the shell by running

    pipenv shell

Inside the shell, run 

    pipenv run gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:5000 app:app

If the port is occupied run 
    
    lsof -i:5000 

(5000 is the port number) to check what is occupying the port, use the below command to clear the port

    sudo kill -9 (PID number) 

To remove all messages, channels, DMS and reset back to the initial DB state run:

    flask seed undo

---
### Feature List

 * Live chat
 * Rich Text including Underline, Italics, Bold, and Lists
 * User and Message Search
 * User status updates
 * Dynamic message loading
 * Channel Browser
 * Direct Messages
   
### Splash Page

### When Logged Out
![splash](https://github.com/ymao21/Slacker/assets/103905774/ba0aa78d-b9fe-4b7f-a8dd-6bc1b9fbd877)
<br />
The Splash Page will display general information, images, and gifs. The Navigation bar shows where the user can log in, register, or log in as a demo user

### When Logged In

![Screen Shot 2023-10-10 at 1 51 19 PM](https://github.com/ymao21/Slacker/assets/103905774/4b46b391-0c0a-49d8-8295-17e738f69506)
<br />
Users will be able to see a button to launch the Demo server

### Server Overview 

Slacker uses Websockets to facilitate the live chat function. The messages sent will immediately be displayed through all members/channels without refreshing the page. All messages are shared in real time
<br />
<img width="1183" alt="Screen Shot 2023-10-10 at 2 38 23 PM" src="https://github.com/ymao21/Slacker/assets/103905774/de079ee6-b7b6-4be7-811a-a90cef64d9b5">
<br />

### Channel 

Users can view, create, delete, and edit the channels displayed on the sidebar. As the user hovers over the channel names, the user has the option to leave the channels. As the user clicks on the Create channel button, a modal pops up allowing the user to add a new channel. 
<br />

<img width="239" alt="Screen Shot 2023-10-10 at 2 39 44 PM" src="https://github.com/ymao21/Slacker/assets/103905774/8f98d1ba-9b09-4654-a58e-956003cd572b">
<br />
<img width="930" alt="Screen Shot 2023-10-10 at 2 40 50 PM" src="https://github.com/ymao21/Slacker/assets/103905774/2456dbda-c75a-41ac-b3ae-905a292d3eb2">
<br />

### Chat
Users can edit and customize their messages to any channels or direct messages. They can also add emojis to go with their message before sending it
<br />
![chatbox](https://github.com/ymao21/Slacker/assets/103905774/3f6f0e3f-8b3a-4aa6-b2a2-f5719d784852)

Users can edit or delete their messages after sending them to any channel or through direct messages. After deleting a message, the message box will be grayed out and the original message will be shown as "message deleted". The message is also labeled with the current timestamp. Users can also view/edit the current channel name if they wish. 
<br />

![sentMessage](https://github.com/ymao21/Slacker/assets/103905774/746ff246-b2ef-466a-b0d7-561018947fcb) <br />

### Direct Messages/Group Messages
Users can select the other users that they want to start a direct message/group message with. If the user already started a chat with certain members, an error message will pop up to indicate the group already exists. The chat main window will also indicate how many members are in the group chat. The Direct messages/Group messages list is expandable
<br />

![Screen Shot 2023-10-10 at 2 50 59 PM](https://github.com/ymao21/Slacker/assets/103905774/b610da58-7165-4c75-a88e-d97fd62b5761)
<br />
![Screen Shot 2023-10-10 at 2 48 33 PM](https://github.com/ymao21/Slacker/assets/103905774/a66e0712-5c47-4558-acb5-db37ebefc12d)
<br />
![Screen Shot 2023-10-10 at 2 47 35 PM](https://github.com/ymao21/Slacker/assets/103905774/27e86226-0adc-4110-913a-386f1ba497e6) <br />

### User
User status can be updated depending on whether the user is busy, away, offline, or does not want to be disturbed. User can also add a message with their status
<br />
![status](https://github.com/ymao21/Slacker/assets/103905774/3d893fda-5b20-43f7-a944-4046b6ed61c4) <br />

### Search

Users are able to search both for other users and messages from the navigation search bar. As a user types in the search bar, the user needs to indicate whether if they are searching for a user or a message. Then as the user types, the app will automatically filter and display query results from the backend. 
<br />
![search](https://github.com/ymao21/Slacker/assets/103905774/5310cc6e-6997-4541-89d9-78b5229d6ea3) <br />


### Database Design
![image](https://user-images.githubusercontent.com/4108484/232324020-3d717378-198d-49aa-ab59-6d9e2ed00909.png) 
<br />
The database has a simple design putting all types of communication (Channels, DMs, Group DMs) into a single table 'Rooms', that relates to a constants table called 'Types' to determine what kind of room it is. This design allows for quickly adding and removing types for further changes and features.

### Crud Features
The Slack-Clone project includes full CRUD features (which include Create, Read, Update, Delete) for both the channels and the direct message portion of the page
