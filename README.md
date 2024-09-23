
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
| ![admin_addalbums](https://github.com/user-attachments/assets/131e3ab5-332e-468d-af0a-177829f67810) ||
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

- User-Friendly:
  - Admin and User both get the User-Frindly song player to manage the play/pause of the song and the prefered volume level of the song according to the user wants.
  - Player also have an mute functionality if user wants he/she can mute the current song.
- Easy-Routing:
  - Easily rounting user-frindly buttons which is used to navigate all over the application, also a unique feature while playing songs user can navigate to different pages witgout disturbing in song playing.
  - This application is fully screen-responsive to all the devices.

## Getting Started

### Pre-requisites

1. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and set up a cluster.

### Clone the repository

1. Clone the repository: `git clone https://github.com/Hiteshpan/Lyriks.git`

### Configure the root folder(Lyriks)

1. Set up and configure the environment variables, create a `.env` file in the root folder and add the following environment variables:

```
PORT_URL= your_port_number

MONGO_URL= your_mongodb_cluster

Jwt_secret= your_jwt_secret(it can be anything you want)

Cloud_Name= your_cloudinary_name(you can get it after registration on cloudinary)

Cloud_Api= your_cloudinary_api

Cloud_Secret= your_cloudinary_secret
```

### Run the application

1. Navigate to the root folder: `cd ..`.
2. Run the command `npm run build` this command will automatically install node_modules and build commands in frontend folder as needed.
3. Run the command `node backend/index.js` to start the application.
4. Lyriks will be running at `http://localhost:5000`.
5. Copy this url and paste it to your browser and your application will run properly.
6. To stop the application, press `Ctrl + C` in the terminal.

## Technologies Used

- Front-End: ReactJS, HTML, Tailwind-CSS, JavaScript, Cloudinary, Jwt-Token 
- Back-End: Node.js, Express.js, Multer.js
- Database: MongoDB

## Contributing

We welcome contributions from the community to enhance Lyriks. Feel free to submit bug reports, feature requests, or pull requests through the GitHub repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any questions or queries, please reach out to me at [hiteshrtk999@gmail.com]

Enjoy using Lyriks and stay productive!
