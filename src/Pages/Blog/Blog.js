import React,{useEffect} from "react";
import "./Blog.css";
import BlogPost from "../../Components/BlogPost/BlogPost";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Article from "../../Components/Article/Article";
import PageLanding from "../../Components/PageLanding/PageLanding";

const Blog = () => {

  
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };
  const blogposts = [
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
    {
      title: "Health News",
      image: "doctor3.jpg",
      article:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aspernatur accusantium quod iste reiciendis consequuntur architecto, minima molestiae nam? Aut natus",
      date: "January, 22 2020",
    },
  ];

  const articles = [
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
    {
      picture: "hospice-care.png",
      title: " 5 Tips on Improving your health",
    },
  ];

  return (
    <div className="blog">
      <PageLanding image="appointment.jpg" title="Blog" />

      <div className="blogposts__section">
        <div className="blogposts__header">
          <h2 className="latest">Latest post</h2>
          <div className="search__box">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>

        <div className="blog__posts">
          {blogposts.map(({ title, image, article, date }, index) => {
            return (
              <BlogPost
                keys={index}
                title={title}
                image={image}
                article={article}
                date={date}
              />
            );
          })}
        </div>

        <div className="paginations">
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className="featuredarticles__section">
        <h2 className="featured__header">Featured Articles</h2>

        <div className="featured__articles">
          {articles.map(({ picture, title }, index) => {
            return <Article key={index} />;
          })}
        </div>

        <div className="paginations">
          <ArrowBackIosIcon />
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Blog;
