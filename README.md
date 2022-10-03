## News app
This is a news app written entirely with Html,Css and Javascript. React library was used. The news app has some functionalies: dynamic routing, search functionality, responsive designs, reusable components, state management. e.t.c. All our news data was gotten from guardian news api

### clone this project


You can clone the project to your local computer.

- In your preffered folder, open your terminal and type the command

`` git clone https://github.com/Mykmicheals/gmailClone.git ``

- After cloning the project unzip the folder

- Navigate to the folder using

`` cd gmail_clone ``

- Install all dependencies using

`` npm install ``

- Before you run the project, SignUp to guardian news api and get your api Key. Click [here](https://bonobo.capi.gutools.co.uk/register/developer) to signup

- to run project on your localhost use the command

`` npm start ``

## The UI

### HomePage

![homepage](https://user-images.githubusercontent.com/88559940/193654215-b222506e-bb18-4c18-9882-b82ae4732386.png)

### News Display Section

![newsCard](https://user-images.githubusercontent.com/88559940/193654337-def3f108-ac12-47ff-9281-87134733dad0.png)

### Detail Page

![detailPage](https://user-images.githubusercontent.com/88559940/193654414-b78a7694-676a-4f74-99e2-d4e47cc022cb.png)

### Responsive

![responsive1](https://user-images.githubusercontent.com/88559940/193654543-d013a3df-afb2-49d3-8891-e694ab18117a.png)
![responsive2](https://user-images.githubusercontent.com/88559940/193654772-e30657bc-8190-4730-8949-3a566b31f715.png)

### Project design

- Each components are seperated into different building blocks
- all the news data was gotten from guardian news api
- Fetch api library was used to fetch news data from the guardian news api

![hooks](https://user-images.githubusercontent.com/88559940/193676763-04e9019b-942c-4f08-b766-b187dfab444b.png)

- In the image above, i made a re-usable hook named useNews to prevent uneccessary code repetition

### Reusable Card
I made a re-usable card component, to have thesame card UI across the website. The resuable card recieved some props value. also helped in preventing code repetition
![reusableCard](https://user-images.githubusercontent.com/88559940/193678774-cd02170d-89a8-4cd2-8f55-da3803ef3187.png)

- React Router v5 is used for dynamic rendering of pages. I did'nt use the html anchor tag, because it makes our app reload, thereby refreshing all state
![router](https://user-images.githubusercontent.com/88559940/193679664-44a31115-83a7-4638-be89-5532cbb3c805.png)
