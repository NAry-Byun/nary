/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/14.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Python crawling with library",
    description: "Python+Selenium library for crawling",
    url: "https://github.com/NAry-Byun/PythonCrawling",
  },
  {
    title: "Azure Static Web Apps documentation",
    description:
      "Azure Static Web Apps allows you to build modern web applications that automatically publish to the web as your code changes.",
    url: "https://learn.microsoft.com/en-us/azure/static-web-apps/",
  },
  {
    title: "My Likedin",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "www.linkedin.com/in/nary-byun-80408992",
  },
  {
    title: "Train_Schedule_APP",
    description:
      "As student commute to the city weekly for school, we constantly find ourselves checking the train schedule. We envision the convenience of having a personalised train schedule widget on our mobile screen, making the process enjoyable and efficient.",
    url: "https://github.com/NAry-Byun/TrainScheduleAPP",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
