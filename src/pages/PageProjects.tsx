import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Project = {
  id: string;
  company: string;
  color: string;
  title: string;
  desc: string;
  stack: string[];
  impact: string;
  links?: { live?: string; api?: string; github?: string };
};

const projects: Project[] = [
  {
    id:"p0", company:"Personal Project", color:"#e91e8c",
    title:"PollHub — Real-Time Event-Driven Polling Platform",
    desc:"Built a production-grade full-stack polling platform with real-time vote updates using event-driven microservices architecture. Spring Boot 3 backend on Java 17 with Apache Kafka for async vote processing. React + TypeScript frontend with WebSocket/SSE for live result streaming. JWT-secured REST APIs with role-based access. Deployed on Railway with PostgreSQL, Redis caching, and Docker containerization. CI/CD via GitHub Actions with Kubernetes-ready manifests.",
    stack:["Java 17","Spring Boot 3","Apache Kafka","Redis","PostgreSQL","React","TypeScript","WebSocket/SSE","JWT","Docker","GitHub Actions","Railway","Kubernetes","OpenAPI/Swagger"],
    impact:"↑ Real-time vote processing · ↓ Latency via Redis caching · Scalable event-driven architecture",
    links: {
      live:"https://affectionate-charisma-production-49dc.up.railway.app",
      api:"https://polling-platform-production-180d.up.railway.app/swagger-ui.html",
      github:"https://github.com/saiboyap/polling-platform",
    },
  },
  {
    id:"p1", company:"PayPal", color:"#7c5cfc",
    title:"Enterprise Financial Services Integration Platform",
    desc:"Unified internal and external financial systems using event-driven microservices with CQRS & Event Sourcing patterns. Spring Boot 3 services on Java 17 integrated with Apache Kafka for high-volume transactional flows. Secured with OAuth2/OIDC, monitored via Splunk & CloudWatch, deployed on AWS EKS using Terraform and Helm. Python automation scripts handled data migration and batch processing. Bash/Shell scripting used for AWS deployment automation.",
    stack:["Java 17","Spring Boot 3","Apache Kafka","Kafka Streams","CQRS","Event Sourcing","AWS EKS","PostgreSQL","Redis","OAuth2/OIDC","JWT","Terraform","Helm","Docker","GitHub Actions","Splunk","Resilience4j","OpenAPI/Swagger","Python (Automation Scripts)","Bash/Shell"],
    impact:"↑ System reliability · ↓ API latency 40% · Seamless cross-platform financial operations at scale",
  },
  {
    id:"p2", company:"PayPal", color:"#7c5cfc",
    title:"Campaign Management Platform",
    desc:"Microservices platform for targeted financial offers using Kafka Streams for real-time user segmentation. Angular 14+ frontend with NgRx state management for campaign creation UI. REST APIs with OpenAPI contracts, Redis caching for eligibility rule lookups, SonarQube quality gates in GitHub Actions CI/CD pipeline.",
    stack:["Java 17","Spring Boot","Kafka Streams","Angular 14+","TypeScript","NgRx","RxJS","JavaScript/TypeScript","PostgreSQL","Redis","AWS","GitHub Actions","SonarQube","JUnit 5","Mockito","Postman","Python (Batch Processing)"],
    impact:"↑ Customer engagement · Dynamic campaign execution at scale · 30% faster campaign launch time",
  },
  {
    id:"p3", company:"Texas Capital Bank", color:"#00bcd4",
    title:"Real-Time Payment Processing System",
    desc:"High-volume banking transaction system with Spring Cloud microservices using Eureka discovery and Spring Cloud Gateway. Apache Kafka & RabbitMQ/JMS for async processing. PostgreSQL with connection pooling and query optimization for sub-100ms response times. Deployed on AWS EKS with Docker, Jenkins CI/CD and JMeter load testing.",
    stack:["Java 11","Spring Boot","Spring Cloud","Eureka","Spring Cloud Gateway","Apache Kafka","RabbitMQ","JMS","PostgreSQL","SQL/PostgreSQL","JavaScript/TypeScript","HikariCP","AWS EKS","Docker","Jenkins","Maven","JUnit 5","Mockito","JMeter","Postman"],
    impact:"↓ Processing delays 35% · ↑ Transaction throughput 3x · 99.9% uptime SLA consistently achieved",
  },
  {
    id:"p4", company:"Texas Capital Bank", color:"#00bcd4",
    title:"Customer Onboarding & KYC Platform",
    desc:"Digital onboarding platform with Angular + NgRx frontend, reactive forms and step-by-step UI workflows. Backend Spring Cloud microservices handled document validation, third-party KYC API integration via REST & SOAP/WSDL, and compliance workflow automation with DDD-based domain design. OAuth2 SSO for secure login.",
    stack:["Angular","NgRx","TypeScript","JavaScript/TypeScript","RxJS","Jasmine","Spring Boot","Spring Cloud","DDD","OAuth2 SSO","SQL","SOAP/WSDL","MongoDB","Cypress","REST Assured","AWS EKS","Docker","Jenkins","JIRA","SAFe"],
    impact:"↓ Onboarding time 60% · Full regulatory KYC compliance · Automated multi-step approval workflows",
  },
  {
    id:"p5", company:"NY Dept. of Health", color:"#4ade80",
    title:"Public Health Data Reporting System",
    desc:"Scalable backend with Spring Boot, Spring Data JPA & Oracle DB processing large datasets from county health departments. React 16 dashboards with ES6+ JavaScript for real-time health reporting. PL/SQL stored procedures for complex aggregations. Deployed on AWS Beanstalk with Jenkins CI/CD. JVM tuned with G1GC and HikariCP. Python ETL scripts transformed and loaded county health data from Oracle DB exports into reporting dashboards.",
    stack:["Java 11","Spring Boot","Spring Data JPA","Hibernate 5","Oracle DB","PL/SQL","SQL/PL/SQL","React 16","JavaScript ES6+","Python (ETL Scripts)","CSS3","AWS Beanstalk","Jenkins","JUnit 5","REST Assured","G1GC","HikariCP","12-Factor App","RBAC","Confluence"],
    impact:"↑ Report generation speed · Real-time vs 24hr delay eliminated · Faster health trend response",
  },
  {
    id:"p6", company:"NY Dept. of Health", color:"#4ade80",
    title:"Vaccine Distribution Tracking System",
    desc:"Supply chain tracking platform with Spring Boot event-driven backend using Apache Kafka for inventory updates. Integrated external logistics APIs via REST & Spring-WS SOAP/WSDL. React frontend dashboards for county-level real-time visibility. Spring Security RBAC for multi-role access. Jenkins CI/CD on AWS.",
    stack:["Java 11","Spring Boot","Apache Kafka","Spring Security","RBAC","SOAP/WSDL","Spring-WS","React","JavaScript ES6+","Python","SQL/PL/SQL","Oracle DB","PL/SQL","AWS","Jenkins","JUnit 5","Mockito","Git/GitHub","Scrum"],
    impact:"↑ Distribution transparency · Reduced vaccine wastage via expiry tracking · Efficient cross-county allocation",
  },
  {
    id:"p7", company:"Provident Financial", color:"#f59e0b",
    title:"Loan Management System",
    desc:"Full-featured loan portal with J2EE backend using Spring MVC 4.x REST services and Hibernate 5 ORM on Oracle & MySQL. HTML5/CSS3/JavaScript ES5 & jQuery AJAX frontend for loan officers. Spring Security authentication and RBAC. PL/SQL triggers for automated loan status transitions. JUnit 4 tests with Maven build pipeline.",
    stack:["Java","J2EE","Spring MVC","Spring Security","Hibernate 5","JDBC","Oracle","MySQL","PL/SQL","JavaScript ES5/ES6","SQL/PL/SQL","HTML5","CSS3","jQuery","AJAX","Maven","Git","JUnit 4","Mockito","Eclipse","Postman","JIRA"],
    impact:"↑ Operational efficiency 45% · ↓ Manual errors via automation · Streamlined approval workflows",
  },
];

