import "./Testimonial.css";

function Testimonial(props) {
  return (
    <div className="testimonial">
      <img className="testimonial-img" src={props.img} alt="" />
      <p className="testimonial-paragraph">{props.paragraph}</p>
      <p className="testimonial-name">{props.name}</p>
      <p className="testimonial-job">{props.job}</p>
    </div>
  );
}

export default Testimonial;
