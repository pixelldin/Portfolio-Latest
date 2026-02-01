export default function CertificationPage() {
  const certifications = [
    {
    name: "AWS Certified Cloud Practitioner - Amazon Web Services",
    date: "2025",
    description: "Validated understanding of core AWS services, cloud architecture basics, IAM, global infrastructure, billing models, and security best practices.",
    tech: "AWS Cloud, IAM, EC2, S3, VPC, CloudFront, Route53, CloudWatch, CloudFormation",
    link: "https://www.credly.com/badges/463220bd-4476-4ff6-8a9c-a127721815c3/public_url"
  },
  {
    name: "DevOps & Cloud Computing Course - Saidemy",
    date: "2024",
    description: "Practical training focused on real CI/CD pipelines, containerization, Kubernetes orchestration, infrastructure automation, and cloud deployments on AWS.",
    tech: "Git & Github, Jenkins, Docker, Kubernetes, Terraform, Ansible, AWS",
    link: "https://drive.google.com/file/d/1pyTNiKwSJlQ3KHVFS4qaEVb3Yedb_qMp/view?ts=68c4646e"
  },
  {
    name: "Fundamentals of Network Engineering - Udemy",
    date: "2022",
    description: "Deep dive into OSI, TCP/IP stack, network packets, routing basics, IP addressing, subnetting.",
    tech:  "TCP/IP, Routing, Subnetting",
    link: "https://www.udemy.com/certificate/UC-d2b70f49-5ae7-4226-82d9-6b4e45ae90ec/"
  },
  {
    name: "Python (Flask Framework) - RESTful API Development",
    date: "2023",
    description: "Built REST APIs with Flask, including routing, JSON serialization, request handling, database integration, and token-based authentication workflows.",
    tech: "Flask, Python, REST API, JWT, JSON",
    link: ""
  },
  {
    name: "API Fundamentals - Udemy",
    date: "2022",
    description: "Learned API core essentials: HTTP methods, headers, authentication flows, REST design, SOAP vs REST, JSON/XML formats, and how modern services communicate.",
    tech: "APIs, HTTP, OAuth, REST",
    link: "https://www.udemy.com/certificate/UC-2cfcd1f3-60fc-4147-aad8-9821fb504e3e/"
  }
];

  return (
    <div className="section">
      <h2 className="section-heading">Certifications</h2>

      <div className="projects-list">
        {certifications.map((cert, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{cert.name}</h3>

            <p className="project-tech">
              {/*{cert.date}*/}
            </p>

            <p className="body-text">{cert.description}</p>

            <p className="project-tech">{cert.tech}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              view certificate →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
