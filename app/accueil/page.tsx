
"use client";        
import {useState} from "react";      
import Link from "next/link";

export default function Accueil() {
  const [open, setOpen] = useState(false);  
  return (
    <>

        <nav className = "menu">
        <Link href="home.html">Home</Link>
        <Link href="about.html">About</Link>
        <Link href="projects.html">Projects</Link>
        <Link href="contact.html">Contact</Link>
        </nav>

        <h1 className = "projectsTitle">My Projects</h1>

        <article className="project1">
        <h1>Supervision</h1>
        <section className="Type1">
            <h3>Type of Project</h3>
            <p> Internship work</p>
        </section>
        <section className="Techno1">
            <h3>Technologies & Tools used</h3>
            <p>Zabbix - Docker - Linux - SNMP </p>
        </section>
        <section className="sumup1">
            <h3>Sum up</h3>
            <p> Deployment of a network supervision solution
            based on Zabbix in order to monitor a client’s devices
            such as switches and routers and alert in cas of outage
            or malfunction</p>
        </section>
        <section className="actions1">
            <h3>Actions</h3>
            <ul>
            <li> Installation and configuration of Zabbix via Docker on a Linux environment</li>
            <li> Configuration of hosts via SNMP on Zabbix</li>
            <li> Setting up of Triggers and threshold system</li>
            <li> Creation and management of a user-friendly dashboard for non-technical user</li>
            <li> technical documentation for the company</li>
            </ul>
        </section>
        <section className="skills1">
            <h3>Skills</h3>
            <ul>
            <li> Networking</li>
            <li> Supervision</li>
            <li> Zabbix</li>
            <li> Linux</li>
            <li> Docker</li>
            <li> SNMP</li>
            <li> Dashboard designing</li>
            </ul>
        </section>

            <button onClick={() => setOpen(!open)}>More details...</button>
            
            {open && (
          <section className="details">
            <p>
              This project marked my first experience as an intern,
              focusing on implementing a monitoring system for a client’s
              network infrastructure using Zabbix.
            </p>
          </section>
        )}
      </article>
    </>


            
    );
}