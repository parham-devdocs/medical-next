import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Header from "./../../../components/common/header";
import CardDemo from "./../../../components/common/Card";

const AboutPage = () => {
  // Updated card data with programmer names and CV content
  const cardData = [
    {
      title: "John Doe",
      image: "/teamMember1.jpg",
      content: `
      John Doe is a full-stack developer with expertise in React and Node.js. 
      He holds a Bachelor's degree in Computer Science from Stanford University. 
      John has worked on various projects, including e-commerce platforms and 
      enterprise applications. His passion for technology drives him to stay 
      updated with the latest trends in web development. 
      CV: [Link to CV](https://example.com/johndoe-cv)
    `,
    },
    {
      title: "Jane Smith",
      image: "/teamMember2.jpg",
      content: `
      Jane Smith specializes in front-end development with a focus on user experience. 
      She earned her Master's degree in Human-Computer Interaction from MIT. 
      Jane has experience working with startups to improve their web interfaces 
      and enhance user engagement. She is proficient in HTML, CSS, and JavaScript. 
      CV: [Link to CV](https://example.com/janesmith-cv)
    `,
    },
    {
      title: "Alice Johnson",
      image: "/teamMember3.jpg",
      content: `
      Alice Johnson is a software engineer with a passion for backend systems 
      and cloud computing. She graduated with a Bachelor's degree in Software Engineering 
      from the University of California, Berkeley. Alice has contributed to several open-source projects 
      and is skilled in Python, Java, and AWS. 
      CV: [Link to CV](https://example.com/alicejohnson-cv)
    `,
    },
  ];

  return (
    <div className="mx-auto lg:px-24 flex flex-col items-center mt-14 gap-5 lg:gap-20">
      {/* Rendering the CardDemo components */}

      <div className=" flex lg:flex-row flex-col gap-5 justify-between w-full ">
        <div className="flex flex-col items-center">
          <Header>Description</Header>
          <Seperator />

          <p className="mt-5">
            Our mission at{" "}
            <span className="text-primary font-bold text-xl">Docify</span> is to
            provide a safe and innovative virtual environment that connects
            users and patients seamlessly. We are committed to enhancing
            healthcare accessibility through cutting-edge medical technology,
            ensuring that every interaction is secure, efficient, and
            user-friendly. By leveraging the latest advancements in
            telemedicine, we aim to empower patients and healthcare
            professionals alike, fostering a community built on trust and
            collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Header>Contact Info</Header>
          <Seperator />

          <p className="mt-5">
            For inquiries, please reach out to us at:
            <br />
            Email: info@[companyname].ir
            <br />
            Phone: +98 21 1234 5678
            <br />
            Address: 123 Medical Tech St, Tehran, Iran
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Header>Address</Header>
          <Seperator />

          <p className="mt-5">
            Our headquarters is located at:
            <br />
            123 Medical Tech St, Tehran, Iran
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <Header>Our Teams's Members</Header>
        <Seperator />
        <div className="flex flex-wrap items-center gap-6 justify-center my-5">
          {cardData.map((card, index) => (
            <CardDemo
              key={index}
              title={card.title}
              image={card.image}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const Seperator = () => {
  return (
    <div className="bg-primary lg:mx-auto lg:w-96 w-full mt-7 h-1 rounded-full flex items-center justify-center">
      <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center ">
        <FaArrowDown color="white" />
      </div>
    </div>
  );
};
