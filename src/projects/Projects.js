import "./Projects.css";
import Project from "./project/Project";
import bee from "../images/bee.webp";
import cb from "../images/c&b.webp";
import movie from "../images/movie.webp";
import errander from "../images/errander.webp";
import snow from "../images/snow.webp";

export default function Projects() {
  const projectData = [
    {
      imageSource: bee,
      headline: "HoneyBee",
      tools: "PHP, JavaScript, CSS",
      description:
        "HoneyBee is an online school of English designed for learners of all ages and skill levels",
      url: "https://honeybeebuzzin.com/",
    },
    {
      imageSource: cb,
      headline: "C&B",
      tools: "PHP, SQL, JavaScript",
      description:
        "C&B is an e-commerce web store. It offers deals on various video game titles.",
      url: "http://e-shop-project.infinityfreeapp.com/index.php",
    },
    {
      imageSource: movie,
      headline: "Movie Overview",
      tools: "JavaScript",
      description:
        "Movie Overview provides info on movies and shows. With a huge database at its disposal, Movie Overview can help its visitors find their ideal show",
      url: "https://film-overview.netlify.app/",
    },
    {
      imageSource: errander,
      headline: "Errander",
      tools: "JavaScript",
      description:
        "Errander is a CRUD task management app. With ability to create, edit, filter and delete tasks, users can manage their everyday errands.",
      url: "https://uroszikic.github.io/ErrandEr/",
    },
    {
      imageSource: snow,
      headline: "Snow",
      tools: "JavaScript, HTML, CSS",
      description:
        "Snow is a web design project. Snow offers a minimalist, elegant design and appealing, interactive user-interface.",
      url: "https://uroszikic.github.io/Snow-prototype/",
    },
  ];
  return (
    <section className="projectSection">
      <h2>Projects</h2>
      {projectData.map((item, i) => (
        <Project
          imageSource={item.imageSource}
          headline={item.headline}
          tools={item.tools}
          description={item.description}
          url={item.url}
          index={i}
          key={i}
        />
      ))}
    </section>
  );
}
