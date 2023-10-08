
Slacker is a Python and React project meant to emulate the core functionality of the popular messaging app Slack 

### Building The Application

    pip install -r requirements.txt    
    pip install psycopg2  

    flask db upgrade
    flask seed all 
    npm install --prefix react-app 
    npm run build --prefix react-app

After a successful build the application can then be ran using Gunicorn

    gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:5000 app:app

If you choose to use a virtual environment, enter the shell by running

    pipenv shell

Inside the shell, run 

    pipenv run gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:5000 app:app

If the port is occupied run 
    
    lsof -i:5000 

(5000 is the port number) to check what is occupying the port, then using the below command to clear port

    sudo kill -9 (PID number) 

To remove all messages, channels, DMS and reset back to the initial DB state run:

    flask seed undo

---

### Feature List

 - Live chat
 - Rich Text including Underline, Italics, Bold, and Lists
 - User and Message Search
 - User status updates
 - Dynamic message loading
 - Channel Browser
 - Direct Messages

### Database Design

![image](https://user-images.githubusercontent.com/4108484/232324020-3d717378-198d-49aa-ab59-6d9e2ed00909.png)
The database is has a simple design putting all types of communication (Channels, DMs, Group DMs) into a single table 'Rooms', that relates to a constants table called 'Types' to determine what kind of room it is. This design allows for quickly adding and removing types for further changes and features.

### Crud Features
The Slack-Clone project includes full CRUD features (which includes Create, Read, Update, Delete) for both the channels and the direct message portion of the page
