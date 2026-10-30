import React from 'react';
import './CaseStudies.css';

const PROJECTS = [
  {
    id: 'marriagehall-microservices',
    index: '01',
    title: 'MarriageHall.com — Distributed Microservices Backend',
    metric: 'Zero reservation collisions across high-demand calendar slots',
    metricDetail: 'Stateless JWT auth with role-based authorization (USER, VENDOR, ADMIN) and Eureka/API Gateway dynamic routing.',
    scope: 'Lead Microservices Developer • Cyber Impulses Architecture • Production Grade',
    stack: ['Java 21', 'Spring Boot 3', 'Spring Cloud', 'Eureka Server', 'API Gateway', 'Spring Security', 'JWT', 'MySQL', 'JPA / Hibernate', 'WebClient'],
    summary: 'Architected a decoupled microservices platform (Auth, Hall, Booking, Review) featuring centralized API Gateway routing, Eureka service discovery, and WebClient inter-service communication to coordinate real-time availability checks, booking summaries, and vendor payout workflows.',
    messyMiddle: {
      headline: 'Stateless Gateway Request Propagation & Distributed Transaction Integrity',
      story: 'When splitting the monolithic booking flow into separate Auth, Hall, and Booking microservices, passing user claims securely across services without incurring repeated DB lookups was critical. We implemented JWT claims propagation at the API Gateway layer via custom GlobalFilters, forwarding verified user headers downstream. For concurrent booking submissions, we enforced MySQL row-level pessimistic locks combined with WebClient asynchronous retry mechanisms.',
      tradeOff: 'Trade-off: Required strict circuit-breaker timeouts and standardized RFC-7807 global exception filters across all services, but decoupled independent service deployment cycles.'
    },
    artifactLabel: '[ process artifact — Spring Cloud Gateway filter & WebClient inter-service dispatch ]',
    artifactContent: `// Reactive Gateway header mutation & claims propagation
@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            String token = extractJwt(request);
            jwtUtil.validateToken(token);
            Claims claims = jwtUtil.extractAllClaims(token);

            ServerHttpRequest mutatedRequest = request.mutate()
                .header("X-Auth-User-Id", claims.getSubject())
                .header("X-Auth-Roles", claims.get("roles", String.class))
                .build();

            return chain.filter(exchange.mutate().request(mutatedRequest).build());
        };
    }
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  },
  {
    id: 'lims-enterprise',
    index: '02',
    title: 'Enterprise Laboratory Information Management System (LIMS)',
    metric: 'Clinical turnaround dropped from 14 mins to < 3 mins per batch',
    metricDetail: '21 CFR Part 11 compliant specimen accessioning with real-time Westgard QC multi-rules verification.',
    scope: 'Full-Stack / Backend Java Engineer • Clinical Specimen Engine',
    stack: ['Java 17', 'Spring Boot 3.2', 'Spring Cloud', 'Apache Kafka', 'PostgreSQL 16', 'MongoDB', 'Redis', 'Docker', 'Flyway', 'JWT', 'React.js'],
    summary: 'A distributed, cloud-ready Laboratory Information Management System (LIMS) orchestrating clinical sample intake, Code128 barcode generation, accessioning lifecycle management, freezer coordinate tracking (Freezer/Shelf/Rack/Box/Position), and automated pathologist review.',
    messyMiddle: {
      headline: 'Kafka Real-Time Telemetry & Dual-Stage Analytical Verification',
      story: 'Clinical diagnostic instruments generate continuous raw result feeds that overwhelmed synchronous database writes during morning hospital rush hours. We designed an event-driven architecture using Apache Kafka to ingest real-time instrument telemetry into MongoDB for raw storage, while publishing verification events to a Spring Boot analytical engine evaluating Westgard multi-rules (1-2s, 1-3s, 2-2s, R-4s) before writing final audited records to PostgreSQL 16 via Flyway migrations.',
      tradeOff: 'Trade-off: Introduced eventual consistency for lab dashboard counters, but insulated the transactional database from telemetry write spikes and achieved zero dropped specimen readings.'
    },
    artifactLabel: '[ process artifact — Westgard QC evaluation rule & Kafka event stream pipeline ]',
    artifactContent: `/* Specimen Lifecycle & Event Pipeline:
 * [RAW_ANALYTE_FEED] -> [Kafka: specimen.telemetry.in] -> [MongoDB Raw Sink]
 *                                     |
 *                      [Westgard QC Verification Consumer]
 *                      - Automated delta check vs historical records
 *                      - 21 CFR Part 11 electronic signature hashing
 *                                     |
 *                      [PostgreSQL 16 Transactional Ledger]
 */
@KafkaListener(topics = "specimen.telemetry.in", groupId = "lims-qc-engine")
public void evaluateSpecimenQualityControl(SpecimenTelemetryEvent event) {
    QCValidationResult result = westgardValidator.checkMultiRules(event.getAnalyteValues());
    if (result.hasViolation()) {
        flagSpecimenForPathologistReview(event.getAccessionId(), result.getViolations());
    } else {
        persistAuditedResult(event);
    }
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  },
  {
    id: 'cyber-impulses-apis',
    index: '03',
    title: 'Enterprise REST API Modernization (Cyber Impulses)',
    metric: '~40% API latency reduction & ~30% integration effort saved',
    metricDetail: 'Hardened 15+ secured endpoints with role-based Spring Security, payment gateways, and third-party integrations.',
    scope: 'Java Developer • Cyber Impulses Software Solutions (2024–2026)',
    stack: ['Core Java 8+', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Postman', 'Bruno', 'JUnit 5'],
    summary: 'Engineered and shipped enterprise REST APIs for client-facing applications across Agile sprints. Redesigned database schemas, eliminated N+1 query bottlenecks, and standardized Jakarta Bean Validation and DTO mapping contracts.',
    messyMiddle: {
      headline: 'Relational Schema Redesign & Index Optimization Under Heavy Concurrency',
      story: 'Production queries joining multiple customer tables suffered from unindexed foreign key lookups and full table scans during peak business hours. We redesigned database schemas, normalized critical entity tables, introduced composite indexing, and rewrote JPA queries with explicit JPQL join fetches to cut average response times from 280ms down to sub-90ms.',
      tradeOff: 'Trade-off: Schema migrations required planned maintenance windows, but lowered database CPU utilization by 45%.'
    },
    artifactLabel: '[ process artifact — JPQL join optimization & DTO validation specification ]',
    artifactContent: `// High-performance projection query eliminating entity graph overhead
@Repository
public interface ClientOrderRepository extends JpaRepository<ClientOrder, UUID> {

    @Query("""
        SELECT new com.cyberimpulses.dto.OrderSummaryDTO(
            o.id, o.orderNumber, o.status, c.email, o.totalAmount, o.createdAt
        )
        FROM ClientOrder o 
        JOIN o.client c 
        WHERE o.organizationId = :orgId AND o.createdAt >= :startDate
        ORDER BY o.createdAt DESC
    """)
    Page<OrderSummaryDTO> findOrderSummariesFast(
        @Param("orgId") UUID orgId, 
        @Param("startDate") Instant startDate, 
        Pageable pageable
    );
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  }
];

function CaseStudies() {
  return (
    <section id="work" className="case-studies-section" aria-label="Selected Case Studies">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-kicker">01 // Selected Systems & Production Builds</span>
          <h2 className="section-headline">
            Results first, then the messy middle of engineering.
          </h2>
          <p className="section-lead">
            Production builds reflecting verified implementation code from enterprise experience 
            at Cyber Impulses Software Solutions and distributed microservices architectures.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="case-studies-list">
          {PROJECTS.map((project) => (
            <article key={project.id} className="case-study-card">
              
              {/* Header: Project Index, Role & Metric Banner */}
              <div className="case-study-top">
                <div className="case-meta">
                  <span className="project-index">{project.index}</span>
                  <span className="project-scope">{project.scope}</span>
                </div>
                
                {/* Result / Metric First Principle */}
                <div className="case-metric-badge">
                  <span className="metric-highlight">{project.metric}</span>
                  <span className="metric-context">{project.metricDetail}</span>
                </div>
              </div>

              {/* Title & Core Problem/Solution */}
              <div className="case-main-body">
                <h3 className="case-title">{project.title}</h3>
                <p className="case-summary">{project.summary}</p>
                
                {/* Tech Stack Chips */}
                <div className="tech-chip-row" aria-label="Technologies used">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* The Messy Middle Section */}
              <div className="messy-middle-box">
                <div className="messy-middle-header">
                  <span className="messy-tag">// THE MESSY MIDDLE: REAL ARCHITECTURAL TRADE-OFF</span>
                  <h4 className="messy-title">{project.messyMiddle.headline}</h4>
                </div>
                <p className="messy-story">{project.messyMiddle.story}</p>
                <div className="messy-tradeoff">
                  <strong>Engineering Decision:</strong> {project.messyMiddle.tradeOff}
                </div>
              </div>

              {/* Process Artifact Container */}
              <div className="artifact-container">
                <div className="artifact-bar">
                  <span className="artifact-title">{project.artifactLabel}</span>
                  <span className="artifact-badge">VERIFIED IMPLEMENTATION</span>
                </div>
                <pre className="artifact-code-block" tabIndex="0">
                  <code>{project.artifactContent}</code>
                </pre>
              </div>

              {/* Actions & Links */}
              <div className="case-footer-actions">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-case-link"
                >
                  Inspect Repositories on GitHub (Ravijaiswal047) ↗
                </a>
                <a 
                  href="/Ravi_Jaiswal_Resume.pdf" 
                  download="Ravi_Jaiswal_Resume.pdf"
                  className="btn-case-secondary"
                >
                  Download Full Resume PDF ↓
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;
