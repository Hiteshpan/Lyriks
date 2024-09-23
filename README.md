
# Lyriks

Lyriks is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently.
#### Web Link: https://lyriks-0vml.onrender.com/
| Admin Credentials | Employee Credentials |
|-----------------------------------------|-----------------------------------------|
| Email: hiteshadmin@gmail.com |  Email: hiteshuser@gmail.com |
| Password- admin@123 | Password- user@123 |
  
|  Login                              |                                 |
|-----------------------------------------|-----------------------------------------|
| ![admin_login](https://github.com/user-attachments/assets/4d371fa2-3b3e-462e-8d16-6111f170e1f8) | ![user_login](https://github.com/user-attachments/assets/16367a19-eb12-4610-a950-9cfd67dede68) |

| Admin                                | Employee                                 |
|-----------------------------------------|-----------------------------------------|
| ![admin_home](https://github.com/user-attachments/assets/9b0dd998-9705-4246-9503-6fd96778c280) | ![user_home](https://github.com/user-attachments/assets/28da22b4-70d3-446a-9084-ae3c29acef68) |
| ![admin_album](https://github.com/user-attachments/assets/faaafb49-5d56-4c0b-9967-ac0c1adcc8e7) | ![user_album](https://github.com/user-attachments/assets/49c846b5-776f-461c-a165-b0dc23335d24) |
| ![admin_playlist](https://github.com/user-attachments/assets/4453215a-bbf1-4ece-b545-daaa1b78cc3f) | ![user_playlist](https://github.com/user-attachments/assets/8c4cb122-85d8-4152-b5d7-e0021c3be3e1) |
| ![admin_songs](https://github.com/user-attachments/assets/338d53d7-25b3-418c-be60-603f08a0ebc1) | ![user_songs](https://github.com/user-attachments/assets/d664d617-f10f-4803-84fd-fd5d1998f477) |
| ![admin_mobile](https://github.com/user-attachments/assets/73232fa9-f44f-42c4-9ba8-e80c985b64ca) | ![user_mobile](https://github.com/user-attachments/assets/d2941c71-bb0a-465e-8b23-ee05e6682363) |
| ![admin_tab](https://github.com/user-attachments/assets/6dba53f5-795a-4ed8-b68b-e2716837f01b) | ![user_tab](https://github.com/user-attachments/assets/b26a57f7-c9bc-4fd9-bd82-93d436f02d59) |
| ![admin_addalbums](https://github.com/user-attachments/assets/131e3ab5-332e-468d-af0a-177829f67810) |                                         |
| ![admin_addsongs](https://github.com/user-attachments/assets/ebe70c66-251b-470f-9e5e-41a3cbf0a878) |                                         |
| ![added_songs1](https://github.com/user-attachments/assets/5f0a2bd5-34ba-4eb5-bdec-bad673747cf5) |                                         |
| ![added_songs2](https://github.com/user-attachments/assets/4c57003f-a7a1-4667-888e-7ffb54e8df9a) |                                         |



## Features

- User Authentication:

  - Admin Login: Admins can add and remove the album and song of this application using their unique username and password to manage overall data.

  - User Login: User can log in with their credentials to listen newly add and existing songs or to access their playlist.

- Songs Management:

  - Admin Dashboard: The admin has the ability to add albums and songs, remove songs, and view a list of all added songs.
  - User Playlist Update: Users can update their playlist only.

- Task Management:
  - Add Tasks: Employees can log tasks for each day, including task description, type (break, meeting, or work), start time, and duration.
  - Date Filtering: Users can filter and view tasks and associated graphical information for specific dates.
- Graphical Information:
  - Pie Charts: Two pie charts display task distribution for the current day and the previous day, categorized by break, meeting, and work.
  - Stacked Bar Chart: A stacked bar chart provides a weekly overview, showing the distribution of not working (including breaks), working (work tasks), and meetings.

## Getting Started

### Pre-requisites

1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).
2. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and set up a cluster.

### Clone the repository

1. Clone the repository: `git clone https://github.com/rishavchanda/Trackify.git`

### Configure the client

1. Navigate to client folder: `cd client`
2. Build the docker image for the client in dev mode: `docker build -f Dockerfile.dev -t trackify-react-image .`
3. Set up and configure the environment variables, create a `.env` file in the client folder and add the following environment variables:

```
REACT_APP_API_URL = http://localhost:8800/api
```

### Configure the server

1. Navigate to server folder: `cd server`
2. Build the docker image for the server in dev mode: `docker build -f Dockerfile.dev -t trackify-server-image .`
3. Set up the database and configure the environment variables by following the instructions in the next steps.

### Set up the database

1. Create a MongoDB Atlas account and set up a cluster.
2. Create a `.env` file in the server folder and add the following environment variables:

```
MONGO_URL = <MongoDB connection string>
```

### Run the application

1. Navigate to the root folder: `cd ..`
2. Run the docker-compose file: `docker-compose -f docker-compose.yml -f docker-compose-dev.yml  up --build`
3. Open the application in your browser at `http://localhost:3000`
4. Server will be running at `http://localhost:8800`
5. To stop the application, press `Ctrl + C` in the terminal.

## Technologies Used

- Front-End: ReactJS, HTML, CSS, JavaScript
- Back-End: Node.js, Express.js
- Database: MongoDB

## Contributing

We welcome contributions from the community to enhance Trackify. Feel free to submit bug reports, feature requests, or pull requests through the GitHub repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any questions or inquiries, please reach out to the development team at [rishavchanda0@gmail.com]

Enjoy using Trackify and stay productive!