export default function PageProjects() {
  const [active, setActive] = useState<string|null>(null);
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.05 });

  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#fef3e8", display:"grid", gridTemplateColumns:"35% 65%", overflow:"hidden" }}>
      <span className="plus" style={{ top:"25%", left:"8%" }}>+</span>
      <div className="dot-grid" style={{ top:"40%", left:"12%" }} />
      <span className="plus" style={{ bottom:"20%", left:"28%" }}>+</span>

      {/* LEFT */}
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 32px 40px 100px" }}>
        <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:12, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" }}>PORTFOLIO</span>
          </div>
          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(40px,4.5vw,64px)", lineHeight:1.0, letterSpacing:"-0.02em", color:"var(--text)", marginBottom:20 }}>
            Key<br/>Projects
          </h2>
          <p style={{ fontSize:13, color:"var(--text-light)", lineHeight:1.75, marginBottom:24 }}>Personal and enterprise projects across fintech, banking, and public health domains.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {[{c:"#e91e8c",l:"Personal Project"},{c:"#7c5cfc",l:"PayPal"},{c:"#00bcd4",l:"Texas Capital Bank"},{c:"#4ade80",l:"NY Dept. Health"},{c:"#f59e0b",l:"Provident"}].map(x=>(
              <div key={x.l} style={{ display:"flex", alignItems:"center", gap:8, fontSize:12, color:"var(--text-light)" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:x.c, flexShrink:0 }}/>
                {x.l}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — project accordion */}
      <div className="scrollable-content" style={{ overflowY:"auto", padding:"80px 80px 40px 40px", display:"flex", flexDirection:"column", justifyContent:"flex-start" }}>
        {projects.map((p,i)=>{
          const isOpen = active===p.id;
          return (
            <motion.div key={p.id} initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.06 }}
              style={{ borderTop:"1px solid var(--border)" }}>
              <button onClick={()=>setActive(isOpen?null:p.id)}
                style={{ width:"100%", display:"grid", gridTemplateColumns:"auto 1fr auto", gap:16, padding:"16px 0", background:"none", border:"none", textAlign:"left", cursor:"pointer", alignItems:"center" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:p.color, flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:15, fontWeight:600, color:"var(--text)", marginBottom:2 }}>{p.title}</div>
                  <div style={{ fontSize:11, color:"var(--muted)" }}>{p.company}</div>
                </div>
                <motion.div animate={{ rotate:isOpen?45:0 }} transition={{ duration:0.3 }}
                  style={{ width:28, height:28, borderRadius:"50%", border:`2px solid ${isOpen?"var(--teal)":"var(--border)"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:isOpen?"var(--teal)":"var(--text)", background:isOpen?"rgba(0,188,212,0.1)":"transparent", transition:"all 0.3s" }}>+</motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.4 }} style={{ overflow:"hidden" }}>
                    <div style={{ padding:"4px 0 16px 24px" }}>
                      <p style={{ fontSize:12, color:"var(--text-light)", lineHeight:1.7, marginBottom:10 }}>{p.desc}</p>
                      <div style={{ fontSize:11, color:"var(--teal2)", marginBottom:10, fontWeight:600 }}>{p.impact}</div>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                        {p.stack.map(s=>(
                          <span key={s} style={{ fontSize:11, padding:"3px 10px", borderRadius:100, background:"rgba(0,188,212,0.1)", color:"var(--teal2)", border:"1px solid rgba(0,188,212,0.2)" }}>{s}</span>
                        ))}
                      </div>
                      {p.links && (
                        <div style={{ display:"flex", flexWrap:"wrap" as const, gap:10, marginTop:12, paddingTop:12, borderTop:"1px solid rgba(0,188,212,0.12)" }}>
                          {p.links.live && (
                            <a href={p.links.live} target="_blank" rel="noopener noreferrer"
                              style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, color:"var(--teal2)", textDecoration:"none", background:"rgba(0,188,212,0.08)", border:"1px solid rgba(0,188,212,0.2)", padding:"4px 12px", borderRadius:100, fontWeight:600 }}
                              onMouseEnter={e=>(e.currentTarget.style.background="rgba(0,188,212,0.15)")}
                              onMouseLeave={e=>(e.currentTarget.style.background="rgba(0,188,212,0.08)")}>
                              🌐 Live Demo
                            </a>
                          )}
                          {p.links.api && (
                            <a href={p.links.api} target="_blank" rel="noopener noreferrer"
                              style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, color:"var(--teal2)", textDecoration:"none", background:"rgba(0,188,212,0.08)", border:"1px solid rgba(0,188,212,0.2)", padding:"4px 12px", borderRadius:100, fontWeight:600 }}
                              onMouseEnter={e=>(e.currentTarget.style.background="rgba(0,188,212,0.15)")}
                              onMouseLeave={e=>(e.currentTarget.style.background="rgba(0,188,212,0.08)")}>
                              📄 API Docs
                            </a>
                          )}
                          {p.links.github && (
                            <a href={p.links.github} target="_blank" rel="noopener noreferrer"
                              style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, color:"var(--text)", textDecoration:"none", background:"rgba(0,0,0,0.06)", border:"1px solid rgba(0,0,0,0.1)", padding:"4px 12px", borderRadius:100, fontWeight:600 }}
                              onMouseEnter={e=>(e.currentTarget.style.background="rgba(0,0,0,0.1)")}
                              onMouseLeave={e=>(e.currentTarget.style.background="rgba(0,0,0,0.06)")}>
                              ⌨ GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div style={{ borderTop:"1px solid var(--border)" }}/>
      </div>
    </div>
  );
}
