"use client";
import { useState } from "react";
import Link from "next/link";
import "./accueilpage.css";

export default function Accueil() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <article className="home">
        <section className="mainTitle">
          <h1>Hi, I am Elodie Simon</h1>
          <p>Welcome to my portfolio</p>
        </section>

        <section className="introduction">
          <p>
            Computer engineering student, exploring everything
            from programming to networking. I’m driven by the ambition to imagine, design,
            create tomorrow’s innovations
          </p>
          <button onClick={() => alert("CV Uploaded!")}>Upload CV</button>
        </section>

        <section className="about">
          <h1>Who Am I</h1>
          <p>
            I am currently in the first year of the engineering cycle at <strong>CESI</strong>, an engineering school in <strong>Strasbourg, France</strong>, following two years of <strong>integrated preparatory studies</strong>, focusing on computer engineering. <br /><br />

            As I am discovering various aspects of IT, I am shaping my own path in the field of engineering, mainly focusing on <strong>networking</strong> and <strong>supervision</strong>. <br /><br />

            My goal is to become a <strong>competent</strong>, <strong>versatile</strong> and above all, <strong>trustworthy</strong> network engineer - someone who provides <strong>reliable</strong> solutions to her team and earns her company's confidence. <br /><br />

            I believe today's engineers must remain curious and put their knowledge in the service of innovation, and take into account the economic, social and environmental challenges of our time.
          </p>
        </section>
      </article>
    </>
  );
}
