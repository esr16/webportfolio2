"use client";

import CardProject from '../components/CardProject';

function Projects() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1>
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Projet 1 */}
        <CardProject
          title="MONITORING & KUBERNETES"
          description="Deployment of a monitoring stack to supervise Kubernetes Clusters..."
          technologies="Kubernetes - Manifests Kube - Grafana - Loki - Tempo - Prometheus"
          onLearnMore={() => console.log('Projet 1')}
        />

        {/* Projet 2 */}
        <CardProject
          title="ADMINISTRATION SYSTEM"
          description="Conception, deployment, securing and supervision of a fictive firm's network"
          technologies="Windows Server - Windows 11 - Active Directory - Zabbix - PfSense"
          onLearnMore={() => console.log('Projet 2')}
        />

        {/* Projet 3 */}
        <CardProject
          title="ZABBIX SUPERVISION"
          description="Deployment of a network supervision solution based on Zabbix in order to monitor a client’s devices..."
          technologies="Zabbix - Docker - SNMP- Linux- Supervision- Networking"
          onLearnMore={() => console.log('Projet 3')}
        />

        {/* Projet 4 */}
        <CardProject
          title="STAGIAIRE-MOI"
          description="Creation of a website allowing students, compagnies and tutors to manage internships..."
          technologies="PHP - HTML/CSS - JavaScript - MVC - Twig - Apache - Azure"
          onLearnMore={() => console.log('Projet 4')}
        />
 
        {/* Projet 5 */}
        <CardProject
          title="FUNKYTOWN"
          description="Conception and simulation of an entire network infrastructure for a fictive city, Funkytown..."
          technologies="Cisco Packet Tracer - CLI - IPv6 tunneling - VLAN - DHCP & DNS - NAT/PAT"
          onLearnMore={() => console.log('Projet 5')}
        />

      </div>
    </div>
  );
}

export default Projects;