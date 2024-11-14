# Portfolio Website README

Welcome to this free-to-use template for your portfolio website! You can easily update the content to fit your own personal information. All the data used to render your profile, services, projects, and more can be customized in the `/data` folder.

## Features

- Responsive design

- Navigation bar

- About Me Section

- Services Section

- Projects Section

- Testimonials Section

- Contact Section

---

## How to Customize Your Portfolio

### 1. **Navigate to the /data Folder**

- Open the project directory on your local machine.

- Inside the project folder, locate the `/data` folder. This folder contains all the default data used in your portfolio. You'll need to update the relevant files to personalize the content.

### 2. **Edit Your Profile**

- Open the `User.ts` or `Profile.ts` file located in the `/data` folder.

- You will find variables like `name`, `profession`, `intro`, and `about`. Update them with your own details:

  ```ts

  const profile = {

      name: "Your Name",

      profession: {

          title: "Your Profession (e.g., Web Developer)",

          field: "Your Field (e.g., UI/UX Design)",

      },

      intro: "Write a brief introduction about yourself.",

      about: "Provide a detailed description of your experience, expertise, and what drives you.",

  };

  ```

### 3. **Update Projects**

- Inside the `/data` folder, open the `projects.ts` file.

- Replace the sample projects with your own work. For each project, you'll need to provide a title, description, and a link to the image you want to display:

  ```ts

  const projects = [

      {

          id: 1,

          title: "Project Title",

          category: "Category (e.g., Web Design)",

          image: "/path/to/project-image.jpg",

          url: "/link/to/project-details", // Optional

      },

  ];

  ```

### 4. **Customize Services**

- Open the `services.ts` file in the `/data` folder to update the services you offer.

- Modify the title and description for each service:

  ```ts

  const services = [

      {

          icon: YourServiceIcon,

          title: "Service Title",

          description: "Service Description",

      },

  ];

  ```

### 5. **Update Testimonials**

- Open the `testimonials.ts` file and replace the placeholder testimonials with your own client feedback:

  ```ts

  const testimonials = [

      {

          content: "Testimonial content from a client.",

          author: "Client Name",

          position: "Client's Position",

          image: "/path/to/client-image.jpg",

      },

  ];

  ```

### 6. **Update Contact Info**

- In the `contact.ts` file, you can update the contact form message or WhatsApp link.

---

## Navigation

### 1. **Home**

- The **Home** section introduces you to who I am and what I do.

- This section highlights my main expertise and provides a quick look at my profile.

### 2. **About Me**

- The **About Me** section has detailed information about my background, skills, and design philosophy.

### 3. **Services**

- The **Services** section outlines the various services I offer and how I approach them.

### 4. **Projects**

- In the **Projects** section, you'll find a showcase of past design work with previews and descriptions.

### 5. **Testimonials**

- The **Testimonials** section displays client feedback.

### 6. **Contact**

- The **Contact** section allows visitors to reach out to me either via email .

---

## Responsive Design

This website is fully responsive and adjusts seamlessly to desktop, tablet, and mobile devices.

---

## Contact Information

Feel free to reach out through the **Contact** section, either by sending me an email via the form or by clicking on the **Work With Me** button to open a WhatsApp chat.

---

## How to View Your Portfolio

Before running the development server, make sure to install all dependencies. Run the following command to install the required packages:

```bash

npm install

```
After the installation completes, run the website locally using the following command:

```bash

npm run dev

```

Visit `http://localhost:3000` (or your configured URL) in your browser to see your customized portfolio live!

---

### Thank You!

Thanks for using this template! Customize it as much as you want, and feel free to reach out if you have any questions or need assistance.

---